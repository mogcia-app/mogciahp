'use client'

import React from 'react'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'

export default function MainServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 text-red-700 text-sm font-bold rounded-none mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-none mr-2 animate-pulse"></div>
              MAIN SERVICES
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              主要サービス
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI・デジタルテクノロジーを活用した<br />
              革新的なソリューションをご提供します
            </p>
          </AnimatedSection>
        </div>

        {/* Signal. Section */}
        <SectionTransition effect="fade" direction="up" className="py-16 relative">
          <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Text Section */}
              <div className="order-2 lg:order-1">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="inline-block px-3 py-1 text-sm font-semibold rounded-none mb-4" style={{backgroundColor: '#fff5e6', color: '#ff8a15'}}>AI SOLUTION</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Signal<span style={{color: '#ff8a15'}}>.</span>（SNS運用AI）</h3>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
                    SNS運用90%自動化<br />
                    AI戦略ツール
                  </h4>
                  <h5 className="text-xl font-semibold text-gray-900 mb-6">
                    SNS戦略を、AIで、効率的に。<br />
                    Signal<span style={{color: '#ff8a15'}}>.</span>
                  </h5>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Instagram、YouTube、X、TikTokの4つのSNSをAIが一括管理。KPI逆算型PDCAで集客・売上アップを実現。ECやギフト、高単価商品のブランド構築、中小企業・スタートアップのSNS戦略までSignal<span style={{color: '#ff8a15'}}>.</span>がトータルでサポートします。
                  </p>
                </AnimatedSection>
              </div>
              
              {/* Image Section */}
              <div className="order-1 lg:order-2">
                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-none blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #ffb366, #ff8a15)'}}></div>
                    <div className="relative bg-white rounded-none p-4 shadow-xl">
                      <img
                        src="/images/0602.jpg"
                        alt="Signal. AI戦略ツール"
                        className="w-full h-auto rounded-none object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Signal. Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#ff8a15', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #ff8a15, #e67300)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fff5e6'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ff8a15'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#ff8a15'}}>AI強み診断</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">目標から逆算、AIが導く成果への最短ルート。運用目標から逆算し、AIが達成までの戦略を提案。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#ff8a15', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #ff8a15, #e67300)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fff5e6'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ff8a15'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#ff8a15'}}>KPI逆算プラン</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">御社の目的に合わせたカスタマイズ。必要なページ・不要な項目を選定し、御社のSNS戦略にぴったり合うツールを構築。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#ff8a15', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #ff8a15, #e67300)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fff5e6'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ff8a15'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#ff8a15'}}>カルテ</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">SNS運用をデータ資産に変えるカルテ。診断や投稿計画をカルテに蓄積し、専用AIが学習を重ねることで提案精度が進化し続けます。</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-none transition-all duration-300" style={{backgroundColor: '#ff8a15'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#e67300'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#ff8a15'}>
                Signal<span style={{color: '#ffffff'}}>.</span>詳細を見る
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 font-semibold rounded-none">
                無料相談を申し込む
              </a>
              <a href="https://www.sgnalapp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white font-semibold rounded-none border-2 transition-all duration-300" style={{color: '#ff8a15', borderColor: '#ff8a15'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#fff5e6'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'white'}>
                公式HPはコチラ
              </a>
            </div>
          </div>
        </SectionTransition>

        {/* Web Development Section */}
        <SectionTransition effect="fade" direction="up" className="py-16 relative">
          <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Image Section */}
              <div className="order-1 lg:order-1">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-none blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #91d5ff, #1890ff)'}}></div>
                    <div className="relative bg-white rounded-none p-4 shadow-xl">
                      <img
                        src="/images/istockphoto-834741464-1024x1024.jpg"
                        alt="Web Development"
                        className="w-full h-auto rounded-none object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Text Section */}
              <div className="order-2 lg:order-2">
                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="inline-block px-3 py-1 text-sm font-semibold rounded-none mb-4" style={{backgroundColor: '#e6f7ff', color: '#1890ff'}}>WEB SOLUTION</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">WEBサイト制作</h3>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
                    モダンな技術で、<br />
                    成果に直結するWebサイト
                  </h4>
                  <h5 className="text-xl font-semibold text-gray-900 mb-6">
                    Webサイトを、モダンに、効果的に。<br />
                    Web Development.
                  </h5>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    モダンな技術スタックでWebサイトを構築し、「作って終わり」ではなく継続的な改善をサポート。レスポンシブデザイン、SEO最適化、パフォーマンス向上まで、成果に直結するWebサイトを制作します。
                  </p>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Web Development Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#1890ff', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #1890ff, #096dd9)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#e6f7ff'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#1890ff'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#1890ff'}}>モダン技術スタック</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Next.js、React、TypeScriptなど最新の技術を活用し、高速で安全なWebサイトを構築します。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#1890ff', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #1890ff, #096dd9)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#e6f7ff'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#1890ff'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#1890ff'}}>継続的改善</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">作って終わりではなく、アクセス解析やユーザビリティを考慮した継続的な改善をサポートします。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#1890ff', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #1890ff, #096dd9)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#e6f7ff'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#1890ff'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#1890ff'}}>SEO最適化</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">検索エンジン最適化により、検索流入を向上させ、ビジネス成果につながるWebサイトを構築します。</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-none transition-all duration-300" style={{backgroundColor: '#1890ff'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#096dd9'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#1890ff'}>
                Web制作詳細を見る
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 font-semibold rounded-none">
                制作相談を申し込む
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white font-semibold rounded-none border-2 transition-all duration-300" style={{color: '#1890ff', borderColor: '#1890ff'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#e6f7ff'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'white'}>
                公式HPはコチラ
              </a>
            </div>
          </div>
        </SectionTransition>

        {/* MOGCIA Coffee Section */}
        <SectionTransition effect="fade" direction="up" className="py-16 relative">
          <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Text Section */}
              <div className="order-2 lg:order-1">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="inline-block px-3 py-1 text-sm font-semibold rounded-none mb-4" style={{backgroundColor: '#fef2f2', color: '#dc2626'}}>COFFEE BUSINESS</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">MOGCIA Coffee</h3>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
                    高品質なコーヒーで、<br />
                    ビジネスを加速
                  </h4>
                  <h5 className="text-xl font-semibold text-gray-900 mb-6">
                    コーヒーを、高品質に、戦略的に。<br />
                    MOGCIA Coffee.
                  </h5>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    厳選された豆から淹れる高品質なコーヒーを提供。オフィスやイベントでのコーヒーサービス、コーヒー豆の卸販売まで、コーヒーを通じてビジネスの質を向上させます。
                  </p>
                </AnimatedSection>
              </div>
              
              {/* Image Section */}
              <div className="order-1 lg:order-2">
                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-none blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #fca5a5, #dc2626)'}}></div>
                    <div className="relative bg-white rounded-none p-4 shadow-xl">
                      <img
                        src="/images/IMG_5437.JPG"
                        alt="MOGCIA Coffee"
                        className="w-full h-auto rounded-none object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Coffee Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#dc2626', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #dc2626, #b91c1c)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fef2f2'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#dc2626'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#dc2626'}}>厳選豆</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">世界中から厳選した高品質なコーヒー豆を使用し、一杯一杯丁寧に淹れたコーヒーをお届けします。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#dc2626', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #dc2626, #b91c1c)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fef2f2'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#dc2626'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#dc2626'}}>オフィスサービス</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">オフィスやイベントでのコーヒーサービスを提供。質の高いコーヒーでビジネス環境を向上させます。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#dc2626', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #dc2626, #b91c1c)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fef2f2'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#dc2626'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#dc2626'}}>卸販売</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">コーヒー豆の卸販売も行っています。レストランやカフェ向けに高品質な豆をお届けします。</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-none transition-all duration-300" style={{backgroundColor: '#dc2626'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#b91c1c'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#dc2626'}>
                Coffee詳細を見る
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 font-semibold rounded-none">
                サービス相談を申し込む
              </a>
              <a href="https://mogcia.official.ec/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white font-semibold rounded-none border-2 transition-all duration-300" style={{color: '#dc2626', borderColor: '#dc2626'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#fef2f2'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'white'}>
                公式HPはコチラ
              </a>
            </div>
          </div>
        </SectionTransition>

        {/* SNS Marketing Section */}
        <SectionTransition effect="fade" direction="up" className="py-16 relative">
          <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Image Section */}
              <div className="order-1 lg:order-1">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-pink-300 rounded-none blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-none p-4 shadow-xl">
                      <img
                        src="/images/istockphoto-2204337769-1024x1024.jpg"
                        alt="SNS Marketing"
                        className="w-full h-auto rounded-none object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Text Section */}
              <div className="order-2 lg:order-2">
                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-sm font-semibold rounded-none mb-4">DIGITAL MARKETING</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">SNS運用支援</h3>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
                    戦略設計から運用・分析まで<br />
                    トータルSNS支援
                  </h4>
                  <h5 className="text-xl font-semibold text-gray-900 mb-6">
                    SNSを、戦略的に、効果的に。<br />
                    SNS Marketing.
                  </h5>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    SNS戦略の設計から運用、分析まで一貫してサポート。Instagram、YouTube、X、TikTokなど各プラットフォームの特性を活かした戦略的な運用で、フォロワー増加とエンゲージメント向上を実現します。
                  </p>
                </AnimatedSection>
              </div>
            </div>
            
            {/* SNS Marketing Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#ec4899', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #ec4899, #be185d)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fdf2f8'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ec4899'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#ec4899'}}>戦略設計</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">ターゲット設定からコンテンツ戦略まで、効果的なSNS戦略を設計します。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#ec4899', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #ec4899, #be185d)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fdf2f8'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ec4899'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#ec4899'}}>コンテンツ制作</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">各プラットフォームに最適化された高品質なコンテンツを制作・配信します。</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="group relative">
                  <div className="bg-white border p-8 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full" style={{borderColor: '#ec4899', borderWidth: '2px'}}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-none flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #ec4899, #be185d)'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#fdf2f8'}}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ec4899'}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300" style={{color: '#ec4899'}}>分析・改善</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">詳細なデータ分析により効果を測定し、継続的な改善を行います。</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-none hover:bg-pink-700 transition-all duration-300">
                SNS運用詳細を見る
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 font-semibold rounded-none">
                運用相談を申し込む
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-none border-2 border-pink-600 hover:bg-pink-50 transition-all duration-300">
                公式HPはコチラ
              </a>
            </div>
          </div>
        </SectionTransition>

        {/* Enterprise AI Section */}
        <SectionTransition effect="fade" direction="up" className="py-16 relative">
          <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Text Section */}
              <div className="order-2 lg:order-1">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="inline-block px-3 py-1 text-sm font-semibold rounded-none mb-4" style={{backgroundColor: '#e0f2fe', color: '#0369a1'}}>NEW</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Enterprise AI（社内専用ツール）</h3>
                  <div className="inline-block px-4 py-2 bg-gray-200 text-gray-600 text-sm font-semibold rounded-none mb-6">COMING SOON</div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
                    ENTERPRISE INTERNAL AI<br />
                    企業向け・社内専用AIツール
                  </h4>
                  <h5 className="text-xl font-semibold text-gray-900 mb-6">
                    社内ナレッジを、安全に、賢く。<br />
                    Enterprise AI.
                  </h5>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Signal. がSNSに特化しているのに対して、Enterprise AI は社内ドキュメント／規程／FAQ／議事録／顧客履歴 など企業内のナレッジに最適化。きめ細かな権限管理と監査ログ、日本語業務文書チューニングを備え、提案書や報告書の下書き、契約書の観点チェック、社内FAQの即時回答を安全に実現します。
                  </p>
                </AnimatedSection>
              </div>
              
              {/* Image Section */}
              <div className="order-1 lg:order-2">
                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-none blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #1e3a8a, #1e40af)'}}></div>
                    <div className="relative bg-white rounded-none p-4 shadow-xl">
                      <img
                        src="/images/istockphoto-1979289147-1024x1024.jpg"
                        alt="Enterprise AI"
                        className="w-full h-auto rounded-none object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Enterprise AI Features Grid */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 権限・監査対応 */}
                <div className="bg-white rounded-none p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full" style={{borderColor: '#1e3a8a', borderWidth: '2px', borderStyle: 'solid'}}>
                  <div className="w-16 h-16 rounded-none flex items-center justify-center mb-4" style={{background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)'}}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">権限・監査対応</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• SAML/SSO・SCIM 連携</li>
                    <li>• 部門/個人単位のアクセス制御</li>
                    <li>• 操作ログ・エクスポート</li>
                  </ul>
                </div>

                {/* 社内ナレッジ検索 */}
                <div className="bg-white rounded-none p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full" style={{borderColor: '#1e3a8a', borderWidth: '2px', borderStyle: 'solid'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">社内ナレッジ検索</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 社内FAQ即時回答</li>
                    <li>• ドキュメント横断検索</li>
                    <li>• 関連情報の自動提案</li>
                  </ul>
                </div>

                {/* 文書ドラフト生成 */}
                <div className="bg-white rounded-none p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full" style={{borderColor: '#1e3a8a', borderWidth: '2px', borderStyle: 'solid'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">文書ドラフト生成</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 提案書・報告書の下書き</li>
                    <li>• 契約/規程チェック観点テンプレ</li>
                    <li>• 日本語業務特化プロンプト</li>
                  </ul>
                </div>

                {/* ガバナンス・コンプライアンス */}
                <div className="bg-white rounded-none p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full" style={{borderColor: '#1e3a8a', borderWidth: '2px', borderStyle: 'solid'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-none flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">ガバナンス・コンプライアンス</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 規程・ポリシー管理</li>
                    <li>• コンプライアンス監査</li>
                    <li>• リスク管理支援</li>
                  </ul>
                </div>
              </div>
            </div>

            
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-none transition-all duration-300" style={{backgroundColor: '#0369a1'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#075985'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#0369a1'}>
                お問い合わせ（導入相談）
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 font-semibold rounded-none">
                リリース通知を受け取る（準備中）
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white font-semibold rounded-none border-2 transition-all duration-300" style={{color: '#0369a1', borderColor: '#0369a1'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#e0f2fe'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'white'}>
                公式HPはコチラ
              </a>
            </div>
          </div>
        </SectionTransition>

      </div>
    </section>
  )
}
