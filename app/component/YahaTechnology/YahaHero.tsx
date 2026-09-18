'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1] as const;

export default function YahaHero() {
  return (
    <section className="font-geist relative w-full min-h-[85vh] sm:min-h-screen flex items-stretch overflow-hidden bg-[#07132B]">
      {/* Full-bleed Background Image with Dark & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.12, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: customEase }}
          className="absolute inset-0"
        >
          <Image
            src="/Images/home/yaha_filtration_plant.jpg"
            alt="YAHA Water Treatment Technology"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#07132B]/15 pointer-events-none" />

        {/* Lighter left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/50 via-[#071320]/25 to-transparent" />

        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071320]/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center pt-28 pb-20 min-h-[85vh] sm:min-h-screen">
        <div className="max-w-3xl space-y-6">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: customEase }}
            className="font-geist text-3xl sm:text-4xl md:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.15] tracking-tight"
          >
            Advanced Filtration. <br className="hidden sm:inline" />
            <span className="text-sky-300 inline-block">Smarter Water Reuse.</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: customEase }}
            className="font-geist text-slate-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
          >
            Hybrid Zen Media Filtration technology integrated by Sowitech Engineering for efficient water treatment and water reuse applications.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: customEase }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-[#177BC9] hover:bg-[#125ea0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#technology"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md flex items-center gap-2 group"
            >
              <span>Explore Technology</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
