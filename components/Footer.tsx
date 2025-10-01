import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl sm:text-2xl font-thin text-gray-900 mb-4 tracking-wider">
                  MOGCIA
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed font-light">
                  AI・デジタル技術で企業の未来を創造する
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <p>〒810-0001</p>
                  <p>福岡県福岡市中央区天神4-6-28</p>
                  <p>いちご天神ノースビル７階</p>
                  <p>TEL: 092-517-9804</p>
                  <p>MAIL: info@mogcia.jp</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h4 className="text-sm font-medium mb-4 text-gray-900 tracking-wide">ナビゲーション</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/philosophy" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      企業理念
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      サービス一覧
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      パートナー制度
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      会社概要
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-medium mb-4 text-gray-900 tracking-wide">サービス</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services#signal" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      Signal.
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#web-dev" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      WEB制作
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#sns" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      SNS運用
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#coffee" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      MOGCIA Coffee
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#enterprise-ai" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-light">
                      Enterprise AI
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-gray-500 font-light">
                &copy; 2023-2025 MOGCIA Inc. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-900 font-light transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-gray-900 font-light transition-colors">
                  利用規約
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
