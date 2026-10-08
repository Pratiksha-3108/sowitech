import type { Metadata } from 'next';
import IndustriesClient from './IndustriesClient';

export const metadata: Metadata = {
  title: 'Water Treatment Solutions for Industries | Sowitech Engineering',
  description:
    'Sowitech Engineering delivers water treatment, tertiary treatment and water recycling solutions for manufacturing, automotive, data centres, hospitals, hotels and more.',
  keywords: [
    'Water Treatment Solutions for Industries',
    'Industrial Water Treatment Plants',
    'Manufacturing Water Recycling',
    'Automotive Water Treatment',
    'Data Centre Water Management',
    'Hospital Water Treatment',
    'Hotel Water Recycling',
    'Educational Campus Water Reuse',
    'Residential Society STP TTP',
    'Municipal Water Treatment',
    'MIDC Industrial Parks Water',
  ],
  openGraph: {
    title: 'Water Treatment Solutions for Industries | Sowitech Engineering',
    description:
      'Sowitech Engineering delivers water treatment, tertiary treatment and water recycling solutions for manufacturing, automotive, data centres, hospitals, hotels and more.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
