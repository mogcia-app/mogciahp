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
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Main Content - Responsive Positioning */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[80vh] py-16 sm:py-20 md:py-24">
            {/* Left Content - Company Info */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8">
                  <div className="w-2 h-2 bg-white/60 rounded-full mr-2 sm:mr-3"></div>
                  WELCOME TO MOGCIA
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 sm:mb-6 leading-tight tracking-wider drop-shadow-lg">
                  <span className="font-bold">MOGCIA</span><span className="font-thin">.inc</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-light drop-shadow-md max-w-2xl mx-auto lg:mx-0">
                  AI・デジタル技術で企業の未来を創造する
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                  スタートアップから大企業まで、それぞれの企業文化とビジョンに寄り添い、最適なデジタルソリューションを提供するパートナーとして。
                </p>
              </AnimatedSection>
            </div>
            
            {/* Right Content - Visual Element */}
            <div className="flex-1 flex items-center justify-center lg:justify-end">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]">
                  <img
                    src="/images/1661.png"
                    alt="AI・デジタル技術で企業の未来を創造"
                    className="w-full h-auto shadow-2xl rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
