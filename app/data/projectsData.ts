export interface PerformanceMetric {
  parameter: string;
  guaranteed: string;
  achieved: string;
  unit: string;
  reductionPercentage?: string;
}

export interface ProjectDetail {
  id: string;
  projectNumber: string;
  title: string;
  shortTitle: string;
  client: string;
  clientLogo?: string;
  location: string;
  executedBy: string;
  partner: string;
  contractRef: {
    noaRef: string;
    noaDate: string;
    poNo: string;
    poDate: string;
  };
  scope: string;
  capacity: string;
  technology: string;
  timeline: {
    startDate: string;
    completionDate: string;
    duration: string;
    testDuration: string;
  };
  performanceParameters: PerformanceMetric[];
  certification: {
    title: string;
    issuedBy: string;
    date: string;
    signatories: {
      name: string;
      role: string;
    }[];
    status: string;
  };
  visualProof: {
    title: string;
    description: string;
    samples: {
      stage: string;
      label: string;
      turbidity: string;
      color: string;
      description: string;
    }[];
  };
  highlights: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  images: {
    main: string;
    gallery: string[];
  };
  description: string[];
  features: string[];
  nextProjectId?: string;
  prevProjectId?: string;
}

export const projectsDatabase: Record<string, ProjectDetail> = {
  'ntpc-dadri-tertiary': {
    id: 'ntpc-dadri-tertiary',
    projectNumber: 'Project 01',
    title: '4 MLD Activated Filter Media (AFM) Tertiary Treatment Plant',
    shortTitle: 'NTPC Dadri – 4 MLD Tertiary Treatment Plant',
    client: 'NTPC Ltd.',
    location: 'Jaripatka, Mahavir Nagar, Nagpur – 440014',
    executedBy: 'M/s Yaha Water Systems',
    partner: 'Sowitech Engineering Pvt. Ltd.',
    contractRef: {
      noaRef: 'CM-AFM-TT-NETRA-9-9900217942-FC-NOA',
      noaDate: '22.02.2022',
      poNo: '4400000432-162-1001',
      poDate: '28.09.2022',
    },
    scope: 'Supply, Installation & Commissioning of a 4 MLD Activated Filter Media (AFM) Tertiary Treatment Plant for NTPC Ltd.',
    capacity: '4 MLD (Million Litres per Day)',
    technology: 'Activated Filter Media (AFM) Tertiary Filtration',
    timeline: {
      startDate: '27.09.2023',
      completionDate: '30.09.2023',
      duration: 'Commissioned on Schedule',
      testDuration: '72 Hours Continuous Performance Test',
    },
    performanceParameters: [
      {
        parameter: 'Total Suspended Solids (TSS)',
        guaranteed: '< 10 mg/L',
        achieved: '3.68 mg/L',
        unit: 'mg/L',
        reductionPercentage: '63.2% Better than Guarantee',
      },
      {
        parameter: 'Turbidity',
        guaranteed: '< 5 NTU',
        achieved: '3.59 NTU',
        unit: 'NTU',
        reductionPercentage: '28.2% Better than Guarantee',
      },
      {
        parameter: 'Chemical Oxygen Demand (COD)',
        guaranteed: '< 50 mg/L',
        achieved: '23.6 mg/L',
        unit: 'mg/L',
        reductionPercentage: '52.8% Better than Guarantee',
      },
      {
        parameter: 'Biochemical Oxygen Demand (BOD)',
        guaranteed: '< 10 mg/L',
        achieved: '3.10 mg/L',
        unit: 'mg/L',
        reductionPercentage: '69.0% Better than Guarantee',
      },
    ],
    certification: {
      title: 'Functional Guarantee Certificate',
      issuedBy: 'NTPC Ltd.',
      date: '02.11.2023',
      signatories: [
        {
          name: 'Kiran Dinakar',
          role: 'Manager, NETRA (NTPC Energy Technology Research Alliance)',
        },
        {
          name: 'Suresh Kumar Sharma',
          role: 'AGM, T&C (Testing & Commissioning)',
        },
      ],
      status: '100% Certified & Compliant',
    },
    visualProof: {
      title: 'Visual Proof & Quality Transformation',
      description: 'Water quality comparison across Inlet, Backwash, and Outlet samples demonstrates a crystal-clear, high-clarity treated output exceeding all prescribed environmental and industrial reuse standards.',
      samples: [
        {
          stage: 'Raw Inlet',
          label: 'Inlet STP Effluent',
          turbidity: 'High Turbidity / TSS',
          color: 'from-amber-600/30 to-amber-900/40',
          description: 'Untreated tertiary intake with noticeable suspended solids and organic load.',
        },
        {
          stage: 'Backwash Cycle',
          label: 'Backwash Effluent',
          turbidity: 'Discharged Sludge & Residue',
          color: 'from-slate-700/30 to-slate-900/40',
          description: 'High-efficiency backwash cleansing Activated Filter Media without chemical degradation.',
        },
        {
          stage: 'Treated Outlet',
          label: 'Pure AFM Output',
          turbidity: '3.59 NTU / 3.68 mg/L TSS',
          color: 'from-cyan-400/30 to-blue-600/40',
          description: 'Crystal-clear treated water ready for cooling towers, boiler feed, and reuse applications.',
        },
      ],
    },
    highlights: [
      {
        label: 'Plant Capacity',
        value: '4 MLD',
        sublabel: 'Million Litres Per Day',
      },
      {
        label: 'Turbidity Achieved',
        value: '3.59 NTU',
        sublabel: 'Guaranteed: < 5 NTU',
      },
      {
        label: 'TSS Achieved',
        value: '3.68 mg/L',
        sublabel: 'Guaranteed: < 10 mg/L',
      },
      {
        label: 'BOD Achieved',
        value: '3.10 mg/L',
        sublabel: 'Guaranteed: < 10 mg/L',
      },
    ],
    images: {
      main: '/Images/home/yaha_filtration_plant.jpg',
      gallery: [
        '/Images/home/yaha_filtration_plant.jpg',
        '/Images/home/untraflitration-plant.png',
        '/Images/home/hybrid_zen_plant_plain.jpg',
      ],
    },
    description: [
      'NTPC Ltd. entrusted M/s Yaha Water Systems with the supply, installation, and commissioning of a 4 MLD Activated Filter Media (AFM) Tertiary Treatment Plant to convert secondary treated effluent into high-clarity reusable process water.',
      'Activated Filter Media (AFM) provides superior filtration performance down to sub-micron levels, outperforming conventional sand media while offering permanent bio-resistant properties and self-sterilizing surface activation.',
      'Following a comprehensive 72-hour continuous performance test conducted between 27.09.2023 and 30.09.2023, the plant surpassed all stringent guaranteed performance criteria across TSS, Turbidity, COD, and BOD parameters.',
    ],
    features: [
      'Activated Filter Media (AFM) filtration technology with self-sterilizing surface activation',
      'Over 60% improvement beyond contractual TSS and BOD guarantee thresholds',
      'Continuous 72-hour uninterrupted performance test validation under full operational load',
      'Officially verified and certified by NTPC NETRA and T&C leadership',
      'Zero biofouling, extended media lifespan, and optimized backwash water efficiency',
      'Direct integration with existing plant utilities for sustainable cooling tower reuse',
    ],
    nextProjectId: 'sail-visl-drinking',
  },
};
