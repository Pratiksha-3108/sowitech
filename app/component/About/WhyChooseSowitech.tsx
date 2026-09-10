'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

/* ── Reasons data ─────────────────────────────────────── */
const reasons = [
  {
    number: '01',
    title: 'Technical Expertise',
    description:
      'Experienced engineering team delivering practical, efficient, and field-proven water treatment solutions across diverse industrial sectors.',
  },
  {
    number: '02',
    title: 'Customized Solutions',
    description:
      'Every project is designed according to your water quality, usage patterns, and specific operational requirements — no one-size-fits-all approach.',
  },
  {
    number: '03',
    title: 'End-to-End Support',
    description:
      'From consultation and design to installation, commissioning, and ongoing maintenance — we stay with you through the full lifecycle.',
  },
  {
    number: '04',
    title: 'Sustainability Focus',
    description:
      'Helping organizations achieve water conservation goals, ESG objectives, and measurable operational efficiency through responsible engineering.',
  },
];

/* ── Animated reason row ─────────────────────────────── */
function ReasonRow({
  item,
  index,
}: {
  item: (typeof reasons)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="group flex flex-col gap-2 py-7 border-b last:border-b-0"
      style={{ borderColor: 'rgba(13,66,125,0.1)' }}
    >
      {/* Number — title row */}
      <div className="flex items-baseline gap-4">
        <span
          className="text-sm font-extrabold tabular-nums shrink-0"
          style={{ color: '#7AAED6' }}
        >
          {item.number}
        </span>
        <span
          className="text-xl sm:text-2xl md:text-[1.6rem] font-extrabold leading-snug tracking-tight"
          style={{ color: '#0A1E3D' }}
        >
          — {item.title}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm sm:text-base leading-relaxed pl-9"
        style={{ color: '#3D5A7A' }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

/* ── Main section ─────────────────────────────────────── */
export default function WhyChooseSowitech() {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      className="w-full font-sans relative overflow-hidden"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: 'rgba(13,66,125,0.07)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: 'rgba(122,174,214,0.09)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Content ─────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-[0.2em] uppercase mb-7 border"
              style={{
                backgroundColor: 'rgba(13,66,125,0.07)',
                borderColor: 'rgba(13,66,125,0.15)',
                color: '#0D427D',
              }}
            >
              Our Approach
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-10"
              style={{ color: '#0A1E3D' }}
            >
              A Better Way to Manage Water,{' '}
              <br className="hidden sm:inline" />
              <span style={{ color: '#0D427D' }}>From Start to Finish.</span>
            </motion.h2>

            {/* Reason rows */}
            <div>
              {reasons.map((item, i) => (
                <ReasonRow key={item.number} item={item} index={i} />
              ))}
            </div>

          </div>

          {/* ── RIGHT: Sticky image ────────────────── */}
          <div
            ref={imageRef}
            className="lg:w-[420px] xl:w-[460px] shrink-0 lg:sticky lg:top-24"
          >
            <div
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 24px 64px rgba(13,66,125,0.18)',
              }}
            >
              {/* Parallax image */}
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-[-8%] w-[116%] h-[116%]"
              >
                <Image
                  src="/Images/home/untraflitration-plant.png"
                  alt="Why Choose Sowitech — Water Treatment Plant"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 460px"
                  priority
                />
              </motion.div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(13,66,125,0.25) 0%, transparent 40%, rgba(10,30,61,0.6) 100%)',
                }}
              />

              {/* Top dot badge */}
              <div
                className="absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#0D427D' }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>

              {/* Bottom label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <p
                  className="text-white text-lg font-bold leading-snug"
                >
                  Why Businesses Choose Sowitech
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  Proven water engineering excellence
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
