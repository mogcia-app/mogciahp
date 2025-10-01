import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ScrollProgress from '../../../components/ScrollProgress'
import StableITRipple from '../../../components/StableITRipple'

export default function WebDevelopmentPage() {
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
      
      <main className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Webサイト・LP構築</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              成果に直結する導線設計で、<br />
              お客様のビジネス成果を最大化するWebサイトを構築します。
            </p>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">サービス内容</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">レスポンシブWebサイト</h3>
                    <p className="text-gray-600">PC・タブレット・スマホ対応のサイト構築</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ランディングページ制作</h3>
                    <p className="text-gray-600">高変換率のLP設計・制作</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">SEO最適化</h3>
                    <p className="text-gray-600">検索エンジン最適化で集客力向上</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">導入効果</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">コンバージョン向上</h3>
                    <p className="text-gray-600">導線設計により成約率を大幅向上</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">集客力強化</h3>
                    <p className="text-gray-600">SEO対策で検索流入を増加</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ブランドイメージ向上</h3>
                    <p className="text-gray-600">モダンなデザインで信頼性向上</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Webサイト制作のご相談はこちら</h3>
              <p className="text-xl text-green-100 mb-8">
                まずは無料相談でお客様のWeb戦略をお聞かせください
              </p>
              <button className="bg-white text-green-600 px-8 py-4 rounded-none font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                無料相談を申し込む
              </button>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
