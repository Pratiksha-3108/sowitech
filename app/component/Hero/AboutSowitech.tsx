'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1] as const;

const AboutSowitech = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Subtle vertical parallax for the editorial image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <section
      ref={sectionRef}
      id="about-sowitech"
      className="relative w-full overflow-hidden bg-[#F2F8FF]"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ background: 'linear-gradient(90deg, #0D427D 0%, #1e88e5 50%, #0D427D 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Editorial Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 1.04 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: customEase }}
            className="lg:col-span-5 relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative z-10 overflow-hidden shadow-lg border border-slate-200/60 rounded-xl w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] bg-slate-100"
            >
              <Image
                src="/assets/architectural_hero.jpg"
                alt="Sowitech Engineering Water Treatment Facility"
                fill
                priority={false}
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Staggered Content ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              className="mb-3"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-[#0D427D] uppercase font-geist">
                ABOUT SOWITECH
              </span>
            </motion.div>

            {/* 2. Main Heading (Masked Upward Reveal) */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
                className="font-geist text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.18] text-slate-900 tracking-tight"
              >
                Engineering Better{' '}
                <span className="text-[#0D427D]">Water Management</span>
              </motion.h2>
            </div>

            {/* 3. Intro Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
              className="font-geist text-slate-600 text-base sm:text-[1.0625rem] leading-[1.75] mb-7 max-w-2xl"
            >
              Water is becoming an increasingly valuable resource for modern industries. At{' '}
              <span className="font-semibold text-slate-900">Sowitech Engineering Pvt. Ltd.</span>, we
              help businesses make better use of water through reliable treatment, recycling, and
              reuse solutions.
            </motion.p>

            {/* 4. Expertise Area (Refined Editorial Treatment - NO cards!) */}
            <div className="mb-7">
              {/* Expertise Label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.4, ease: customEase }}
                className="text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase font-geist mb-2.5"
              >
                OUR EXPERTISE
              </motion.div>

              {/* Subtle Horizontal Divider */}
              <div className="relative w-full h-[1px] bg-slate-200/80 mb-3.5 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: 0.48, ease: customEase }}
                  className="h-full bg-[#0D427D]/40"
                />
              </div>

              {/* Expertise List */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.55, ease: customEase }}
                className="font-geist text-xs sm:text-sm font-bold tracking-wider text-slate-800 flex flex-wrap items-center gap-x-3 gap-y-1.5"
              >
                <span>WTP</span>
                <span className="text-[#0D427D] font-black">·</span>
                <span>TTP</span>
                <span className="text-[#0D427D] font-black">·</span>
                <span>WATER RECYCLING</span>
                <span className="text-[#0D427D] font-black">·</span>
                <span>STP TO TTP UPGRADATION</span>
              </motion.div>
            </div>

            {/* 5. Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.65, ease: customEase }}
              className="font-geist text-slate-600 text-sm sm:text-base leading-[1.75] mb-8 max-w-2xl"
            >
              Working in association with{' '}
              <span className="font-semibold text-slate-900">YAHA Water Systems</span>, we combine
              practical engineering, advanced treatment technology, and sustainable water-management
              practices to help industries reduce freshwater dependency and improve water reuse.
            </motion.p>

            {/* 6. CTA Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.75, ease: customEase }}
              className="pt-1"
            >
              <Link
                href="/about"
                id="about-discover-btn"
                className="group inline-flex items-center gap-2.5 text-[#0D427D] font-bold text-sm sm:text-base tracking-wide border-b-2 border-[#0D427D]/30 hover:border-[#0D427D] pb-1 transition-all duration-300 w-fit"
              >
                <span>Discover Sowitech</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSowitech;
