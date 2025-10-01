'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative bg-white">
      <Header />
      <ScrollProgress />
      <StableITRipple />
      
      <div className="flex-1 flex flex-col">
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
                  TERMS OF SERVICE
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-6 sm:mb-8 leading-tight tracking-wider drop-shadow-lg">
                  利用規約
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl ml-auto leading-relaxed font-light drop-shadow-md">
                  本規約は、当社が提供するサービスの利用条件を定めるものです。<br />
                  ご利用前に必ずお読みください。
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Terms of Service Content */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white p-6 sm:p-8 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  
                  {/* Header */}
                  <div className="text-center mb-12 sm:mb-16">
                    <AnimatedSection animation="fadeInUp" delay={200}>
                      <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                        TERMS OF SERVICE
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                        利用規約
                      </h2>
                      <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                      <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                        本利用規約（以下「本規約」といいます。）は、株式会社MOGCIA（以下「当社」といいます。）が提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Content */}
                  <div className="max-w-4xl mx-auto">
                    <AnimatedSection animation="fadeInUp" delay={400}>
                      <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第1条（適用）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第2条（本サイトの利用）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              本サイトは、当社の事業内容、サービス、企業情報等をご案内することを目的としており、お客様は本サイトを適法な目的でのみ利用するものとします。本サイトの利用により、お客様は本規約に同意したものとみなします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第3条（禁止事項）</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                              お客様は、本サイトの利用にあたり、以下の行為をしてはなりません。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                              <li>法令または公序良俗に違反する行為</li>
                              <li>犯罪行為に関連する行為</li>
                              <li>本サイトの内容等、本サイトに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                              <li>当社またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                              <li>本サイトによって得られた情報を無断で複製、転載、配布する行為</li>
                              <li>当社のサーバーに過度の負荷をかける行為</li>
                              <li>不正アクセスをし、またはこれを試みる行為</li>
                              <li>不正な目的を持って本サイトを利用する行為</li>
                              <li>その他、当社が不適切と判断する行為</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第4条（本サイトの停止等）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、以下のいずれかの事由があると判断した場合、お客様に事前に通知することなく本サイトの全部または一部の提供を停止または中断することができるものとします。当社は、本サイトの提供の停止または中断により、お客様または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                              <li>本サイトにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サイトの提供が困難となった場合</li>
                              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                              <li>その他、当社が本サイトの提供が困難と判断した場合</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第5条（免責事項）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、本サイトに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。当社は、本サイトに起因してお客様に生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第6条（サイト内容の変更等）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、お客様に通知することなく、本サイトの内容を変更しまたは本サイトの提供を中止することができるものとし、これによってお客様に生じた損害について一切の責任を負いません。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第7条（利用規約の変更）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は以下の場合には、お客様の個別の同意を要せず、本規約を変更することができるものとします。当社がお客様に対し、変更後の利用規約を通知し、または本ウェブサイト上に変更後の利用規約を掲載した場合、お客様は変更後の利用規約に同意したものとみなします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第8条（個人情報の取扱い）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、本サイトの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第9条（準拠法・裁判管轄）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              本規約の解釈にあたっては、日本法を準拠法とします。本サイトに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">第10条（お問い合わせ窓口）</h3>
                            <p className="text-gray-600 leading-relaxed">
                              本規約に関するお問い合わせは、下記までご連絡ください。
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-sm">
                              <p className="text-gray-700">
                                <strong>株式会社MOGCIA</strong><br />
                                〒810-0001 福岡県福岡市中央区天神4-6-28<br />
                                いちご天神ノースビル７階<br />
                                電話: 092-517-9804<br />
                                メール: info@mogcia.jp
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}
