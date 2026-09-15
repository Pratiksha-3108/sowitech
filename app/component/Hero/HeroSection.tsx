'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const customEase = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="font-geist relative w-full min-h-screen flex items-stretch overflow-hidden bg-[#07132B]"
    >
      {/* ── Full-bleed Background Image (right-biased) ── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.12, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: customEase }}
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

        {/* Left dark gradient so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/60 via-[#071320]/35 to-[#071320]/10" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#071320] to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center pt-28 pb-20 min-h-screen">
        <div className="max-w-2xl xl:max-w-[680px]">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: customEase }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-bold text-white leading-[1.2] tracking-tight mb-6"
          >
            Transforming Wastewater
            <br />
            into a{" "}
            <span className="text-[#F39A1E] relative inline-block">
              Valuable Resource
              {/* subtle underline glow */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#F39A1E]/40 rounded-full blur-sm" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: customEase }}
            className="text-slate-300 text-sm sm:text-[15px] md:text-base leading-relaxed mb-8 max-w-xl"
          >
            Water is a critical resource for modern industries. Making efficient treatment and reuse more important than ever. At Sowitech Engineering, we provide reliable water treatment and recycling solutions that reduce freshwater dependency and support sustainable operations.
          </motion.p>

          {/* Tagline pills */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: customEase }}
            className="flex items-center gap-4 mb-10"
          >
            {["Treat.", "Recycle.", "Reuse."].map((tag) => (
              <span
                key={tag}
                className="text-[#F39A1E] text-sm font-bold tracking-wide"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: customEase }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Primary */}
            <a
              href="/#solutions"
              id="hero-explore-btn"
              className="group inline-flex items-center gap-2.5 bg-[#F39A1E] hover:bg-[#e08b12] text-white px-7 py-3.5 rounded-full font-bold text-[13.5px] uppercase tracking-wider shadow-lg hover:shadow-[#F39A1E]/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Explore Solutions</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Secondary */}
            <a
              href="/contact"
              id="hero-audit-btn"
              className="group inline-flex items-center gap-2.5 border-2 border-white/30 hover:border-white/70 text-white px-7 py-3.5 rounded-full font-bold text-[13.5px] uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <span>Request a Water Audit</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
