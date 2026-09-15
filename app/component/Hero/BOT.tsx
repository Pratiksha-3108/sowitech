'use client';

import React from 'react';
import Image from 'next/image';

interface BenefitItem {
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}

const benefits: BenefitItem[] = [
  {
    number: '01',
    title: 'Zero Upfront Capital Investment',
    description: 'Implement advanced water treatment infrastructure without significant upfront capital investment.',
    tag: 'BOT BENEFIT',
    image: '/Images/benefits/costs.jpg',
  },
  {
    number: '02',
    title: 'Design, Build, Operate & Maintain',
    description: 'Sowitech manages the complete Design, Build, Operate & Maintain cycle.',
    tag: 'BOT BENEFIT',
    image: '/Images/home/untraflitration-plant.png',
  },
  {
    number: '03',
    title: 'Assured Long-Term Water Supply',
    description: 'Ensure a reliable and consistent supply of treated water with long-term operational support.',
    tag: 'BOT BENEFIT',
    image: '/Images/benefits/freshwater.jpg',
  },
  {
    number: '04',
    title: 'Asset Transfer',
    description: 'The treatment infrastructure is transferred to the client at the end of the agreement.',
    tag: 'BOT BENEFIT',
    image: '/Images/home/yaha_filtration_plant.jpg',
  },
  {
    number: '05',
    title: 'Improved Financial & ESG Performance',
    description: 'Improve cash flow while strengthening water sustainability and ESG performance.',
    tag: 'BOT BENEFIT',
    image: '/Images/benefits/esg.png',
  },
];

export default function BOTSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-white font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-gray-200 pb-8 mb-12">
          <div className="max-w-3xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
              <span className="text-xs font-bold tracking-widest text-[#0D427D] uppercase">
                BENEFITS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Benefits of the <span className="text-[#0D427D]">BOT Model</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              Implement advanced water treatment infrastructure with minimal upfront capital investment and a flexible, low-financial-burden model.
            </p>
          </div>
        </div>

        {/* Sticky Cascading Cards Container (Progressive Top Spacing) */}
        <div className="relative flex flex-col gap-6 pb-24">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.number}
              className="sticky bg-white border border-gray-200/90 rounded-2xl shadow-lg p-5 sm:p-7 md:p-8 transition-all duration-300 overflow-hidden"
              style={{
                top: `calc(85px + ${idx * 75}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-center">
                
                {/* LEFT: Card Number */}
                <div className="hidden md:flex md:col-span-2 items-center justify-center select-none">
                  <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#0D427D] tracking-tight select-none">
                    {benefit.number}
                  </span>
                </div>

                {/* MIDDLE: Benefit Image (Sharp Corners) */}
                <div className="md:col-span-5 flex items-center justify-center">
                  <div className="relative w-full aspect-[16/10] max-w-[340px] rounded-none overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover object-center"
                    />
                    {/* Mobile number overlay */}
                    <div className="md:hidden absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-mono font-bold text-[#0D427D] shadow-sm">
                      {benefit.number}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Benefit Eyebrow, Title and Description */}
                <div className="md:col-span-5 flex flex-col justify-center text-left">
                  <div className="mb-1.5">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#0D427D] uppercase">
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 tracking-tight uppercase leading-[1.25] mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] md:text-sm text-gray-600 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


