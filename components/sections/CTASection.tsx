'use client'

import React from 'react'
import AnimatedSection from '../AnimatedSection'

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="w-full px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-none text-white">
            <h3 className="text-3xl font-bold mb-4">些細なこともまずはお気軽にご相談ください</h3>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              専門スタッフがお客様のビジネスをサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-none font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                無料相談を始める
              </button>
              <div className="flex items-center space-x-6 text-red-100">
                <span className="text-sm">完全無料</span>
                <span className="text-sm">オンライン対応</span>
                <span className="text-sm">翌営業日連絡</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
