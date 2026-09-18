'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const criteriaList = [
  {
    id: 'water-characteristics',
    title: 'Water Characteristics',
    icon: '/assets/Water characteristics.png',
  },
  {
    id: 'required-treatment-quality',
    title: 'Required Treatment Quality',
    icon: '/assets/Required treatment quality.png',
  },
  {
    id: 'reuse-objectives',
    title: 'Reuse Objectives',
    icon: '/assets/Reuse objectives.png',
  },
  {
    id: 'space-constraints',
    title: 'Space Constraints',
    icon: '/assets/Space constraints.png',
  },
  {
    id: 'operational-requirements',
    title: 'Operational Requirements',
    icon: '/assets/Operational requirements.png',
  },
  {
    id: 'maintenance-considerations',
    title: 'Maintenance Considerations',
    icon: '/assets/Maintenance considerations.png',
  },
];

export default function YahaPartnershipSection() {
  return (
    <section className="w-full relative py-12 md:py-20 font-geist overflow-hidden">
      {/* Full-Width Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bakground-partner.png"
          alt="Engineering Partnership Background"
          fill
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          {/* Section Header Title */}
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-4">
            <div className="inline-flex items-center justify-center gap-2 text-[#0D427D]">
              <span className="w-2 h-2 rounded-full bg-[#0D427D]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">
                TECHNOLOGY PARTNERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2244] tracking-tight">
              Technology & Engineering Partnership
            </h2>
          </div>

          {/* Top Row: Sowitech Logo | Description Text | YAHA Logo */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 pb-4">
            
            {/* Sowitech Logo (Transparent, No Box Border) */}
            <div className="flex items-center justify-center w-52 sm:w-64 h-24 sm:h-28 flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/logo_bgremove.png"
                  alt="Sowitech Engineering Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Central Text */}
            <p className="text-center text-slate-900 text-base sm:text-lg md:text-xl font-semibold max-w-2xl leading-relaxed mt-4 sm:mt-6 lg:translate-y-2">
              Sowitech Engineering combines engineering and project-execution capabilities with technology from YAHA Water Systems for selected applications.
            </p>

            {/* YAHA Water Systems Logo (Transparent, No Box Border) */}
            <div className="flex items-center justify-center w-28 sm:w-32 h-28 sm:h-32 flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/yahalogo.png"
                  alt="YAHA Water Systems Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>

          </div>

          {/* Bottom Row: 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {criteriaList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white/95 hover:bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl border border-slate-200/80 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#0D427D] group-hover:bg-[#1D4ED8] flex items-center justify-center flex-shrink-0 p-2.5 sm:p-3 shadow-md group-hover:scale-105 transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-bold text-base sm:text-lg leading-snug group-hover:text-[#0D427D] transition-colors duration-200">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
