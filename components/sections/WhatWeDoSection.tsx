import React from 'react'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

const WhatWeDoSection: React.FC = () => {
  return (
    <SectionTransition effect="fade" direction="up" className="py-20 sm:py-24 md:py-32 lg:py-40 relative bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="text-center mb-20 sm:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-2 leading-tight tracking-wider">
                What we do
              </h2>
              <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
              <div className="text-lg sm:text-xl text-gray-500 font-light tracking-wide">
                私たちができること
              </div>
            </div>
          </AnimatedSection>

          {/* Service 1 - Image Left, Text Right */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="mb-24 sm:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative w-80 h-48 shadow-lg">
                    <img
                      src="/images/istockphoto-2209136177-1024x1024.jpg"
                      alt="AI戦略コンサルティング"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                    AI業務改善ソリューション
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    <span className="font-medium">AI技術を活用した業務プロセスの効率化と改善</span><br />
                    既存の業務フローを分析し、AIで自動化・最適化を実現します。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Service 2 - Text Left, Image Right */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="mb-24 sm:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-thin text-gray-900 mb-4 tracking-wide">
                    Web開発・システム構築
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    最新技術を活用したWebアプリケーションやシステムを構築。<br />
                    スケーラブルで堅牢なソリューションを提供します。
                  </p>
                </div>
                <div>
                  <img
                    src="/images/1661.png"
                    alt="Web開発・システム構築"
                    className="w-48 h-48 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Service 3 - Image Left, Text Right */}
          <AnimatedSection animation="fadeInUp" delay={800}>
            <div className="mb-24 sm:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src="/images/1661.png"
                    alt="デジタルマーケティング"
                    className="w-48 h-48 object-cover shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-xl sm:text-2xl font-thin text-gray-900 mb-4 tracking-wide">
                    デジタルマーケティング
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    データに基づいた戦略で、ブランド価値と市場シェアを向上。<br />
                    効果的なデジタルチャネルを最適化します。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

         
        </div>
      </div>
    </SectionTransition>
  )
}

export default WhatWeDoSection
