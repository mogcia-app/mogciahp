'use client'

import React, { useState, useEffect } from 'react'
import AnimatedSection from '../AnimatedSection'
import SectionTransition from '../SectionTransition'
import { NewsArticle, getPublishedNewsArticles } from '../../lib/firebase'

export default function NewsSection() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])

  useEffect(() => {
    loadNewsArticles()
  }, [])

  const loadNewsArticles = async () => {
    try {
      const articles = await getPublishedNewsArticles()
      // サンプルデータを追加（実際のデータがない場合）
      if (articles.length === 0) {
        const sampleArticles: NewsArticle[] = [
          {
            id: '1',
            title: '新サービス開発中',
            date: '2025.09.15',
            type: 'Coming soon',
            content: '企業の業務効率化を支援するビジネス用AIツールの企画を進めています。',
            published: true,
          },
          {
            id: '2',
            title: 'SNS運用支援ツールSignal.',
            date: '2025.06.01',
            type: 'NEWS',
            content: 'AI技術を活用したSNS運用支援サービス「Signal.」を運用開始しました。',
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
        setNewsArticles(sampleArticles)
      } else {
        setNewsArticles(articles)
      }
    } catch (error) {
      console.error('Error loading news articles:', error)
      // エラーの場合もサンプルデータを表示
      const sampleArticles: NewsArticle[] = [
        {
          id: '1',
          title: 'MOGCIA、AI業務改善ソリューションの新サービス開始',
          date: '2025.08.15',
          type: 'Coming soon',
          content: '株式会社MOGCIAは、企業の業務効率化を支援するAI業務改善ソリューションの新サービスを開始いたします。機械学習とデータ分析を活用し、お客様のビジネスプロセスを最適化します。',
          published: true,
        },
        {
          id: '2',
          title: 'Signal.を活用したSNS運用支援サービスを拡充',
          date: '2024.01.10',
          type: 'NEWS',
          content: 'AI技術を活用したSNS運用支援サービス「Signal.」の機能を大幅に拡充いたしました。より効果的なマーケティング戦略の立案と実行をサポートします。',
          published: true,
        },
        {
          id: '3',
          title: 'スタートアップ成長支援プログラムの第2期募集開始',
          date: '2024.01.05',
          type: 'ANNOUNCEMENT',
          content: 'MOGCIAが提供するスタートアップ成長支援プログラムの第2期募集を開始いたします。事業戦略立案から資金調達まで、トータルでサポートいたします。',
          published: true,
        }
      ]
      setNewsArticles(sampleArticles)
    }
  }
  return (
    <SectionTransition effect="fade" direction="up" className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-2 leading-tight tracking-wider">
                News
              </h2>
              <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
              <div className="text-base sm:text-lg text-gray-500 font-light tracking-wide">
                ニュース
              </div>
            </div>
          </AnimatedSection>
          
          {/* News Items */}
          <div className="space-y-4 sm:space-y-6">
            {newsArticles.map((article, index) => (
              <AnimatedSection key={article.id} animation="fadeInUp" delay={400 + (index * 200)}>
                <div className="bg-white border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className={`text-xs font-medium px-2 py-1 mr-3 ${
                          article.type === 'PRESS RELEASE' ? 'text-gray-600 bg-gray-100' :
                          article.type === 'NEWS' ? 'text-gray-600 bg-gray-100' :
                          article.type === 'Coming soon' ? 'text-blue-600 bg-blue-100' :
                          'text-gray-600 bg-gray-100'
                        }`}>
                          {article.type}
                        </span>
                        <span className="text-xs text-gray-500 font-light">{article.date}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 tracking-wide">
                        {article.title}
                      </h4>
                      {article.imageUrl && (
                        <div className="mt-4">
                          <img
                            src={article.imageUrl}
                            alt={article.imageAlt || article.title}
                            className="w-full max-w-md h-48 object-cover"
                          />
                        </div>
                      )}
                      {article.content && (
                        <p className="text-gray-600 text-xs mt-2 font-light leading-relaxed">
                          {article.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
        
        </div>
      </div>
    </SectionTransition>
  )
}
