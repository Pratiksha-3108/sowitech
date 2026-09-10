'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BenefitItem {
  id: string;
  badgePrefix?: string;
  badgeStartNumber?: number;
  badgeEndNumber?: number;
  badgeSuffix?: string;
  staticBadge?: string;
  title: string;
  barHeightPercent: number;
}

const benefitsData: BenefitItem[] = [
  {
    id: 'benefit-1',
    badgePrefix: '30–',
    badgeStartNumber: 0,
    badgeEndNumber: 70,
    badgeSuffix: '% Savings',
    title: 'Freshwater Savings',
    barHeightPercent: 28
  },
  {
    id: 'benefit-2',
    staticBadge: 'Lower OpEx',
    title: 'Cost Optimization',
    barHeightPercent: 38
  },
  {
    id: 'benefit-3',
    staticBadge: 'ESG Target',
    title: 'ESG & Sustainability',
    barHeightPercent: 48
  },
  {
    id: 'benefit-4',
    badgePrefix: '',
    badgeStartNumber: 0,
    badgeEndNumber: 100,
    badgeSuffix: '% Secure',
    title: 'Resource Independence',
    barHeightPercent: 58
  },
  {
    id: 'benefit-5',
    staticBadge: 'Closed-Loop',
    title: 'Circular Economy',
    barHeightPercent: 68
  },
  {
    id: 'benefit-6',
    staticBadge: 'Zero Downtime',
    title: 'Operational Resilience',
    barHeightPercent: 78
  }
];

// Live Counter Badge Component
const CounterBadge = ({
  startVal,
  endVal,
  prefix = '',
  suffix = '',
  delay = 0
}: {
  startVal: number;
  endVal: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}) => {
  const [count, setCount] = useState(startVal);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(badgeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let current = startVal;
      const totalSteps = 25;
      const stepTime = 30;
      const increment = (endVal - startVal) / totalSteps;

      const interval = setInterval(() => {
        current += increment;
        if (current >= endVal) {
          setCount(endVal);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, startVal, endVal, delay]);

  return (
    <span
      ref={badgeRef}
      className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60 text-[10px] whitespace-nowrap inline-block"
    >
      {prefix}{count}{suffix}
    </span>
  );
};

const BenefitsWaterRecycling = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section id="water-recycling" className="w-full py-16 md:py-24 bg-white font-sans relative overflow-hidden scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        {/* Title & Subtitle */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
          >
            Benefits of Water Recycling
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Transform your operational efficiency and sustainability profile with our advanced water recycling systems.
          </motion.p>
        </div>

        {/* Desktop View: Minimal Cards & Animated Dashed Flow Connectors */}
        <div className="hidden lg:block relative min-h-[460px] w-full mt-4">

          {/* Bottom Columns */}
          <div className="absolute bottom-0 left-0 right-0 h-[390px] flex items-end justify-between gap-3 xl:gap-4 px-1 pointer-events-none">
            {benefitsData.map((benefit, idx) => {
              const isHovered = activeHover === benefit.id;
              // Stagger starts from Operational Resilience (idx = 5, top right) FIRST
              const reverseDelay = (benefitsData.length - 1 - idx) * 0.12;

              return (
                <div key={benefit.id} className="relative flex-1 h-full flex flex-col justify-end items-center">

                  {/* Fluid Fill Column (Rises Up 1st from Operational Resilience) */}
                  <motion.div
                    initial={{ height: '0%' }}
                    whileInView={{ height: `${benefit.barHeightPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: reverseDelay, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full rounded-t-2xl transition-colors duration-250 ${isHovered ? 'bg-sky-200/80' : 'bg-sky-100/60'
                      }`}
                  />

                  {/* Animated Dashed SVG Flow Connector */}
                  <div
                    style={{
                      height: `${100 - benefit.barHeightPercent - 20}%`,
                      bottom: `${benefit.barHeightPercent}%`,
                    }}
                    className="absolute w-full z-20 flex justify-center items-center pointer-events-none"
                  >
                    <svg className="w-full h-full overflow-visible">
                      <line
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        stroke="#38bdf8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-70"
                      />
                      <motion.circle
                        r="3.5"
                        fill="#0284c7"
                        cx="50%"
                        animate={{
                          cy: ['0%', '100%'],
                          opacity: [0.2, 1, 0.2]
                        }}
                        transition={{
                          duration: 2.0,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: reverseDelay
                        }}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimal White Floating Cards Layer (Operational Resilience animates 1st going UP) */}
          <div className="relative z-30 grid grid-cols-6 gap-3 xl:gap-4 h-full items-start">
            {benefitsData.map((benefit, idx) => {
              const isHovered = activeHover === benefit.id;
              // Stagger starts from Operational Resilience (idx = 5, top right) FIRST
              const reverseDelay = (benefitsData.length - 1 - idx) * 0.12;

              const verticalOffsets = [
                'translate-y-[150px]',
                'translate-y-[120px]',
                'translate-y-[90px]',
                'translate-y-[60px]',
                'translate-y-[30px]',
                'translate-y-[0px]'
              ];

              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: reverseDelay, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveHover(benefit.id)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`transform transition-transform duration-250 cursor-pointer ${verticalOffsets[idx]} ${isHovered ? '-translate-y-1.5' : ''
                    }`}
                >
                  <div
                    className={`relative p-3 rounded-xl transition-all duration-250 bg-white border border-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.04)] ${isHovered ? 'border-sky-300/80 shadow-[0_16px_36px_rgba(14,165,233,0.1)]' : ''
                      }`}
                  >
                    {/* Benefit Title (On Top) */}
                    <h3 className="text-xs font-bold text-slate-900 leading-tight mb-2">
                      {benefit.title}
                    </h3>

                    {/* Badge (Below Title) */}
                    <div>
                      {benefit.staticBadge ? (
                        <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60 text-[10px] whitespace-nowrap inline-block">
                          {benefit.staticBadge}
                        </span>
                      ) : (
                        <CounterBadge
                          startVal={benefit.badgeStartNumber ?? 0}
                          endVal={benefit.badgeEndNumber ?? 100}
                          prefix={benefit.badgePrefix}
                          suffix={benefit.badgeSuffix}
                          delay={reverseDelay}
                        />
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Mobile View (Starts from Operational Resilience 1st) */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
          {benefitsData.map((benefit, idx) => {
            const reverseDelay = (benefitsData.length - 1 - idx) * 0.1;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reverseDelay }}
                className="bg-white rounded-xl p-3 border border-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.04)] relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" />

                <h3 className="text-xs font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>

                <div>
                  {benefit.staticBadge ? (
                    <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60 text-[10px] inline-block">
                      {benefit.staticBadge}
                    </span>
                  ) : (
                    <CounterBadge
                      startVal={benefit.badgeStartNumber ?? 0}
                      endVal={benefit.badgeEndNumber ?? 100}
                      prefix={benefit.badgePrefix}
                      suffix={benefit.badgeSuffix}
                      delay={reverseDelay}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BenefitsWaterRecycling;