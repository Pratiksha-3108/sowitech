'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

const expertiseItems = [
  {
    number: '01',
    title: 'Water Treatment Plants',
    subtitle: 'Engineered systems designed to convert raw water into reliable, high-quality process water.',
    image: '/Images/home/untraflitration-plant.png',
  },
  {
    number: '02',
    title: 'Tertiary Treatment Plants',
    subtitle: 'Advanced tertiary treatment systems engineered for maximum contaminant removal and high-purity output.',
    image: '/Images/home/yaha_filtration_plant.jpg',
  },
  {
    number: '03',
    title: 'Water Recycling Systems',
    subtitle: 'Closed-loop recycling solutions to treat and reuse industrial wastewater efficiently.',
    image: '/Images/home/freshwater.jpg',
  },
  {
    number: '04',
    title: 'STP to TTP Upgradation',
    subtitle: 'Upgrading existing Sewage Treatment Plants into high-performance Tertiary Treatment Plants.',
    image: '/Images/home/circular.png',
  },
  {
    number: '05',
    title: 'Industrial Water Reuse',
    subtitle: 'Comprehensive water recovery architectures to minimize freshwater reliance across operations.',
    image: '/Images/home/independence.jpg',
  },
  {
    number: '06',
    title: 'Water Audit & Consultation',
    subtitle: 'On-site evaluations and technical audits to identify water efficiency opportunities and zero-waste pathways.',
    image: '/Images/home/esg.png',
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(
      expertiseItems.length - 1,
      Math.floor(latest * expertiseItems.length)
    );
    setActiveIndex(index);
  });

  const activeItem = expertiseItems[activeIndex];

  // Group 1: Items 01, 02, 03 | Group 2: Items 04, 05, 06
  const isGroup2 = activeIndex >= 3;
  const currentGroupItems = isGroup2
    ? expertiseItems.slice(3, 6)
    : expertiseItems.slice(0, 3);

  return (
    <div ref={containerRef} className="relative h-[320vh] font-geist bg-[#F2F8FF]">
      {/* Sticky Fullscreen Section */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden py-10 px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Background grid line accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#0D427D]/10" />
          <div className="absolute top-0 left-2/3 w-[1px] h-full bg-[#0D427D]/10" />
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

          {/* LEFT COLUMN: Eyebrow + Active Title + Subtitle + Progress */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D427D]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D427D]">
                WHAT WE DO
              </span>
            </div>

            {/* Dynamic Content Block */}
            <div className="min-h-[170px] sm:min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.number}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <h2 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-extrabold text-[#0A1A3B] leading-snug">
                    {activeItem.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                    {activeItem.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* CENTER COLUMN: Perfectly proportioned circular image clipped + Concentric Engineering Rings */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-4 shrink-0">
            <div className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] lg:w-[290px] lg:h-[290px] xl:w-[310px] xl:h-[310px] aspect-square rounded-full shrink-0 flex items-center justify-center">
              
              {/* Ring 1: Thin Orbital Ring */}
              <div className="absolute inset-[-10px] border border-[#0D427D]/20 rounded-full pointer-events-none" />

              {/* Ring 2: Subtle Dashed Technical Ring */}
              <motion.div
                className="absolute inset-[-20px] border border-dashed border-[#38BDF8]/40 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />

              {/* Ring 3: Concentric Geometric Dots */}
              <div className="absolute inset-[-30px] border border-slate-200/60 rounded-full pointer-events-none" />

              {/* Orbiting technical indicator dots */}
              <motion.div
                className="absolute inset-[-20px] pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0D427D] shadow-sm" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#38BDF8]" />
              </motion.div>

              {/* Clipped Circular Image Container */}
              <div className="relative w-full h-full aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white bg-slate-900 z-10 shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.number}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full aspect-square rounded-full overflow-hidden"
                  >
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      priority
                      className="object-cover object-center rounded-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: 3 Items initially -> 3 Items on vertical scroll (Staggered alignment) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 pl-0 lg:pl-4 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={isGroup2 ? 'group-2' : 'group-1'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {currentGroupItems.map((item, idx) => {
                  const globalIndex = expertiseItems.findIndex(e => e.number === item.number);
                  const isActive = globalIndex === activeIndex;
                  const isMiddle = idx === 1;

                  return (
                    <button
                      key={item.number}
                      onClick={() => setActiveIndex(globalIndex)}
                      className={`w-full text-left flex items-start gap-4 py-2 px-2 transition-all duration-300 bg-transparent ${
                        isMiddle ? 'ml-6 sm:ml-8' : 'ml-0'
                      }`}
                    >
                      {/* Number badge / circle */}
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                          isActive
                            ? 'bg-[#0D427D] text-white shadow-md scale-110'
                            : 'bg-slate-200/80 text-slate-500 hover:bg-slate-300/80'
                        }`}
                      >
                        {item.number}
                      </div>

                      {/* Title + Subtitle */}
                      <div className="flex-1 overflow-hidden">
                        <h4
                          className={`font-extrabold tracking-tight transition-all duration-300 ${
                            isActive
                              ? 'text-[#0A1A3B] text-base sm:text-lg'
                              : 'text-slate-400 text-sm sm:text-base hover:text-slate-700'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-xs mt-1 leading-relaxed line-clamp-2 transition-colors duration-300 ${
                            isActive ? 'text-slate-600 font-normal' : 'text-slate-400/80 font-normal'
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
