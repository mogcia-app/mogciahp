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
    </section>
  )
}

export default HeroSection
