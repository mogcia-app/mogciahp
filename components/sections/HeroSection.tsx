import React from 'react'
import AnimatedSection from '../AnimatedSection'

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/istockphoto-2167033466-640_adpp_is.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
     
      </div>
      
      {/* Main Content - Bottom Right */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-24 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-10 max-w-sm text-right">
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
    </section>
  )
}

export default HeroSection
