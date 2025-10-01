import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ScrollProgress from '../../../components/ScrollProgress'
import StableITRipple from '../../../components/StableITRipple'

export default function StartupSupportPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">スタートアップ成長支援</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              持続可能な事業成長の設計で、<br />
              スタートアップの成功をトータルサポートします。
            </p>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">サービス内容</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">事業戦略立案</h3>
                    <p className="text-gray-600">持続可能な成長戦略の策定・実行支援</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">資金調達支援</h3>
                    <p className="text-gray-600">投資家向けピッチ資料作成・投資家紹介</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">組織構築支援</h3>
                    <p className="text-gray-600">チーム構築・組織運営の最適化</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">成長加速</h3>
                    <p className="text-gray-600">戦略的アプローチで事業成長を加速</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">リスク軽減</h3>
                    <p className="text-gray-600">専門知識で事業リスクを最小化</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ネットワーク活用</h3>
                    <p className="text-gray-600">豊富な人脈・ネットワークを活用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">スタートアップ支援のご相談はこちら</h3>
              <p className="text-xl text-teal-100 mb-8">
                まずは無料相談でお客様の事業戦略をお聞かせください
              </p>
              <button className="bg-white text-teal-600 px-8 py-4 rounded-none font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
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
