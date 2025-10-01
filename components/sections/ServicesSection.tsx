import React from 'react'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

const ServicesSection: React.FC = () => {
  return (
    <section id="services">
      <SectionTransition effect="fade" direction="up" className="py-20 sm:py-24 md:py-32 lg:py-40 relative bg-white">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center mb-20 sm:mb-24">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-2 leading-tight tracking-wider">
                  Services
                </h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                <div className="text-lg sm:text-xl text-gray-500 font-light tracking-wide">
                  事業内容
                </div>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20">
              {/* AI Solutions - Image Left, Text Right */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="relative w-full h-64 lg:h-80 shadow-lg">
                      <img
                        src="/images/istockphoto-2200550660-1024x1024.jpg"
                        alt="AI Solutions"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 tracking-wide">
                      AI Solutions
                    </h3>
                    <div className="text-sm text-gray-500 font-light mb-6 tracking-wide">
                      AIソリューション事業
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                      <span className="font-medium">機械学習とデータ分析で業務効率化を実現</span><br />
                      あらゆるシーンのAI、デジタルサービスを実現する基盤を展開します。
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Consulting - Text Left, Image Right */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="relative w-full h-64 lg:h-80 shadow-lg">
                      <img
                        src="/images/1661.png"
                        alt="Consulting"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 tracking-wide">
                      Consulting
                    </h3>
                    <div className="text-sm text-gray-500 font-light mb-6 tracking-wide">
                      コンサルティング事業
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                      <span className="font-medium">AI・デジタル×テクノロジー領域における最先端の知見</span><br />
                      高度な専門知識をもとに、企業のDXや事業開発を支援します。
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </SectionTransition>
    </section>
  )
}

export default ServicesSection
