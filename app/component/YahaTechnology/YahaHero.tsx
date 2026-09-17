'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Cpu } from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1] as const;

export default function YahaHero() {
  return (
    <section className="font-geist relative w-full min-h-screen flex items-stretch overflow-hidden bg-[#07132B]">
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

        {/* Low-opacity overall dark overlay */}
        <div className="absolute inset-0 bg-[#07132B]/30 pointer-events-none" />

        {/* Left gradient for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/80 via-[#071320]/55 to-[#071320]/20" />
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071320] to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center pt-28 pb-20 min-h-screen">
        <div className="max-w-4xl space-y-6">

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs font-bold uppercase tracking-widest"
          >
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>TECHNOLOGY PARTNER · YAHA WATER SYSTEMS</span>
          </motion.div>

          {/* Main 2-Line Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: customEase }}
            className="font-geist text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-extrabold text-white leading-tight tracking-tight"
          >
            YAHA Water Technology for <br />
            <span className="text-white inline-block">Efficient Water Treatment</span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: customEase }}
            className="font-geist text-[#FFFFFF] text-base sm:text-lg leading-relaxed max-w-xl font-normal"
          >
            Sowitech Engineering integrates YAHA Water Technology into selected water treatment and water reuse applications.
          </motion.p>

          {/* Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: customEase }}
            className="pt-4 flex items-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#177BC9] hover:bg-[#125ea0] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Discuss Your Treatment Requirement</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
