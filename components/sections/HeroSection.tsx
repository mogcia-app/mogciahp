import React, { useRef } from 'react'
import AnimatedSection from '../AnimatedSection'
import ParallaxElement from '../ParallaxElement'

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/images/quality_restoration_20250926001424375.MP4" type="video/mp4" />
      </video>
      
      {/* Brightening Filter Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/15 to-white/25"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Particles with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxElement speed={0.3}>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-none animate-bounce opacity-60"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.5}>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-none animate-ping opacity-40"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.2}>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-300 rounded-none animate-pulse opacity-50"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.4}>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-none animate-bounce opacity-30"></div>
        </ParallaxElement>
      </div>
      
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 flex justify-start ml-8">
        <div className="max-w-2xl text-left">
          <div className="space-y-16">
          </div>
        </div>
      </div>
      
      {/* CTA Buttons - Responsive positioning */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 right-4 sm:left-auto sm:right-8 flex flex-col sm:flex-row gap-3 sm:gap-4 z-20">
        <AnimatedSection animation="fadeInUp" delay={2000}>
          <a
            href="#services"
            className="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-red-600/90 backdrop-blur-sm text-white font-semibold rounded-none hover:bg-red-700 transition-all duration-300 text-xs sm:text-sm hover:scale-105 transform border-2 border-red-500 hover:border-red-400 shadow-xl hover:shadow-2xl w-full sm:w-auto"
          >
            <span className="group-hover:animate-pulse">What we do</span>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={2200}>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white/90 backdrop-blur-sm text-red-600 font-semibold rounded-none border-2 border-white/80 hover:bg-white hover:border-white transition-all duration-300 text-xs sm:text-sm hover:scale-105 transform shadow-xl hover:shadow-2xl w-full sm:w-auto"
          >
            <span className="group-hover:animate-pulse">お問い合わせ</span>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
      
      {/* Flowing MOGCIA Text Animation - Bottom Quarter */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 overflow-hidden pointer-events-none z-5">
        <div className="absolute bottom-4 sm:bottom-8 w-full">
          <div className="animate-[flowLeft_30s_linear_infinite] whitespace-nowrap">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest" style={{
              background: 'linear-gradient(to right, #dc2626, #f87171, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA MOGCIA
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes flowLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes slideInLeft {
          0% { 
            transform: translateX(-100%); 
            opacity: 0; 
          }
          100% { 
            transform: translateX(0); 
            opacity: 1; 
          }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
