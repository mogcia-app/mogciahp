'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'

export default function PrivacyPolicy() {
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
                  PRIVACY POLICY
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-6 sm:mb-8 leading-tight tracking-wider drop-shadow-lg">
                  プライバシーポリシー
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl ml-auto leading-relaxed font-light drop-shadow-md">
                  当社は、お客様の個人情報の保護に関する法令を遵守し、<br />
                  適切な取り扱いを行います。
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Privacy Policy Content */}
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
                        PRIVACY POLICY
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                        プライバシーポリシー
                      </h2>
                      <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                      <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                        株式会社MOGCIA（以下「当社」）は、お客様の個人情報の保護に関する法令を遵守し、適切な取り扱いを行います。
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Content */}
                  <div className="max-w-4xl mx-auto">
                    <AnimatedSection animation="fadeInUp" delay={400}>
                      <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">1. 個人情報の定義</h3>
                            <p className="text-gray-600 leading-relaxed">
                              個人情報とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">2. 個人情報の収集方法</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、お客様が利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、お客様と提携先などとの間でなされたお客様の個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、「提携先」といいます。）などから収集することがあります。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">3. 個人情報を収集・利用する目的</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                              当社が個人情報を収集・利用する目的は、以下のとおりです。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                              <li>当社サービスの提供・運営のため</li>
                              <li>お客様からのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                              <li>お客様が利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                              <li>利用規約に違反したお客様や、不正・不当な目的でサービスを利用しようとするお客様の特定をし、ご利用をお断りするため</li>
                              <li>お客様にご自身の登録情報の閲覧・変更・削除・ご利用状況の閲覧を行っていただくため</li>
                              <li>有料サービスにおいて、お客様に利用料金を請求するため</li>
                              <li>上記の利用目的に付随する目的</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">4. 利用目的の変更</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、お客様に通知し、または本ウェブサイト上に公表するものとします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">5. 個人情報の第三者提供</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、お客様の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令に基づき開示することが必要である場合を除きます。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">6. 個人情報の開示</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">7. 個人情報の訂正および削除</h3>
                            <p className="text-gray-600 leading-relaxed">
                              お客様は、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続により、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。当社は、お客様から前項の請求を受けてその請求に理由があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">8. 個人情報の利用停止等</h3>
                            <p className="text-gray-600 leading-relaxed">
                              当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。前項の調査結果に基づき、その請求に理由があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">9. プライバシーポリシーの変更</h3>
                            <p className="text-gray-600 leading-relaxed">
                              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、お客様に通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">10. お問い合わせ窓口</h3>
                            <p className="text-gray-600 leading-relaxed">
                              本ポリシーに関するお問い合わせは、下記までご連絡ください。
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
