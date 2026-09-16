'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurCommitment() {
  const commitments = [
    {
      title: 'Responsible Water Management',
      description:
        'We believe every organization can contribute to a more sustainable future by adopting responsible water management practices.',
      image: '/Images/about/mission.jpg',
    },
    {
      title: 'Long-Term Value & Efficiency',
      description:
        'Our goal is to deliver reliable, efficient, and cost-effective solutions that create long-term value for businesses and the environment.',
      image: '/Images/about/vision.jpg',
    },
  ];

  return (
    <section id="our-commitment" className="w-full bg-slate-50/60 py-16 md:py-24 overflow-hidden font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#0D427D]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-[#0D427D]">
              OUR COMMITMENT
            </span>
          </motion.div>
        </div>

        {/* 2 Cards Grid: Straight Edges (rounded-none), Top Image touching edges, Bottom Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 w-full mx-auto">
          {commitments.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-none shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Top Image touching card top & sides */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] bg-slate-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Bottom Text Area with Padding */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0D2244] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


