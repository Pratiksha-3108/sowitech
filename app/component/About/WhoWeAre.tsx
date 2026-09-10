'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/* ─────────────────────────────────────────────
   Animated Word — fades in & bolds on scroll
───────────────────────────────────────────── */
function AnimatedWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const [isBold, setIsBold] = useState(false);
  const opacity = useTransform(progress, [start, end], [0.25, 1]);

  useEffect(() => {
    const midpoint = start + (end - start) * 0.5;
    return progress.on('change', (v) => {
      setIsBold(v >= midpoint);
    });
  }, [progress, start, end]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.27em]"
      animate={{ fontWeight: isBold ? 700 : 400 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {word}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   Full section
───────────────────────────────────────────── */
const PARAGRAPH_1 =
  'Sowitech Engineering Pvt. Ltd. is a specialized Water Treatment Company committed to helping industries optimize water usage through innovative treatment, recycling, and reuse solutions.';

const PARAGRAPH_2 =
  'Working in association with YAHA Water Systems, we provide engineered Water Treatment Plants (WTP), Tertiary Treatment Plants (TTP), and Water Recycling Systems that help organizations reduce freshwater dependency while supporting environmental sustainability.';

function toWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words1 = toWords(PARAGRAPH_1);
  const words2 = toWords(PARAGRAPH_2);
  const total = words1.length + words2.length;

  function range(index: number): [number, number] {
    const step = 1 / total;
    const s = index * step;
    const e = Math.min(s + step * 2.5, 1);
    return [s, e];
  }

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="w-full font-sans"
      style={{ backgroundColor: '#F2F8FF' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── LEFT LABEL ────────────────────────────── */}
          <div className="lg:w-[220px] shrink-0 lg:sticky lg:top-36">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: 'easeInOut' }}
              className="origin-left h-[3px] w-10 mb-4 rounded-full"
              style={{ backgroundColor: '#0D427D' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[11px] font-extrabold tracking-[0.25em] uppercase"
              style={{ color: '#0D427D' }}
            >
              Who We Are
            </motion.p>
          </div>

          {/* ── RIGHT CONTENT ─────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Paragraph 1 */}
            <p
              className="text-xl md:text-2xl lg:text-[1.65rem] leading-[1.8] mb-8 select-none"
              style={{ color: '#0D2244' }}
            >
              {words1.map((word, i) => {
                const [s, e] = range(i);
                return (
                  <AnimatedWord
                    key={`p1-${i}`}
                    word={word}
                    progress={scrollYProgress}
                    start={s}
                    end={e}
                  />
                );
              })}
            </p>

            {/* Thin divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeInOut', delay: 0.1 }}
              className="origin-left h-px mb-8 rounded-full w-full"
              style={{ backgroundColor: '#0D427D', opacity: 0.18 }}
            />

            {/* Paragraph 2 */}
            <p
              className="text-xl md:text-2xl lg:text-[1.65rem] leading-[1.8] select-none"
              style={{ color: '#0D2244' }}
            >
              {words2.map((word, i) => {
                const [s, e] = range(words1.length + i);
                return (
                  <AnimatedWord
                    key={`p2-${i}`}
                    word={word}
                    progress={scrollYProgress}
                    start={s}
                    end={e}
                  />
                );
              })}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
