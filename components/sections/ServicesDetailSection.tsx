'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

export default function ServicesDetailSection() {
  return (
    <section id="services-detail" className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-white">
      <SectionTransition effect="fade" direction="up">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center mb-20 sm:mb-24">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-2 leading-tight tracking-wider">
                  私たちができること
                </h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                <div className="text-lg sm:text-xl text-gray-500 font-light tracking-wide">
                  未来志向のデジタルソリューション
                </div>
              </div>
            </AnimatedSection>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {/* AIを活用した課題解決 */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">AIを活用した課題解決</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">データ分析から意思決定支援まで</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    <span className="font-medium">AI・機械学習技術を活用して業務効率化を実現</span><br />
                    データドリブンな経営をサポートします。
                  </p>
                </div>
              </AnimatedSection>
              
              {/* SNS運用支援 */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">SNS運用支援</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">戦略設計から運用・分析まで</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    <span className="font-medium">Signal<span style={{color: '#ff8a15'}}>.</span>を活用したAI運用で</span><br />
                    効果的なマーケティングを実現します。
                  </p>
                </div>
              </AnimatedSection>
              
              {/* Webサイト・LP構築 */}
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">Webサイト・LP構築</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">成果に直結する導線設計</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    <span className="font-medium">高変換率を実現するWebサイト・LPを構築</span><br />
                    SEO最適化で集客力を向上します。
                  </p>
                </div>
              </AnimatedSection>
              
              {/* 商品卸・小売展開 */}
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">商品卸・小売展開</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">マルチチャネル戦略の構築</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    <span className="font-medium">卸売・小売チャネルの構築で販路拡大を実現</span><br />
                    在庫管理の最適化もサポートします。
                  </p>
                </div>
              </AnimatedSection>
              
              {/* OEM製造サポート */}
              <AnimatedSection animation="fadeInUp" delay={1200}>
                <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">OEM製造サポート</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">企画からパッケージまで</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    <span className="font-medium">製品企画・設計から製造まで一貫サポート</span><br />
                    高品質なOEM製品を提供します。
                  </p>
                </div>
              </AnimatedSection>
              
              {/* スタートアップ成長支援 */}
              <AnimatedSection animation="fadeInUp" delay={1400}>
                <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">スタートアップ成長支援</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">持続可能な事業成長の設計</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    <span className="font-medium">事業戦略立案から資金調達までトータルサポート</span><br />
                    スタートアップの成長を支援します。
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </SectionTransition>
    </section>
  )
}
