import React from 'react'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

const ServicesSection: React.FC = () => {
  return (
    <section id="services">
      <SectionTransition effect="fade" direction="up" className="py-32 relative">
        <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Services
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInLeft" delay={400}>
              <h3 className="text-xl md:text-2xl font-light text-red-700 mb-6 leading-relaxed">
                事業内容
              </h3>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInLeft" delay={600}>
              <p className="text-base text-gray-600 leading-relaxed">
                ビジネス革新を支えるプラットフォームの提供から事業創出の支援まで、<br />
                MOGCIAはAI・デジタル領域の知見とテクノロジーを駆使し、<br />
                さまざまな業界のプレーヤーとともに新たな価値創造を実現しています。
              </p>
            </AnimatedSection>
          </div>
          
          {/* Middle Column - AI Solutions Card */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="group relative">
                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 hover:from-red-700 hover:to-red-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-red-200 rounded-none h-full">
                  <div className="mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-none flex items-center justify-center mb-4">
                      <div className="w-5 h-5 bg-red-600 rounded-none"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">AI Solutions</h3>
                    <h4 className="text-sm font-medium text-red-200 mb-4">AIソリューション事業</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 text-xs">
                    機械学習とデータ分析で業務効率化を実現する<br />
                    あらゆるシーンのAI、デジタルサービスを実現する<br />
                    基盤を展開
                  </p>
                 
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Column - Consulting Card */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInRight" delay={400}>
              <div className="group relative">
                <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-gray-200 rounded-none h-full">
                  <div className="mb-6">
                    <div className="w-10 h-10 bg-gray-100 rounded-none flex items-center justify-center mb-4">
                      <div className="w-5 h-5 bg-gray-600 rounded-none"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Consulting</h3>
                    <h4 className="text-sm font-medium text-gray-200 mb-4">コンサルティング事業</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 text-xs">
                    AI・デジタル×テクノロジー領域における<br />
                    最先端かつ高度な知見をもとに、<br />
                    企業のDXや事業開発を支援
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
