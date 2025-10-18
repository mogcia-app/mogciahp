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
      title: 'スケジュール管理アプリのテスト導入',
      date: '2025.10.03',
      type: 'NEWS',
      content: '企業向け在庫管理・スケジュール共有ツールのテスト導入を開始しました',
      published: true,
    },
    {
      id: '2',
      title: 'Upmoの開発を開始しました',
      date: '2025.09.15',
      type: 'Coming soon',
      content: '企業の業務効率化を支援するUpmoの開発を<br />進めています。',
      published: true,
    },
    {
      id: '3',
      title: 'SNS運用支援ツールSignal.',
      date: '2025.06.01',
      type: 'NEWS',
      content: 'AI技術を活用したSNS運用支援サービス「Signal.」の<br />運用を開始しました。',
      published: true,
    },
    {
      id: '4',
      title: 'MOGCIACoffee　POPUP',
      date: '2025.04.20',
      type: 'NEWS',
      content: 'Choosebase SHIBUYAにてMOGCIA Coffeeを販売中です。ぜひ店頭にお立ち寄りください。',
      published: true,
    }
  ]

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-4 tracking-wide">
              NEWS
            </h2>
            <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="space-y-4 sm:space-y-6">
          {newsArticles.map((article, index) => (
            <AnimatedSection key={article.id} animation="fadeInUp" delay={index * 100}>
              <div className="bg-white border border-gray-200 rounded-sm p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-1 text-gray-600 bg-gray-100">
                    {article.type}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                
                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                {article.content && (
                  <p 
                    className="text-sm text-gray-600 leading-relaxed font-light"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}