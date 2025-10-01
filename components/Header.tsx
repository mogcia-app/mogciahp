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
        className={`fixed top-0 left-0 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:shadow-none w-80 lg:w-24 max-w-[85vw] h-full`}
        style={{ zIndex: 60, writingMode: 'vertical-rl', minHeight: '100vh' }}
      >
        <div className="flex flex-row lg:flex-row flex-col h-screen">
          {/* Logo Section */}
          <div className="px-2 py-6 lg:border-r border-b lg:border-b-0 border-gray-100 flex items-center justify-center">
            <Link href="/" className="block" onClick={closeSidebar}>
              <div className="text-center">
                <h1 className="text-base font-medium text-gray-900 tracking-wide">
                  株式会社MOGCIA
                </h1>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-3 py-2">
              <Link 
                href="/philosophy" 
                className="text-xs font-light text-gray-600 hover:text-gray-900 py-1.5 px-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                企業理念
              </Link>
              <Link 
                href="/services" 
                className="text-xs font-light text-gray-600 hover:text-gray-900 py-1.5 px-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                サービス一覧
              </Link>
              <Link 
                href="/partners" 
                className="text-xs font-light text-gray-600 hover:text-gray-900 py-1.5 px-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                パートナー制度
              </Link>
              <Link 
                href="/about" 
                className="text-xs font-light text-gray-600 hover:text-gray-900 py-1.5 px-2 transition-all duration-200 hover:bg-gray-50 rounded-sm"
                onClick={closeSidebar}
              >
                会社概要
              </Link>
             
            </div>
          </nav>

          {/* CTA Section */}
          <div className="border-t border-gray-100 px-2 py-4 mt-auto flex flex-col items-center">
            <Link
              href="/contact"
              className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center px-2 py-2 text-xs font-medium transition-all duration-200 rounded-sm hover:shadow-md"
              onClick={closeSidebar}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
