'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'
import CTA from '../../components/CTA'

export default function Philosophy() {
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
                  企業理念
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-4 sm:mb-6 leading-tight tracking-wider drop-shadow-lg">
                  私たちの想い
              </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-light drop-shadow-md">
                  AI・デジタル技術で企業の未来を創造する
                </p>
                <p className="text-sm sm:text-base text-white/80 mb-8 sm:mb-12 font-light drop-shadow-md">
                  お客様一人ひとりに寄り添った柔軟なサービスを提供します
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

          {/* Philosophy Content */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 sm:mb-6 leading-tight tracking-wider">
                      私たちの理念
                    </h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide">
                      技術を通じて、より良い未来を創造する
                    </p>
                  </div>
                  
                  <div className="max-w-5xl mx-auto">
                    <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                      <p>
                        私たちは、AI・デジタル技術を通じて企業の未来を創造することを使命としています。
                        お客様一人ひとりの課題に向き合い、最適なソリューションを提供することで、
                        持続的な成長と発展を実現します。
                      </p>
                      <p>
                        技術は手段であり、目的ではありません。
                        私たちが大切にするのは、技術を通じて生まれる価値と、
                        それによって実現される人々の幸せです。
                      </p>
                      <p>
                        常に学び続け、進化し続けることで、
                        お客様の期待を超えるサービスを提供し、
                        共に未来を切り開いていきます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

          {/* Philosophy Section - 私たちの理念 */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white p-6 sm:p-8 group relative">
            
            {/* Header */}
                  <div className="text-center mb-12 sm:mb-16">
              <AnimatedSection animation="fadeInUp" delay={200}>
                      <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                  OUR PHILOSOPHY
                </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                  私たちの理念
                </h2>
                      <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                      <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                        2023年11月の設立から現在まで、私たちは一貫して
                        <span className="hidden sm:inline"><br /></span>
                        <span className="sm:hidden"> </span>
                  AI・デジタル技術で企業の未来を創造することを使命として歩んできました
                </p>
              </AnimatedSection>
            </div>

            {/* Philosophy Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Mission Card */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                      <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                        <div className="mb-6">
                          <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">Mission</h3>
                          <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">ミッション</div>
                      </div>
                        <p className="text-gray-600 leading-relaxed text-sm font-light mb-6">
                          <span className="font-medium">AI・デジタル技術で企業の未来を創造する</span><br />
                          2023年11月設立時の原点から、すべての事業の根幹となる理念
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            設立から現在まで一貫した使命
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vision Card */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                      <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                        <div className="mb-6">
                          <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">Vision</h3>
                          <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">ビジョン</div>
                      </div>
                        <p className="text-gray-600 leading-relaxed text-sm font-light mb-6">
                          <span className="font-medium">AI×デジタルで、すべての企業の成長を加速する</span><br />
                          全国の中小企業のデジタル課題解決を実践経験に基づいて提供
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            MOGCIA Coffeeでの実践から得た知見
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Values Card */}
              <AnimatedSection animation="fadeInUp" delay={500}>
                      <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                        <div className="mb-6">
                          <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">Values</h3>
                          <div className="text-sm text-gray-500 font-light mb-4 tracking-wide">バリュー</div>
                      </div>
                        <p className="text-gray-600 leading-relaxed text-sm font-light mb-6">
                          <span className="font-medium">MOGCIAの6つの価値観</span><br />
                          使命、独創性、成長、挑戦、革新、成果
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            すべての行動指針となる価値観
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Philosophy Principles */}
                  <div className="bg-gray-50 p-6 sm:p-8 border border-gray-200">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-thin text-gray-900 mb-4 tracking-wider">理念の核心</h3>
                        <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                        <p className="text-sm sm:text-base text-gray-500 font-light tracking-wide max-w-3xl mx-auto">
                    私たちの理念は単なる言葉ではなく、日々の行動と意思決定の指針となっています
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                          <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">目的志向</h4>
                          <p className="text-gray-600 text-xs font-light">すべての行動が企業の未来創造という目的に繋がっている</p>
                  </div>
                  
                  <div className="text-center">
                          <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">継続改善</h4>
                          <p className="text-gray-600 text-xs font-light">実践から学び、常に改善を重ねるサイクルを回し続ける</p>
                  </div>
                  
                  <div className="text-center">
                          <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">共創精神</h4>
                          <p className="text-gray-600 text-xs font-light">クライアントと共に課題を解決し、価値を創造する</p>
                  </div>
                  
                  <div className="text-center">
                          <h4 className="text-base font-medium text-gray-900 mb-2 tracking-wide">革新追求</h4>
                          <p className="text-gray-600 text-xs font-light">最新技術を積極的に取り入れ、常に前進し続ける</p>
                        </div>
                    </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MOGCIA Values Section */}
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
                        MOGCIA VALUES
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                        MOGCIAの価値観
                      </h2>
                      <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                      <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                        MOGCIAの頭文字には、私たちが大切にしている6つの価値が込められています
                      </p>
              </AnimatedSection>
            </div>

                  {/* MOGCIA Letters Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { letter: "M", title: "Mission", description: "使命を果たす" },
                { letter: "O", title: "Originality", description: "独創性を追求" },
                { letter: "G", title: "Growth", description: "共に成長する" },
                { letter: "C", title: "Challenge", description: "挑戦し続ける" },
                { letter: "I", title: "Innovation", description: "革新を創造" },
                { letter: "A", title: "Achievement", description: "成果を実現" }
              ].map((value, index) => (
                      <AnimatedSection key={value.letter} animation="fadeInUp" delay={400 + (index * 100)}>
                        <div className="text-center group">
                          <div className="w-16 h-16 bg-gray-800 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                            <span className="text-white text-2xl font-bold">{value.letter}</span>
                    </div>
                          <h3 className="text-base font-medium text-gray-900 mb-2 tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                      {value.title}
                          </h3>
                          <p className="text-xs text-gray-600 font-light group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
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
                      お気軽にお問い合わせください
                </h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-sm sm:text-base text-gray-500 font-light tracking-wide mb-8 max-w-3xl mx-auto">
                      AI・デジタル技術で企業の未来を創造するサービスについて、ご相談やご質問がございましたらお気軽にお問い合わせください。
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