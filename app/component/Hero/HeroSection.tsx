'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const customEase = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="font-geist relative w-full min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#07132B]"
    >
      {/* ── Background Image with Balanced Dark Overlay ── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: [1.06, 1.02, 1.06] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/home_hero.png"
            alt="Sowitech Water Treatment Plant"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Light subtle overlay - keeps the plant image bright & clearly visible */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* Soft gradient: light top for navbar readability, transparent middle, subtle bottom transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#071320]/40 pointer-events-none" />
      </div>

      {/* ── Content Container (Centered & Grand) ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 min-h-[100svh] sm:min-h-screen">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Main Heading with Left-to-Right Pull / Reveal Animation (Smoother & Slower) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[70px] font-extrabold text-white leading-[1.15] sm:leading-[1.12] tracking-tight mb-5 sm:mb-6 text-center drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            {/* Line 1 - Pulls from Left to Right */}
            <div className="overflow-hidden pb-1">
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)", x: -28, opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 }}
                transition={{ duration: 1.9, delay: 0.2, ease: customEase }}
                className="inline-block"
              >
                Transforming Wastewater
              </motion.span>
            </div>

            {/* Line 2 - Pulls from Left to Right */}
            <div className="overflow-hidden pb-1">
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)", x: -28, opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 }}
                transition={{ duration: 1.9, delay: 0.6, ease: customEase }}
                className="inline-block"
              >
                into a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-sky-200">
                  Valuable Resource
                </span>
              </motion.span>
            </div>
          </h1>

          {/* Description with Read More Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: customEase }}
            className="text-slate-100 text-sm sm:text-[15px] md:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          >
            <p className="inline">
              Water is a critical resource for modern industries, making efficient treatment and reuse more important than ever.
            </p>
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline text-slate-100"
                >
                  {" "}At Sowitech Engineering, we provide reliable water treatment and recycling solutions that reduce freshwater dependency and support sustainable operations.
                </motion.span>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold text-xs sm:text-sm tracking-wide ml-2 transition-colors duration-200 cursor-pointer focus:outline-none select-none align-baseline"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Show less description" : "Read full description"}
            >
              <span>{isExpanded ? "Read less" : "Read more"}</span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </motion.div>

          {/* Tagline pills with interactive spring */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3, ease: customEase }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 mx-auto"
          >
            {["Treat.", "Recycle.", "Reuse."].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons (Exact identical dimensions & styling, no shadows) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: customEase }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mx-auto"
          >
            {/* Primary Button */}
            <a
              href="/#solutions"
              id="hero-explore-btn"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#177BC9] hover:bg-[#1264a3] border-2 border-[#177BC9] hover:border-[#1264a3] text-white rounded-full font-bold text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-[235px] h-[48px] sm:h-[50px]"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Button - Exactly same dimensions & arrow */}
            <a
              href="/contact"
              id="hero-audit-btn"
              className="group inline-flex items-center justify-center gap-2.5 border-2 border-white/50 hover:border-white text-white hover:text-[#07132B] hover:bg-white backdrop-blur-sm rounded-full font-bold text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-[235px] h-[48px] sm:h-[50px]"
            >
              <span>Request a Water Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
