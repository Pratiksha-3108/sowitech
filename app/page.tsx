import React from 'react';
import Navbar from './component/Navbar';
import OurSolutions from './component/Hero/OurSolutions';
import WhyChoose from './component/Hero/Whychoose';
import BOTSection from './component/Hero/BOT';
import BenefitsWaterRecycling from './component/Hero/BenefitsWaterRecycling';
import IndustriesWeServe from './component/Hero/IndustriesWeServe';
import CallToAction from './component/Hero/CallToAction';
import HeroSection from './component/Hero/HeroSection';
import AboutSowitech from './component/Hero/AboutSowitech';
import Footer from './component/Footer';

export default function SowitechLightHomePage() {
  return (
    <div className="relative">
      <Navbar />
      {/* ---------------- HERO SECTION ---------------- */}
      <HeroSection />
      {/* ---------------- ABOUT SECTION ---------------- */}
      <AboutSowitech />
      <OurSolutions />
      <WhyChoose />
      <BenefitsWaterRecycling />
      <BOTSection />
      <IndustriesWeServe />
      <CallToAction />
      <Footer />
    </div>
  );
}