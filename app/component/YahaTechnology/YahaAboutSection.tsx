'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const customEase = [0.16, 1, 0.3, 1] as const;

export default function YahaAboutSection() {
  return (
    <section id="technology" className="font-geist py-20 lg:py-28 bg-slate-50 text-[#0A1A3B] relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Main 2-Column Grid (Image stretches to match Title + Content height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">

          {/* Left Column - Eyebrow, Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Eyebrow & Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D427D]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D427D]">
                  ABOUT YAHA WATER TECHNOLOGY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1A3B] leading-tight tracking-tight">
                Advanced Filtration for Efficient Water Treatment
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed text-justify pt-2">
              <p className="font-medium text-[#0A1A3B]">
                Sowitech Engineering works in association with YAHA Water Systems to integrate Hybrid Zen Media Filtration Technology into selected water treatment and water reuse applications. Designed for efficient and practical filtration, the technology can support applications where reduced water wastage, compact treatment requirements, and simplified operation are important.
              </p>
              <p className="text-slate-600">
                Sowitech Engineering evaluates Hybrid Zen as part of the overall treatment design and integrates it based on the project&apos;s water characteristics, required treatment quality, space, and operational requirements.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Plain Image (No rounded curves) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: customEase }}
            className="lg:col-span-5 relative flex"
          >
            <div className="relative rounded-none overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xl group w-full min-h-[320px] h-full">
              <Image
                src="/Images/home/hybrid_zen_plant_plain.jpg"
                alt="HYBRID ZEN Technology Filtration Plant"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
