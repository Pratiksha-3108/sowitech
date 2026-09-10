'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Droplets } from 'lucide-react';

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightVisualVariants: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TechnologyPartner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="yaha-technology" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50/90 via-white to-blue-50/30 font-sans overflow-hidden text-[#0E1E38] border-t border-b border-gray-100 scroll-mt-20">

      {/* SVG Clip Path Definition for Custom Notched Right-Side Image Card */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="partner-card-notch-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.24 0 L 0.94 0 A 0.06 0.08 0 0 1 1 0.08 L 1 0.92 A 0.06 0.08 0 0 1 0.94 1 L 0.06 1 A 0.06 0.08 0 0 1 0 0.92 L 0 0.32 C 0 0.24, 0.05 0.16, 0.12 0.10 C 0.16 0.05, 0.20 0, 0.24 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ---------------- BACKGROUND AMBIENT FLOWING WAVE LINES & PARTICLES ---------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M 0 450 C 300 350 450 550 800 350 C 1150 150 1300 300 1440 250"
            stroke="url(#wave-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            animate={shouldReduceMotion ? {} : {
              d: [
                "M 0 450 C 300 350 450 550 800 350 C 1150 150 1300 300 1440 250",
                "M 0 420 C 300 380 450 500 800 380 C 1150 180 1300 280 1440 230",
                "M 0 450 C 300 350 450 550 800 350 C 1150 150 1300 300 1440 250"
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B56A6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1B56A6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient Blue Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#1B56A6]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Animated Particle Dots */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-sm shadow-cyan-400 pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-[#1B56A6] pointer-events-none"
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* ---------------- MAIN ASYMMETRIC EDITORIAL LAYOUT ---------------- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >

          {/* LEFT SIDE: CONTENT EDITORIAL (~42% width: 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4">

            {/* Eyebrow Label */}
            <motion.span
              variants={fadeUpVariants}
              className="text-xs md:text-sm font-semibold tracking-widest text-[#1B56A6] uppercase mb-2 block"
            >
              OUR TECHNOLOGY PARTNER
            </motion.span>

            {/* Small Horizontal Accent Bar */}
            <motion.div
              variants={fadeUpVariants}
              className="h-0.5 w-12 bg-[#1B56A6] rounded-full mb-6"
            />

            {/* Heading: YAHA Water Systems */}
            <motion.h2
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0E1E38] tracking-tight leading-[1.08] mb-6"
            >
              YAHA<br />
              <span className="font-bold text-[#0E1E38]">Water Systems</span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 max-w-xl"
            >
              Through our partnership with YAHA Water Systems, we integrate advanced Hybrid Zen Media Filtration technology for selected water treatment and tertiary treatment applications, enabling efficient filtration with lower water wastage and simplified maintenance.
            </motion.p>

            {/* Brand Logo Emblem */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              {/* Circular Wave Logo Badge */}
              <div className="w-11 h-11 rounded-full bg-[#1B56A6] flex items-center justify-center text-white shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12c3-3 6-3 9 0s6 3 9 0" />
                  <path d="M2 17c3-3 6-3 9 0s6 3 9 0" />
                  <path d="M2 7c3-3 6-3 9 0s6 3 9 0" />
                </svg>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-[#1B56A6] leading-none">
                  YAHA
                </span>
                <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#1B56A6] uppercase leading-tight mt-0.5">
                  WATER SYSTEMS
                </span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: LARGE VISUAL IMAGE CARD WITH NOTCHED SHAPE AND TOP-LEFT OVERLAYING BADGE */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-8 sm:pt-10 lg:pt-0">

            {/* BACKGROUND CONCENTRIC DECORATIVE RINGS (Behind Top-Left Badge) */}
            <div className="absolute left-2 sm:-left-4 lg:-left-6 top-0 sm:top-2 lg:-top-4 z-0 pointer-events-none">
              {/* Outer Orbit Ring with Accent Dot */}
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-blue-200/50 absolute -top-6 -left-6 pointer-events-none flex items-center justify-center"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-md shadow-cyan-300 absolute top-4 left-6" />
              </motion.div>

              {/* Secondary Accent Arc Ring */}
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-dashed border-cyan-300/40 absolute -top-2 -left-2 pointer-events-none" />
            </div>

            {/* OVERLAYING CIRCULAR HYBRID ZEN MEDIA BADGE (Positioned at Top-Left Cutout Notch) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 sm:-left-4 lg:-left-6 top-0 sm:top-2 lg:-top-4 z-30 pointer-events-none"
            >
              {/* Central Dark Navy Circular Badge */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#1B2F4C] via-[#12223A] to-[#0A1526] text-white flex flex-col items-center justify-center p-3 sm:p-4 text-center shadow-2xl border-2 border-white/20 backdrop-blur-md relative"
              >
                {/* Water Drop Icon in Circle Accent */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/30 flex items-center justify-center mb-1 bg-white/10 shadow-inner">
                  <Droplets className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </div>

                {/* Badge Text */}
                <span className="text-[11px] sm:text-xs font-medium leading-tight text-slate-100 tracking-wide">
                  Hybrid Zen<br />
                  Media<br />
                  Filtration<br />
                  Technology
                </span>
              </motion.div>
            </motion.div>

            {/* MAIN IMAGE CONTAINER WITH NOTCHED SHAPE */}
            <motion.div
              variants={rightVisualVariants}
              whileHover={{ scale: 1.015 }}
              className="relative w-full aspect-[14/10] sm:aspect-[1.4] filter drop-shadow-2xl z-10 group"
            >
              {/* Clipped Container for Image */}
              <div
                className="relative w-full h-full overflow-hidden bg-[#102038]"
                style={{
                  clipPath: 'url(#partner-card-notch-clip)',
                  WebkitClipPath: 'url(#partner-card-notch-clip)',
                }}
              >
                {/* Filtration Plant Image */}
                <Image
                  src="/Images/home/yaha_filtration_plant.jpg"
                  alt="YAHA Water Systems Hybrid Zen Media Filtration Vessel"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Ambient Gradient Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0E1E38]/30 via-transparent to-white/10 pointer-events-none" />

                {/* Subtle Light Sheen Sweep Effect */}
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none"
                  />
                )}
              </div>

              {/* Crisp SVG Outline Overlay matching the Notch Clip Path */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M 24 0 L 94 0 A 6 8 0 0 1 100 8 L 100 92 A 6 8 0 0 1 94 100 L 6 100 A 6 8 0 0 1 0 92 L 0 32 C 0 24, 5 16, 12 10 C 16 5, 20 0, 24 0 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="0.8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
