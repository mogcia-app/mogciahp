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
      setNewsArticles(articles)
    } catch (error) {
      console.error('Error loading news articles:', error)
    }
  }
  return (
    <SectionTransition effect="fade" direction="up" className="py-32 bg-gradient-to-br from-white via-red-50 to-gray-50">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              News
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={400}>
            <h3 className="text-2xl md:text-3xl font-light text-red-700 mb-12 leading-relaxed max-w-4xl mx-auto">
              ニュース
            </h3>
          </AnimatedSection>
        </div>
        
        {/* News Items */}
        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <AnimatedSection key={article.id} animation="fadeInUp" delay={600 + (index * 200)}>
              <div className="group border-b border-red-200 pb-8 hover:bg-red-50 p-6 -m-6 rounded-none transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`text-sm font-medium px-3 py-1 rounded-none mr-4 ${
                        article.type === 'PRESS RELEASE' ? 'text-red-600 bg-red-100' :
                        article.type === 'NEWS' ? 'text-blue-600 bg-blue-100' :
                        'text-green-600 bg-green-100'
                      }`}>
                        {article.type}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {article.title}
                    </h4>
                    {article.imageUrl && (
                      <div className="mt-3">
                        <img
                          src={article.imageUrl}
                          alt={article.imageAlt || article.title}
                          className="w-full max-w-sm h-32 object-cover border border-gray-200 rounded-none"
                        />
                      </div>
                    )}
                    {article.content && (
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {article.content}
                      </p>
                    )}
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <AnimatedSection animation="fadeInUp" delay={1200}>
            <a href="#" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group">
              <span>View All</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </SectionTransition>
  )
}
