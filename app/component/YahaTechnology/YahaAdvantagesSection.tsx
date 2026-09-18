'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function YahaAdvantagesSection() {
  const advantages: AdvantageItem[] = [
    {
      id: '01',
      title: 'Compact Treatment Footprint',
      description:
        'The filtration approach is designed to support applications where efficient use of available space is important.',
      image: '/Images/home/hybrid_zen_plant_plain.jpg',
    },
    {
      id: '02',
      title: 'Faster Installation',
      description:
        'The technology can support streamlined implementation for suitable treatment applications.',
      image: '/Images/home/untraflitration-plant.png',
    },
    {
      id: '03',
      title: 'Reduced Backwash Requirements',
      description:
        'The filtration system is designed to reduce the frequency or volume of backwash requirements in appropriate applications.',
      image: '/Images/home/yaha_filtration_plant.jpg',
    },
    {
      id: '04',
      title: 'Lower Water Wastage',
      description:
        'Efficient filtration can help reduce water lost during treatment and backwashing.',
      image: '/Images/home/save-water.png',
    },
    {
      id: '05',
      title: 'Self-Cleaning Filtration',
      description:
        'The technology incorporates self-cleaning filtration capabilities designed to simplify operation and maintenance.',
      image: '/Images/home/hybrid_zen_technology.jpg',
    },
  ];

  return (
    <section
      id="advantages"
      className="w-full bg-[#F8FAFC] py-20 lg:py-28 font-geist relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 flex flex-col items-start text-left space-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D427D]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D427D]">
              KEY TECHNOLOGY ADVANTAGES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0A1A3B] leading-tight tracking-tight">
            Key Technology Advantages
          </h2>
        </motion.div>

        {/* Advantage list with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80"
        >
          {advantages.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <div className="group relative py-7 md:py-8 grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[460px_1fr] gap-4 md:gap-8 items-center cursor-pointer transition-all duration-300">
                {/* Hover Fill Background */}
                <div className="absolute inset-0 bg-[#0D427D]/[0.04] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out pointer-events-none rounded-lg" />

                {/* Hover Preview Image (Visible on Large Screens) */}
                <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1/2 transition-all duration-400 ease-out">
                  <div className="relative w-52 h-36 rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/90 border border-slate-200 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Number & Title */}
                <h3 className="relative z-10 flex items-center gap-4 text-xl sm:text-2xl font-extrabold text-[#0A1A3B] tracking-tight group-hover:text-[#0D427D] transition-colors duration-300">
                  <span className="text-[#0D427D] font-mono font-bold text-base sm:text-lg">
                    {item.id}.
                  </span>
                  <span>{item.title}</span>
                </h3>

                {/* Description + Arrow */}
                <div className="relative z-10 flex items-center justify-between gap-6 pr-0 lg:pr-64">
                  <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-300 text-left">
                    {item.description}
                  </p>
                  <ArrowRight className="w-5 h-5 flex-shrink-0 text-[#0D427D] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
