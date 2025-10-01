'use client'

import React from 'react'
import AnimatedSection from '../AnimatedSection'

export default function CTASection() {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black"></div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-thin text-gray-900 mb-4 tracking-wider">
                  Contact
                </h3>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 font-light leading-relaxed">
                  些細なこともまずはお気軽にご相談ください
                </p>
                <div className="space-y-4">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-sm font-medium transition-all duration-200 rounded-sm hover:shadow-md">
                    お問い合わせ
                  </button>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-500 text-xs">
                    <span>完全無料</span>
                    <span>オンライン対応</span>
                    <span>翌営業日連絡</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
