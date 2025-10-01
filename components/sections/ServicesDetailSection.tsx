'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

export default function ServicesDetailSection() {
  return (
    <section id="services-detail" className="py-32 relative">
    <SectionTransition effect="fade" direction="up">
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              私たちができること
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={400}>
            <h3 className="text-2xl md:text-3xl font-light text-red-600 mb-8 leading-relaxed">
              未来志向のデジタルソリューション
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
                ビジネス革新を支えるプラットフォームの提供から事業創出の支援まで、<br />
                MOGCIAはAI・デジタル領域の知見とテクノロジーを駆使し、<br />
                さまざまな業界のプレーヤーとともに新たな価値創造を実現しています。
              </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AIを活用した課題解決 */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="group relative">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 hover:from-red-700 hover:to-red-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-red-200 rounded-none h-full">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3">AIを活用した課題解決</h3>
                  <h4 className="text-sm font-medium text-red-200 mb-4">データ分析から意思決定支援まで</h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-xs">
                  AI・機械学習技術を活用して<br />
                  業務効率化と意思決定支援を実現<br />
                  データドリブンな経営をサポート
                </p>
                <Link href="/services/ai-solutions" className="flex items-center text-red-200 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-medium">詳細を見る</span>
                  <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          
          {/* SNS運用支援 */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 hover:from-blue-700 hover:to-blue-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-blue-200 rounded-none h-full">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h8v3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3">SNS運用支援</h3>
                  <h4 className="text-sm font-medium text-blue-200 mb-4">戦略設計から運用・分析まで</h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-xs">
                  Signal<span style={{color: '#ff8a15'}}>.</span>を活用したAI運用で<br />
                  SNS戦略の立案から実行まで<br />
                  効果的なマーケティングを実現
                </p>
                <Link href="/services/sns-marketing" className="flex items-center text-blue-200 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-medium">詳細を見る</span>
                  <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Webサイト・LP構築 */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 hover:from-green-700 hover:to-green-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-green-200 rounded-none h-full">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Webサイト・LP構築</h3>
                  <h4 className="text-sm font-medium text-green-200 mb-4">成果に直結する導線設計</h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-xs">
                  高変換率を実現するWebサイト・LPを<br />
                  レスポンシブデザインで構築<br />
                  SEO最適化で集客力を向上
                </p>
                <Link href="/services/web-development" className="flex items-center text-green-200 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-medium">詳細を見る</span>
                  <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          
          {/* 商品卸・小売展開 */}
          <AnimatedSection animation="fadeInUp" delay={800}>
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 hover:from-purple-700 hover:to-purple-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-purple-200 rounded-none h-full">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3">商品卸・小売展開</h3>
                  <h4 className="text-sm font-medium text-purple-200 mb-4">マルチチャネル戦略の構築</h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-xs">
                  卸売・小売チャネルの構築で<br />
                  商品の販路拡大を実現<br />
                  在庫管理の最適化もサポート
                </p>
                <Link href="/services/retail-expansion" className="flex items-center text-purple-200 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-medium">詳細を見る</span>
                  <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          
          {/* OEM製造サポート */}
          <AnimatedSection animation="fadeInUp" delay={1000}>
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-6 hover:from-orange-700 hover:to-orange-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-orange-200 rounded-none h-full">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3">OEM製造サポート</h3>
                  <h4 className="text-sm font-medium text-orange-200 mb-4">企画からパッケージまで</h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-xs">
                  製品企画・設計から製造まで<br />
                  お客様ブランドに最適化<br />
                  高品質なOEM製品を提供
                </p>
                <Link href="/services/oem-support" className="flex items-center text-orange-200 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-medium">詳細を見る</span>
                  <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          
          {/* スタートアップ成長支援 */}
          <AnimatedSection animation="fadeInUp" delay={1200}>
            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 hover:from-teal-700 hover:to-teal-800 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-teal-200 rounded-none h-full">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3">スタートアップ成長支援</h3>
                  <h4 className="text-sm font-medium text-teal-200 mb-4">持続可能な事業成長の設計</h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-xs">
                  事業戦略立案から資金調達まで<br />
                  スタートアップの成長を<br />
                  トータルでサポート
                </p>
                <Link href="/services/startup-support" className="flex items-center text-teal-200 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-medium">詳細を見る</span>
                  <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </SectionTransition>
    </section>
  )
}
