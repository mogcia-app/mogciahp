'use client'

import React, { useState, useEffect } from 'react'
import { signInAdmin, onAuthStateChange, getCurrentUser } from '../../../lib/firebase'
import { useRouter } from 'next/navigation'
import AnimatedSection from '../../../components/AnimatedSection'
import SectionTransition from '../../../components/SectionTransition'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    // 既にログインしている場合は管理画面にリダイレクト
    const unsubscribe = onAuthStateChange((user) => {
      if (user) {
        router.push('/admin')
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signInAdmin(email, password)
      if (result.success) {
        router.push('/admin')
      } else {
        setError(result.error || 'ログインに失敗しました')
      }
    } catch (error) {
      setError('ログインに失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <SectionTransition effect="fade" direction="up">
          <div className="bg-white border-2 border-gray-200 rounded-none p-8 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 text-red-600 text-sm font-semibold rounded-full mb-6">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  ADMIN LOGIN
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">MOGCIA 管理画面</h1>
                <p className="text-gray-600">メールアドレスとパスワードでログインしてください</p>
              </AnimatedSection>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-none flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                    placeholder="admin@mogcia.com"
                    required
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div>
                  <label htmlFor="password" className="block text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-none flex items-center justify-center mr-3">
                      <span className="text-white text-sm">🔒</span>
                    </div>
                    パスワード
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-red-500 focus:bg-red-50 transition-all duration-300 text-lg"
                    placeholder="パスワードを入力"
                    required
                  />
                </div>
              </AnimatedSection>

              {/* Error Message */}
              {error && (
                <AnimatedSection animation="fadeInUp" delay={800}>
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-none">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {error}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Submit Button */}
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-none font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                  } text-white`}
                >
                  <span className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-none flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">🔑</span>
                    </div>
                    {isLoading ? 'ログイン中...' : 'ログイン'}
                    {!isLoading && (
                      <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </span>
                </button>
              </AnimatedSection>
            </form>

            {/* Footer */}
            <AnimatedSection animation="fadeInUp" delay={1200}>
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  © 2025 MOGCIA. All rights reserved.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </SectionTransition>
      </div>
    </div>
  )
}
