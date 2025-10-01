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
    <div className="min-h-screen relative bg-white">
      
      
      <Header />
      <ScrollProgress />
      <StableITRipple />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/istockphoto-2225605521-1024x1024.jpg)'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 text-center">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="inline-flex items-center px-6 py-3 bg-gray-100 border border-gray-300 text-gray-800 text-sm font-medium rounded-full mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                OUR SERVICES
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                  サービス一覧
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20 font-light">
                AI導入・SNS運用・Web制作・システム開発・卸販売で<br />
                お客様のビジネス成長をサポートします
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    const servicesSection = document.getElementById('services-detail');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-none font-semibold hover:bg-red-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-2xl"
                >
                  <span className="flex items-center">
                    サービス詳細を見る
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

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
  )
}
