'use client'

import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollProgress from '../../components/ScrollProgress'
import StableITRipple from '../../components/StableITRipple'
import AnimatedSection from '../../components/AnimatedSection'

export default function Contact() {
  useEffect(() => {
    // FormRun Script を動的に読み込み
    const script = document.createElement('script')
    script.src = 'https://sdk.form.run/js/v2/formrun.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // クリーンアップ
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen relative bg-white">
      
      <Header />
      <ScrollProgress />
      <StableITRipple />
      
      <main className="relative z-10">
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
                CONTACT
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-gray-300 mb-6 sm:mb-8 leading-tight tracking-wider drop-shadow-lg">
                お問い合わせ
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl ml-auto leading-relaxed font-light drop-shadow-md">
                下記フォームよりお問い合わせください。<br />
                担当者より追ってご連絡いたします。
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white p-6 sm:p-8 group relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                  <AnimatedSection animation="fadeInUp" delay={200}>
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                      CONTACT FORM
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                      お問い合わせフォーム
                    </h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                      ご質問やご相談がございましたら、下記フォームよりお気軽にお問い合わせください
                    </p>
                  </AnimatedSection>
                </div>

                {/* FormRun Form */}
                <div className="max-w-2xl mx-auto">
                  <AnimatedSection animation="fadeInUp" delay={300}>
                    <div className="bg-gray-50 p-6 sm:p-8">
                  {/* class, action, methodを変更しないでください */}
                  <form className="formrun" action="https://form.run/api/v1/r/7tbbkege85us5qykn1vsn7i3" method="post">
                    {/* ↓自由に要素を追加・編集することができます */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">企業名</label>
                      <input 
                        name="企業名" 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                      <input 
                        name="お名前" 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電話番号
                      </label>
                      <input 
                        name="電話番号" 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        メールアドレス <span className="text-gray-500">[必須]</span>
                      </label>
                      <input 
                        name="メールアドレス" 
                        type="text" 
                        data-formrun-type="email" 
                        data-formrun-required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                      />
                      <div data-formrun-show-if-error="メールアドレス" className="text-gray-500 text-sm mt-1">メールアドレスを正しく入力してください</div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        お問い合わせ項目 <span className="text-gray-500">[必須]</span>
                      </label>
                      <select 
                        name="お問い合わせ項目" 
                        data-formrun-required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                      >
                        <option value="">選択してください</option>
                        <option value="サービスについて">サービスについて</option>
                        <option value="パートナーシップについて">パートナーシップについて</option>
                        <option value="Signal.について">Signal.について</option>
                        <option value="WEB制作について">WEB制作について</option>
                        <option value="SNS運用について">SNS運用について</option>
                        <option value="MOGCIA Coffeeについて">MOGCIA Coffeeについて</option>
                        <option value="その他">その他</option>
                      </select>
                      <div data-formrun-show-if-error="お問い合わせ項目" className="text-gray-500 text-sm mt-1">お問い合わせ項目を選択してください</div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        お問い合わせ内容 <span className="text-gray-500">[必須]</span>
                      </label>
                      <textarea 
                        name="お問い合わせ内容" 
                        data-formrun-required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors resize-none"
                        placeholder="詳細をお聞かせください"
                      ></textarea>
                      <div data-formrun-show-if-error="お問い合わせ内容" className="text-gray-500 text-sm mt-1">お問い合わせ内容を入力してください</div>
                    </div>

                    <div className="mb-8">
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          name="個人情報利用同意" 
                          data-formrun-required
                          className="mt-1 mr-3 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">
                          <span className="text-gray-500">[必須]</span> 個人情報の取り扱いについて同意します
                        </span>
                      </label>
                      <div data-formrun-show-if-error="個人情報利用同意" className="text-gray-500 text-sm mt-1">同意してください</div>
                    </div>

                    {/* "ボット投稿をブロックするためのタグ" */}
                    <div className="_formrun_gotcha">
                      <style dangerouslySetInnerHTML={{
                        __html: '._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}'
                      }} />
                      <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                      <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
                    </div>

                    <button 
                      type="submit" 
                      data-formrun-error-text="未入力の項目があります" 
                      data-formrun-submitting-text="送信中..."
                      className="w-full bg-gray-800 text-white px-8 py-4 rounded-sm font-medium hover:bg-gray-900 transition-all duration-300"
                    >
                      送信
                    </button>
                  </form>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white p-6 sm:p-8 group relative">
                
                <div className="text-center mb-12 sm:mb-16">
                  <AnimatedSection animation="fadeInUp" delay={200}>
                    <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                      CONTACT INFO
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                      その他のお問い合わせ方法
                    </h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-sm sm:text-base text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                      お急ぎの場合は、お電話でのお問い合わせをお勧めします
                    </p>
                  </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <AnimatedSection animation="fadeInUp" delay={400}>
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">メール</h3>
                      <p className="text-gray-600 font-light">info@mogcia.jp</p>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fadeInUp" delay={600}>
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">電話</h3>
                      <p className="text-gray-600 font-light">092-517-9804</p>
                      <p className="text-sm text-gray-500 mt-2">営業時間：平日 9:00-18:00</p>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white p-6 sm:p-8 group relative">
                
                <div className="text-center">
                  <AnimatedSection animation="fadeInUp" delay={200}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-6 sm:mb-8 leading-tight tracking-wider">
                      お気軽にお問い合わせください
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto mb-8 sm:mb-12">
                      ご質問やご相談がございましたら、いつでもお気軽にお問い合わせください。<br />
                      専門スタッフが丁寧にサポートいたします。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="#contact-form"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-medium hover:bg-gray-900 transition-all duration-300"
                      >
                        お問い合わせフォームへ
                      </a>
                      <a 
                        href="tel:092-517-9804"
                        className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300"
                      >
                        お電話でお問い合わせ
                      </a>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}