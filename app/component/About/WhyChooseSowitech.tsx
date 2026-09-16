'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

/* ── Reasons data with high quality background images & custom PNG icons ─────── */
const reasons = [
  {
    number: '01',
    title: 'Technical Expertise',
    description:
      'Experienced engineering team delivering practical and efficient water treatment solutions.',
    icon: '/assets/icon1.png',
    image: '/Images/home/untraflitration-plant.png',
  },
  {
    number: '02',
    title: 'Customized Solutions',
    description:
      'Every project is designed according to water quality, usage patterns, and operational requirements.',
    icon: '/assets/icon3.png',
    image: '/Images/home/yaha_filtration_plant.jpg',
  },
  {
    number: '03',
    title: 'End-to-End Support',
    description:
      'From consultation and design to installation, commissioning, and maintenance.',
    icon: '/assets/icon4.png',
    image: '/Images/benefits/freshwater.jpg',
  },
  {
    number: '04',
    title: 'Sustainability Focus',
    description:
      'Helping organizations achieve water conservation, ESG objectives, and operational efficiency.',
    icon: '/assets/icon44.png',
    image: '/Images/benefits/esg.png',
  },
];

export default function WhyChooseSowitech() {
  return (
    <section
      id="why-choose-sowitech"
      className="w-full font-sans relative overflow-hidden py-14 md:py-20"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      {/* Background glowing orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: 'rgba(13,66,125,0.06)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: 'rgba(122,174,214,0.08)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-[0.22em] uppercase mb-4 border"
            style={{
              backgroundColor: 'rgba(13,66,125,0.07)',
              borderColor: 'rgba(13,66,125,0.15)',
              color: '#0D427D',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Why Choose Us
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]"
            style={{ color: '#0A1E3D' }}
          >
            Engineering Smarter <span style={{ color: '#0D427D' }}>Water Solutions</span>
          </motion.h2>
        </div>

        {/* 4 Sleek Cards Grid with Bottom-Left to Top-Right Hover Image Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-[220px] sm:h-[240px] p-6 flex flex-col justify-between cursor-pointer"
              >
                {/* ── Background Image & Overlay (Opens from bottom-left to top-right) ── */}
                <div className="absolute inset-0 [clip-path:circle(0%_at_0%_100%)] group-hover:[clip-path:circle(160%_at_0%_100%)] transition-all duration-700 ease-out pointer-events-none z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#0D427D]/35 to-black/20" />
                </div>

                {/* ── Status Indicator Dot ── */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_rgba(52,211,153,0.9)] z-10" />

                {/* ── Foreground Content ── */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Custom Icon Container */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center p-2 transition-all duration-500 group-hover:bg-white/20 group-hover:backdrop-blur-md"
                    style={{
                      backgroundColor: 'rgba(13,66,125,0.06)',
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                    />
                  </div>

                  {/* Title & Description — Black initially, White on Hover */}
                  <div className="mt-auto">
                    <h3 className="text-base sm:text-lg font-bold mb-1.5 text-black group-hover:text-white transition-colors duration-500 leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] leading-normal text-black/80 group-hover:text-white transition-colors duration-500 font-normal drop-shadow-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

