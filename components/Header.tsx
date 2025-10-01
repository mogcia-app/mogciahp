'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo Video (左端) */}
            <div className="flex-shrink-0 z-50">
              <Link href="/" className="cursor-pointer" onClick={closeMobileMenu}>
                <video
                  className="h-10 sm:h-12 w-auto hover:opacity-80 transition-opacity duration-200"
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

            {/* Desktop Navigation (中央) */}
            <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <Link href="/philosophy" className="text-sm xl:text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 whitespace-nowrap">企業理念</Link>
                <Link href="/services" className="text-sm xl:text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 whitespace-nowrap">サービス一覧</Link>
                <Link href="/social" className="text-sm xl:text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 whitespace-nowrap">社会への取り組み</Link>
                <Link href="/partners" className="text-sm xl:text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 whitespace-nowrap">パートナー制度</Link>
                <Link href="/about" className="text-sm xl:text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 whitespace-nowrap">会社概要</Link>
                <Link href="/contact" className="text-sm xl:text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 whitespace-nowrap">お問い合わせ</Link>
              </div>
            </nav>

            {/* CTA Buttons (右端) - Desktop */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <Link
                href="/contact"
                className="text-gray-800 hover:text-red-600 text-sm xl:text-base font-medium transition-colors duration-200"
              >
                CONTACT
              </Link>
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-4 xl:px-6 py-2 rounded-none text-xs xl:text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                無料相談
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden z-50">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-red-600 focus:outline-none focus:text-red-600 p-2"
                aria-label="メニュー"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">メニュー</h2>
            <button 
              onClick={closeMobileMenu}
              className="text-gray-800 hover:text-red-600 p-2"
              aria-label="閉じる"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col space-y-1 px-4">
              <Link 
                href="/philosophy" 
                className="text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                企業理念
              </Link>
              <Link 
                href="/services" 
                className="text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                サービス一覧
              </Link>
              <Link 
                href="/social" 
                className="text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                社会への取り組み
              </Link>
              <Link 
                href="/partners" 
                className="text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                パートナー制度
              </Link>
              <Link 
                href="/about" 
                className="text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                会社概要
              </Link>
              <Link 
                href="/contact" 
                className="text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>

          {/* Mobile Menu CTA */}
          <div className="border-t border-gray-200 p-6">
            <Link
              href="/contact"
              className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-lg"
              onClick={closeMobileMenu}
            >
              無料相談
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
