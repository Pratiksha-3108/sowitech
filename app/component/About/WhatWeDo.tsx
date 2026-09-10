'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Droplets,
  Filter,
  RefreshCw,
  TrendingUp,
  Factory,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';

/* ── Data ─────────────────────────────────────────────── */
const expertiseItems = [
  {
    number: '01',
    title: 'Water Treatment Plants',
    description:
      'Turnkey engineering and execution of raw water treatment systems ensuring high-purity process water for industrial applications.',
    icon: Droplets,
    image: '/Images/home/untraflitration-plant.png',
  },
  {
    number: '02',
    title: 'Tertiary Treatment Plants',
    description:
      'Advanced ultrafiltration, reverse osmosis, and polishing systems designed to meet stringent discharge & reuse standards.',
    icon: Filter,
    image: '/Images/home/yaha_filtration_plant.jpg',
  },
  {
    number: '03',
    title: 'Water Recycling Systems',
    description:
      'Integrated closed-loop water recovery solutions that enable industrial facilities to maximize every drop of water.',
    icon: RefreshCw,
    image: '/Images/home/freshwater.jpg',
  },
  {
    number: '04',
    title: 'STP to TTP Upgradation',
    description:
      'Retrofitting existing Sewage Treatment Plants into high-efficiency Tertiary Treatment systems for high-quality utility reuse.',
    icon: TrendingUp,
    image: '/Images/home/circular.png',
  },
  {
    number: '05',
    title: 'Industrial Water Reuse',
    description:
      'Customized water reclamation setups tailored for cooling tower make-up, boiler feed, and process shop support.',
    icon: Factory,
    image: '/Images/home/independence.jpg',
  },
  {
    number: '06',
    title: 'Water Audit & Consultation',
    description:
      'Detailed diagnostic water balance audits, quality assessments, and expert engineering consultancy for optimized consumption.',
    icon: ClipboardCheck,
    image: '/Images/home/esg.png',
  },
  {
    number: '07',
    title: 'BOT Water Infrastructure',
    description:
      'Build-Own-Operate-Transfer (BOOT/BOT) models for complete industrial water infrastructure with long-term O&M assurance.',
    icon: ShieldCheck,
    image: '/Images/home/hero.png',
  },
];

/* ── Section panel — one per item ─────────────────────── */
function ItemPanel({
  item,
  index,
  onActivate,
}: {
  item: (typeof expertiseItems)[0];
  index: number;
  onActivate: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActivate(index);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onActivate]);

  return (
    <div
      ref={ref}
      className="h-screen flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-25% 0px -25% 0px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg"
      >
        {/* Big number */}
        <div
          className="text-[7rem] sm:text-[9rem] font-extrabold leading-none mb-6 select-none"
          style={{
            color: 'rgba(13,66,125,0.12)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {item.number}
        </div>

        {/* Icon + label row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'rgba(13,66,125,0.1)' }}
          >
            <Icon className="w-5 h-5" style={{ color: '#0D427D' }} />
          </div>
          <span
            className="text-[11px] font-extrabold tracking-[0.22em] uppercase"
            style={{ color: '#0D427D' }}
          >
            Stage {item.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5"
          style={{ color: '#0A1E3D' }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="text-base sm:text-lg leading-relaxed max-w-md"
          style={{ color: '#3D5A7A' }}
        >
          {item.description}
        </p>

        {/* Accent bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
          className="h-[3px] rounded-full mt-8"
          style={{ backgroundColor: '#0D427D' }}
        />
      </motion.div>
    </div>
  );
}

/* ── Main export ──────────────────────────────────────── */
export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActivate = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  return (
    <section
      className="relative font-sans overflow-hidden"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: 'rgba(13,66,125,0.05)' }}
      />

      {/* ── Section header (outside sticky zone) ─────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="h-[2px] block rounded-full"
              style={{ backgroundColor: '#0D427D' }}
            />
            <span
              className="text-[11px] font-extrabold tracking-[0.25em] uppercase"
              style={{ color: '#0D427D' }}
            >
              What We Do
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]"
            style={{ color: '#0A1E3D' }}
          >
            Our Core{' '}
            <span style={{ color: '#0D427D' }}>Expertise</span>
          </h2>
        </motion.div>
      </div>

      {/* ── Two-column sticky zone ────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* LEFT: Scrolling panels */}
          <div className="flex-1">
            {expertiseItems.map((item, i) => (
              <ItemPanel
                key={item.number}
                item={item}
                index={i}
                onActivate={handleActivate}
              />
            ))}
          </div>

          {/* RIGHT: Sticky image */}
          <div className="hidden lg:flex lg:w-[440px] xl:w-[480px] shrink-0 items-start">
            <div className="sticky top-[calc(50vh-240px)] w-full">

              {/* Image frame */}
              <div
                className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
                style={{
                  boxShadow: '0 32px 80px rgba(13,66,125,0.22)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                  >
                    <Image
                      src={expertiseItems[activeIndex].image}
                      alt={expertiseItems[activeIndex].title}
                      fill
                      className="object-cover object-center"
                      sizes="480px"
                      priority
                    />
                    {/* Bottom gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(10,30,61,0.75) 0%, rgba(10,30,61,0.2) 40%, transparent 65%)',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <span
                        className="text-[10px] font-extrabold tracking-[0.22em] uppercase block mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.55)' }}
                      >
                        Stage {expertiseItems[activeIndex].number}
                      </span>
                      <p className="text-white text-xl font-bold leading-snug">
                        {expertiseItems[activeIndex].title}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Step dots on right edge */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
                  {expertiseItems.map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all duration-400"
                      style={{
                        width: 5,
                        height: i === activeIndex ? 22 : 5,
                        backgroundColor:
                          i === activeIndex
                            ? '#FFFFFF'
                            : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.35s ease',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress strip below image */}
              <div className="flex items-center gap-3 mt-5 px-1">
                <span
                  className="text-xs font-bold tabular-nums w-8"
                  style={{ color: '#0D427D' }}
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <div
                  className="flex-1 h-[3px] rounded-full overflow-hidden"
                  style={{ backgroundColor: 'rgba(13,66,125,0.12)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: '#0D427D' }}
                    animate={{
                      width: `${((activeIndex + 1) / expertiseItems.length) * 100}%`,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
                <span
                  className="text-xs font-bold tabular-nums w-8 text-right"
                  style={{ color: 'rgba(13,66,125,0.35)' }}
                >
                  {String(expertiseItems.length).padStart(2, '0')}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="pb-20 md:pb-28" />
    </section>
  );
}
