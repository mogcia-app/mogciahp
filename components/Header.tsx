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
          <div className="p-8 border-b border-gray-200">
            <Link href="/" className="block" onClick={closeSidebar}>
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold text-gray-900 tracking-wider">
                  MOGCIA
                </h1>
                <p className="text-sm text-gray-600 mt-1 tracking-wide">
                  株式会社MOGCIA
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-8">
            <div className="flex flex-col space-y-1 px-6">
              <Link 
                href="/philosophy" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-colors duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4"
                onClick={closeSidebar}
              >
                企業理念
              </Link>
              <Link 
                href="/services" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-colors duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4"
                onClick={closeSidebar}
              >
                サービス一覧
              </Link>
              <Link 
                href="/social" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-colors duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4"
                onClick={closeSidebar}
              >
                社会への取り組み
              </Link>
              <Link 
                href="/partners" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-colors duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4"
                onClick={closeSidebar}
              >
                パートナー制度
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-colors duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4"
                onClick={closeSidebar}
              >
                会社概要
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 py-3 transition-colors duration-200 border-l-2 border-transparent hover:border-gray-300 pl-4"
                onClick={closeSidebar}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>

          {/* CTA Section */}
          <div className="border-t border-gray-200 p-8">
            <Link
              href="/contact"
              className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center px-6 py-4 text-sm font-medium transition-colors duration-200"
              onClick={closeSidebar}
            >
              お問い合わせ
            </Link>
            <p className="text-xs text-gray-500 text-center mt-3 leading-relaxed">
              お気軽にご相談ください
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
