'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-full bg-[#F2F8FF] py-16 md:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: BIG MAIN IMAGE + CIRCULAR ROTATING BADGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative pr-2 pb-6 sm:pb-8"
          >
            {/* Background Dot Matrix Pattern */}
            <div className="absolute -top-4 -left-4 z-0 w-36 h-48 opacity-40 pointer-events-none">
              <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dotGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="2.5" fill="#CBD5E1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />
              </svg>
            </div>

            {/* Main Big Image */}
            <div className="relative z-10 w-full aspect-[4/3] sm:aspect-[1/1] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/Images/home/untraflitration-plant.png"
                alt="Sowitech Water Treatment Plant"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            {/* Circular Rotating Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotate: -15 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.4 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute right-3 sm:-right-6 bottom-0 sm:-bottom-4 w-[100px] h-[100px] sm:w-[125px] sm:h-[125px] lg:w-[138px] lg:h-[138px] rounded-full bg-[#EBF3FF] border-[1.5px] border-[#0D427D]/30 flex items-center justify-center shadow-[0_10px_28px_rgba(0,0,0,0.18)] z-20"
            >
              <div className="relative w-[75px] h-[75px] sm:w-[95px] sm:h-[95px] lg:w-[105px] lg:h-[105px] rounded-full border border-[#0D427D]/20 flex items-center justify-center bg-white shadow-inner">
                <span className="scale-110 sm:scale-125 z-[2] flex items-center justify-center p-0.5">
                  <Image
                    src="/assets/logo_bgremove.png"
                    alt="Sowitech Logo"
                    width={90}
                    height={90}
                    className="h-11 sm:h-14 lg:h-16 w-auto object-contain"
                  />
                </span>

                <div className="absolute -inset-2.5 rounded-full animate-[spin_14s_linear_infinite]">
                  <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <path id="topArc" d="M 5,60 A 55,55 0 0 1 115,60" />
                      <path id="bottomArc" d="M 115,60 A 55,55 0 0 1 5,60" />
                    </defs>
                    <text fontSize="8.5" fontWeight="800" fill="#0D427D" letterSpacing="1.5" fontFamily="inherit">
                      <textPath href="#topArc" startOffset="50%" textAnchor="middle">· WATER SOLUTIONS ·</textPath>
                    </text>
                    <text fontSize="9.5" fontWeight="800" fill="#0D427D" letterSpacing="2" fontFamily="inherit">
                      <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">2025</textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tagline / Eyebrow Badge */}
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-4 h-4 text-[#16a34a] fill-[#16a34a]/20 shrink-0" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-[#16a34a]">
                ABOUT US
              </span>
            </div>

            {/* Description Paragraph 1 */}
            <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-4">
              Sowitech Engineering Pvt. Ltd. is a specialized Water Treatment Company committed to helping industries optimize water usage through innovative treatment, recycling, and reuse solutions.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
              Working in association with <strong className="text-[#0D2244] font-semibold">YAHA Water Systems</strong>, we provide engineered Water Treatment Plants (WTP), Tertiary Treatment Plants (TTP), and Water Recycling Systems that help organizations reduce freshwater dependency while supporting environmental sustainability.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



