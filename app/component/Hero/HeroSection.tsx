'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll driven subtle scale & blur effect overlay
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#07132B] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image Container with Smooth Zoom Out Animation Effect */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-full overflow-hidden"
        style={{ opacity: scrollOpacity }}
      >
        <motion.div
          initial={{ scale: 1.25, opacity: 0.85 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: scrollScale }}
          className="relative w-full h-full"
        >
          <Image
            src="/assets/home_hero.png"
            alt="Sowitech Water Treatment Plant"
            fill
            priority
            className="object-cover object-center w-full h-full transform-gpu"
          />
        </motion.div>

        {/* Subtle bottom fade only, so image stays bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1A3B]/80 z-10" />
      </motion.div>

      {/* Main Centered Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto">
        {/* Top Pill Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 sm:mb-8 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>• YOUR VISION. OUR CRAFT. •</span>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto mb-6 sm:mb-8 drop-shadow-2xl font-geist"
        >
          Transforming Wastewater <br />
          into a Valuable Resource.
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 text-center px-2 sm:px-4 drop-shadow-md"
        >
          Sowitech Engineering Pvt. Ltd., in association with YAHA Water Systems, designs and delivers Water Treatment Plants (WTP), Tertiary Treatment Plants (TTP), and water recycling solutions. Our solutions help industries reduce freshwater consumption, lower operating costs, and achieve long-term sustainability goals.
        </motion.p>

        {/* Primary CTA Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#0D427D] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/40 cursor-pointer"
          >
            <span>Build With Us</span>
            <span className="w-7 h-7 rounded-full bg-[#0D427D] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Soft Blur Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;


