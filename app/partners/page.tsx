'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'

// Section Components for Partners page

export default function Partners() {
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
                  backgroundImage: 'url(/images/istockphoto-997311532-1024x1024.jpg)'
                }}
              />
            </div>
            
            <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 text-right">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/90 text-gray-700 text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8 ml-auto">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2 sm:mr-3"></div>
                  パートナー制度
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-black mb-4 sm:mb-6 leading-tight tracking-wider drop-shadow-lg">
                  共に成長する
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed font-light drop-shadow-md">
                  AI・デジタル技術で企業の未来を創造する
                </p>
                <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-12 font-light drop-shadow-md">
                  パートナーシップを構築しましょう
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

          {/* Partnership Types Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  
                  {/* Header */}
                  <div className="text-center mb-12 sm:mb-16">
                    <AnimatedSection animation="fadeInUp" delay={200}>
                      <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                        PARTNERSHIP TYPES
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                        パートナーシップの種類
                      </h2>
                      <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                      <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                        お客様のビジネスモデルに最適な<br />パートナーシップをご提案します
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Partnership Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <AnimatedSection animation="fadeInUp" delay={400}>
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">技術パートナー</h3>
                        <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">AI・DX技術で共創</div>
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                          最新のAI技術やDXソリューションを共同開発し<br />お客様に革新的な価値を提供します。
                        </p>
                        <div className="space-y-1 text-xs text-gray-500">
                          <div>• 技術ノウハウの共有</div>
                          <div>• 共同研究開発</div>
                          <div>• 市場開拓の協力</div>
                          <div>• ブランド価値の向上</div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={600}>
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">販売パートナー</h3>
                        <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">事業拡大で共創</div>
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                          お互いの強みを活かし市場拡大を<br />目指します。
                        </p>
                        <div className="space-y-1 text-xs text-gray-500">
                          <div>• 新規事業の共同開発</div>
                          <div>• 販路の拡大</div>
                          <div>• リソースの最適活用</div>
                          <div>• リスクの分散</div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={800}>
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">地域パートナー</h3>
                        <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">地域活性化で共創</div>
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                          地域の企業や団体と連携し<br />地域社会の発展に貢献します。
                        </p>
                        <div className="space-y-1 text-xs text-gray-500">
                          <div>• 地域での知名度向上</div>
                          <div>• 地域資源の活用</div>
                          <div>• 地域課題の解決</div>
                          <div>• 地域経済の活性化</div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Process Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                  <AnimatedSection animation="fadeInUp" delay={200}>
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                      PARTNERSHIP PROCESS
                    </div>
                    <h2 className="text-[20px] sm:text-[18px] md:text-[16px] font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                      パートナーシップの流れ
                    </h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                      パートナーシップの構築から成功まで、ステップバイステップでサポートします
                    </p>
                  </AnimatedSection>
                </div>

                {/* Process Steps - Timeline */}
                <div className="relative max-w-4xl mx-auto">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                  
                  <div className="space-y-12">
                    <AnimatedSection animation="fadeInUp" delay={400}>
                      <div className="relative flex items-start">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                          <span className="text-white text-lg font-medium">1</span>
                        </div>
                        {/* Content */}
                        <div className="ml-8 flex-1">
                          <div className="bg-white border border-gray-200 p-6 rounded-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">お問い合わせ</h3>
                            <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                              パートナーシップにご興味をお持ちの方は、お気軽にお問い合わせください
                            </p>
                            <div className="text-xs text-gray-500 font-medium">即日対応</div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={600}>
                      <div className="relative flex items-start">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                          <span className="text-white text-lg font-medium">2</span>
                        </div>
                        {/* Content */}
                        <div className="ml-8 flex-1">
                          <div className="bg-white border border-gray-200 p-6 rounded-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">ヒアリング・面談</h3>
                            <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                              お客様のビジネスモデルや目標を詳しくお聞かせください
                            </p>
                            <div className="text-xs text-gray-500 font-medium">1-2日以内</div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={800}>
                      <div className="relative flex items-start">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                          <span className="text-white text-lg font-medium">3</span>
                        </div>
                        {/* Content */}
                        <div className="ml-8 flex-1">
                          <div className="bg-white border border-gray-200 p-6 rounded-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">パートナーシップ提案</h3>
                            <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                              最適なパートナーシップの形をご提案いたします
                            </p>
                            <div className="text-xs text-gray-500 font-medium">3-5日以内</div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={1000}>
                      <div className="relative flex items-start">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                          <span className="text-white text-lg font-medium">4</span>
                        </div>
                        {/* Content */}
                        <div className="ml-8 flex-1">
                          <div className="bg-white border border-gray-200 p-6 rounded-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">パートナーシップ開始</h3>
                            <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                              契約締結後、パートナーシップを開始し、継続的なサポートを提供します
                            </p>
                            <div className="text-xs text-gray-500 font-medium">1週間以内</div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  
                  {/* Header */}
                  <div className="text-center mb-12 sm:mb-16">
                    <AnimatedSection animation="fadeInUp" delay={200}>
                      <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                        PARTNERSHIP BENEFITS
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                        パートナーシップのメリット
                      </h2>
                      <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                      <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                        パートナーシップを通じて相互の成長と成功を実現します
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <AnimatedSection animation="fadeInUp" delay={400}>
                      <div className="text-center">
                        <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">事業拡大</h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">新しい市場や顧客層へのアクセスが可能になります</p>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={600}>
                      <div className="text-center">
                        <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">技術革新</h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">最新のAI・デジタル技術を活用したソリューションを提供</p>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={800}>
                      <div className="text-center">
                        <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">リスク分散</h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">パートナーとリスクを共有し、安定した事業運営を実現</p>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={1000}>
                      <div className="text-center">
                        <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">収益向上</h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">相互の強みを活かしたシナジー効果で収益を最大化</p>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-white">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                      パートナーシップを始めませんか？
                    </h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-sm sm:text-base text-gray-500 font-light tracking-wide mb-8 max-w-3xl mx-auto">
                      共に成長し、社会に価値を創造するパートナーシップを構築しましょう。お気軽にお問い合わせください。
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-all duration-200 rounded-sm hover:shadow-md"
                    >
                      お問い合わせフォームへ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}