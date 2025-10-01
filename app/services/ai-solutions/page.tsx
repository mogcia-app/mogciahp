import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ScrollProgress from '../../../components/ScrollProgress'
import StableITRipple from '../../../components/StableITRipple'

export default function AISolutionsPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">AIを活用した課題解決</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              データ分析から意思決定支援まで、AIテクノロジーを活用して<br />
              お客様のビジネス課題を根本的に解決します。
            </p>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">サービス内容</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI導入コンサルティング</h3>
                    <p className="text-gray-600">業務プロセスの分析からAI活用戦略の立案まで</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">機械学習モデル開発</h3>
                    <p className="text-gray-600">お客様のデータに最適化されたAIモデルの構築</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">データ分析・可視化</h3>
                    <p className="text-gray-600">ビッグデータの分析とダッシュボード構築</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">業務効率化</h3>
                    <p className="text-gray-600">自動化により業務時間を最大80%削減</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">精度向上</h3>
                    <p className="text-gray-600">AIによる高精度な予測・判断支援</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">コスト削減</h3>
                    <p className="text-gray-600">運用コストを大幅に削減</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">AI導入のご相談はこちら</h3>
              <p className="text-xl text-red-100 mb-8">
                まずは無料相談でお客様の課題をお聞かせください
              </p>
              <button className="bg-white text-red-600 px-8 py-4 rounded-none font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
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
