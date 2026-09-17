'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Droplets, Leaf, Briefcase } from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    title: 'Industry-Focused Engineering',
    description: "Every project is designed around your industry's operational and water quality requirements.",
    icon: Users,
  },
  {
    title: 'Technology Partnership',
    description: 'Integrated solutions powered by YAHA Water Systems for efficient filtration and water reuse.',
    icon: Droplets,
  },
  {
    title: 'Sustainability Driven',
    description: 'Support ESG initiatives, circular water management, and responsible resource utilization.',
    icon: Leaf,
  },
  {
    title: 'Complete Project Execution',
    description: 'From design and installation to commissioning and maintenance — end-to-end support.',
    icon: Briefcase,
  },
];

const WhyChoose = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '90vh' }}>

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/architectural_hero.jpg"
          alt="Sowitech Engineering Water Facility"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Low-opacity dark overlay */}
        <div className="absolute inset-0 bg-[#07132B]/30 pointer-events-none" />
        {/* Subtle top gradient only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-between h-full" style={{ minHeight: '90vh' }}>

        {/* TOP: Label + Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 lg:pt-24 pb-12">

          {/* Left: Label + Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: customEase }}
            className="max-w-2xl"
          >
            {/* Label */}
            <div className="mb-3">
              <span className="text-xs font-bold tracking-[0.2em] text-sky-400 uppercase font-geist">
                WHY CHOOSE SOWITECH
              </span>
            </div>

            <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Built for performance.<br />
              <span className="text-sky-400">Designed for water.</span>
            </h2>
          </motion.div>
        </div>

        {/* BOTTOM: Feature cards bar */}
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: customEase }}
                  className="group flex flex-col gap-3 px-6 py-7 lg:px-7 lg:py-8 rounded-xl border border-white/20 hover:border-[#0D427D] hover:bg-[#0d1e37]/60 transition-all duration-300 cursor-default relative overflow-hidden shadow-lg backdrop-blur-md"
                  style={{ backgroundColor: 'rgba(13, 30, 55, 0.45)' }}
                >
                  {/* Top line accent on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: '#0D427D' }}
                  />

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-1 transition-all duration-300 shadow-sm"
                    style={{ backgroundColor: 'rgba(13, 66, 125, 0.4)', border: '1px solid rgba(13, 66, 125, 0.6)' }}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-geist text-base font-bold text-white leading-snug group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-geist text-sm text-white/65 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
