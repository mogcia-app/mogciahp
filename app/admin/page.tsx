'use client'

import React, { useState, useEffect } from 'react'
import { NewsArticle, BlogPost, getNewsArticles, addNewsArticle, updateNewsArticle, deleteNewsArticle, initializeNewsData, uploadImage, deleteImage, onAuthStateChange, signOutAdmin, getCurrentUser, getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost } from '../../lib/firebase'
import { useRouter } from 'next/navigation'
import AnimatedSection from '../../components/AnimatedSection'
import SectionTransition from '../../components/SectionTransition'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'news' | 'blog'>('news')
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    type: 'PRESS RELEASE' as NewsArticle['type'],
    content: '',
    link: '',
    published: true,
    imageAlt: '',
    excerpt: '',
    tags: ''
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    // 認証状態をチェック
    const unsubscribe = onAuthStateChange((user) => {
      if (user) {
        setIsAuthenticated(true)
        loadData()
      } else {
        setIsAuthenticated(false)
        router.push('/admin/login')
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const loadData = async () => {
    try {
      // 初回のみ初期データを追加
      await initializeNewsData()
      const [news, blog] = await Promise.all([
        getNewsArticles(),
        getBlogPosts()
      ])
      setNewsArticles(news)
      setBlogPosts(blog)
    } catch (error) {
      console.error('Error loading data:', error)
      alert('データの読み込みに失敗しました')
    }
  }

  const handleSave = async () => {
    if (!formData.title || !formData.date) {
      alert('タイトルと日付は必須です')
      return
    }

    setIsUploading(true)

    try {
      if (activeTab === 'news') {
        // ニュース記事の保存（画像なし）
        const articleData = {
          title: formData.title,
          date: formData.date,
          type: formData.type,
          content: formData.content,
          link: formData.link,
          published: formData.published
        }

        if (editingArticle) {
          const success = await updateNewsArticle(editingArticle.id, articleData)
          if (success) {
            alert('ニュース記事を更新しました')
            await loadData()
          } else {
            alert('ニュース記事の更新に失敗しました')
          }
        } else {
          const newId = await addNewsArticle(articleData)
          if (newId) {
            alert('ニュース記事を追加しました')
            await loadData()
          } else {
            alert('ニュース記事の追加に失敗しました')
          }
        }
      } else {
        // ブログ記事の保存（画像あり）
        let imageUrl = editingPost?.imageUrl || ''
        
        // 新しい画像が選択されている場合、アップロード
        if (selectedImage) {
          const fileName = `${Date.now()}-${selectedImage.name}`
          const uploadedUrl = await uploadImage(selectedImage, fileName)
          if (uploadedUrl) {
            imageUrl = uploadedUrl
            
            // 古い画像がある場合は削除
            if (editingPost?.imageUrl) {
              await deleteImage(editingPost.imageUrl)
            }
          } else {
            alert('画像のアップロードに失敗しました')
            setIsUploading(false)
            return
          }
        }

        const postData = {
          title: formData.title,
          date: formData.date,
          content: formData.content,
          excerpt: formData.excerpt,
          published: formData.published,
          imageUrl: imageUrl,
          imageAlt: formData.imageAlt,
          tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
        }

        if (editingPost) {
          const success = await updateBlogPost(editingPost.id, postData)
          if (success) {
            alert('ブログ記事を更新しました')
            await loadData()
          } else {
            alert('ブログ記事の更新に失敗しました')
          }
        } else {
          const newId = await addBlogPost(postData)
          if (newId) {
            alert('ブログ記事を追加しました')
            await loadData()
          } else {
            alert('ブログ記事の追加に失敗しました')
          }
        }
      }
      
      resetForm()
    } catch (error) {
      console.error('Error saving:', error)
      alert('保存に失敗しました')
    } finally {
      setIsUploading(false)
    }
  }

  const handleEditNews = (article: NewsArticle) => {
    setEditingArticle(article)
    setEditingPost(null)
    setFormData({
      title: article.title,
      date: article.date,
      type: article.type,
      content: article.content || '',
      link: article.link || '',
      published: article.published,
      imageAlt: '',
      excerpt: '',
      tags: ''
    })
    setImagePreview(null)
    setSelectedImage(null)
    setIsAddingNew(false)
  }

  const handleEditBlog = (post: BlogPost) => {
    setEditingPost(post)
    setEditingArticle(null)
    setFormData({
      title: post.title,
      date: post.date,
      type: 'PRESS RELEASE',
      content: post.content,
      link: '',
      published: post.published,
      imageAlt: post.imageAlt || '',
      excerpt: post.excerpt || '',
      tags: post.tags ? post.tags.join(', ') : ''
    })
    setImagePreview(post.imageUrl || null)
    setSelectedImage(null)
    setIsAddingNew(false)
  }

  const handleDeleteNews = async (id: string) => {
    if (confirm('このニュース記事を削除しますか？')) {
      try {
        const success = await deleteNewsArticle(id)
        if (success) {
          alert('ニュース記事を削除しました')
          await loadData()
        } else {
          alert('ニュース記事の削除に失敗しました')
        }
      } catch (error) {
        console.error('Error deleting news article:', error)
        alert('ニュース記事の削除に失敗しました')
      }
    }
  }

  const handleDeleteBlog = async (id: string) => {
    if (confirm('このブログ記事を削除しますか？')) {
      try {
        const success = await deleteBlogPost(id)
        if (success) {
          alert('ブログ記事を削除しました')
          await loadData()
        } else {
          alert('ブログ記事の削除に失敗しました')
        }
      } catch (error) {
        console.error('Error deleting blog post:', error)
        alert('ブログ記事の削除に失敗しました')
      }
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      type: 'PRESS RELEASE',
      content: '',
      link: '',
      published: true,
      imageAlt: '',
      excerpt: '',
      tags: ''
    })
    setSelectedImage(null)
    setImagePreview(null)
    setEditingArticle(null)
    setEditingPost(null)
    setIsAddingNew(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleLogout = async () => {
    try {
      await signOutAdmin()
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // ローディング中または未認証の場合は何も表示しない
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">MOGCIA 管理画面</h1>
              <p className="text-gray-600">ニュースとブログの管理</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAddingNew(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-none font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  新しい{activeTab === 'news' ? 'ニュース' : 'ブログ'}を追加
                </span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-500 text-white px-6 py-3 rounded-none font-semibold hover:bg-gray-600 transition-all duration-300"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  ログアウト
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-none">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-3 rounded-none font-semibold transition-all duration-300 ${
                activeTab === 'news'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ニュース
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-3 rounded-none font-semibold transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ブログ
            </button>
          </div>
        </div>
        {/* Form Section */}
        {(isAddingNew || editingArticle || editingPost) && (
          <SectionTransition effect="fade" direction="up" className="mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-none p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingArticle ? 'ニュース記事を編集' : editingPost ? 'ブログ記事を編集' : `新しい${activeTab === 'news' ? 'ニュース' : 'ブログ'}を追加`}
              </h2>
              
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    タイトル <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                    placeholder="記事のタイトルを入力"
                  />
                </div>

                {/* Date and Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      日付 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                    />
                  </div>
                  {activeTab === 'news' && (
                    <div>
                      <label className="block text-lg font-bold text-gray-900 mb-3">
                        種類
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value as NewsArticle['type']})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                      >
                        <option value="PRESS RELEASE">PRESS RELEASE</option>
                        <option value="NEWS">NEWS</option>
                        <option value="ANNOUNCEMENT">ANNOUNCEMENT</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    内容 {activeTab === 'blog' && <span className="text-red-500">*</span>}
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 resize-none text-lg"
                    placeholder={activeTab === 'news' ? '記事の詳細内容を入力（任意）' : 'ブログ記事の内容を入力'}
                  />
                </div>

                {/* Blog specific fields */}
                {activeTab === 'blog' && (
                  <>
                    {/* Excerpt */}
                    <div>
                      <label className="block text-lg font-bold text-gray-900 mb-3">
                        要約
                      </label>
                      <textarea
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 resize-none text-lg"
                        placeholder="記事の要約を入力（任意）"
                      />
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="block text-lg font-bold text-gray-900 mb-3">
                        タグ
                      </label>
                      <input
                        type="text"
                        value={formData.tags}
                        onChange={(e) => setFormData({...formData, tags: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                        placeholder="タグをカンマ区切りで入力（例: AI, テクノロジー, ビジネス）"
                      />
                    </div>
                  </>
                )}

                {/* Link (News only) */}
                {activeTab === 'news' && (
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      リンクURL
                    </label>
                    <input
                      type="url"
                      value={formData.link}
                      onChange={(e) => setFormData({...formData, link: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                      placeholder="https://example.com"
                    />
                  </div>
                )}

                {/* Image Upload (Blog only) */}
                {activeTab === 'blog' && (
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      画像
                    </label>
                    <div className="space-y-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                      />
                      
                      {/* Image Preview */}
                      {imagePreview && (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full max-w-md h-48 object-cover border-2 border-gray-300 rounded-none"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreview(null)
                              setSelectedImage(null)
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                          >
                            ×
                          </button>
                        </div>
                      )}
                      
                      {/* Image Alt Text */}
                      <input
                        type="text"
                        value={formData.imageAlt}
                        onChange={(e) => setFormData({...formData, imageAlt: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                        placeholder="画像の説明（alt text）"
                      />
                    </div>
                  </div>
                )}

                {/* Published */}
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({...formData, published: e.target.checked})}
                    className="w-6 h-6 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500"
                  />
                  <label htmlFor="published" className="text-lg font-bold text-gray-900">
                    公開する
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6">
                  <button
                    onClick={handleSave}
                    disabled={isUploading}
                    className={`px-8 py-3 rounded-none font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      isUploading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                    } text-white`}
                  >
                    {isUploading ? 'アップロード中...' : '保存'}
                  </button>
                  <button
                    onClick={resetForm}
                    disabled={isUploading}
                    className="bg-gray-500 text-white px-8 py-3 rounded-none font-semibold hover:bg-gray-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            </div>
          </SectionTransition>
        )}

        {/* Articles List */}
        <SectionTransition effect="fade" direction="up">
          <div className="bg-white border-2 border-gray-200 rounded-none p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {activeTab === 'news' ? 'ニュース記事一覧' : 'ブログ記事一覧'}
            </h2>
            
            <div className="space-y-4">
              {activeTab === 'news' ? (
                newsArticles.map((article, index) => (
                  <AnimatedSection key={article.id} animation="fadeInUp" delay={index * 100}>
                    <div className="border border-gray-200 rounded-none p-6 hover:bg-gray-50 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className={`text-sm font-medium px-3 py-1 rounded-none mr-4 ${
                              article.type === 'PRESS RELEASE' ? 'text-red-600 bg-red-100' :
                              article.type === 'NEWS' ? 'text-blue-600 bg-blue-100' :
                              'text-green-600 bg-green-100'
                            }`}>
                              {article.type}
                            </span>
                            <span className="text-sm text-gray-500">{formatDate(article.date)}</span>
                            {!article.published && (
                              <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-none ml-2">
                                非公開
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {article.title}
                          </h3>
                          {article.content && (
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {article.content}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button
                            onClick={() => handleEditNews(article)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-none text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => handleDeleteNews(article.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-none text-sm font-semibold hover:bg-red-600 transition-all duration-300"
                          >
                            削除
                          </button>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))
              ) : (
                blogPosts.map((post, index) => (
                  <AnimatedSection key={post.id} animation="fadeInUp" delay={index * 100}>
                    <div className="border border-gray-200 rounded-none p-6 hover:bg-gray-50 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-none mr-4">
                              BLOG
                            </span>
                            <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                            {!post.published && (
                              <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-none ml-2">
                                非公開
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {post.title}
                          </h3>
                          {post.imageUrl && (
                            <div className="mb-2">
                              <img
                                src={post.imageUrl}
                                alt={post.imageAlt || post.title}
                                className="w-20 h-16 object-cover border border-gray-200 rounded-none"
                              />
                            </div>
                          )}
                          {post.excerpt && (
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {post.excerpt}
                            </p>
                          )}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {post.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-none">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button
                            onClick={() => handleEditBlog(post)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-none text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(post.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-none text-sm font-semibold hover:bg-red-600 transition-all duration-300"
                          >
                            削除
                          </button>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))
              )}
            </div>
          </div>
        </SectionTransition>
      </div>
    </div>
  )
}
