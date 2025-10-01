'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button - Fixed top right */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white/90 backdrop-blur-sm text-gray-800 hover:text-red-600 focus:outline-none focus:text-red-600 p-3 rounded-lg shadow-lg border border-gray-200"
        aria-label="メニュー"
      >
        {isSidebarOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Navigation */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="block" onClick={closeSidebar}>
              <video
                className="h-12 w-auto hover:opacity-80 transition-opacity duration-200 mx-auto lg:mx-0"
                style={{ 
                  mixBlendMode: 'multiply',
                  filter: 'brightness(1.1) contrast(1.2)'
                }}
                autoPlay
                muted
                playsInline
              >
                <source src="/images/MoG.MP4" type="video/mp4" />
              </video>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col space-y-2 px-4">
              <Link 
                href="/philosophy" 
                className="flex items-center px-4 py-3 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                onClick={closeSidebar}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                企業理念
              </Link>
              <Link 
                href="/services" 
                className="flex items-center px-4 py-3 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                onClick={closeSidebar}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                サービス一覧
              </Link>
              <Link 
                href="/social" 
                className="flex items-center px-4 py-3 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                onClick={closeSidebar}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                社会への取り組み
              </Link>
              <Link 
                href="/partners" 
                className="flex items-center px-4 py-3 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                onClick={closeSidebar}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                パートナー制度
              </Link>
              <Link 
                href="/about" 
                className="flex items-center px-4 py-3 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                onClick={closeSidebar}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                会社概要
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center px-4 py-3 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                onClick={closeSidebar}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ
              </Link>
            </div>
          </nav>

          {/* CTA Section */}
          <div className="border-t border-gray-200 p-6">
            <Link
              href="/contact"
              className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              onClick={closeSidebar}
            >
              無料相談
            </Link>
            <p className="text-xs text-gray-500 text-center mt-2">
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Spacer for Desktop */}
      <div className="hidden lg:block w-80 flex-shrink-0"></div>
    </>
  )
}

export default Header
