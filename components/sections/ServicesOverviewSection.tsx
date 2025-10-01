'use client'

import React from 'react'
import AnimatedSection from '../AnimatedSection'

export default function ServicesOverviewSection() {
  return (
    <section id="services-overview" className="py-24 relative">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 text-red-600 text-sm font-semibold rounded-full mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              AI × SOLUTIONS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">サービス概要</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              テクノロジーの力で、すべての企業の課題を解決し、<br />
              未来への成長を加速する包括的なソリューションをご提供します
            </p>
          </AnimatedSection>
        </div>

        {/* Service Categories with Specific Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* AIソリューション */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 opacity-50"></div>
              <div className="relative bg-white/95 backdrop-blur-sm border border-red-100/50 p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AIソリューション</h3>
                  <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    機械学習・データ分析・業務効率化
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    AIと機械学習を活用して、企業の業務プロセスを根本から変革します。
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• 機械学習による予測分析</div>
                    <div>• 自然言語処理による文書分析</div>
                    <div>• 画像認識による品質管理</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* デジタルマーケティング */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-50"></div>
              <div className="relative bg-white/95 backdrop-blur-sm border border-blue-100/50 p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">デジタルマーケティング</h3>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    SNS戦略・ブランディング支援
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Signal<span style={{color: '#ff8a15'}}>.</span>を活用したSNS戦略で、ブランディングとマーケティングを総合的にサポートします。
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• AI分析による戦略立案</div>
                    <div>• データ駆動の運用改善</div>
                    <div>• ブランディング支援</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Web開発 */}
          <AnimatedSection animation="fadeInUp" delay={800}>
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 opacity-50"></div>
              <div className="relative bg-white/95 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Web開発</h3>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    モダンな技術スタック・継続改善
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    モダンな技術スタックでWebサイトを構築し、「作って終わり」ではなく継続的な改善をサポートします。
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• モダンな技術スタック</div>
                    <div>• 継続的な改善支援</div>
                    <div>• ノーコード・ローコード</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* OEM企画・製造サポート */}
          <AnimatedSection animation="fadeInUp" delay={1000}>
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 opacity-50"></div>
              <div className="relative bg-white/95 backdrop-blur-sm border border-purple-100/50 p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">OEM企画・製造サポート</h3>
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    製品開発支援・製造プロセス最適化
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    製品企画から製造まで、お客様のブランドに最適化されたOEM製品をサポートします。
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• 製品企画・設計支援</div>
                    <div>• 製造プロセス最適化</div>
                    <div>• 品質管理・検査</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Services Catalog */}
        <div className="mb-12">
          <AnimatedSection animation="fadeInUp" delay={1200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {[
                {
                  title: "コンサルティング",
                  description: "ビジネス戦略の立案から実行まで、専門的なアドバイスを提供します。",
                  icon: "chart",
                  color: "from-blue-500 to-blue-600",
                  features: ["戦略立案", "市場分析", "競合調査", "実行支援"]
                },
                {
                  title: "システム開発",
                  description: "お客様のニーズに合わせたカスタムシステムを開発いたします。",
                  icon: "💻",
                  color: "from-green-500 to-green-600",
                  features: ["Webアプリ", "モバイルアプリ", "API開発", "データベース設計"]
                },
                {
                  title: "デジタルマーケティング",
                  description: "効果的なデジタル戦略で、お客様のビジネスを成長させます。",
                  icon: "📈",
                  color: "from-purple-500 to-purple-600",
                  features: ["SEO対策", "SNS運用", "広告運用", "コンテンツ制作"]
                },
                {
                  title: "データ分析",
                  description: "ビッグデータを活用した意思決定支援とビジネス洞察を提供します。",
                  icon: "chart",
                  color: "from-orange-500 to-orange-600",
                  features: ["データ可視化", "予測分析", "レポート作成", "KPI設定"]
                },
                {
                  title: "クラウド移行",
                  description: "安全で効率的なクラウド環境への移行をサポートします。",
                  icon: "cloud",
                  color: "from-teal-500 to-teal-600",
                  features: ["AWS移行", "セキュリティ", "コスト最適化", "運用支援"]
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-none p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-none flex items-center justify-center mb-6`}>
                    <div className="text-2xl text-white">
                      {service.icon === "chart" && (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {service.icon === "cloud" && (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                      )}
                      {service.icon !== "chart" && service.icon !== "cloud" && service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-none mr-3`}></div>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mt-12">
          <AnimatedSection animation="fadeInUp" delay={1400}>
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-none text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              サービス詳細を確認
            </a>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}