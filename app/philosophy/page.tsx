'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'
import CTA from '../../components/CTA'

export default function Philosophy() {
  return (
    <div className="min-h-screen relative">
      
      <Header />
      <ScrollProgress />
      <StableITRipple />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(/images/istockphoto-2225605521-1024x1024.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="inline-flex items-center px-6 py-3 bg-gray-100 border border-gray-300 text-gray-800 text-sm font-medium rounded-full mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                COMPANY PHILOSOPHY
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                  企業理念
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20 font-light">
                テクノロジーの力で、すべての企業の未来を創造する<br />
                私たちの使命と価値観をご紹介します
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
                <button 
                  onClick={() => {
                    const philosophySection = document.getElementById('philosophy-detail');
                    if (philosophySection) {
                      philosophySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-none font-semibold hover:bg-red-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-2xl"
                >
                  <span className="flex items-center">
                    理念を深く知る
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </div>

      
        </section>

        {/* Philosophy Detail Section */}
        <section id="philosophy-detail" className="py-24 relative bg-white">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  OUR PHILOSOPHY
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  私たちの理念
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  2023年11月の設立から現在まで、私たちは一貫して<br />
                  AI・デジタル技術で企業の未来を創造することを使命として歩んできました
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
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

        {/* Philosophy in Action Section */}
        <section className="py-24 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  PHILOSOPHY IN ACTION
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  理念の実践
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  私たちの理念がどのように日々の業務に反映されているか<br />
                  具体的な取り組みをご紹介します
                </p>
              </AnimatedSection>
            </div>

            {/* Practice Cards */}
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
                        <h3 className="text-xl font-bold text-gray-900">AI技術の活用</h3>
                        <p className="text-red-600 text-sm font-semibold">INNOVATION</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      最新のAI技術を積極的に取り入れ、お客様の業務効率化と意思決定支援を実現しています。
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        機械学習による予測分析
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        自然言語処理の活用
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        自動化システムの構築
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">実践例</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-red-300 rounded-full"></div>
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
                        <h3 className="text-xl font-bold text-gray-900">チームワーク</h3>
                        <p className="text-blue-600 text-sm font-semibold">COLLABORATION</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      多様な背景を持つメンバーが協力し、創造的なソリューションを生み出しています。
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        多様性を活かしたチーム編成
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        オープンなコミュニケーション
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        知識共有の促進
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">実践例</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
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
                        <h3 className="text-xl font-bold text-gray-900">継続的改善</h3>
                        <p className="text-green-600 text-sm font-semibold">IMPROVEMENT</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      常に学び続け、改善を重ねることで、より良いサービスを提供しています。
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        定期的な技術研修
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        顧客フィードバックの活用
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        プロセスの最適化
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">実践例</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Company History Section */}
        <section className="py-24 relative bg-white">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  COMPANY HISTORY
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  会社の歩み
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  2023年設立からの歩み<br />
                  成長の軌跡をご紹介します
                </p>
              </AnimatedSection>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-200 via-red-300 to-red-200"></div>
              
              <div className="space-y-16">
                <AnimatedSection animation="fadeInLeft" delay={300}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-none shadow-lg border-l-4 border-red-500">
                        <div className="text-red-600 font-bold text-lg mb-2">2023年11月</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">株式会社MOGCIA設立</h3>
                        <p className="text-gray-600">AI・デジタルを通じて企業の未来を創造することを使命として設立</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                      1
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                      2
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-none shadow-lg border-r-4 border-red-500">
                        <div className="text-red-600 font-bold text-lg mb-2">2024年4月</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">MOGCIA Coffee立ち上げ</h3>
                        <p className="text-gray-600">BtoC・BtoB向けに販路を展開し、コーヒー事業を開始</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={500}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-none shadow-lg border-l-4 border-red-500">
                        <div className="text-red-600 font-bold text-lg mb-2">2024年11月</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">SNS運用サービス開始</h3>
                        <p className="text-gray-600">クライアント先の課題解決のため、SNS運用サービスを開始</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                      3
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={600}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                      4
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-none shadow-lg border-r-4 border-red-500">
                        <div className="text-red-600 font-bold text-lg mb-2">2025年1月</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">WEB制作サービス開始</h3>
                        <p className="text-gray-600">小売業のSNSからHPへの導線・コンバージョン課題を解決するため、WEB制作を開始</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={700}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-none shadow-lg border-l-4 border-red-500">
                        <div className="text-red-600 font-bold text-lg mb-2">2025年2月</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">スタートアップ支援開始</h3>
                        <p className="text-gray-600">MOGCIA Coffeeの卸業・OEMを通じてスタートアップ支援を開始</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                      5
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={800}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                      6
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-none shadow-lg border-r-4 border-red-500">
                        <div className="text-red-600 font-bold text-lg mb-2">2025年6月</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Signal<span style={{color: '#ff8a15'}}>.</span>販売開始</h3>
                        <p className="text-gray-600">SNS×AIでSNS業務の90%を自動化する「Signal<span style={{color: '#ff8a15'}}>.</span>」を開始</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={900}>
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-none shadow-lg border-l-4 border-red-500">
                        <div className="text-red-600 font-bold text-lg mb-2">Coming Soon</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ビジネス用AI</h3>
                        <p className="text-gray-600">企業向けAIソリューションの本格展開を予定</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                      7
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Business Details Section */}
        <section className="py-24 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  BUSINESS DETAILS
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  事業詳細
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  各事業の詳細説明と技術的な背景<br />
                  市場分析と戦略、今後の展望をご紹介します
                </p>
              </AnimatedSection>
            </div>

            {/* Business Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* MOGCIA Coffee */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                      <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">MOGCIA Coffee</h3>
                      <p className="text-red-600 font-semibold">BtoC・BtoB事業</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">事業概要</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        高品質なコーヒー豆を使用したオリジナルブランド。BtoCではオンライン販売、BtoBでは福利厚生支援サービスを展開。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">技術的アプローチ</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        SNSマーケティングの実験を通じて、フォロワー数と購買率の関係を分析。データドリブンなブランディング戦略を構築。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">今後の展望</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        現在はコーヒー豆の価格高騰に伴い限定されたお取引先のみに提供中。
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* SNS運用サービス */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                      <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">SNS運用サービス</h3>
                      <p className="text-blue-600 font-semibold">デジタルマーケティング</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">事業概要</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        MOGCIA Coffeeのクライアント先の課題解決から始まったSNS運用サービス。Instagram、YouTube、X、TikTokを活用。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">技術的アプローチ</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        小売業特有のSNSからHPへの導線課題を分析。コンバージョン最適化を意識した運用ノウハウを蓄積。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">今後の展望</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Signal<span style={{color: '#ff8a15'}}>.</span>による自動化で、より効率的なSNS運用を実現。
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* WEB制作サービス */}
              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                      <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">WEB制作サービス</h3>
                      <p className="text-green-600 font-semibold">デジタルソリューション</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">事業概要</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        小売業のSNSからHPへの導線・コンバージョン課題を解決するため開始。レスポンシブデザインとSEO最適化を重視。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">技術的アプローチ</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        モダンな技術スタックを使用し、継続的な改善とアクセス解析による最適化を行なっています。。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">今後の展望</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        AIを活用したパーソナライゼーション機能の導入と、より高度なコンバージョン最適化を計画。
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Signal. */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                      <div className="w-8 h-8 bg-white opacity-20 rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Signal<span style={{color: '#ff8a15'}}>.</span></h3>
                      <p className="text-orange-600 font-semibold">AI自動化ツール</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">事業概要</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        SNS×AIでSNS業務の90%を自動化するツール。Instagram、YouTube、X、TikTokの4つのSNSを一括管理。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">技術的アプローチ</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        KPI逆算型PDCAで集客・売上アップを実現。AI強み診断、カルテ機能による学習進化システム。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">今後の展望</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        2025年6月開始。機能拡張を計画。
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Market Analysis */}
            <div className="mt-16">
              <AnimatedSection animation="fadeInUp" delay={700}>
                <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-none">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">市場分析と戦略</h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      実践経験を活かし、全国の中小企業のデジタル課題を解決する総合的なソリューションを提供します。
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl">📊</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">データドリブン</h4>
                      <p className="text-gray-600 text-sm">実際の事業運営で得たデータを基に、効果的なソリューションを提供</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-none flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl">🔄</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">継続改善</h4>
                      <p className="text-gray-600 text-sm">クライアントの課題解決を通じて、サービスを継続的に改善・進化</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-none flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl">🚀</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">AI活用</h4>
                      <p className="text-gray-600 text-sm">最新のAI技術を活用し、業務効率化と自動化を実現</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Consultation Flow Section */}
        <section className="py-24 relative bg-white">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  INQUIRY PROCESS
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  お問合せ後の流れ
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  お問い合わせいただいてから<br />
                  プロジェクト開始までの流れをご案内します
                </p>
              </AnimatedSection>
            </div>

            {/* Flow Steps */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-blue-200 via-green-200 to-purple-200"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatedSection animation="fadeInUp" delay={300}>
                  <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-red-500">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-2xl text-white font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">お問い合わせ</h3>
                        <p className="text-red-600 text-sm font-semibold">STEP 1</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      フォームまたはメールでお気軽にお問い合わせください
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      即日対応
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={400}>
                  <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-2xl text-white font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">初回ヒアリング</h3>
                        <p className="text-blue-600 text-sm font-semibold">STEP 2</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      お客様の課題やご要望を詳しくお聞かせください
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      1-2日以内
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={500}>
                  <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-green-500">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-2xl text-white font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">提案・見積もり</h3>
                        <p className="text-green-600 text-sm font-semibold">STEP 3</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      最適なソリューションとお見積もりをご提案いたします
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      3-5日以内
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={600}>
                  <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-purple-500">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-none flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-2xl text-white font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">プロジェクト開始</h3>
                        <p className="text-purple-600 text-sm font-semibold">STEP 4</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      オンラインまたは対面で詳細な打ち合わせを行い、プロジェクトを開始します
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      1週間以内
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Flow Timeline */}
            <div className="mt-16">
              <AnimatedSection animation="fadeInUp" delay={700}>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-none border border-gray-200">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">プロセス概要</h3>
                    <p className="text-gray-600">お問い合わせからプロジェクト開始まで、スムーズな流れで進めます</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-none flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white text-lg font-bold">1</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">お問い合わせ</h4>
                      <p className="text-xs text-gray-500">即日対応</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-none flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white text-lg font-bold">2</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">初回ヒアリング</h4>
                      <p className="text-xs text-gray-500">1-2日以内</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-none flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white text-lg font-bold">3</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">提案・見積もり</h4>
                      <p className="text-xs text-gray-500">3-5日以内</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-none flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-white text-lg font-bold">4</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">プロジェクト開始</h4>
                      <p className="text-xs text-gray-500">1週間以内</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      {/* CTA Section */}
      <CTA
        title="お気軽にお問い合わせください"
        description="AI・デジタル技術で企業の未来を創造するサービスについて、ご相談やご質問がございましたらお気軽にお問い合わせください。"
        primaryButtonText="お問い合わせフォームへ"
        primaryButtonHref="/contact"
      />
      
      <Footer />
    </div>
  )
}
