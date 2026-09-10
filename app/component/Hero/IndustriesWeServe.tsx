'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const industriesData = [
  {
    id: 1,
    tag: 'INDUSTRIAL INFRA',
    title: 'Industrial Infra',
    description:
      'The Industrial Infra segment supports industries with utility solutions tailored to meet their specific steam and power requirements.',
    subServices: [
      'Large Boilers and Fired Heaters',
      'Projects and Energy Solutions',
      'Utility Piping & Infrastructure',
      'Power & Steam Management',
    ],
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'GREEN SOLUTIONS',
    title: 'Green Solutions',
    description:
      'Sustainable utility water conditioning, renewable energy integration, and bio-energy effluent recovery systems for eco-friendly industrial campuses.',
    subServices: [
      'Solar & Wind Energy Systems',
      'Resource & Water Recycling',
      'Bio-Energy Recovery',
      'Carbon Footprint Reduction',
    ],
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'CHEMICAL PROCESSING',
    title: 'Chemical Processing',
    description:
      'High-performance process water, specialty utility support and complex chemical effluent treatment designed for stringent manufacturing standards.',
    subServices: [
      'High-Purity Process Water',
      'Evaporation & Crystallisation',
      'ZLD & Effluent Recycling',
      'Specialty Chemical Support',
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    tag: 'AUTOMOBILE',
    title: 'Automobile Industry',
    description:
      'Process water, paint shop support, utility conditioning and wastewater reuse solutions tailored for high-volume production facilities.',
    subServices: [
      'Paint Shop Process Water',
      'Cooling & Heating Circuits',
      'RO & Ultrafiltration Packages',
      'Wastewater Zero Discharge',
    ],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    tag: 'FOOD & BEVERAGES',
    title: 'Food & Beverages',
    description:
      'Hygiene-sensitive water treatment, process support, recycle options and compliant high-BOD wastewater management for food plants.',
    subServices: [
      'Sanitary Grade Process Water',
      'High-BOD Anaerobic Treatment',
      'Membrane Filtration Systems',
      'Utility Steam & Cooling Water',
    ],
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    tag: 'PROJECTS',
    title: 'EPC Solutions',
    description:
      'Integrated treatment plant packages with detailed engineering, procurement, installation and commissioning support.',
    subServices: [
      'Turnkey Plant Design',
      'Modular Skid Assembly',
      'Automation & SCADA Control',
      'O&M Lifecycle Support',
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function IndustriesWeServe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showText, setShowText] = useState(false);

  const triggerSlideChange = useCallback((newIndex: number, dir: number = 1) => {
    setShowText(false);
    setDirection(dir);
    setActiveIndex(newIndex);
  }, []);

  const handleNext = useCallback(() => {
    triggerSlideChange((activeIndex + 1) % industriesData.length, 1);
  }, [activeIndex, triggerSlideChange]);

  const handlePrev = useCallback(() => {
    triggerSlideChange((activeIndex - 1 + industriesData.length) % industriesData.length, -1);
  }, [activeIndex, triggerSlideChange]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const current = industriesData[activeIndex];
  const nextIndustry = industriesData[(activeIndex + 1) % industriesData.length];
  const secondNextIndustry = industriesData[(activeIndex + 2) % industriesData.length];

  const cardVariants: Variants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35 },
    }),
  };

  return (
    <section
      id="industries"
      className="py-16 md:py-24 font-geist relative overflow-hidden scroll-mt-20"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <span
              className="text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
              style={{ color: '#0D427D', borderColor: '#0D427D44', backgroundColor: '#EBF3FF' }}
            >
              ALL INDUSTRIES
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4"
          >
            Explore Solutions by Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Browse the industries Sowitech serves and see how our water and wastewater treatment expertise applies to different process environments.
          </motion.p>
        </div>

        {/* Main Slider Track */}
        <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14 items-center justify-between min-h-[480px] md:min-h-[540px] lg:min-h-[620px]">

          {/* Left Active Featured Card (~62% Width) - Taller Height & Shifted Left */}
          <div className="relative w-full lg:w-[60%] xl:w-[62%] h-[500px] sm:h-[540px] md:h-[580px] lg:h-[620px] rounded-[32px] overflow-hidden shadow-xl group border border-white/60 bg-slate-900 flex-shrink-0 lg:-translate-x-3 xl:-translate-x-6">

            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={`card-${current.id}`}
                custom={direction}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 z-0 rounded-[32px] overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Light Gradient Overlay for crisp image visibility and legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Bottom-Right Floating Action Button */}
            <div className="absolute bottom-6 right-6 z-30">
              <button
                onClick={handleNext}
                aria-label={`Explore ${current.title}`}
                className="w-12 h-12 rounded-full bg-white text-[#0D427D] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer border border-[#0D427D]/20"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content Box */}
            <div className="relative z-10 h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between pb-8">
              <AnimatePresence mode="wait">
                {showText && (
                  <motion.div
                    key={`content-${current.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-between h-full max-w-xl"
                  >
                    {/* Top Title + Description */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight drop-shadow-sm"
                      >
                        {current.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal max-w-lg drop-shadow-sm"
                      >
                        {current.description}
                      </motion.p>
                    </div>

                    {/* Sub-services List with Horizontal Dividers and Arrows */}
                    <div className="pr-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-3 border-t border-white/30">
                        {current.subServices.map((sub, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 + idx * 0.05 }}
                            className="flex items-center justify-between py-2 border-b border-white/25 text-white font-semibold group/sub cursor-pointer hover:text-cyan-200 transition-colors text-xs sm:text-sm drop-shadow-sm"
                          >
                            <span className="truncate pr-2">{sub}</span>
                            <ArrowRight className="w-4 h-4 text-white group-hover/sub:translate-x-1 transition-transform shrink-0" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Side Preview Track Container - Shifted Further Right */}
          <div className="relative w-full lg:w-[38%] xl:w-[36%] my-auto flex justify-end lg:translate-x-4 xl:translate-x-8">

            {/* Floating Navigation Button (< >) overlapping the preview cards edge */}
            <div className="hidden lg:flex absolute -left-7 top-1/2 -translate-y-1/2 z-40 items-center justify-center">
              <div
                className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-2xl border-4 gap-1 hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: '#0D427D', borderColor: '#F2F8FF' }}
              >
                <button
                  onClick={handlePrev}
                  aria-label="Previous Industry"
                  className="p-1 hover:text-white/80 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-white/40 text-xs">|</span>
                <button
                  onClick={handleNext}
                  aria-label="Next Industry"
                  className="p-1 hover:text-white/80 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Preview Cards Track */}
            <div className="flex flex-col sm:flex-row lg:flex-row gap-5 sm:gap-6 overflow-hidden items-center justify-end py-2 w-full">

              {/* Next Industry Preview Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => triggerSlideChange((activeIndex + 1) % industriesData.length, 1)}
                className="relative w-full sm:w-1/2 lg:w-[240px] xl:w-[260px] shrink-0 h-[220px] sm:h-[250px] lg:h-[320px] rounded-[32px] overflow-hidden shadow-lg border border-white/60 group cursor-pointer bg-slate-900"
              >
                <Image
                  src={nextIndustry.image}
                  alt={nextIndustry.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300" />

                <div className="relative z-10 h-full p-6 flex flex-col justify-start">
                  <h4 className="text-xl font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors drop-shadow-md">
                    {nextIndustry.title}
                  </h4>
                </div>
              </motion.div>

              {/* Second Next Industry Preview Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => triggerSlideChange((activeIndex + 2) % industriesData.length, 1)}
                className="relative w-full sm:w-1/2 lg:w-[240px] xl:w-[260px] shrink-0 h-[220px] sm:h-[250px] lg:h-[320px] rounded-[32px] overflow-hidden shadow-lg border border-white/60 group cursor-pointer bg-slate-900 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={secondNextIndustry.image}
                  alt={secondNextIndustry.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300" />

                <div className="relative z-10 h-full p-6 flex flex-col justify-start">
                  <h4 className="text-xl font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors drop-shadow-md">
                    {secondNextIndustry.title}
                  </h4>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
          {industriesData.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => triggerSlideChange(idx, idx > activeIndex ? 1 : -1)}
              aria-label={`Go to industry ${ind.title}`}
              className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: idx === activeIndex ? '2rem' : '0.625rem',
                backgroundColor: idx === activeIndex ? '#0D427D' : '#cbd5e1',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

