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
  return null;
  /*
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActivate = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  return (
    <section
      className="relative font-sans overflow-hidden"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      ...
    </section>
  );
  */
}
