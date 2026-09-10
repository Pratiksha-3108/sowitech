'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const AboutSowitech = () => {
  return (
    <section
      id="about-sowitech"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, #0D427D 0%, #1e88e5 50%, #0D427D 100%)' }}
      />

      <div className="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-12 py-20 lg:py-28">
        {/*
          items-stretch  → both columns share the same height
          The image column uses h-full so the photo fills that height exactly,
          matching the Bildora reference where image height = content height.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">

          {/* ── LEFT: Image (stretches to match right-column height) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full min-h-[320px] -ml-8 sm:-ml-12 lg:-ml-24"
          >


            {/* Image fills the full column height */}
            <div className="relative z-10 overflow-hidden shadow-2xl w-full h-full">
              <Image
                src="/assets/architectural_hero.jpg"
                alt="Sowitech Engineering Water Treatment Facility"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Text ── */}
          <div className="flex flex-col justify-center gap-7">

            {/* Section label */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <span
                className="text-sm font-semibold px-4 py-1.5 rounded-full border"
                style={{ color: '#0D427D', borderColor: '#0D427D44', backgroundColor: '#EBF3FF' }}
              >
                About Sowitech
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-geist text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.2] text-black"
            >
              Engineering Better{' '}
              <span style={{ color: '#0D427D' }}>Water Management</span>
            </motion.h2>

            {/* Body text */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-geist flex flex-col gap-5 text-gray-600 text-[1.0625rem] leading-[1.8]"
            >
              <p>
                Water is becoming an increasingly valuable resource for modern industries. At{' '}
                <span className="font-semibold text-black">Sowitech Engineering Pvt. Ltd.</span>, we
                help businesses make better use of water through reliable treatment, recycling, and
                reuse solutions.
              </p>
              <p>
                Working in association with{' '}
                <span className="font-semibold text-black">YAHA Water Systems</span>, we deliver
                engineered solutions including Water Treatment Plants, Tertiary Treatment Plants,
                Water Recycling Systems, and STP to TTP Upgradation.
              </p>
              <p>
                Our approach combines practical engineering, advanced treatment technology, and
                sustainable water-management practices to help industries reduce freshwater
                dependency, improve water reuse, and achieve long-term operational efficiency.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex pt-1"
            >
              {/* CTA — styled like the Bildora reference button */}
              <Link
                href="/about"
                id="about-discover-btn"
                className="group inline-flex items-center gap-3 rounded-full border-2 font-semibold text-sm px-6 py-3 transition-all duration-300 hover:scale-[1.03]"
                style={{
                  borderColor: '#0D427D',
                  color: '#0D427D',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#0D427D';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#0D427D';
                }}
              >
                Discover Sowitech
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSowitech;

