'use client';

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const customEase = [0.16, 1, 0.3, 1] as const;

const CallToAction = () => {
  return (
    <section className="relative w-full py-16 md:py-24 flex items-center overflow-hidden h-[400px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/Images/home/contactbanner.png')" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat">
        {/* Gradient Overlay for text readability (darker on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/30 via-[#001f3f]/60 to-[#001f3f]/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full flex justify-end">
        <div className="max-w-xl text-white">
          <motion.h2
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 leading-tight"
          >
            Build a Sustainable<br /> Water Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="text-sm md:text-base text-gray-200 mb-2 leading-relaxed"
          >
            Water reuse is no longer an option—it's a strategic investment for long-term business growth and environmental responsibility.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed"
          >
            Partner with Sowitech Engineering to implement reliable water treatment and recycling solutions tailored to your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
            className="flex items-center gap-3 mb-6"
          >
            <Phone className="w-5 h-5 text-blue-300" />
            <a href="tel:+919730014264" className="text-lg md:text-lg font-bold tracking-wide hover:text-blue-300 transition-colors">
              +91 97300 14264
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A1A3B] px-8 py-3.5 rounded-md font-semibold transition-all duration-300 hover:bg-gray-100 shadow-lg text-sm md:text-base w-fit"
            >
              Contact Our Experts
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
