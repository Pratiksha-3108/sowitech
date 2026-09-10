'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const cubicEase = [0.16, 1, 0.3, 1] as const;

export default function MissionVision() {
  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: cubicEase },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: cubicEase },
    },
  };

  return (
    <section
      id="mission"
      className="py-12 md:py-20 font-sans relative overflow-hidden w-full"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      {/* Subtle background glow orbs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[110px] pointer-events-none"
        style={{ backgroundColor: 'rgba(13,66,125,0.09)' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-[90px] pointer-events-none"
        style={{ backgroundColor: 'rgba(26,107,181,0.09)' }}
      />

      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">

          {/* TOP SECTION: TITLE TOP LEFT + MISSION CARD TOP RIGHT */}
          <div className="relative mb-8 md:mb-12">

            {/* Top Left Title */}
            <div className="lg:absolute lg:top-0 lg:left-0 z-20 mb-6 lg:mb-0">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-3"
                style={{ color: '#0A1E3D' }}
              >
                Our Mission <br className="hidden sm:inline" />&amp; Vision
              </h2>

              {/* Double accent bars */}
              <div className="flex flex-col gap-1.5 mt-3">
                <div
                  className="h-1.5 w-32 sm:w-36 rounded-full"
                  style={{ backgroundColor: '#0D427D' }}
                />
                <div
                  className="h-1 w-24 sm:w-28 rounded-full"
                  style={{ backgroundColor: '#7AAED6' }}
                />
              </div>
            </div>

            {/* Mission Pill Card — circular image left, text right */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="w-full lg:w-[68%] lg:ml-auto rounded-l-full rounded-r-2xl sm:rounded-r-3xl p-3.5 sm:p-4 md:p-5 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 border transition-all duration-300"
              style={{
                backgroundColor: '#EBF3FB',
                borderColor: 'rgba(13,66,125,0.15)',
                boxShadow: '0 4px 24px rgba(13,66,125,0.08)',
              }}
            >
              {/* Circular Image */}
              <div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 shadow-md border-4"
                style={{ borderColor: '#0D427D' }}
              >
                <Image
                  src="/assets/mission.png"
                  alt="Our Mission"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left pr-2 sm:pr-6 py-1">
                <h3
                  className="text-2xl sm:text-3xl font-extrabold mb-1.5 tracking-tight"
                  style={{ color: '#0D427D' }}
                >
                  Mission
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: '#3D5A7A' }}
                >
                  To help industries maximize every drop of water through reliable engineering,
                  advanced treatment technologies, and sustainable water management practices.
                </p>
              </div>
            </motion.div>

          </div>

          {/* BOTTOM SECTION: VISION CARD — text left, circular image right */}
          <div className="w-full mt-8 md:mt-12">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="w-full lg:w-[68%] lg:mr-auto rounded-l-2xl sm:rounded-l-3xl rounded-r-full p-3.5 sm:p-4 md:p-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 sm:gap-6 border transition-all duration-300"
              style={{
                backgroundColor: '#0D427D',
                borderColor: 'rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(13,66,125,0.25)',
              }}
            >
              {/* Text */}
              <div className="flex-1 text-center sm:text-left pl-2 sm:pl-8 md:pl-10 py-1">
                <h3
                  className="text-2xl sm:text-3xl font-extrabold mb-1.5 tracking-tight"
                  style={{ color: '#FFFFFF' }}
                >
                  Vision
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.80)' }}
                >
                  To become a trusted partner for industries seeking efficient, sustainable, and
                  future-ready water treatment solutions.
                </p>
              </div>

              {/* Circular Image */}
              <div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 shadow-md border-4"
                style={{ borderColor: 'rgba(255,255,255,0.85)' }}
              >
                <Image
                  src="/assets/vision.png"
                  alt="Our Vision"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                />
                <div
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{ backgroundColor: 'rgba(13,66,125,0.18)' }}
                />
              </div>
            </motion.div>
          </div>

      </div>
    </section>
  );
}
