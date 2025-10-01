'use client'

import React from 'react'
import AnimatedSection from '../AnimatedSection'

export default function ServicesOverviewSection() {
  return (
    <section id="services-overview" className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
            
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                  AI × SOLUTIONS
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                  サービス概要
                </h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                  テクノロジーの力で、すべての企業の課題を解決し、<br />
                  未来への成長を加速する包括的なソリューションをご提供します
                </p>
              </AnimatedSection>
            </div>

            {/* Service Categories with Specific Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* AIソリューション */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">AIソリューション</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">
                      機械学習・データ分析・業務効率化
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm font-light mb-4">
                      AIと機械学習を活用して、企業の業務プロセスを根本から変革します。
                    </p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div>• 機械学習による予測分析</div>
                      <div>• 自然言語処理による文書分析</div>
                      <div>• 画像認識による品質管理</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* デジタルマーケティング */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">デジタルマーケティング</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">
                      SNS戦略・ブランディング支援
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm font-light mb-4">
                      Signal<span style={{color: '#ff8a15'}}>.</span>を活用したSNS戦略で、ブランディングとマーケティングを総合的にサポートします。
                    </p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div>• AI分析による戦略立案</div>
                      <div>• データ駆動の運用改善</div>
                      <div>• ブランディング支援</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Web開発 */}
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">Web開発</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">
                      モダンな技術スタック・継続改善
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm font-light mb-4">
                      モダンな技術スタックでWebサイトを構築し、「作って終わり」ではなく継続的な改善をサポートします。
                    </p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div>• モダンな技術スタック</div>
                      <div>• 継続的な改善支援</div>
                      <div>• ノーコード・ローコード</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* OEM企画・製造サポート */}
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">OEM企画・製造サポート</h3>
                    <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">
                      製品開発支援・製造プロセス最適化
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm font-light mb-4">
                      製品企画から製造まで、お客様のブランドに最適化されたOEM製品をサポートします。
                    </p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div>• 製品企画・設計支援</div>
                      <div>• 製造プロセス最適化</div>
                      <div>• 品質管理・検査</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}