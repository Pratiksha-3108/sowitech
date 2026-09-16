'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplets, Filter, RefreshCw, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import CallToAction from '../component/Hero/CallToAction';

const customEase = [0.16, 1, 0.3, 1] as const;

const solutions = [
  {
    id: 'wtp',
    title: 'Water Treatment Plants (WTP)',
    description: 'Engineered Water Treatment Plants that convert raw groundwater, surface water, or municipal intake into high-quality process water tailored for industrial and commercial applications.',
    href: '/solutions/wtp',
    icon: Droplets,
    image: '/assets/architectural_hero.jpg',
    badge: 'Raw Water Purification',
  },
  {
    id: 'ttp',
    title: 'Tertiary Treatment Plants (TTP)',
    description: 'Advanced tertiary treatment systems powered by YAHA Water Systems that convert treated STP effluent into reusable water suitable for cooling towers, HVAC, and industrial processes.',
    href: '/solutions/ttp',
    icon: Filter,
    image: '/Images/home/yaha_filtration_plant.jpg',
    badge: 'STP Effluent Recovery',
  },
  {
    id: 'water-recycling',
    title: 'Water Recycling Solutions',
    description: 'Reduce freshwater consumption by up to 70% with closed-loop industrial water recovery systems designed for continuous zero liquid discharge (ZLD) support.',
    href: '/solutions/water-recycling',
    icon: RefreshCw,
    image: '/Images/home/untraflitration-plant.png',
    badge: 'Closed-Loop Reuse',
  },
  {
    id: 'stp-upgradation',
    title: 'STP to TTP Upgradation',
    description: 'Upgrade your existing Sewage Treatment Plant (STP) with modern Hybrid Zen Media Filtration technology to double water recovery quality without building new civil structures.',
    href: '/solutions/stp-upgradation',
    icon: Settings,
    image: '/assets/mission.jpg',
    badge: 'Plant Retrofitting',
  },
];

export default function SolutionsMainPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#0D2244] via-[#0D427D] to-[#0A1A3B] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-200 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block mb-4">
            Engineered Water Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Comprehensive Water Management <span className="text-blue-300">Solutions</span>
          </h1>
          <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto">
            From raw water intake to advanced recycling — explore Sowitech&apos;s 4 core water treatment solutions engineered for sustainable industrial performance.
          </p>
        </div>
      </section>

      {/* ── 4 SOLUTIONS GRID ── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: customEase }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 hover:border-[#0D427D]/40 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-[#0D427D] uppercase tracking-wider shadow-sm">
                      {sol.badge}
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D427D] flex items-center justify-center mb-5 group-hover:bg-[#0D427D] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0D2244] mb-3 leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {sol.description}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#0D427D] group-hover:text-[#F39A1E] transition-colors"
                  >
                    <span>View Solution Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}
