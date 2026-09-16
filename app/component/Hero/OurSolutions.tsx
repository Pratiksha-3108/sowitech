'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Droplets, Filter, RefreshCw, Settings } from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1] as const;

const solutions = [
  {
    id: 0,
    anchorId: 'wtp',
    pageHref: '/solutions/wtp',
    title: 'Water Treatment Plants',
    subtitle: '(WTP)',
    description:
      'Engineered Water Treatment Plants that convert raw water into high-quality process water for industrial and commercial applications.',
    linkText: 'Explore WTP',
    icon: Droplets,
    image: '/assets/architectural_hero.jpg',
    number: '01',
  },
  {
    id: 1,
    anchorId: 'ttp',
    pageHref: '/solutions/ttp',
    title: 'Tertiary Treatment Plants',
    subtitle: '(TTP)',
    description:
      'Advanced tertiary treatment systems that convert treated STP water into reusable water suitable for cooling towers, HVAC systems, utility applications, construction, and industrial processes.',
    linkText: 'Explore TTP',
    icon: Filter,
    image: '/Images/home/yaha_filtration_plant.jpg',
    number: '02',
  },
  {
    id: 2,
    anchorId: 'water-recycling-solution',
    pageHref: '/solutions/water-recycling',
    title: 'Water Recycling Solutions',
    subtitle: '',
    description:
      'Reduce freshwater consumption by recycling treated wastewater for multiple non-potable applications across industrial facilities.',
    linkText: 'Explore Recycling',
    icon: RefreshCw,
    image: '/Images/home/untraflitration-plant.png',
    number: '03',
  },
  {
    id: 3,
    anchorId: 'stp-upgradation',
    pageHref: '/solutions/stp-upgradation',
    title: 'STP to TTP Upgradation',
    subtitle: '',
    description:
      'Upgrade your existing STP with advanced tertiary treatment technology to maximize water recovery and improve reuse quality without building a new treatment system.',
    linkText: 'Learn More',
    icon: Settings,
    image: '/assets/mission.jpg',
    number: '04',
  },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: customEase },
  },
};

export default function OurSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Track which card is in view to change the sticky image */
  useEffect(() => {
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.45 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section
      id="solutions"
      className="relative w-full scroll-mt-20"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      {/* ── Section header ── */}
      <div className="text-center px-6 pt-20 pb-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-5"
        >
          <span
            className="text-sm font-semibold px-4 py-1.5 rounded-full border"
            style={{ color: '#0D427D', borderColor: '#0D427D44', backgroundColor: '#EBF3FF' }}
          >
            Our Solutions
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-geist text-4xl md:text-5xl font-extrabold text-black leading-tight"
        >
          Engineered for{' '}
          <span style={{ color: '#0D427D' }}>Every Water Challenge</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-geist mt-5 text-gray-500 text-lg leading-relaxed"
        >
          From raw water intake to advanced recycling — our solutions cover every step of the water management lifecycle.
        </motion.p>
      </div>

      {/* ── Two-column sticky layout ── */}
      <div className="flex flex-col lg:flex-row">

        {/* LEFT: Sticky image panel — desktop only */}
        <div className="hidden lg:block sticky top-0 h-screen w-[40%] flex-shrink-0 overflow-hidden flex items-center py-10">

          {/* Animated image — shifted right with left padding */}
          <div className="absolute inset-y-[8%] left-8 right-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ scale: 1.12, opacity: 0 }}
                animate={{ scale: 1.0, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.7, ease: customEase }}
                className="absolute inset-0"
              >
                <Image
                  src={solutions[activeIndex].image}
                  alt={solutions[activeIndex].title}
                  fill
                  priority
                  className="object-cover object-center"
                />
                {/* Colour tint */}
                <div className="absolute inset-0 bg-[#0D427D]/15" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* RIGHT: Scrollable service cards */}
        <div className="flex-1 flex flex-col">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                id={solution.anchorId}
                ref={el => { cardRefs.current[i] = el; }}
                className="min-h-screen flex items-center scroll-mt-20 px-12 sm:px-16 lg:px-20 xl:px-28 py-24 lg:py-0"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="max-w-xl w-full flex flex-col gap-8"
                >
                  {/* Mobile image */}
                  <motion.div
                    variants={fadeUpVariants}
                    className="lg:hidden relative w-full aspect-[16/9] overflow-hidden shadow-xl"
                  >
                    <Image src={solution.image} alt={solution.title} fill className="object-cover" />
                  </motion.div>

                  {/* Ghost number */}
                  <motion.div variants={fadeUpVariants} className="flex items-center gap-4">
                    <span
                      className="font-geist text-7xl font-extrabold leading-none select-none"
                      style={{ color: '#0D427D', opacity: 0.12 }}
                    >
                      {solution.number}
                    </span>
                    <div className="flex-1 h-px bg-black/10" />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    variants={fadeUpVariants}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: '#EBF3FF' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#0D427D' }} strokeWidth={1.5} />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    variants={fadeUpVariants}
                    className="font-geist text-3xl sm:text-[2.25rem] font-extrabold leading-tight text-black"
                  >
                    {solution.title}{' '}
                    {solution.subtitle && (
                      <span style={{ color: '#0D427D' }}>{solution.subtitle}</span>
                    )}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    variants={fadeUpVariants}
                    className="font-geist text-gray-600 text-[1.0625rem] leading-[1.85]"
                  >
                    {solution.description}
                  </motion.p>

                  {/* CTA */}
                  <motion.div variants={fadeUpVariants}>
                    <Link
                      href={solution.pageHref}
                      className="group inline-flex items-center gap-3 rounded-full border-2 font-semibold text-sm px-7 py-3 transition-all duration-300 hover:scale-[1.03]"
                      style={{ borderColor: '#0D427D', color: '#0D427D', backgroundColor: 'transparent' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#0D427D';
                        (e.currentTarget as HTMLElement).style.color = '#ffffff';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = '#0D427D';
                      }}
                    >
                      {solution.linkText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
