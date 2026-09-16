'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const customEase = [0.16, 1, 0.3, 1] as const;

const benefits = [
  { id: 'freshwater', image: '/Images/benefits/freshwater.jpg', title: 'Freshwater Savings', description: 'Reduce municipal water consumption by 30–70% through closed-loop recycling systems. Our solutions recover and reuse process water continuously, cutting dependency on fresh supply.' },
  { id: 'costs', image: '/Images/benefits/costs.jpg', title: 'Cost Optimisation', description: 'Lower operational expenditure significantly by reducing water procurement, disposal, and effluent treatment costs. Our systems deliver measurable ROI within the first operating year.' },
  { id: 'esg', image: '/Images/benefits/esg.png', title: 'ESG & Sustainability', description: 'Meet environmental compliance targets and ESG reporting commitments. Water recycling reduces discharge volumes and demonstrates responsible resource stewardship to investors.' },
  { id: 'independence', image: '/Images/benefits/independence.jpg', title: 'Resource Independence', description: 'Secure 100% treated water supply from your own recycling infrastructure. Eliminate reliance on external sources and maintain uninterrupted operations during water scarcity.' },
  { id: 'circular', image: '/Images/benefits/circular.png', title: 'Circular Economy', description: 'Adopt a closed-loop water strategy where every litre treated becomes a valuable input back into your process, aligned with circular economy principles for long-term resilience.' },
  { id: 'resilience', image: '/Images/benefits/resilience.png', title: 'Operational Resilience', description: 'Build zero-downtime water infrastructure with redundant treatment trains and remote monitoring ensuring consistent water quality regardless of raw-water fluctuations.' },
];

const BenefitsWaterRecycling = () => {
  return (
    <section id="water-recycling" className="w-full bg-white font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-16">

          {/* RIGHT - sticky panel */}
          <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0 lg:sticky lg:top-0 lg:self-start lg:h-screen flex flex-col justify-center py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: customEase }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[2px] bg-[#F39A1E]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F39A1E]">Key Benefits</p>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold text-[#0D1F3C] leading-[1.05] tracking-tight mb-6">
                Benefits
              </h2>
              <div className="w-10 h-px bg-slate-200 mb-6" />
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-xs">
                Boost your operational efficiency, cut costs, and meet sustainability goals with advanced water recycling from Sowitech Engineering.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[#0D1F3C] text-sm font-semibold hover:text-[#F39A1E] transition-colors duration-200"
              >
                <span className="text-[#F39A1E] text-base">↳</span>
                Get started
              </Link>
            </motion.div>
          </div>

          {/* LEFT - scrolling list */}
          <div className="flex-1 flex flex-col py-16 lg:py-24">
            {benefits.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: customEase }}
              >
                <div className="w-full h-px bg-slate-100 mb-7" />
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-7">
                  <div className="relative sm:w-[200px] sm:h-[140px] w-full h-44 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                    <Image src={b.image} alt={b.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="text-base font-bold text-[#0D1F3C] leading-snug">{b.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="w-full h-px bg-slate-100" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsWaterRecycling;