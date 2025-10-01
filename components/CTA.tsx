import React from 'react'

interface CTAProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

export default function CTA({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = ""
}: CTAProps) {
  return (
    <section className={`py-20 bg-gradient-to-r from-red-600 to-red-700 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={primaryButtonHref}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-none text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {primaryButtonText}
          </a>
          {secondaryButtonText && secondaryButtonHref && (
            <a
              href={secondaryButtonHref}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-none text-lg font-semibold transition-all duration-300"
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
        <div className="flex items-center justify-center space-x-6 text-red-100 mt-6">
          <span className="text-sm">完全無料</span>
          <span className="text-sm">オンライン対応</span>
          <span className="text-sm">翌営業日連絡</span>
        </div>
      </div>
    </section>
  )
}
