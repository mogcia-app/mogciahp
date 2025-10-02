'use client'

import React from 'react'
import AnimatedSection from '../AnimatedSection'

interface NewsArticle {
  id: string
  title: string
  date: string
  type: 'PRESS RELEASE' | 'NEWS' | 'ANNOUNCEMENT' | 'Coming soon'
  content?: string
  link?: string
  published: boolean
  imageUrl?: string
  imageAlt?: string
}

export default function NewsSection() {
  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: '新サービス開発中',
      date: '2025.09.15',
      type: 'Coming soon',
      content: '企業の業務効率化を支援するビジネス用AIツールの開発を<br />進めています。',
      published: true,
    },
    {
      id: '2',
      title: 'SNS運用支援ツールSignal.',
      date: '2025.06.01',
      type: 'NEWS',
      content: 'AI技術を活用したSNS運用支援サービス「Signal.」の<br />運用を開始しました。',
      published: true,
    },
    {
      id: '3',
      title: 'MOGCIACoffee　POPUP',
      date: '2025.04.20',
      type: 'NEWS',
      content: 'Choosebase SHIBUYAにてMOGCIA Coffeeを販売中です。ぜひ店頭にお立ち寄りください。',
      published: true,
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">
              NEWS
            </h2>
            <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article, index) => (
            <AnimatedSection key={article.id} animation="fadeInUp" delay={index * 100}>
              <div className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2 py-1 text-gray-600 bg-gray-100">
                      {article.type}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h3>
                  
                  {article.content && (
                    <p 
                      className="text-sm text-gray-600 leading-relaxed font-light"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center mt-12 sm:mt-16">
            <a 
              href="/blog" 
              className="inline-block bg-black text-white text-sm px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors duration-200"
            >
              すべてのニュースを見る
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}