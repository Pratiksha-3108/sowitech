'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface IndustryCard {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

const industriesData: IndustryCard[] = [
  {
    id: 1,
    title: 'Manufacturing',
    description:
      'Reliable treatment and recycling systems engineered for high-volume industrial operations.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    href: '/contact',
  },
  {
    id: 2,
    title: 'Automotive',
    description:
      'Advanced water treatment and reuse solutions for manufacturing and process applications.',
    image:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
    href: '/contact',
  },
  {
    id: 3,
    title: 'Data Centres',
    description:
      'High-purity water solutions for uninterrupted operations and energy efficiency.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    href: '/contact',
  },
  {
    id: 4,
    title: 'Hospitals',
    description:
      'Safe, reliable and compliant water systems for better healthcare environments.',
    image:
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop',
    href: '/contact',
  },
  {
    id: 5,
    title: 'Chemical Processing',
    description:
      'Specialty process water conditioning, chemical effluent recovery, and ZLD systems.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
    href: '/contact',
  },
  {
    id: 6,
    title: 'Food & Beverages',
    description:
      'Sanitary grade water treatment and compliant high-BOD wastewater digestion.',
    image:
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop',
    href: '/contact',
  },
];

export default function IndustriesWeServe() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated dataset for seamless 100% infinite continuous marquee loop
  const sliderItems = [...industriesData, ...industriesData];

  return (
    <section
      id="industries"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F2F7FC] overflow-hidden scroll-mt-20 font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* LEFT COLUMN: Section Header */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6 sm:space-y-8 pr-0 lg:pr-2">
            <div>
              {/* Category Tagline */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-3"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-[#0D427D] uppercase font-geist">
                  INDUSTRIES WE SERVE
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-geist text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#0A1A3B] tracking-tight leading-[1.18] mb-4"
              >
                Water Solutions <br />
                Built for <span className="text-[#0D427D]">Every Industry</span>
              </motion.h2>

              {/* Description Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-geist text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xs mb-6"
              >
                From industrial facilities to large-scale communities, we design
                water treatment and reuse systems around the specific demands of
                every sector.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#0D427D] text-[#0D427D] bg-white font-semibold text-xs hover:bg-[#0D427D] hover:text-white transition-colors duration-300 group"
                >
                  <span>Explore All Industries</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Continuous Infinite Slider Track (10s Full Loop, Clean Borders, No Blur/Shadow) */}
          <div
            className="lg:col-span-9 relative overflow-hidden py-4 px-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-5 w-max"
              animate={isPaused ? { x: undefined } : { x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 30,
                repeat: Infinity,
              }}
            >
              {sliderItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="shrink-0 w-[270px] sm:w-[290px] lg:w-[300px]"
                >
                  {/* Full-Height Image Card Container */}
                  <div className="relative w-full h-[350px] sm:h-[380px] rounded-[22px] overflow-hidden border border-slate-200 group cursor-pointer">

                    {/* Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Tint Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Bottom Floating White Content Box - Uniform Fixed Height Across All Cards */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 bg-white rounded-[18px] p-4 border border-slate-200 flex flex-col justify-between h-[140px] transition-transform duration-300 group-hover:-translate-y-1">
                      <div>
                        <h3 className="text-slate-900 font-extrabold text-sm sm:text-base mb-1.5 group-hover:text-[#0D427D] transition-colors truncate">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D427D] hover:text-[#09325f] transition-colors group/link"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
