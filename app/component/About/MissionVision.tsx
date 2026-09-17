'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const cubicEase = [0.16, 1, 0.3, 1] as const;

export default function MissionVision() {
  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: cubicEase },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: cubicEase },
    },
  };

  return (
    <section
      id="mission-vision"
      className="py-16 md:py-24 font-sans relative overflow-hidden w-full bg-[#F2F8FF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col gap-12 md:gap-16">

        {/* TOP CARD: OUR VISION (Text Left, Image Right, Left-aligned staggered) */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="w-full lg:w-[64%] mr-auto rounded-r-[28px] sm:rounded-r-[32px] rounded-l-none p-2 sm:p-2.5 md:p-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-[0_10px_28px_rgba(84,121,222,0.12)] transition-all duration-300"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(132,162,238,0.55) 45%, rgba(84,121,222,0.92) 100%)',
          }}
        >
          {/* Text Content */}
          <div className="flex-1 text-left pl-3 sm:pl-4 pr-1 py-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-2">
              Our Vision
            </h2>
            <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-normal">
              To become a trusted partner for industries seeking efficient, sustainable, and
              future-ready water treatment solutions. We strive to innovate continuously, setting
              benchmarks for quality, ecological balance, and resource preservation.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:w-[210px] lg:w-[240px] h-[175px] sm:h-[190px] md:h-[200px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 border-4 border-[#5479DE] shadow-md">
            <Image
              src="/assets/vision.png"
              alt="Our Vision"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 240px"
              priority
            />
          </div>
        </motion.div>

        {/* BOTTOM CARD: OUR MISSION (Image Left, Text Right, Right-aligned staggered) */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="w-full lg:w-[64%] ml-auto rounded-l-[28px] sm:rounded-l-[32px] rounded-r-none p-2 sm:p-2.5 md:p-3 flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-6 shadow-[0_10px_28px_rgba(84,121,222,0.12)] transition-all duration-300"
          style={{
            background:
              'linear-gradient(90deg, rgba(84,121,222,0.92) 0%, rgba(132,162,238,0.55) 55%, rgba(255,255,255,0) 100%)',
          }}
        >
          {/* Image Container */}
          <div className="relative w-full md:w-[210px] lg:w-[240px] h-[175px] sm:h-[190px] md:h-[200px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 border-4 border-[#5479DE] shadow-md">
            <Image
              src="/assets/mission.png"
              alt="Our Mission"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 240px"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-left pr-3 sm:pr-4 pl-1 py-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-2">
              Our Mission
            </h2>
            <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-normal">
              To help industries maximize every drop of water through reliable engineering,
              advanced treatment technologies, and sustainable water management practices that reduce
              freshwater dependency and environmental impact.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

