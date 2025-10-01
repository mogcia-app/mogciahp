'use client'

import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'
import { getPublishedBlogPosts, BlogPost } from '../../lib/firebase'

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getPublishedBlogPosts()
        setBlogPosts(posts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/istockphoto-876010626-1024x1024.jpg)',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          filter: 'brightness(0.95) contrast(1.1) saturate(1.0)',
          opacity: 0.3
        }}
      />
      
      <Header />
      <ScrollProgress />
      <StableITRipple />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                BLOG
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                ブログ
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                MOGCIAの最新情報や技術的な内容をお届けします
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {loading ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">読み込み中...</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-20">
                <AnimatedSection animation="fadeInUp" delay={300}>
                  <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-red-600 text-4xl">📝</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">ブログ記事</h2>
                  <p className="text-gray-600 mb-8">現在、ブログ記事を準備中です。</p>
                  <p className="text-gray-500">近日公開予定ですので、お楽しみに！</p>
                </AnimatedSection>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <AnimatedSection key={post.id} animation="fadeInUp" delay={300 + (index * 100)}>
                    <article className="bg-white rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                      {post.imageUrl && (
                        <div className="aspect-w-16 aspect-h-9">
                          <img 
                            src={post.imageUrl} 
                            alt={post.imageAlt || post.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 overflow-hidden" style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 mb-4 overflow-hidden" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {post.excerpt}
                          </p>
                        )}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('ja-JP')}
                          </span>
                          <button className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors duration-200">
                            続きを読む →
                          </button>
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
