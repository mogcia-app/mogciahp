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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/istockphoto-2225605521-1024x1024.jpg)'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-300 text-red-800 text-sm font-medium rounded-full mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                CONTACT
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                  お問い合わせ
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20 font-light">
                下記フォームよりお問い合わせください。<br />
                担当者より追ってご連絡いたします。
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    const formSection = document.getElementById('contact-form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-none font-semibold hover:bg-red-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-2xl"
                >
                  <span className="flex items-center">
                    フォームへ進む
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

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 relative bg-white">
          <div className="w-full px-6 sm:px-8 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-20">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                  CONTACT FORM
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  お問い合わせフォーム
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  ご質問やご相談がございましたら、<br />
                  下記フォームよりお気軽にお問い合わせください
                </p>
              </AnimatedSection>
            </div>

            {/* FormRun Form */}
            <div className="max-w-2xl mx-auto">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="bg-white rounded-none shadow-2xl p-8 border border-gray-200">
                  {/* class, action, methodを変更しないでください */}
                  <form className="formrun" action="https://form.run/api/v1/r/7tbbkege85us5qykn1vsn7i3" method="post">
                    {/* ↓自由に要素を追加・編集することができます */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">企業名</label>
                      <input 
                        name="企業名" 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                      <input 
                        name="お名前" 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電話番号
                      </label>
                      <input 
                        name="電話番号" 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        メールアドレス <span className="text-red-500">[必須]</span>
                      </label>
                      <input 
                        name="メールアドレス" 
                        type="text" 
                        data-formrun-type="email" 
                        data-formrun-required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      />
                      <div data-formrun-show-if-error="メールアドレス" className="text-red-500 text-sm mt-1">メールアドレスを正しく入力してください</div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        お問い合わせ項目 <span className="text-red-500">[必須]</span>
                      </label>
                      <select 
                        name="お問い合わせ項目" 
                        data-formrun-required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
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
                      <div data-formrun-show-if-error="お問い合わせ項目" className="text-red-500 text-sm mt-1">お問い合わせ項目を選択してください</div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        お問い合わせ内容 <span className="text-red-500">[必須]</span>
                      </label>
                      <textarea 
                        name="お問い合わせ内容" 
                        data-formrun-required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                        placeholder="詳細をお聞かせください"
                      ></textarea>
                      <div data-formrun-show-if-error="お問い合わせ内容" className="text-red-500 text-sm mt-1">お問い合わせ内容を入力してください</div>
                    </div>

                    <div className="mb-8">
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          name="個人情報利用同意" 
                          data-formrun-required
                          className="mt-1 mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">
                          <span className="text-red-500">[必須]</span> 個人情報の取り扱いについて同意します
                        </span>
                      </label>
                      <div data-formrun-show-if-error="個人情報利用同意" className="text-red-500 text-sm mt-1">同意してください</div>
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
                      className="w-full bg-red-600 text-white px-8 py-4 rounded-none font-semibold hover:bg-red-700 transition-all duration-500 transform hover:scale-105 shadow-lg"
                    >
                      送信
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="mt-16 text-center">
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-gray-50 rounded-none p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">その他のお問い合わせ方法</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">メール</h4>
                      <p className="text-gray-600">info@mogcia.jp</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">電話</h4>
                      <p className="text-gray-600">092-517-9804</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-6">
                    お急ぎの場合は、お電話でのお問い合わせをお勧めします。<br />
                    営業時間：平日 9:00-18:00
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}