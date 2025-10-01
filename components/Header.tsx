'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
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
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200 ${
          isCollapsed ? 'w-16' : 'w-64'
        } max-w-[85vw]`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <Link href="/" className="block" onClick={closeSidebar}>
              {/* Expanded State */}
              <div className={`text-center lg:text-left transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                <h1 className="text-xl font-bold text-gray-900 tracking-wider">
                  MOGCIA
                </h1>
                <p className="text-xs text-gray-600 mt-1 tracking-wide">
                  株式会社MOGCIA
                </p>
              </div>
              
              {/* Collapsed State - Only Company Name */}
              <div className={`text-center lg:text-left transition-opacity duration-300 ${isCollapsed ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                <p className="text-xs text-gray-600 tracking-wide leading-tight">
                  株式会社<br />MOGCIA
                </p>
              </div>
            </Link>
            
            {/* Collapse Button - Desktop Only */}
            <button
              onClick={toggleCollapse}
              className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label={isCollapsed ? "サイドバーを展開" : "サイドバーを折りたたむ"}
            >
              <svg 
                className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col space-y-1 px-4">
              <Link 
                href="/philosophy" 
                className={`text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4 flex items-center ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                onClick={closeSidebar}
                title={isCollapsed ? "企業理念" : ""}
              >
                {isCollapsed ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ) : (
                  "企業理念"
                )}
              </Link>
              <Link 
                href="/services" 
                className={`text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4 flex items-center ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                onClick={closeSidebar}
                title={isCollapsed ? "サービス一覧" : ""}
              >
                {isCollapsed ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ) : (
                  "サービス一覧"
                )}
              </Link>
              <Link 
                href="/social" 
                className={`text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4 flex items-center ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                onClick={closeSidebar}
                title={isCollapsed ? "社会への取り組み" : ""}
              >
                {isCollapsed ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ) : (
                  "社会への取り組み"
                )}
              </Link>
              <Link 
                href="/partners" 
                className={`text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4 flex items-center ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                onClick={closeSidebar}
                title={isCollapsed ? "パートナー制度" : ""}
              >
                {isCollapsed ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                ) : (
                  "パートナー制度"
                )}
              </Link>
              <Link 
                href="/about" 
                className={`text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4 flex items-center ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                onClick={closeSidebar}
                title={isCollapsed ? "会社概要" : ""}
              >
                {isCollapsed ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ) : (
                  "会社概要"
                )}
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4 flex items-center ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                onClick={closeSidebar}
                title={isCollapsed ? "お問い合わせ" : ""}
              >
                {isCollapsed ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ) : (
                  "お問い合わせ"
                )}
              </Link>
            </div>
          </nav>

          {/* CTA Section */}
          <div className="border-t border-gray-200 p-6">
            <Link
              href="/contact"
              className={`block w-full bg-gray-900 hover:bg-gray-800 text-white text-center px-6 py-4 text-sm font-medium transition-all duration-200 ${
                isCollapsed ? 'px-2' : ''
              }`}
              onClick={closeSidebar}
              title={isCollapsed ? "お問い合わせ" : ""}
            >
              {isCollapsed ? (
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ) : (
                "お問い合わせ"
              )}
            </Link>
            {!isCollapsed && (
              <p className="text-xs text-gray-500 text-center mt-3 leading-relaxed">
                お気軽にご相談ください
              </p>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
