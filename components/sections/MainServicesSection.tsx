'use client'

import React from 'react'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

export default function MainServicesSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-2 leading-tight tracking-wider">
                Services
              </h2>
              <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
              <div className="text-base sm:text-lg text-gray-500 font-light tracking-wide">
                主要サービス
              </div>
            </div>
          </AnimatedSection>

          {/* Signal. Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Text Section */}
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">AI SOLUTION</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">Signal.（SNS運用AI）</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      SNS運用90%自動化AI戦略ツール。Instagram、YouTube、X、TikTokの4つのSNSをAIが一括管理し、KPI逆算型PDCAで集客・売上アップを実現します。
                    </p>
                  </AnimatedSection>
                </div>
              
                {/* Image Section */}
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <img
                      src="/images/0602.jpg"
                      alt="Signal. AI戦略ツール"
                      className="w-full h-48 object-cover rounded-sm"
                    />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Image Section */}
                <div className="order-1 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="relative w-full h-48 rounded-sm overflow-hidden">
                      <img
                        src="/images/istockphoto-834741464-1024x1024.jpg"
                        alt="Web Development"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  </AnimatedSection>
                </div>
                
                {/* Text Section */}
                <div className="order-2 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">WEB SOLUTION</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">WEBサイト制作</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      モダンな技術スタックでWebサイトを構築し、継続的な改善をサポート。レスポンシブデザイン、SEO最適化、パフォーマンス向上まで、成果に直結するWebサイトを制作します。
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          {/* MOGCIA Coffee Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Text Section */}
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">COFFEE BUSINESS</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">MOGCIA Coffee</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      厳選された豆から淹れる高品質なコーヒーを提供。オフィスやイベントでのコーヒーサービス、コーヒー豆の卸販売まで、コーヒーを通じてビジネスの質を向上させます。
                    </p>
                  </AnimatedSection>
                </div>
                
                {/* Image Section */}
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <img
                      src="/images/IMG_5437.JPG"
                      alt="MOGCIA Coffee"
                      className="w-full h-48 object-cover rounded-sm"
                    />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
          {/* SNS Marketing Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Image Section */}
                <div className="order-1 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="relative w-full h-48 rounded-sm overflow-hidden">
                      <img
                        src="/images/istockphoto-2204337769-1024x1024.jpg"
                        alt="SNS Marketing"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  </AnimatedSection>
                </div>
                
                {/* Text Section */}
                <div className="order-2 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">DIGITAL MARKETING</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">SNS運用支援</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      SNS戦略の設計から運用、分析まで一貫してサポート。Instagram、YouTube、X、TikTokなど各プラットフォームの特性を活かした戦略的な運用で、フォロワー増加とエンゲージメント向上を実現します。
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise AI Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Text Section */}
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">NEW</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">Enterprise AI（社内専用ツール）</h3>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-blue-600 bg-blue-100 mb-4 inline-block">COMING SOON</div>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      社内ドキュメント、規程、FAQ、議事録、顧客履歴など企業内のナレッジに最適化。きめ細かな権限管理と監査ログ、日本語業務文書チューニングを備え、提案書や報告書の下書き、契約書の観点チェック、社内FAQの即時回答を安全に実現します。
                    </p>
                  </AnimatedSection>
                </div>
                
                {/* Image Section */}
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <div className="relative w-full h-48 rounded-sm overflow-hidden">
                      <img
                        src="/images/istockphoto-1979289147-1024x1024.jpg"
                        alt="Enterprise AI"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
