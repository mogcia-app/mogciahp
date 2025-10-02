import React from 'react'
import AnimatedSection from '../AnimatedSection'

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16"
      style={{ zIndex: 10 }}
    >
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* PC Image */}
        <div className="hidden lg:block">
          <img
            src="/images/iStock-2187782281.jpg"
            alt="AI・デジタル技術で企業の未来を創造"
            className="w-full h-full object-cover"
            style={{ objectPosition: '20% 50%', transform: 'translateY(8%)' }}
          />
        </div>
        {/* Mobile/Tablet Image */}
        <div className="lg:hidden">
          <img
            src="/images/009876.png"
            alt="AI・デジタル技術で企業の未来を創造"
            className="w-full h-full object-contain"
            style={{ objectPosition: 'center center' }}
          />
        </div>
       
      </div>
      
      {/* Main Content - Bottom Right (PC) */}
      <div className="hidden lg:block absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-24 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-10 max-w-sm text-right">
        <AnimatedSection animation="fadeInUp" delay={300}>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-3 leading-none tracking-tight drop-shadow-lg">
            <span className="font-bold">MOGCIA</span><span className="font-light">.inc</span>
          </h1>
          <div className="max-w-xs">
            <p className="text-xs sm:text-sm md:text-base text-white/90 mb-2 leading-relaxed font-light drop-shadow-md">
              AI・デジタル技術で企業の未来を創造する
            </p>
            
          </div>
        </AnimatedSection>
      </div>

      {/* Main Content - Center (Mobile/Tablet) */}
      <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10 px-4 pt-4">
        <AnimatedSection animation="fadeInUp" delay={300}>
          <div className="text-center max-w-md bg-white/60 backdrop-blur-sm p-6 shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 leading-none tracking-tight">
              <span className="font-bold">MOGCIA</span><span className="font-light">.inc</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light">
              AI・デジタル技術で企業の未来を創造する
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default HeroSection
