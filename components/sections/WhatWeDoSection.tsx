import React from 'react'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

const WhatWeDoSection: React.FC = () => {
  return (
    <SectionTransition effect="fade" direction="up" className="py-40 relative">
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-none mb-6 shadow-lg">
                  OUR MISSION
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-red-600 to-red-800 mb-8 leading-[0.8] tracking-tight">
                What we do
              </h2>
            </AnimatedSection>
            
            {/* Subtitle */}
            <AnimatedSection animation="fadeInLeft" delay={400}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-8 leading-relaxed">
                <span className="block mb-4">世の中になかった価値を</span>
                <span className="block text-red-600 font-semibold">つぎつぎと</span>
              </h3>
            </AnimatedSection>
            
            {/* Description */}
            <AnimatedSection animation="fadeInLeft" delay={600}>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  あらゆるビジネスにAI機能を組み込み、<br />
                  世の中の流れをもっと速く、自由に、柔軟に。
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  その先に、どんな価値を生み出せるか。<br />
                  どんな暮らしを、どんな社会を描き出せるか。
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Column - CTA Buttons */}
          <div className="space-y-8 flex flex-col justify-center">
            <AnimatedSection animation="fadeInRight" delay={800}>
              <div className="space-y-6">
                <a
                  href="#services"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-none hover:from-red-700 hover:to-red-800 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-red-500/25"
                >
                  <span className="relative z-10 group-hover:animate-pulse">詳細を見る</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-none blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center w-full px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 font-bold text-lg rounded-none border-2 border-gray-200 hover:bg-white hover:border-red-300 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-gray-500/25"
                >
                  <span className="group-hover:animate-pulse">お問い合わせ</span>
                  <svg className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}

export default WhatWeDoSection
