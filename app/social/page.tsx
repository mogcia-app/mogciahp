'use client'

import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'
import SectionTransition from '../../components/SectionTransition'

export default function Social() {

  const cardData = {
    sdgs: {
      title: "SDGsへの取り組み",
      subtitle: "小さな一歩から始める",
      description: "日々の業務を通じてSDGsの考え方を取り入れ、できることから始めています。",
      icon: "🌱",
      color: "green",
      actions: {
        title: "具体的な行動",
        items: [
          "ペーパーレス化の推進",
          "リモートワークの活用", 
          "地域の小さな企業との連携",
          "社内での環境意識の向上"
        ]
      },
      effects: {
        title: "期待される効果",
        items: [
          "業務効率の向上",
          "環境負荷の軽減",
          "地域とのつながり強化",
          "社内意識の向上"
        ]
      }
    },
    diversity: {
      title: "ダイバーシティ＆インクルージョン",
      subtitle: "多様性を活かす組織づくり",
      description: "性別、年齢、国籍、経験など、多様な背景を持つ人材が活躍できる環境を目指しています。",
      icon: "🌈",
      color: "purple",
      actions: {
        title: "推進政策",
        items: [
          "リモートワーク・フレックス制度の導入",
          "多様な価値観を尊重する企業文化の醸成",
          "公平な評価制度と昇進機会の提供",
          "多言語対応とコミュニケーション支援"
        ]
      },
      effects: {
        title: "期待される効果",
        items: [
          "創造性とイノベーションの向上",
          "従業員満足度と定着率の向上",
          "優秀な人材の確保と採用競争力強化",
          "企業ブランドと社会的信頼の向上"
        ]
      }
    },
    dx: {
      title: "DX推進",
      subtitle: "デジタル変革で業務効率化",
      description: "アナログな業務プロセスをデジタル化し、効率的で持続可能な働き方を実現します。",
      icon: "💻",
      color: "blue",
      actions: {
        title: "なぜDXが必要か",
        items: [
          "業務効率の大幅な向上（30-50%の時間短縮）",
          "人的ミスの削減と品質向上",
          "データ活用による意思決定の迅速化",
          "リモートワーク環境の整備と働き方改革"
        ]
      },
      effects: {
        title: "提供ソリューション",
        items: [
          "業務プロセスの見直しと最適化",
          "適切なツールの選定・導入・運用支援",
          "従業員のデジタルリテラシー向上研修",
          "継続的な改善サイクルの構築とサポート"
        ]
      }
    },
    ai: {
      title: "AIとSDGs・ダイバーシティ",
      subtitle: "テクノロジーで社会課題解決",
      description: "AI技術を活用して、SDGsの目標達成とダイバーシティ推進に貢献します。",
      icon: "🤖",
      color: "red",
      actions: {
        title: "AI活用事例",
        items: [
          "AIによる業務効率化ツール（文書処理、データ分析）",
          "機械学習を活用した意思決定支援システム",
          "自動化による人的作業の軽減とエラー削減",
          "インクルーシブなAIシステム設計とバイアス対策"
        ]
      },
      effects: {
        title: "社会への影響",
        items: [
          "社会課題の早期発見・解決とSDGs目標達成",
          "持続可能なビジネスモデルの構築と推進",
          "多様な人材の活躍支援と機会創出",
          "地域社会への貢献とデジタル格差解消"
        ]
      }
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: "bg-green-100",
        border: "border-green-500",
        borderColor: "#10b981",
        text: "text-green-700",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "bg-purple-100", 
        border: "border-purple-500",
        borderColor: "#8b5cf6",
        text: "text-purple-700",
        button: "bg-purple-600 hover:bg-purple-700"
      },
      blue: {
        bg: "bg-blue-100",
        border: "border-blue-500", 
        borderColor: "#3b82f6",
        text: "text-blue-700",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      red: {
        bg: "bg-red-100",
        border: "border-red-500",
        borderColor: "#ef4444",
        text: "text-red-700", 
        button: "bg-red-600 hover:bg-red-700"
      }
    }
    return colors[color as keyof typeof colors]
  }
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/istockphoto-876010626-1024x1024.jpg)',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          filter: 'brightness(0.95) contrast(1.1) saturate(1.0)',
          opacity: 0.3
        }}
      />
      
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
          <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 text-center">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="inline-flex items-center px-6 py-3 bg-gray-100 border border-gray-300 text-gray-800 text-sm font-medium rounded-full mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                SOCIAL IMPACT
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 bg-clip-text text-transparent">
                  社会への取り組み
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20 font-light">
                AIテクノロジーを通じて<br />
                持続可能な社会の実現に貢献します
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    const socialSection = document.getElementById('social-impact');
                    if (socialSection) {
                      socialSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-none font-semibold hover:bg-green-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-2xl"
                >
                  <span className="flex items-center">
                    取り組み詳細を見る
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

        {/* Social Impact Section */}
        <section id="social-impact" className="py-24 relative">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header Section */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-bold rounded-none mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-none mr-2 animate-pulse"></div>
                  SOCIAL IMPACT
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  社会への取り組み
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  テクノロジーの力で、持続可能な社会の実現と<br />
                  すべての人々の幸福な暮らしに貢献します
                </p>
              </AnimatedSection>
            </div>

            {/* All Initiatives Section */}
            <SectionTransition effect="fade" direction="up" className="mb-20">
              <div className="space-y-16">
                {Object.entries(cardData).map(([key, data], index) => {
                  const colorClasses = getColorClasses(data.color)
                  return (
                    <div key={key} className="bg-white rounded-none shadow-lg border border-gray-200 overflow-hidden">
                      {/* Header Section */}
                      <div className={`${colorClasses.bg} px-8 py-6 border-b-4`} style={{borderBottomColor: colorClasses.borderColor}}>
                        <AnimatedSection animation="fadeInUp" delay={200 + (index * 100)}>
                          <div className="flex items-center mb-4">
                            <span className="text-4xl mr-4">{data.icon}</span>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>
                              <p className="text-lg text-gray-700">{data.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {data.description}
                          </p>
                        </AnimatedSection>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          
                          {/* Actions Card */}
                          <AnimatedSection animation="fadeInLeft" delay={300 + (index * 100)}>
                            <div className="bg-gray-50 border-l-4 p-6 rounded-none" style={{borderLeftColor: colorClasses.borderColor}}>
                              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <div className={`w-3 h-3 rounded-full mr-3`} style={{backgroundColor: colorClasses.borderColor}}></div>
                                {data.actions.title}
                              </h4>
                              <ul className="space-y-3 text-gray-700">
                                {data.actions.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start">
                                    <span className={`text-sm mr-3 mt-1`} style={{color: colorClasses.borderColor}}>▶</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </AnimatedSection>

                          {/* Effects Card */}
                          <AnimatedSection animation="fadeInRight" delay={400 + (index * 100)}>
                            <div className="bg-gray-50 border-l-4 p-6 rounded-none" style={{borderLeftColor: colorClasses.borderColor}}>
                              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <div className={`w-3 h-3 rounded-full mr-3`} style={{backgroundColor: colorClasses.borderColor}}></div>
                                {data.effects.title}
                              </h4>
                              <ul className="space-y-3 text-gray-700">
                                {data.effects.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start">
                                    <span className={`text-sm mr-3 mt-1`} style={{color: colorClasses.borderColor}}>▶</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </AnimatedSection>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-8">
                          <AnimatedSection animation="fadeInUp" delay={500 + (index * 100)}>
                            <Link href="/contact">
                              <button className={`group ${colorClasses.button} text-white px-8 py-4 rounded-none font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg`}>
                                <span className="flex items-center">
                                  取り組みについて詳しく聞く
                                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </button>
                            </Link>
                          </AnimatedSection>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SectionTransition>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
