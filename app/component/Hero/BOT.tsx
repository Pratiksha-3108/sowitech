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
    <section id="projects" className="w-full py-16 md:py-24 bg-[#F2F8FF] font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="border-b border-slate-200/80 pb-8 mb-12">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#0D427D] uppercase font-geist">
                BOT MODEL
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A3B] tracking-tight leading-tight">
              Benefits of the <span className="text-[#0D427D]">BOT Model</span>
            </h2>

            {/* Subtitle */}
            <p className="font-geist text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mt-3">
              Implement advanced water treatment infrastructure with minimal upfront capital investment and a flexible, low-financial-burden model.
            </p>
          </div>
        </div>

        {/* Sticky Cascading Cards Container (Progressive Top Spacing) */}
        <div className="relative flex flex-col gap-6 pb-24">
          {benefits.map((benefit, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={benefit.number}
                className="sticky bg-white border border-gray-200/90 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 transition-all duration-300 overflow-hidden"
                style={{
                  top: '96px',
                  zIndex: idx + 1,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-center">

                  {/* Benefit Image with Hover Slide Effect */}
                  <div className={`md:col-span-7 flex items-center justify-center ${isEven ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                    <div className="relative w-full aspect-[16/10] max-w-[580px] rounded-xl overflow-hidden border border-gray-200/80 bg-gray-100 shadow-sm group cursor-pointer">
                      <div className="w-[200%] h-full flex transition-transform duration-700 ease-in-out group-hover:-translate-x-1/2">
                        <div className="w-1/2 h-full relative">
                          <Image
                            src={benefit.image}
                            alt={benefit.title}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="w-1/2 h-full relative">
                          <Image
                            src={benefit.image}
                            alt={benefit.title}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefit Eyebrow, Title and Description */}
                  <div className={`md:col-span-5 flex flex-col justify-center text-left ${isEven ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                    <div className="mb-2">
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#0D427D] uppercase">
                        {benefit.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight uppercase leading-snug mb-3">
                      {benefit.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal text-justify">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


