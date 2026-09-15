'use client';

import Image from 'next/image';
import Link from 'next/link';
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
        {/* Subtle top gradient only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-between h-full" style={{ minHeight: '90vh' }}>

        {/* TOP: Label + Headline + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 lg:pt-24 pb-12">

          {/* Left: Label + Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: customEase }}
            className="max-w-2xl"
          >
            {/* Label with #0D427D primary accent bar */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D427D' }} />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Why Choose Sowitech
              </p>
            </div>

            <h2 className="font-geist text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12]">
              Built for performance.<br />
              <span className="text-white">Designed for water.</span>
            </h2>
          </motion.div>

          {/* Right: Primary CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="flex-shrink-0"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-semibold text-sm px-7 py-3.5 rounded-sm transition-all duration-300 shadow-lg text-white"
              style={{ backgroundColor: '#0D427D' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#ffffff';
                (e.currentTarget as HTMLElement).style.color = '#0D427D';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#0D427D';
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
              }}
            >
              WORK WITH US
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM: Feature cards bar */}
        <div className="px-[50px] pb-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: customEase }}
                  className="group flex flex-col gap-3 px-8 py-8 border-t border-l border-white/20 hover:border-[#0D427D] transition-all duration-300 cursor-default relative overflow-hidden"
                  style={{ backgroundColor: 'rgba(13, 30, 55, 0.35)', backdropFilter: 'blur(12px)' }}
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
