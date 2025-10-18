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
              <div className="absolute -top-2 -left-2 w-4 h-4" style={{backgroundColor: '#ff8a15'}}></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Text Section */}
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">AI SOLUTION</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">
                      <span className="font-bold">Signal</span><span style={{color: '#ff8a15'}}>.</span>（SNS運用AI）
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                      SNS運用90%自動化AI戦略ツール。<br />Instagram、YouTube、X、TikTokの4つのSNSを<br />AIが一括管理し、KPI逆算型PDCAで集客・売上アップを<br />実現します。
                    </p>
                    <a 
                      href="https://www.sgnalapp.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-xs px-4 py-2 rounded-sm border-2 transition-colors duration-200"
                      style={{borderColor: '#000000', color: '#000000'}}
                    >
                      公式HP
                    </a>
                  </AnimatedSection>
                </div>
              
                {/* Image Section */}
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <img
                      src="/images/67.jpg"
                      alt="Signal. AI戦略ツール"
                      className="w-full h-56 object-cover rounded-sm"
                    />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4" style={{backgroundColor: '#00bfff'}}></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Image Section */}
                <div className="order-1 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="relative w-full h-56 rounded-sm overflow-hidden">
                      <img
                        src="/images/2.jpg"
                        alt="Web Development"
                        className="w-full h-full object-cover"
                      />
                     
                    </div>
                  </AnimatedSection>
                </div>
                
                {/* Text Section */}
                <div className="order-2 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">WEB SOLUTION</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">WEBサイト制作</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                      モダンな技術スタックでWebサイトを構築し<br />継続的な改善をサポート。<br />レスポンシブデザイン、SEO最適化、パフォーマンス向上まで、成果に直結するWebサイトを制作します。
                    </p>
                    <a 
                      href="https://web-syb2.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-xs px-4 py-2 rounded-sm border-2 transition-colors duration-200"
                      style={{borderColor: '#000000', color: '#000000'}}
                    >
                      公式HP
                    </a>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          {/* MOGCIA Coffee Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4" style={{backgroundColor: '#cc0000'}}></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Text Section */}
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">COFFEE BUSINESS</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">MOGCIA Coffee</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                      厳選された豆から淹れる高品質なコーヒーを提供。オフィスやイベントでのコーヒーサービス<br />コーヒー豆の卸販売まで、コーヒーを通じてビジネスの質を向上させます。
                    </p>
                    <a 
                      href="https://mogcia.official.ec/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-xs px-4 py-2 rounded-sm border-2 transition-colors duration-200"
                      style={{borderColor: '#000000', color: '#000000'}}
                    >
                      公式HP
                    </a>
                  </AnimatedSection>
                </div>
                
                {/* Image Section */}
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <img
                      src="/images/IMG_5437.JPG"
                      alt="MOGCIA Coffee"
                      className="w-full h-56 object-cover rounded-sm"
                    />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
          {/* SNS Marketing Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4" style={{backgroundColor: '#ff69b4'}}></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Image Section */}
                <div className="order-1 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="relative w-full h-56 rounded-sm overflow-hidden">
                      <img
                        src="/images/3.jpg"
                        alt="SNS Marketing"
                        className="w-full h-full object-cover object-top"
                      />
                    
                    </div>
                  </AnimatedSection>
                </div>
                
                {/* Text Section */}
                <div className="order-2 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">DIGITAL MARKETING</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">SNS運用支援</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                      SNS戦略の設計から運用、分析まで一貫してサポート。各プラットフォームの特性を活かした戦略的な運用で、フォロワー増加とエンゲージメント向上を実現します。
                    </p>
                    <div className="text-xs text-gray-500 mb-4">
                      <span className="font-medium">対応SNS：</span>Instagram、X(旧Twitter)、TikTok、YouTube
                    </div>
                    <a 
                      href="https://sns-gamma.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-xs px-4 py-2 rounded-sm border-2 transition-colors duration-200"
                      style={{borderColor: '#000000', color: '#000000'}}
                    >
                      公式HP
                    </a>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise AI Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4" style={{backgroundColor: '#000080'}}></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Text Section */}
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-gray-600 bg-gray-100 mb-4 inline-block">NEW</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-wide">upmo（社内専用ツール）</h3>
                    <div className="text-xs font-medium px-2 py-1 mr-3 text-blue-600 bg-blue-100 mb-4 inline-block">COMING SOON</div>
                    <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                      社内ドキュメント、規程、FAQ、議事録、顧客履歴など企業内のナレッジに最適化。<br />きめ細かな権限管理と監査ログを備え、提案書や報告書の下書き、契約書の観点チェック、社内FAQの即時回答を安全に実現します。
                    </p>
                    <button 
                      disabled
                      className="inline-block bg-gray-400 text-white text-xs px-4 py-2 rounded-sm cursor-not-allowed opacity-60"
                    >
                      公式HP
                    </button>
                  </AnimatedSection>
                </div>
                
                {/* Image Section */}
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fadeInRight" delay={400}>
                    <div className="relative w-full h-56 rounded-sm overflow-hidden">
                      <img
                        src="/images/1.jpg"
                        alt="Enterprise AI"
                        className="w-full h-full object-cover"
                      />
                    
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
