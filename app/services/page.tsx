'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'

// Section Components for Services page
import ServicesOverviewSection from '../../components/sections/ServicesOverviewSection'
import ServicesDetailSection from '../../components/sections/ServicesDetailSection'
import WhyChooseMogciaSection from '../../components/sections/WhyChooseMogciaSection'
import MainServicesSection from '../../components/sections/MainServicesSection'
import CTASection from '../../components/sections/CTASection'

export default function Services() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <ScrollProgress />
        <StableITRipple />
        
        <main className="relative z-10 flex-1">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-end overflow-hidden bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(/images/iStock-997311532.jpg)'
                }}
              />
              {/* Overlay for better text readability */}
            
            </div>
            
            <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 text-right">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/90 text-gray-700 text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8 ml-auto">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2 sm:mr-3"></div>
                  OUR SERVICES
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-black mb-4 sm:mb-6 leading-tight tracking-wider drop-shadow-lg">
                  サービス一覧
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed font-light drop-shadow-md">
                  AI導入・SNS運用・Web制作・システム開発・卸販売で<br />
                  お客様のビジネス成長をサポートします
                </p>
                <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-12 font-light drop-shadow-md">
                  お客様一人ひとりに寄り添った柔軟なサービスを提供します
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
            <div className="max-w-7xl mx-auto">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          {/* 私たちができること - 具体的なサービス詳細 */}
          <ServicesDetailSection />
          
          {/* サービス概要 - 全体像を把握 */}
          <ServicesOverviewSection />
      
          
          {/* 数字で見るMOGCIAが選ばれる理由 */}
          <WhyChooseMogciaSection />
          
          {/* 主要サービス - Signal.とEnterprise AIの統合 */}
          <MainServicesSection />
          
          {/* CTA - お問い合わせ誘導 */}
          <CTASection />
          
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
