'use client';

import React from 'react';
import Navbar from '../component/Navbar';
import AboutHero from '../component/About/AboutHero';
import WhoWeAre from '../component/About/WhoWeAre';
import MissionVision from '../component/About/MissionVision';
import WhatWeDo from '../component/About/WhatWeDo';
import WhyChooseSowitech from '../component/About/WhyChooseSowitech';
import TechnologyPartner from '../component/About/TechnologyPartner';
import OurCommitment from '../component/About/OurCommitment';
import CallToAction from '../component/Hero/CallToAction';
import Footer from '../component/Footer';

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      {/* <WhatWeDo /> */}
      <WhyChooseSowitech />
      <TechnologyPartner />
      <OurCommitment />
      <CallToAction />
      <Footer />
    </div>
  );
}

