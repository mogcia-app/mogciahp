'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import StableITRipple from '../components/StableITRipple'
import AnimatedSection from '../components/AnimatedSection'
import CounterAnimation from '../components/CounterAnimation'

// Section Components
import HeroSection from '../components/sections/HeroSection'
import WhatWeDoSection from '../components/sections/WhatWeDoSection'
import ServicesSection from '../components/sections/ServicesSection'
import SectionTransition from '../components/SectionTransition'
import ServicesDetailSection from '../components/sections/ServicesDetailSection'
import NewsSection from '../components/sections/NewsSection'
import CTASection from '../components/sections/CTASection'

// Firebase imports
import { getPublishedBlogPosts, BlogPost } from '../lib/firebase'

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getPublishedBlogPosts()
        setBlogPosts(posts.slice(0, 3)) // 最新3件のみ表示
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out lg:ml-64">
        
        <ScrollProgress />
        <StableITRipple />
        
        <main className="relative z-10 flex-1">
          <HeroSection />
          
          {/* Concept Section -*/}
          <section className="py-20 sm:py-24 md:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  Echoes of Innovation
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                  イノベーションは移ろう。
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="space-y-8 text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                  <p>
                    技術を構成するデータやアルゴリズムは常に進化しており、
                    私たちはその進化の速度を「デジタル変革」として感じとる。
                  </p>
                  <p>
                    イノベーションはこの進化によって変化する。
                    この企業は多様な人々が集い、交流していくことによって、
                    技術が巡り伝導していく場所。
                  </p>
                  <p>
                    そしてここで伝えられた技術は、
                    他の場所へと移り、新たなる価値が創造されていく。
                  </p>
                  <p>
                    物事は無常である。
                    全てのものは不完全であり、永続的なものはない。
                  </p>
                  <p>
                    だからこそ私たちは常に行動し、
                    新たな美しい価値を創造していく。
                    新たな技術を生み出し、
                    その技術を未来へとつないでいく。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
        <WhatWeDoSection />
        <ServicesSection />

        {/* Philosophy Section - 私たちの理念 */}
        <section className="py-12 sm:py-16 md:py-24 relative bg-white">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-10 sm:mb-16 md:mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-100 text-red-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                  OUR PHILOSOPHY
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-4">
                  私たちの理念
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                  2023年11月の設立から現在まで、私たちは一貫して
                  <span className="hidden sm:inline"><br /></span>
                  <span className="sm:hidden"> </span>
                  AI・デジタル技術で企業の未来を創造することを使命として歩んできました
                </p>
              </AnimatedSection>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
              {/* Mission Card */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="group relative bg-gradient-to-br from-red-500 to-red-600 rounded-none overflow-hidden shadow-2xl hover:shadow-red-500/25 transition-all duration-700 transform hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6 sm:p-8 text-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-none flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-white/30 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Mission</h3>
                        <p className="text-red-200 text-sm font-semibold">ミッション</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      AI・デジタル技術で企業の未来を創造する
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-red-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        2023年11月設立時の原点
                      </div>
                      <div className="flex items-center text-sm text-red-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        すべての事業の根幹となる理念
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="text-xs text-red-200">設立から現在まで一貫した使命</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vision Card */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-none overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6 sm:p-8 text-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-none flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-white/30 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Vision</h3>
                        <p className="text-blue-200 text-sm font-semibold">ビジョン</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      AI×デジタルで、すべての企業の成長を加速する
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-blue-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        全国の中小企業のデジタル課題解決
                      </div>
                      <div className="flex items-center text-sm text-blue-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        実践経験に基づくソリューション提供
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="text-xs text-blue-200">MOGCIA Coffeeでの実践から得た知見</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Values Card */}
              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-none overflow-hidden shadow-2xl hover:shadow-green-500/25 transition-all duration-700 transform hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6 sm:p-8 text-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-none flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-white/30 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Values</h3>
                        <p className="text-green-200 text-sm font-semibold">バリュー</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      MOGCIAの6つの価値観
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-green-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        使命、独創性、成長
                      </div>
                      <div className="flex items-center text-sm text-green-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        挑戦、革新、成果
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="text-xs text-green-200">すべての行動指針となる価値観</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Philosophy Principles */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-none border border-gray-200">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">理念の核心</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    私たちの理念は単なる言葉ではなく、日々の行動と意思決定の指針となっています
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">目的志向</h4>
                    <p className="text-gray-600 text-sm">すべての行動が企業の未来創造という目的に繋がっている</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🔄</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">継続改善</h4>
                    <p className="text-gray-600 text-sm">実践から学び、常に改善を重ねるサイクルを回し続ける</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🤝</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">共創精神</h4>
                    <p className="text-gray-600 text-sm">クライアントと共に課題を解決し、価値を創造する</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🚀</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">革新追求</h4>
                    <p className="text-gray-600 text-sm">最新技術を積極的に取り入れ、常に前進し続ける</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

     
        <NewsSection />

        <ServicesDetailSection />
      
     
        {/* Blog Section - 最新ブログ記事 */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  LATEST BLOG
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  最新ブログ記事
              </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  MOGCIAの最新情報や技術的な内容をお届けします
                </p>
              </AnimatedSection>
            </div>

            {/* Blog Posts */}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">ブログ記事</h3>
                  <p className="text-gray-600 mb-8">現在、ブログ記事を準備中です。</p>
                  <p className="text-gray-500">近日公開予定ですので、お楽しみに！</p>
                </AnimatedSection>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
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

            {/* View All Button */}
            <div className="text-center">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <a 
                  href="/blog"
                  className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-none font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-red-200"
                >
                  <span className="flex items-center">
                    すべてのブログ記事を見る
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                  </span>
              </a>
              </AnimatedSection>
            </div>
          </div>
        </section>

          <CTASection />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}