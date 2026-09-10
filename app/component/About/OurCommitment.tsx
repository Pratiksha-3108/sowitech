'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ShieldCheck, Leaf, Globe, Sparkles, ArrowRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 40, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function OurCommitment() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/80 font-sans overflow-hidden text-[#0E1E38] border-b border-gray-100">

      {/* Background Ambient Radial Blur Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1B56A6]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Wave/Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M 0 200 C 360 300 720 100 1080 250 C 1260 325 1380 200 1440 180"
            stroke="url(#commitment-wave-grad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            animate={shouldReduceMotion ? {} : {
              d: [
                "M 0 200 C 360 300 720 100 1080 250 C 1260 325 1380 200 1440 180",
                "M 0 180 C 360 270 720 130 1080 220 C 1260 300 1380 220 1440 200",
                "M 0 200 C 360 300 720 100 1080 250 C 1260 325 1380 200 1440 180"
              ]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="commitment-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B56A6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1B56A6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Eyebrow & Main Title Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          {/* Eyebrow Label */}
          <motion.div variants={fadeUpVariants} className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#1B56A6] rounded-full" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#1B56A6] uppercase">
              OUR COMMITMENT
            </span>
            <span className="h-0.5 w-8 bg-[#1B56A6] rounded-full" />
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={fadeUpVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1E38] tracking-tight leading-[1.12]">
            Building a Sustainable & Responsible Water Future
          </motion.h2>
        </motion.div>

        {/* 2 Interactive Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
        >

          {/* CARD 1: Responsible Water Management */}
          <motion.div
            variants={cardLeftVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl hover:shadow-2xl hover:border-blue-300/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Subtle Gradient Hover Glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1B56A6] to-[#38BDF8] rounded-t-3xl" />

            <div>
              {/* Icon Emblem */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1B56A6] mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#1B56A6] group-hover:text-white transition-all duration-300">
                <Leaf className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E38] mb-4 tracking-tight">
                Responsible Practices
              </h3>

              {/* Main Text */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                We believe every organization can contribute to a more sustainable future by adopting responsible water management practices.
              </p>
            </div>

            {/* Bottom Accent Decor */}
            <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Sustainable Impact
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-[#1B56A6] transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Long-Term Environmental & Business Value */}
          <motion.div
            variants={cardRightVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative bg-[#0E1E38] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Subtle Gradient Hover Glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#38BDF8] to-[#1B56A6] rounded-t-3xl" />

            {/* Background Radial Tint */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#1B56A6]/30 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Icon Emblem */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#38BDF8] mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#38BDF8] group-hover:text-[#0E1E38] transition-all duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
                Long-Term Value
              </h3>

              {/* Main Text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Our goal is to deliver reliable, efficient, and cost-effective solutions that create long-term value for businesses and the environment.
              </p>
            </div>

            {/* Bottom Accent Decor */}
            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Reliable & Cost-Effective
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#38BDF8] flex items-center justify-center text-slate-300 group-hover:text-[#0E1E38] transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
