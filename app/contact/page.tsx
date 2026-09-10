import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../component/Navbar';
import ContactHero from '../component/Contact/ContactHero';
import Footer from '../component/Footer';

export const metadata: Metadata = {
  title: 'Contact Water Treatment Plant Company | Sowitech Engineering',
  description:
    'Contact Sowitech Engineering for Water Treatment Plants, TTP, Water Recycling Solutions, and Water Audit consultation.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#0A1A3B]">
      <Navbar />
      <main className="pt-20">
        <ContactHero />
      </main>
      <Footer />
    </div>
  );
}

