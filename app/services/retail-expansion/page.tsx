import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ScrollProgress from '../../../components/ScrollProgress'
import StableITRipple from '../../../components/StableITRipple'

export default function RetailExpansionPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">商品卸・小売展開</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              マルチチャネル戦略の構築で、<br />
              お客様の商品を最大限に展開・販売します。
            </p>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">サービス内容</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">卸売チャネル構築</h3>
                    <p className="text-gray-600">小売店・ECサイトへの卸売ルート開拓</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">小売戦略立案</h3>
                    <p className="text-gray-600">店舗展開・ECサイト運営戦略の策定</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">在庫管理最適化</h3>
                    <p className="text-gray-600">AI活用による効率的な在庫管理</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">販路拡大</h3>
                    <p className="text-gray-600">新たな販売チャネルで売上向上</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">効率化</h3>
                    <p className="text-gray-600">在庫管理の自動化でコスト削減</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ブランド認知向上</h3>
                    <p className="text-gray-600">複数チャネルでの露出で認知度向上</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">卸売・小売展開のご相談はこちら</h3>
              <p className="text-xl text-purple-100 mb-8">
                まずは無料相談でお客様の販売戦略をお聞かせください
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-none font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
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
