import React from 'react'
import AnimatedSection from '../AnimatedSection'

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 text-center max-w-6xl mx-auto">
        <AnimatedSection animation="fadeInUp" delay={300}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-gray-900 mb-8 leading-none tracking-tight">
            MOGCIA
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 leading-relaxed font-light">
              AI・デジタル技術で企業の未来を創造する
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
              お客様一人ひとりに寄り添った柔軟なサービスを提供します
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default HeroSection
