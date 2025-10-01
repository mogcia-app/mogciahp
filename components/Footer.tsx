import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-500">MOGCIA</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI・デジタル技術で企業の未来を創造する<br />
              お客様一人ひとりに寄り添った柔軟なサービスを提供します
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>〒810-0001</p>
              <p>福岡県福岡市中央区天神4-6-28 いちご天神ノースビル７階</p>
              <p>TEL: 092-517-9804</p>
              <p>MAIL: info@mogcia.jp</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">ナビゲーション</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/philosophy" className="text-gray-300 hover:text-red-400 transition-colors">
                  企業理念
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors">
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link href="/social" className="text-gray-300 hover:text-red-400 transition-colors">
                  社会への取り組み
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-red-400 transition-colors">
                  パートナー制度
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#signal" className="text-gray-300 hover:text-red-400 transition-colors">
                  Signal.
                </Link>
              </li>
              <li>
                <Link href="/services#web-dev" className="text-gray-300 hover:text-red-400 transition-colors">
                  WEB制作
                </Link>
              </li>
              <li>
                <Link href="/services#sns" className="text-gray-300 hover:text-red-400 transition-colors">
                  SNS運用
                </Link>
              </li>
              <li>
                <Link href="/services#coffee" className="text-gray-300 hover:text-red-400 transition-colors">
                  MOGCIA Coffee
                </Link>
              </li>
              <li>
                <Link href="/services#enterprise-ai" className="text-gray-300 hover:text-red-400 transition-colors">
                  Enterprise AI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2023-2025 MOGCIA Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
