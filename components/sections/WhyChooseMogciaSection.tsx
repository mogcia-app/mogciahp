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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
            
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                  WHY CHOOSE MOGCIA
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight tracking-wider">
                  数字で見るMOGCIAが選ばれる理由
                </h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                <p className="text-base sm:text-lg text-gray-500 font-light tracking-wide max-w-4xl mx-auto">
                  実績と信頼性で選ばれ続けるMOGCIAの強みを数字でご紹介します
                </p>
              </AnimatedSection>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              
              {/* プロジェクト実績 */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-2 tracking-wider">
                    <Counter end={50} suffix="+" />
                  </div>
                  <div className="text-base font-medium text-gray-700 mb-2 tracking-wide">プロジェクト実績</div>
                  <div className="text-sm text-gray-500 font-light">様々な業界・規模のお客様に選ばれています</div>
                </div>
              </AnimatedSection>

              {/* 効率化実現 */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-2 tracking-wider">
                    <Counter end={80} suffix="%" />
                  </div>
                  <div className="text-base font-medium text-gray-700 mb-2 tracking-wide">効率化実現</div>
                  <div className="text-sm text-gray-500 font-light">平均的な業務効率化の実績</div>
                </div>
              </AnimatedSection>

              {/* 創業からの実績 */}
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-2 tracking-wider">
                    <Counter end={2} suffix="年" />
                  </div>
                  <div className="text-base font-medium text-gray-700 mb-2 tracking-wide">創業からの実績</div>
                  <div className="text-sm text-gray-500 font-light">着実に成長を続けています</div>
                </div>
              </AnimatedSection>

              {/* 顧客満足度 */}
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-2 tracking-wider">
                    <Counter end={98} suffix="%" />
                  </div>
                  <div className="text-base font-medium text-gray-700 mb-2 tracking-wide">顧客満足度</div>
                  <div className="text-sm text-gray-500 font-light">お客様から高い評価をいただいています</div>
                </div>
              </AnimatedSection>
            </div>

            {/* Additional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* 専門性 */}
              <AnimatedSection animation="fadeInUp" delay={1200}>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">AI・デジタル専門</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    最新のAI技術とデジタルテクノロジーに精通した専門チームが、お客様の課題解決をサポートします。
                  </p>
                </div>
              </AnimatedSection>

              {/* カスタマイズ */}
              <AnimatedSection animation="fadeInUp" delay={1400}>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">完全カスタマイズ</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    お客様のビジネスに最適化されたソリューションを提供。オーダーメイドでご提案いたします。
                  </p>
                </div>
              </AnimatedSection>

              {/* 継続サポート */}
              <AnimatedSection animation="fadeInUp" delay={1600}>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">継続パートナー</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    導入後も長期的なパートナーとして、お客様のビジネス成長を継続的にサポートいたします。
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
