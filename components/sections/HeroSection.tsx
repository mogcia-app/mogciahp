import React from 'react'
import AnimatedSection from '../AnimatedSection'

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 text-center max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" delay={300}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
              MOGCIA
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
      
      {/* CTA Buttons */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
        <AnimatedSection animation="fadeInUp" delay={500}>
          <a
            href="#services"
            className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
          >
            <span>サービスを見る</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={600}>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
          >
            <span>お問い合わせ</span>
            <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
      
    </section>
  )
}

export default HeroSection
