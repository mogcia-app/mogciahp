import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Video (左端) */}
          <div className="absolute left-0 ml-4">
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <video
                className="h-12 w-auto hover:opacity-80 transition-opacity duration-200"
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
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              <Link href="/philosophy" className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200">企業理念</Link>
              <Link href="/services" className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200">サービス一覧</Link>
              <Link href="/social" className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200">社会への取り組み</Link>
              <Link href="/partners" className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200">パートナー制度</Link>
              <Link href="/about" className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200">会社概要</Link>
              <Link href="/contact" className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200">お問い合わせ</Link>
            </div>
          </nav>

          {/* CTA Buttons (右端) */}
          <div className="hidden md:flex items-center space-x-4 absolute right-4">
            <Link
              href="/contact"
              className="text-gray-800 hover:text-red-600 text-base font-medium transition-colors duration-200"
            >
              CONTACT
            </Link>
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-none text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              無料相談
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-red-600 focus:outline-none focus:text-red-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
