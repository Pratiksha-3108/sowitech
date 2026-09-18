'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const applicationsData = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: '/assets/manufacture.png',
    style: { top: '10.0%', left: '50.0%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'automotive',
    title: 'Automotive',
    icon: '/assets/automotive.png',
    style: { top: '19.4%', left: '75.7%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'data-centres',
    title: 'Data Centres',
    icon: '/assets/computer.png',
    style: { top: '43.1%', left: '89.4%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    icon: '/assets/hospital.png',
    style: { top: '70.0%', left: '84.6%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'hotels',
    title: 'Hotels',
    icon: '/assets/hotels.png',
    style: { top: '87.6%', left: '63.7%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'educational-institutions',
    title: 'Educational Institutions',
    icon: '/assets/school.png',
    style: { top: '87.6%', left: '36.3%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'residential-societies',
    title: 'Residential Societies',
    icon: '/assets/residential-area (1).png',
    style: { top: '70.0%', left: '15.4%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'municipal-facilities',
    title: 'Municipal Facilities',
    icon: '/assets/building.png',
    style: { top: '43.1%', left: '10.6%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'industrial-parks',
    title: 'Industrial Parks',
    icon: '/assets/industrial-park.png',
    style: { top: '19.4%', left: '24.3%', transform: 'translate(-50%, -50%)' },
  },
];

export default function YahaApplicationsSection() {
  return (
    <section className="w-full bg-[#F4F9FD] py-16 md:py-24 font-geist relative overflow-hidden border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Header Text & Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D2244] leading-[1.15] tracking-tight mb-4">
                YAHA Applications
              </h2>

              {/* Accent Underline */}
              <div className="w-12 h-1 bg-[#0D427D] rounded-full mb-6" />

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg font-medium">
                Explore where YAHA can be applied
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Orbital Sector Diagram (Desktop) / Grid (Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center items-center relative py-6"
          >
            {/* Desktop Orbital Interactive Diagram */}
            <div className="hidden sm:block relative w-[440px] h-[440px] md:w-[480px] md:h-[480px] flex-shrink-0">
              
              {/* Outer & Inner Orbit Circle Lines */}
              <div className="absolute inset-[11%] rounded-full border border-sky-300/80 pointer-events-none" />
              <div className="absolute inset-[22%] rounded-full border border-sky-300/70 pointer-events-none" />

              {/* Center Static Middle Circle Graphic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full flex items-center justify-center">
                  
                  {/* Static middle_circle.png Graphic */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/assets/middle_circle.png"
                      alt="Middle Circle Graphic"
                      fill
                      className="object-contain"
                    />
                  </div>

                </div>
              </div>

              {/* Mathematically Symmetrical Continuously Rotating Orbit Container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 45,
                  ease: 'linear',
                }}
                className="absolute inset-0 z-30 pointer-events-auto"
              >
                {applicationsData.map((item) => (
                  <div
                    key={item.id}
                    style={item.style}
                    className="absolute flex flex-col items-center gap-1.5 transition-all duration-300 cursor-pointer group"
                  >
                    {/* Counter-rotating wrapper so icons and text remain upright while orbiting */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 45,
                        ease: 'linear',
                      }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      {/* Transparent PNG Icon Container (No White Background) */}
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={36}
                          height={36}
                          className="w-8 h-8 md:w-9 md:h-9 object-contain drop-shadow-sm"
                        />
                      </div>

                      {/* Sector Label */}
                      <span className="text-[11px] md:text-xs font-bold text-[#0D2244] text-center max-w-[100px] leading-tight group-hover:text-[#0D427D] transition-colors duration-200">
                        {item.title}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

            </div>

            {/* Mobile Responsive Grid */}
            <div className="sm:hidden w-full space-y-6">
              {/* Central Badge */}
              <div className="w-full py-6 rounded-3xl bg-white border border-slate-200/80 text-center shadow-sm p-4 flex flex-col items-center justify-center">
                <div className="relative w-36 h-16">
                  <Image
                    src="/assets/yahalogo.png"
                    alt="YAHA Water Systems Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 9 Sector Grid */}
              <div className="grid grid-cols-2 gap-3">
                {applicationsData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200/80 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#0D2244] leading-snug">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
