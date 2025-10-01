'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'

import SectionTransition from '../../components/SectionTransition'

export default function About() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white lg:ml-64">
        <ScrollProgress />
        <StableITRipple />
        
        <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
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
                ABOUT US
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                  会社概要
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20 font-light">
                AIとデジタル技術で、お客様のビジネスの未来を創造する
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    const companySection = document.getElementById('company-details');
                    if (companySection) {
                      companySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-none font-semibold hover:bg-red-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-2xl"
                >
                  <span className="flex items-center">
                    会社詳細を見る
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

        {/* Company Vision Section */}
        <section id="company-details" className="py-24 relative bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  COMPANY OVERVIEW
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  会社の理念と価値観
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  AIとデジタル技術で、お客様のビジネスの未来を創造する<br />
                  私たちの使命・ビジョン・価値観をご紹介します
                </p>
              </AnimatedSection>
            </div>

              {/* Philosophy Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Mission Card */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="group relative bg-gradient-to-br from-red-500 to-red-600 rounded-none overflow-hidden shadow-2xl hover:shadow-red-500/25 transition-all duration-700 transform hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8 text-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-none flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-white/30 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Mission</h3>
                        <p className="text-red-200 text-sm font-semibold">ミッション</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      AI・デジタル技術で企業の未来を創造する
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-red-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        2023年11月設立時の原点
                      </div>
                      <div className="flex items-center text-sm text-red-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        すべての事業の根幹となる理念
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="text-xs text-red-200">設立から現在まで一貫した使命</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vision Card */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-none overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8 text-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-none flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-white/30 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Vision</h3>
                        <p className="text-blue-200 text-sm font-semibold">ビジョン</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      AI×デジタルで、すべての企業の成長を加速する
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-blue-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        全国の中小企業のデジタル課題解決
                      </div>
                      <div className="flex items-center text-sm text-blue-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        実践経験に基づくソリューション提供
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="text-xs text-blue-200">MOGCIA Coffeeでの実践から得た知見</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Values Card */}
              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-none overflow-hidden shadow-2xl hover:shadow-green-500/25 transition-all duration-700 transform hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8 text-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-none flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-white/30 rounded-sm"></div>
                      </div>
            <div>
                        <h3 className="text-2xl font-bold">Values</h3>
                        <p className="text-green-200 text-sm font-semibold">バリュー</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      MOGCIAの6つの価値観
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-green-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        使命、独創性、成長
                      </div>
                      <div className="flex items-center text-sm text-green-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        挑戦、革新、成果
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="text-xs text-green-200">すべての行動指針となる価値観</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Philosophy Principles */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-none border border-gray-200 mb-20">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">理念の核心</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    私たちの理念は単なる言葉ではなく、日々の行動と意思決定の指針となっています
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">目的志向</h4>
                    <p className="text-gray-600 text-sm">すべての行動が企業の未来創造という目的に繋がっている</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🔄</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">継続改善</h4>
                    <p className="text-gray-600 text-sm">実践から学び、常に改善を重ねるサイクルを回し続ける</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🤝</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">共創精神</h4>
                    <p className="text-gray-600 text-sm">クライアントと共に課題を解決し、価値を創造する</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl">🚀</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">革新追求</h4>
                    <p className="text-gray-600 text-sm">最新技術を積極的に取り入れ、常に前進し続ける</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
             {/* MOGCIA Values */}
             <div className="text-center mb-12">
              <AnimatedSection animation="fadeInUp" delay={600}>
                <h3 className="text-3xl font-bold text-gray-800 mb-8">MOGCIA の価値観</h3>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
              {[
                { letter: "M", title: "Mission", description: "使命を果たす" },
                { letter: "O", title: "Originality", description: "独創性を追求" },
                { letter: "G", title: "Growth", description: "共に成長する" },
                { letter: "C", title: "Challenge", description: "挑戦し続ける" },
                { letter: "I", title: "Innovation", description: "革新を創造" },
                { letter: "A", title: "Achievement", description: "成果を実現" }
              ].map((value, index) => (
                <AnimatedSection key={value.letter} animation="scaleIn" delay={700 + (index * 100)}>
                  <div className="group text-center p-6 rounded-none hover:bg-white transition-all duration-500 hover:shadow-lg hover:scale-105 transform">
                    <div className="text-6xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4 group-hover:animate-bounce">
                      {value.letter}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                      {value.description}
                    </p>
              </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* Company Info Section */}
        <SectionTransition effect="fade" direction="up" className="py-24 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  COMPANY INFO
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  会社情報
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  株式会社MOGCIAの基本情報と事業内容をご紹介します
                </p>
              </AnimatedSection>
            </div>

            {/* Company Info Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <AnimatedSection animation="fadeInLeft" delay={300}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-none blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-none p-8 shadow-xl">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">株式会社MOGCIA</h3>
                        <p className="text-gray-600">MOGCIA Inc.</p>
                      </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-none flex items-center justify-center mr-4">
                          <span className="text-red-600 text-lg">🏢</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">設立</p>
                          <p className="text-gray-600 text-sm">2023年11月</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-none flex items-center justify-center mr-4">
                          <span className="text-red-600 text-lg">📍</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">所在地</p>
                          <p className="text-gray-600 text-sm">福岡県福岡市中央区天神4-6-28 いちご天神ノースビル７階</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-none flex items-center justify-center mr-4">
                          <span className="text-red-600 text-lg">👥</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">電話番号</p>
                          <p className="text-gray-600 text-sm">092-517-9804</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">事業内容</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></div>
                        <p className="text-gray-700">AI・DXソリューションの企画・開発</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></div>
                        <p className="text-gray-700">デジタルマーケティング支援</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></div>
                        <p className="text-gray-700">Webサイト・システム開発</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-none mr-3 mt-2"></div>
                        <p className="text-gray-700">OEM企画・製造サポート</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">私たちの強み</h4>
                    <div className="bg-red-50 p-6 rounded-none">
                      <p className="text-gray-700 leading-relaxed">
                        最新のAI技術とDXソリューションで、お客様の業務効率化とデジタル変革をサポートします。小さな会社だからこそ、お客様一人ひとりに寄り添った柔軟なサービスを提供できます。
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </SectionTransition>

        {/* CTA Section */}
        <SectionTransition effect="fade" direction="up" className="py-24 relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  CONTACT US
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  お気軽にお問い合わせください
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                  AI・デジタル技術に関するご相談やご質問がございましたら、<br />
                  お気軽にお問い合わせください。専門スタッフがサポートいたします。
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <AnimatedSection animation="fadeInUp" delay={300}>
                  <div className="group bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-red-100 rounded-none flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce">
                      <span className="text-red-600 text-2xl">📧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">メール</h3>
                    <p className="text-gray-600 mb-4">info@mogcia.jp</p>
                    <p className="text-sm text-gray-500">24時間以内にご返信いたします</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={400}>
                  <div className="group bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-red-100 rounded-none flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce">
                      <span className="text-red-600 text-2xl">📞</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">電話</h3>
                    <p className="text-gray-600 mb-4">092-517-9804</p>
                    <p className="text-sm text-gray-500">平日 9:00-18:00</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={500}>
                  <div className="group bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-red-100 rounded-none flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce">
                      <span className="text-red-600 text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">オンライン相談</h3>
                    <p className="text-gray-600 mb-4">無料相談実施中</p>
                    <p className="text-sm text-gray-500">30分の無料相談</p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <a 
                  href="/contact"
                  className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-none font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-red-200"
                >
                  <span className="flex items-center">
                    お問い合わせフォームへ
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </SectionTransition>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}