import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../component/Navbar';
import YahaHero from '../component/YahaTechnology/YahaHero';
import Footer from '../component/Footer';

export const metadata: Metadata = {
  title: 'YAHA Technology Partner | Sowitech Engineering',
  description:
    'Discover YAHA Water Systems technology partnership with Sowitech Engineering for advanced water treatment, filtration, and recycling systems.',
};

export default function YahaTechnologyPage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#0A1A3B]">
      <Navbar />
      <main className="pt-20">
        <YahaHero />
      </main>
      <Footer />
    </div>
  );
}
