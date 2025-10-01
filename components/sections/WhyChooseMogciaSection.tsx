'use client'

import React, { useState, useEffect } from 'react'
import AnimatedSection from '../AnimatedSection'

// Counter Animation Component
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span id={`counter-${end}`}>{count}{suffix}</span>;
}

// Circular Progress Component
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

function CircularProgress({ percentage, size = 120, strokeWidth = 8, color = "#ef4444" }: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">
          <Counter end={percentage} duration={2000} suffix="%" />
        </span>
      </div>
    </div>
  );
}

export default function WhyChooseMogciaSection() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 text-red-600 text-sm font-semibold rounded-full mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              WHY CHOOSE MOGCIA
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">数字で見るMOGCIAが選ばれる理由</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              実績と信頼性で選ばれ続けるMOGCIAの強みを<br />
              数字でご紹介します。
            </p>
          </AnimatedSection>
        </div>

        {/* Stats with Circular Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* プロジェクト実績 */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="text-center group">
              <div className="mb-6">
                <CircularProgress percentage={50} size={140} color="#ef4444" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <Counter end={50} suffix="+" />
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">プロジェクト実績</div>
              <div className="text-sm text-gray-600">様々な業界・規模のお客様に選ばれています</div>
            </div>
          </AnimatedSection>

          {/* 効率化実現 */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="text-center group">
              <div className="mb-6">
                <CircularProgress percentage={80} size={140} color="#3b82f6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <Counter end={80} suffix="%" />
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">効率化実現</div>
              <div className="text-sm text-gray-600">平均的な業務効率化の実績</div>
            </div>
          </AnimatedSection>

          {/* 創業からの実績 */}
          <AnimatedSection animation="fadeInUp" delay={800}>
            <div className="text-center group">
              <div className="mb-6">
                <CircularProgress percentage={100} size={140} color="#10b981" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <Counter end={2} suffix="年" />
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">創業からの実績</div>
              <div className="text-sm text-gray-600">着実に成長を続けています</div>
            </div>
          </AnimatedSection>

          {/* 顧客満足度 */}
          <AnimatedSection animation="fadeInUp" delay={1000}>
            <div className="text-center group">
              <div className="mb-6">
                <CircularProgress percentage={98} size={140} color="#8b5cf6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <Counter end={98} suffix="%" />
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">顧客満足度</div>
              <div className="text-sm text-gray-600">お客様から高い評価をいただいています</div>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 専門性 */}
          <AnimatedSection animation="fadeInUp" delay={1200}>
            <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-none flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI・デジタル専門</h3>
              </div>
              <p className="text-gray-600">
                最新のAI技術とデジタルテクノロジーに精通した専門チームが、お客様の課題解決をサポートします。
              </p>
            </div>
          </AnimatedSection>

          {/* カスタマイズ */}
          <AnimatedSection animation="fadeInUp" delay={1400}>
            <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-none flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">完全カスタマイズ</h3>
              </div>
              <p className="text-gray-600">
                お客様のビジネスに最適化されたソリューションを提供。オーダーメイドでご提案いたします。
              </p>
            </div>
          </AnimatedSection>

          {/* 継続サポート */}
          <AnimatedSection animation="fadeInUp" delay={1600}>
            <div className="bg-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-none flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">継続パートナー</h3>
              </div>
              <p className="text-gray-600">
                導入後も長期的なパートナーとして、お客様のビジネス成長を継続的にサポートいたします。
              </p>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
