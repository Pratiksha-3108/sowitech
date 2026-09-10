'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="w-full font-geist">
      {/* MAIN HERO BANNER */}
      <section className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden flex items-center">

        {/* Background Image - Same as Home Hero section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home_hero.png"
            alt="Sowitech Water Treatment Plant Facility"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Light/Subtle gradient overlay without heavy blackish effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 h-full flex flex-col justify-center py-8">

          {/* Left Aligned Headline & Action Link */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-widest mb-5 shadow-md"
              style={{ color: '#0D427D' }}
            >
              <span>ABOUT SOWITECH ENGINEERING</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 drop-shadow-md font-geist"
            >
              Engineering Water For A <br />
              <span className="text-white">Sustainable Future</span>
            </motion.h1>

            {/* Horizontal Primary Color Underline Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 sm:w-24 h-1.5 mb-6 rounded-full origin-left"
              style={{ backgroundColor: '#0D427D' }}
            />

            {/* Sub-label Link / Discover Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#overview"
                className="inline-flex items-center gap-3 bg-white text-[#0D427D] hover:bg-slate-100 px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl group border border-white/40 cursor-pointer"
              >
                <span>Discover Sowitech</span>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-y-0.5"
                  style={{ backgroundColor: '#0D427D' }}
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}

