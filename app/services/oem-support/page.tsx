import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ScrollProgress from '../../../components/ScrollProgress'
import StableITRipple from '../../../components/StableITRipple'

export default function OEMSupportPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">OEM製造サポート</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              企画からパッケージまで、<br />
              お客様のブランドに最適化されたOEM製品をサポートします。
            </p>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">サービス内容</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">製品企画・設計</h3>
                    <p className="text-gray-600">お客様のニーズに合わせた製品企画・設計</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">製造・品質管理</h3>
                    <p className="text-gray-600">高品質な製造プロセスと品質管理</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">パッケージング・ブランディング</h3>
                    <p className="text-gray-600">お客様ブランドに合わせたパッケージデザイン</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">コスト削減</h3>
                    <p className="text-gray-600">製造コストを大幅に削減</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">品質向上</h3>
                    <p className="text-gray-600">専門的な製造技術で高品質を実現</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ブランド価値向上</h3>
                    <p className="text-gray-600">独自ブランドの製品ラインナップ拡充</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">OEM製造のご相談はこちら</h3>
              <p className="text-xl text-orange-100 mb-8">
                まずは無料相談でお客様の製品企画をお聞かせください
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-none font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
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
