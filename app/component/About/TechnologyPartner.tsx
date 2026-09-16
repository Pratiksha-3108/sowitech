'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplet, RotateCcw, Settings, Filter } from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1] as const;

export default function TechnologyPartner() {
  return (
    <section id="yaha-technology" className="w-full bg-slate-50/50 py-16 md:py-24 overflow-hidden font-sans border-t border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: PLANE SQUARE SHAPE IMAGE WITH BOTTOM OVERLAY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: customEase }}
            className="lg:col-span-6 relative"
          >
            {/* Plane Square Image Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <Image
                src="/Images/home/yaha_filtration_plant.jpg"
                alt="YAHA Water Systems Filtration Facility"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Bottom Left Dark Overlay Box */}
              <div className="absolute bottom-6 left-6 z-10 bg-[#0D2244]/85 backdrop-blur-md px-5 py-3.5 rounded-xl border border-white/10 flex items-center gap-3.5 shadow-lg">
                <div className="w-1.5 h-9 bg-blue-400 rounded-full" />
                <div>
                  <h4 className="text-sm font-extrabold text-white tracking-wider uppercase leading-tight">
                    HYBRID ZEN
                  </h4>
                  <p className="text-[11px] font-medium text-slate-300 tracking-wider uppercase">
                    MEDIA FILTRATION
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: customEase }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#0D427D]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0D427D]">
                OUR TECHNOLOGY PARTNER
              </span>
            </div>

            {/* Headline + YAHA Partner Badge */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D2244] leading-[1.15] tracking-tight">
                YAHA Water Systems
              </h2>
              <div className="hidden sm:block w-px h-8 bg-slate-200" />
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50/80 border border-blue-100 text-[#0D427D]">
                <Droplet className="w-4 h-4 fill-[#0D427D]" />
                <span className="text-xs font-black tracking-wider uppercase">
                  YAHA <span className="font-semibold text-slate-500 text-[10px]">WATER SYSTEMS</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-[16px] leading-relaxed mb-10">
              Through our partnership with <strong className="text-[#0D427D] font-bold">YAHA Water Systems</strong>, we integrate advanced Hybrid Zen Media Filtration technology for selected water treatment and tertiary treatment applications, enabling efficient filtration with lower water wastage and simplified maintenance.
            </p>

            {/* 3 Bottom Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center px-2 border-r border-slate-200/60">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0D427D] flex items-center justify-center mb-3 shadow-sm border border-blue-100/80">
                  <Filter className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0D2244] leading-snug">
                  Efficient<br />Filtration
                </h4>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center px-2 border-r border-slate-200/60">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0D427D] flex items-center justify-center mb-3 shadow-sm border border-blue-100/80">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0D2244] leading-snug">
                  Lower Water<br />Wastage
                </h4>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0D427D] flex items-center justify-center mb-3 shadow-sm border border-blue-100/80">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0D2244] leading-snug">
                  Simplified<br />Maintenance
                </h4>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
