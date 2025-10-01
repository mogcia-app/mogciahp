import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ScrollProgress from '../../../components/ScrollProgress'
import StableITRipple from '../../../components/StableITRipple'

export default function SNSMarketingPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">SNS運用支援</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              戦略設計から運用・分析まで、Signal<span style={{color: '#ff8a15'}}>.</span>を活用した<br />
              効果的なSNSマーケティングをサポートします。
            </p>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">サービス内容</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">SNS戦略コンサルティング</h3>
                    <p className="text-gray-600">プラットフォーム選定から戦略立案まで</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Signal<span style={{color: '#ff8a15'}}>.</span>運用支援</h3>
                    <p className="text-gray-600">AI活用SNS運用ツールの導入・運用</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">コンテンツ企画・制作</h3>
                    <p className="text-gray-600">エンゲージメントを高めるコンテンツ制作</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">運用効率化</h3>
                    <p className="text-gray-600">AI活用により運用時間を大幅短縮</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">エンゲージメント向上</h3>
                    <p className="text-gray-600">ターゲットに刺さるコンテンツで反応率向上</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ブランド認知度向上</h3>
                    <p className="text-gray-600">一貫したブランドメッセージで認知度向上</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">SNS運用のご相談はこちら</h3>
              <p className="text-xl text-blue-100 mb-8">
                まずは無料相談でお客様のSNS戦略をお聞かせください
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-none font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
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
