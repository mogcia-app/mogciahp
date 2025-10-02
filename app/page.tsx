'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import StableITRipple from '../components/StableITRipple'
import AnimatedSection from '../components/AnimatedSection'
import CounterAnimation from '../components/CounterAnimation'
import TypingTitle from '../components/TypingTitle'

// Section Components
import HeroSection from '../components/sections/HeroSection'
import SectionTransition from '../components/SectionTransition'
import ServicesDetailSection from '../components/sections/ServicesDetailSection'
import MainServicesSection from '../components/sections/MainServicesSection'
import NewsSection from '../components/sections/NewsSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        
        <ScrollProgress />
        <StableITRipple />
        
        <main className="relative z-10 flex-1">
          <HeroSection />
          
                 {/* Concept Section -*/}
                 <section className="py-8 sm:py-12 md:py-16 bg-white mt-16 sm:mt-20 md:mt-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="mb-8 sm:mb-12 relative">
                <div className="mb-6 sm:mb-8">
                    <TypingTitle 
                      text="MOGCIAの想い" 
                      prefix="-" 
                      speed={150} 
                      delay={1000}
                  />
                </div>
                
                {/* 画像部分 - レスポンシブ対応 */}
                <div className="absolute top-12 sm:top-16 right-0 hidden md:block">
                  <div className="relative w-48 sm:w-56 lg:w-64">
                    <img
                      src="/images/1661.png"
                      alt="AI・デジタル技術で企業の未来を創造"
                      className="w-full h-auto shadow-xl"
                    />
                  
                  </div>
                </div>
              </div>
              
                    <div className="max-w-5xl mx-auto">
                      <div className="space-y-8 sm:space-y-12 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                        <p className="text-lg sm:text-xl md:text-2xl font-thin text-gray-800 leading-tight tracking-wide">
                          テクノロジーが切り拓く<br />
                          <span className="font-medium">企業の無限の可能性</span>
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-light tracking-wide">
                        AI・デジタル技術で企業の未来を創造するパートナーとして<br />
                        スタートアップから大企業まで、それぞれの企業文化とビジョンに寄り添い<br />
                        技術の先にある、人と企業の豊かな未来を共に創造していきます。
                        </p>
                      </div>
                    </div>
            </div>
          </section>
          
          <NewsSection />
     
     
        <ServicesDetailSection />

        <MainServicesSection />

       
      
     
        {/* Blog Section - 最新ブログ記事 */}
        {/* <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-white">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Main Title */}
              {/* <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-2 leading-tight tracking-wider">
                    Blog
                  </h2>
                  <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                  <div className="text-base sm:text-lg text-gray-500 font-light tracking-wide">
                    最新ブログ記事
                  </div>
                </div>
              </AnimatedSection>

              {/* Blog Posts */}
              {/* {loading ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600 text-sm">読み込み中...</p>
                </div>
              ) : blogPosts.length === 0 ? (
                <div className="text-center py-12">
                  <AnimatedSection animation="fadeInUp" delay={300}>
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-gray-400 text-2xl">📝</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">ブログ記事</h3>
                    <p className="text-gray-600 mb-4 text-sm">現在、ブログ記事を準備中です。</p>
                    <p className="text-gray-500 text-xs">近日公開予定ですので、お楽しみに！</p>
                  </AnimatedSection>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {blogPosts.map((post, index) => (
                    <AnimatedSection key={post.id} animation="fadeInUp" delay={400 + (index * 200)}>
                      <div className="bg-white border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group relative">
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-3">
                              <span className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100">
                                BLOG
                              </span>
                              <span className="text-xs text-gray-500 font-light">{post.date}</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 tracking-wide">
                              {post.title}
                            </h4>
                            {post.excerpt && (
                              <p className="text-gray-600 text-xs mt-2 font-light leading-relaxed">
                                {post.excerpt}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
              
              <div className="text-center mt-8 sm:mt-12">
                <AnimatedSection animation="fadeInUp" delay={1000}>
                  <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900 font-light text-sm transition-colors duration-300">
                    <span>すべてのブログ記事を見る</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section> */}

          <CTASection />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}