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
          <source src="/videos/istockphoto-1398766612-640_adpp_is.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
     
      </div>
      
      {/* Main Content - Center Bottom */}
      <div className="absolute bottom-32 sm:bottom-40 md:bottom-48 lg:bottom-56 xl:bottom-64 left-1/2 transform -translate-x-1/2 z-10 max-w-md text-center">
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
