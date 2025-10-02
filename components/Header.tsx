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

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Header Navigation - PC Only */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="block" onClick={closeSidebar}>
              <h1 className="text-2xl font-medium text-gray-900 tracking-wide">
                株式会社MOGCIA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <Link 
                href="/philosophy" 
                className="text-sm font-light text-black hover:text-gray-700 transition-all duration-200 hover:bg-gray-50 px-3 py-2 rounded-sm"
                onClick={closeSidebar}
              >
                企業理念
              </Link>
              <Link 
                href="/services" 
                className="text-sm font-light text-black hover:text-gray-700 transition-all duration-200 hover:bg-gray-50 px-3 py-2 rounded-sm"
                onClick={closeSidebar}
              >
                サービス一覧
              </Link>
              <Link 
                href="/partners" 
                className="text-sm font-light text-black hover:text-gray-700 transition-all duration-200 hover:bg-gray-50 px-3 py-2 rounded-sm"
                onClick={closeSidebar}
              >
                パートナー制度
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-light text-black hover:text-gray-700 transition-all duration-200 hover:bg-gray-50 px-3 py-2 rounded-sm"
                onClick={closeSidebar}
              >
                会社概要
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 transition-all duration-200 rounded-sm hover:shadow-md"
                onClick={closeSidebar}
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Hamburger Button - Mobile Only */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm text-gray-800 hover:text-red-600 focus:outline-none focus:text-red-600 p-3 rounded-lg shadow-lg border border-gray-200"
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

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-0 left-0 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-80 max-w-[85vw] h-full`}>
        <div className="flex flex-col h-full">
          <div className="px-4 py-4 border-b border-gray-100">
            <h1 className="text-lg font-medium text-gray-900 tracking-wide">
              株式会社MOGCIA
            </h1>
          </div>
          <nav className="flex-1 px-4 py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/philosophy" 
                className="text-sm font-light font-serif text-gray-600 hover:text-gray-900 py-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                企業理念
              </Link>
              <Link 
                href="/services" 
                className="text-sm font-light font-serif text-gray-600 hover:text-gray-900 py-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                サービス一覧
              </Link>
              <Link 
                href="/partners" 
                className="text-sm font-light font-serif text-gray-600 hover:text-gray-900 py-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                パートナー制度
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-light font-serif text-gray-600 hover:text-gray-900 py-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                会社概要
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 py-2 px-4 transition-all duration-200 rounded-sm hover:shadow-md text-center mt-4"
                onClick={closeSidebar}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Header
