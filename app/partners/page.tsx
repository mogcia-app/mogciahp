'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'

// Section Components for Partners page

export default function Partners() {
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
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-300 text-red-800 text-sm font-medium rounded-full mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                PARTNERSHIP
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                  パートナー制度
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20 font-light">
                共に成長し、社会に価値を創造する<br />
                パートナーシップを構築しましょう
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    const servicesSection = document.getElementById('partnership-types');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-none font-semibold hover:bg-purple-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-2xl"
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

        {/* Partnership Types Section */}
        <section id="partnership-types" className="py-24 relative bg-white">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  PARTNERSHIP TYPES
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  パートナーシップの種類
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  お客様のビジネスモデルに最適な<br />
                  パートナーシップをご提案します
                </p>
              </AnimatedSection>
            </div>

            {/* Partnership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="group relative bg-white rounded-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                        <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">技術パートナー</h3>
                        <p className="text-red-600 text-sm font-semibold">AI・DX技術で共創</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      最新のAI技術やDXソリューションを共同開発し、お客様に革新的な価値を提供します。
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-3">パートナーになるメリット</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          技術ノウハウの共有
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          共同研究開発
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          市場開拓の協力
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          ブランド価値の向上
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-3">求められる条件</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          技術力のある企業
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          イノベーション志向
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          長期的な協力関係構築
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          お客様第一の考え方
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="group relative bg-white rounded-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                        <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">販売パートナー</h3>
                        <p className="text-blue-600 text-sm font-semibold">事業拡大で共創</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      お互いの強みを活かして、新規事業の創出や市場拡大を目指します。
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-3">パートナーになるメリット</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          新規事業の共同開発
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          販路の拡大
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          リソースの最適活用
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          リスクの分散
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-3">求められる条件</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          安定した事業基盤
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          成長意欲の高い企業
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          信頼できる経営体制
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          地域・業界での実績
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="group relative bg-white rounded-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                        <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">地域パートナー</h3>
                        <p className="text-green-600 text-sm font-semibold">地域活性化で共創</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      地域の企業や団体と連携し、地域社会の発展に貢献します。
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-3">パートナーになるメリット</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          地域での知名度向上
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          地域資源の活用
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          地域課題の解決
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          地域経済の活性化
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-3">求められる条件</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          地域での信頼性
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          地域課題への理解
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          長期的な地域貢献
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          地域ネットワーク
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="py-24 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  PARTNERSHIP PROCESS
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  パートナーシップの流れ
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  パートナーシップの構築から<br />
                  成功まで、ステップバイステップでサポートします
                </p>
              </AnimatedSection>
            </div>

            {/* Process Steps */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-200 via-red-300 to-red-200"></div>
              
              <div className="space-y-16">
                <AnimatedSection animation="fadeInLeft" delay={300}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-8 rounded-none shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                            <div className="w-6 h-6 bg-white opacity-20 rounded-sm"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">お問い合わせ</h3>
                            <p className="text-red-600 text-sm font-semibold">STEP 1</p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          パートナーシップにご興味をお持ちの方は、お気軽にお問い合わせください
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            即日対応
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative shadow-lg">
                      1
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative shadow-lg">
                      2
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-8 rounded-none shadow-lg border-r-4 border-red-500 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                            <div className="w-6 h-6 bg-white opacity-20 rounded-sm"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">ヒアリング・面談</h3>
                            <p className="text-red-600 text-sm font-semibold">STEP 2</p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          お客様のビジネスモデルや目標を詳しくお聞かせください
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          1-2日以内
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={500}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-8 rounded-none shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                            <div className="w-6 h-6 bg-white opacity-20 rounded-sm"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">パートナーシップ提案</h3>
                            <p className="text-red-600 text-sm font-semibold">STEP 3</p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          最適なパートナーシップの形をご提案いたします
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          3-5日以内
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative shadow-lg">
                      3
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={600}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative shadow-lg">
                      4
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-8 rounded-none shadow-lg border-r-4 border-red-500 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                            <div className="w-6 h-6 bg-white opacity-20 rounded-sm"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">パートナーシップ開始</h3>
                            <p className="text-red-600 text-sm font-semibold">STEP 4</p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          契約締結後、パートナーシップを開始し、継続的なサポートを提供します
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          1週間以内
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 relative bg-white">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  PARTNERSHIP BENEFITS
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  パートナーシップのメリット
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  パートナーシップを通じて<br />
                  相互の成長と成功を実現します
                </p>
              </AnimatedSection>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">事業拡大</h4>
                  <p className="text-gray-600 text-sm">新しい市場や顧客層へのアクセスが可能になります</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl">💡</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">技術革新</h4>
                  <p className="text-gray-600 text-sm">最新のAI・デジタル技術を活用したソリューションを提供</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">リスク分散</h4>
                  <p className="text-gray-600 text-sm">パートナーとリスクを共有し、安定した事業運営を実現</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">収益向上</h4>
                  <p className="text-gray-600 text-sm">相互の強みを活かしたシナジー効果で収益を最大化</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="w-full px-6 sm:px-8 lg:px-12 text-center relative z-10">
            <AnimatedSection animation="fadeInUp" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                パートナーシップを始めませんか？
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
                共に成長し、社会に価値を創造するパートナーシップを構築しましょう。<br />
                お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  className="group bg-white text-red-700 px-8 py-4 rounded-none font-semibold hover:bg-red-100 transition-all duration-500 transform hover:scale-105 shadow-2xl"
                >
                  <span className="flex items-center">
                    お問い合わせはこちら
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}