'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'
import CTA from '../../components/CTA'

export default function Philosophy() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <ScrollProgress />
        <StableITRipple />
        
        <main className="relative z-10 flex-1">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="inline-flex items-center px-6 py-3 bg-gray-100 border border-gray-300 text-gray-800 text-sm font-medium rounded-full mb-8">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  企業理念
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                    私たちの想い
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  AI・デジタル技術で企業の未来を創造する
                </p>
                <p className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                  お客様一人ひとりに寄り添った柔軟なサービスを提供します
                </p>
              </AnimatedSection>
            </div>
          </section>
          
          {/* Philosophy Content */}
          <section className="py-20 sm:py-24 md:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  私たちの理念
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                  技術を通じて、より良い未来を創造する
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="space-y-8 text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                  <p>
                    私たちは、AI・デジタル技術を通じて企業の未来を創造することを使命としています。
                    お客様一人ひとりの課題に向き合い、最適なソリューションを提供することで、
                    持続的な成長と発展を実現します。
                  </p>
                  <p>
                    技術は手段であり、目的ではありません。
                    私たちが大切にするのは、技術を通じて生まれる価値と、
                    それによって実現される人々の幸せです。
                  </p>
                  <p>
                    常に学び続け、進化し続けることで、
                    お客様の期待を超えるサービスを提供し、
                    共に未来を切り開いていきます。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <CTA
            title="お気軽にお問い合わせください"
            description="AI・デジタル技術で企業の未来を創造するサービスについて、ご相談やご質問がございましたらお気軽にお問い合わせください。"
            primaryButtonText="お問い合わせフォームへ"
            primaryButtonHref="/contact"
          />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}