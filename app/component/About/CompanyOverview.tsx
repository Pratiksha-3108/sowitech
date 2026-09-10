'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Droplets, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export default function CompanyOverview() {
  return (
    <section className="py-20 md:py-28 bg-white font-sans relative overflow-hidden">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1A56A6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text & Editorial Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6"
          >
            {/* Eyebrow Tag with Animated Bar */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-[#1A56A6] text-xs font-extrabold tracking-widest uppercase mb-4">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="h-[2px] bg-[#1A56A6] block"
              />
              <span>WHO WE ARE</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A3B] leading-[1.15] tracking-tight mb-6">
              Engineering Better Water Management
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p variants={itemVariants} className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 font-normal">
              Sowitech Engineering Pvt. Ltd. is a specialized Water Treatment Company committed to helping industries optimize water usage through innovative treatment, recycling, and reuse solutions.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p variants={itemVariants} className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-normal">
              Working in association with <strong className="text-[#0A1A3B] font-semibold">YAHA Water Systems</strong>, we provide engineered Water Treatment Plants (WTP), Tertiary Treatment Plants (TTP), and Water Recycling Systems that help organizations reduce freshwater dependency while supporting environmental sustainability.
            </motion.p>

            {/* Bullet Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              {[
                'Turnkey WTP & TTP Execution',
                'Advanced Ultrafiltration Tech',
                'Zero Liquid Discharge (ZLD)',
                'Water Quality Audits & BOT',
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2.5 group cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1A56A6]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1A56A6] transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-[#1A56A6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-800 text-sm font-semibold group-hover:text-[#0A1A3B] transition-colors">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Image with Floating Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Image Glow Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#38BDF8]/20 via-[#1A56A6]/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src="/Images/home/untraflitration-plant.png"
                alt="Sowitech Water Treatment Facility"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3B]/65 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
