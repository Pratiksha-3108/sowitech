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
    nextProjectId: 'visl-bhadravathi-drinking-water',
  },
  'visl-bhadravathi-drinking-water': {
    id: 'visl-bhadravathi-drinking-water',
    projectNumber: 'Project 02',
    title: '2 MGD Drinking Water Treatment System',
    shortTitle: 'VISL Plant, Bhadravathi – 2 MGD Drinking Water Treatment',
    client: 'Steel Authority of India Limited (SAIL), Visvesvaraya Iron & Steel Plant (VISL)',
    location: 'Bhadravathi, Karnataka',
    executedBy: 'Sowitech Engineering Pvt. Ltd.',
    partner: 'Steel Authority of India Limited (SAIL)',
    contractRef: {
      noaRef: 'MM/2021-22/002, dated 29.06.2021',
      noaDate: '29.06.2021',
      poNo: '3925117, dated 15.07.2021',
      poDate: '15.07.2021',
    },
    scope: 'Design, Engineering, Supply, Installation & Commissioning of a 2MGD Drinking Water System for the VISL Plant.',
    capacity: '2 MGD (Million Gallons per Day)',
    technology: 'Horizontal Split Casing Pumping & High-Efficiency Filtration',
    timeline: {
      startDate: '29.06.2021',
      completionDate: '07.01.2023',
      duration: 'Commissioned on Schedule',
      testDuration: 'Performance Guarantee Test Completed',
    },
    performanceParameters: [
      {
        parameter: 'Total Suspended Solids (TSS)',
        guaranteed: '< 1 mg/L',
        achieved: '0.85 mg/L',
        unit: 'mg/L',
        reductionPercentage: '15% Better than Guarantee',
      },
      {
        parameter: 'pH',
        guaranteed: '7.00–8.50',
        achieved: '7.42',
        unit: 'pH',
        reductionPercentage: 'Optimal pH Range',
      },
      {
        parameter: 'Turbidity',
        guaranteed: '< 1 NTU',
        achieved: '0.98 NTU',
        unit: 'NTU',
        reductionPercentage: 'Compliant with Drinking Water Standard',
      },
      {
        parameter: 'Horizontal Split Casing Pump Flow Rate',
        guaranteed: '180–200 m³/hr per pump (+360–400 m³/hr for 2 pumps)',
        achieved: '465 m³/hr total (2 pumps at 3 bar pressure)',
        unit: 'm³/hr',
        reductionPercentage: 'Exceeded Design Capacity',
      },
      {
        parameter: 'Filtered (Drinking) Water Flow Rate',
        guaranteed: '380 m³/hr min.',
        achieved: '383 m³/hr',
        unit: 'm³/hr',
        reductionPercentage: '100.8% of Target Flow Rate',
      },
    ],
    certification: {
      title: 'Performance Guarantee Certificate',
      issuedBy: 'Steel Authority of India Limited (SAIL)',
      date: '13.01.2023',
      signatories: [
        {
          name: 'Ravichandran T.',
          role: 'General Manager (Services), SAIL - VISL',
        },
      ],
      status: '100% Certified & Compliant',
    },
    visualProof: {
      title: 'Visual Proof & Water Quality Transformation',
      description: 'Water quality comparison across Raw Intake, Process Filtration, and Pure Drinking Water output demonstrating compliance with stringent drinking water standards.',
      samples: [
        {
          stage: 'Raw Inlet',
          label: 'Raw Water Intake',
          turbidity: 'High Turbidity / TSS',
          color: 'from-amber-600/30 to-amber-900/40',
          description: 'Raw water intake from source before split casing pumping and filtration.',
        },
        {
          stage: 'Filtration Stage',
          label: 'Multi-Media Filtration',
          turbidity: 'Sediment & Particulate Removal',
          color: 'from-slate-700/30 to-slate-900/40',
          description: 'High-rate filtration removes suspended solids down to sub-1 mg/L levels.',
        },
        {
          stage: 'Treated Outlet',
          label: 'Pure Drinking Water Output',
          turbidity: '0.98 NTU / 0.85 mg/L TSS',
          color: 'from-cyan-400/30 to-blue-600/40',
          description: 'Crystal-clear drinking water delivered at 383 m³/hr for VISL plant supply.',
        },
      ],
    },
    highlights: [
      {
        label: 'Plant Capacity',
        value: '2 MGD',
        sublabel: 'Million Gallons Per Day',
      },
      {
        label: 'Turbidity Achieved',
        value: '0.98 NTU',
        sublabel: 'Guaranteed: < 1 NTU',
      },
      {
        label: 'TSS Achieved',
        value: '0.85 mg/L',
        sublabel: 'Guaranteed: < 1 mg/L',
      },
      {
        label: 'Pump Discharge',
        value: '465 m³/hr',
        sublabel: '2 pumps at 3 bar pressure',
      },
    ],
    images: {
      main: '/assets/architectural_hero.jpg',
      gallery: [
        '/assets/architectural_hero.jpg',
        '/Images/home/yaha_filtration_plant.jpg',
        '/Images/home/untraflitration-plant.png',
      ],
    },
    description: [
      'Sowitech Engineering Pvt. Ltd. executed the Design, Engineering, Supply, Installation & Commissioning of a 2 MGD Drinking Water Treatment System for the Visvesvaraya Iron & Steel Plant (VISL), Bhadravathi, under Steel Authority of India Limited (SAIL).',
      'The installation includes high-capacity horizontal split casing pumps delivering a verified 465 m³/hr total flow rate at 3 bar pressure, easily handling total site distribution requirements.',
      'Comprehensive performance guarantee testing completed on 07.01.2023 confirmed 0.85 mg/L TSS, 0.98 NTU Turbidity, and 7.42 pH, officially certified by General Manager (Services) Ravichandran T. on 13.01.2023.',
    ],
    features: [
      '2 MGD Capacity Drinking Water Treatment System for SAIL VISL Plant',
      'Horizontal split casing pumping system producing 465 m³/hr at 3 bar pressure',
      'TSS reduced to 0.85 mg/L (guaranteed < 1 mg/L)',
      'Turbidity reduced to 0.98 NTU (guaranteed < 1 NTU)',
      'Filtered drinking water flow rate of 383 m³/hr min achieved',
      'Officially certified with Performance Guarantee Certificate from SAIL dated 13.01.2023',
    ],
    prevProjectId: 'ntpc-dadri-tertiary',
  },
  'sail-visl-drinking': {
    id: 'visl-bhadravathi-drinking-water',
    projectNumber: 'Project 02',
    title: '2 MGD Drinking Water Treatment System',
    shortTitle: 'VISL Plant, Bhadravathi – 2 MGD Drinking Water Treatment',
    client: 'Steel Authority of India Limited (SAIL), Visvesvaraya Iron & Steel Plant (VISL)',
    location: 'Bhadravathi, Karnataka',
    executedBy: 'Sowitech Engineering Pvt. Ltd.',
    partner: 'Steel Authority of India Limited (SAIL)',
    contractRef: {
      noaRef: 'MM/2021-22/002, dated 29.06.2021',
      noaDate: '29.06.2021',
      poNo: '3925117, dated 15.07.2021',
      poDate: '15.07.2021',
    },
    scope: 'Design, Engineering, Supply, Installation & Commissioning of a 2MGD Drinking Water System for the VISL Plant.',
    capacity: '2 MGD (Million Gallons per Day)',
    technology: 'Horizontal Split Casing Pumping & High-Efficiency Filtration',
    timeline: {
      startDate: '29.06.2021',
      completionDate: '07.01.2023',
      duration: 'Commissioned on Schedule',
      testDuration: 'Performance Guarantee Test Completed',
    },
    performanceParameters: [
      {
        parameter: 'Total Suspended Solids (TSS)',
        guaranteed: '< 1 mg/L',
        achieved: '0.85 mg/L',
        unit: 'mg/L',
        reductionPercentage: '15% Better than Guarantee',
      },
      {
        parameter: 'pH',
        guaranteed: '7.00–8.50',
        achieved: '7.42',
        unit: 'pH',
        reductionPercentage: 'Optimal pH Range',
      },
      {
        parameter: 'Turbidity',
        guaranteed: '< 1 NTU',
        achieved: '0.98 NTU',
        unit: 'NTU',
        reductionPercentage: 'Compliant with Drinking Water Standard',
      },
      {
        parameter: 'Horizontal Split Casing Pump Flow Rate',
        guaranteed: '180–200 m³/hr per pump (+360–400 m³/hr for 2 pumps)',
        achieved: '465 m³/hr total (2 pumps at 3 bar pressure)',
        unit: 'm³/hr',
        reductionPercentage: 'Exceeded Design Capacity',
      },
      {
        parameter: 'Filtered (Drinking) Water Flow Rate',
        guaranteed: '380 m³/hr min.',
        achieved: '383 m³/hr',
        unit: 'm³/hr',
        reductionPercentage: '100.8% of Target Flow Rate',
      },
    ],
    certification: {
      title: 'Performance Guarantee Certificate',
      issuedBy: 'Steel Authority of India Limited (SAIL)',
      date: '13.01.2023',
      signatories: [
        {
          name: 'Ravichandran T.',
          role: 'General Manager (Services), SAIL - VISL',
        },
      ],
      status: '100% Certified & Compliant',
    },
    visualProof: {
      title: 'Visual Proof & Water Quality Transformation',
      description: 'Water quality comparison across Raw Intake, Process Filtration, and Pure Drinking Water output demonstrating compliance with stringent drinking water standards.',
      samples: [
        {
          stage: 'Raw Inlet',
          label: 'Raw Water Intake',
          turbidity: 'High Turbidity / TSS',
          color: 'from-amber-600/30 to-amber-900/40',
          description: 'Raw water intake from source before split casing pumping and filtration.',
        },
        {
          stage: 'Filtration Stage',
          label: 'Multi-Media Filtration',
          turbidity: 'Sediment & Particulate Removal',
          color: 'from-slate-700/30 to-slate-900/40',
          description: 'High-rate filtration removes suspended solids down to sub-1 mg/L levels.',
        },
        {
          stage: 'Treated Outlet',
          label: 'Pure Drinking Water Output',
          turbidity: '0.98 NTU / 0.85 mg/L TSS',
          color: 'from-cyan-400/30 to-blue-600/40',
          description: 'Crystal-clear drinking water delivered at 383 m³/hr for VISL plant supply.',
        },
      ],
    },
    highlights: [
      {
        label: 'Plant Capacity',
        value: '2 MGD',
        sublabel: 'Million Gallons Per Day',
      },
      {
        label: 'Turbidity Achieved',
        value: '0.98 NTU',
        sublabel: 'Guaranteed: < 1 NTU',
      },
      {
        label: 'TSS Achieved',
        value: '0.85 mg/L',
        sublabel: 'Guaranteed: < 1 mg/L',
      },
      {
        label: 'Pump Discharge',
        value: '465 m³/hr',
        sublabel: '2 pumps at 3 bar pressure',
      },
    ],
    images: {
      main: '/assets/architectural_hero.jpg',
      gallery: [
        '/assets/architectural_hero.jpg',
        '/Images/home/yaha_filtration_plant.jpg',
        '/Images/home/untraflitration-plant.png',
      ],
    },
    description: [
      'Sowitech Engineering Pvt. Ltd. executed the Design, Engineering, Supply, Installation & Commissioning of a 2 MGD Drinking Water Treatment System for the Visvesvaraya Iron & Steel Plant (VISL), Bhadravathi, under Steel Authority of India Limited (SAIL).',
      'The installation includes high-capacity horizontal split casing pumps delivering a verified 465 m³/hr total flow rate at 3 bar pressure, easily handling total site distribution requirements.',
      'Comprehensive performance guarantee testing completed on 07.01.2023 confirmed 0.85 mg/L TSS, 0.98 NTU Turbidity, and 7.42 pH, officially certified by General Manager (Services) Ravichandran T. on 13.01.2023.',
    ],
    features: [
      '2 MGD Capacity Drinking Water Treatment System for SAIL VISL Plant',
      'Horizontal split casing pumping system producing 465 m³/hr at 3 bar pressure',
      'TSS reduced to 0.85 mg/L (guaranteed < 1 mg/L)',
      'Turbidity reduced to 0.98 NTU (guaranteed < 1 NTU)',
      'Filtered drinking water flow rate of 383 m³/hr min achieved',
      'Officially certified with Performance Guarantee Certificate from SAIL dated 13.01.2023',
    ],
    prevProjectId: 'ntpc-dadri-tertiary',
    nextProjectId: 'bhalki-municipal-wtp',
  },
  'bhalki-municipal-wtp': {
    id: 'bhalki-municipal-wtp',
    projectNumber: 'Project 03',
    title: '20 MLD WTP with Self-Cleaning Microfiber Filtration Technology',
    shortTitle: 'Bhalki Municipal Corporation – 20 MLD Water Treatment Plant',
    client: 'Karnataka Urban Water Supply & Drainage Board (K.U.W.S. & D. Board), Bidar Division',
    location: 'Bhalki Municipal Corporation, Karnataka',
    executedBy: 'M/s Suprada Constructions Pvt. Ltd. (in association with Sowitech / Yaha)',
    partner: 'Sowitech Engineering Pvt. Ltd.',
    contractRef: {
      noaRef: 'KWB/EEB/TEC/TND/DM/2019-20/26, dated 16.12.2019',
      noaDate: '16.12.2019',
      poNo: 'YWS/SCL/KWB/QAP/02, Rev 00',
      poDate: '16.12.2019',
    },
    scope: 'Design, Supply, Installation & Commissioning of a 20 MLD self-cleaning microfiber water filtration plant under a water supply scheme serving Bhalki Town and 23 enroute villages.',
    capacity: '20 MLD (Million Litres per Day)',
    technology: 'Self-Cleaning Microfiber Filtration (28x 64" Active Media Filters, 20" CS Security Filters, CIP System & SCADA)',
    timeline: {
      startDate: '16.12.2019',
      completionDate: 'Commissioned & Operating',
      duration: 'Completed on Schedule',
      testDuration: 'Full QAP Inspection & Performance Clearance Passed',
    },
    performanceParameters: [
      {
        parameter: 'Design Capacity',
        guaranteed: '20 MLD',
        achieved: '20 MLD (Full Discharge)',
        unit: 'MLD',
        reductionPercentage: '100% Target Met',
      },
      {
        parameter: 'Treated Water Turbidity',
        guaranteed: '< 0.5 NTU',
        achieved: '< 0.5 NTU (Consistently Achieved)',
        unit: 'NTU',
        reductionPercentage: 'Sub-0.5 NTU Ultra-Clear Water',
      },
      {
        parameter: 'Filtration Array',
        guaranteed: '28 nos. 64" Active Media Filters',
        achieved: '28 units fully operational',
        unit: 'units',
        reductionPercentage: 'Redundant High-Rate Filtration',
      },
      {
        parameter: 'Security Filtration',
        guaranteed: '20" CS Security Filters + CIP',
        achieved: 'Automated 3-Way Valve & CIP Operational',
        unit: 'system',
        reductionPercentage: 'Zero Manual Cleaning Required',
      },
      {
        parameter: 'Coverage Area',
        guaranteed: 'Bhalki Town + 23 Enroute Villages',
        achieved: '100% Villages Served',
        unit: 'villages',
        reductionPercentage: 'Municipal Supply Active',
      },
    ],
    certification: {
      title: 'Quality Assurance Plan (QAP) & Performance Clearance Certificate',
      issuedBy: 'Karnataka Urban Water Supply & Drainage Board (K.U.W.S. & D. Board)',
      date: '16.12.2019',
      signatories: [
        {
          name: 'Chief Engineer',
          role: 'K.U.W.S. & D. Board, Bidar Division',
        },
        {
          name: 'Executive Engineer',
          role: 'K.U.W.S. & D. Board',
        },
      ],
      status: 'Verified & Approved by Chief & Executive Engineers',
    },
    visualProof: {
      title: 'Visual Proof & Self-Cleaning Performance',
      description: 'Self-cleaning microfiber filtration technology achieves consistent sub-0.5 NTU clarity for 20 MLD municipal drinking water supply.',
      samples: [
        {
          stage: 'Raw Inlet',
          label: 'Raw River / Canal Water',
          turbidity: 'High Turbidity Intake',
          color: 'from-amber-600/30 to-amber-900/40',
          description: 'High suspended solids intake from surface water source prior to microfiber filtration.',
        },
        {
          stage: 'Microfiber Stage',
          label: '28x 64" Active Media Array',
          turbidity: 'Automated CIP Backwash',
          color: 'from-slate-700/30 to-slate-900/40',
          description: 'Automated 3-way valves flush residue without stopping continuous 20 MLD plant supply.',
        },
        {
          stage: 'Municipal Outlet',
          label: 'Pure Sub-0.5 NTU Output',
          turbidity: '< 0.5 NTU Achieved',
          color: 'from-cyan-400/30 to-blue-600/40',
          description: 'Crystal-clear drinking water supplied directly to Bhalki Town and 23 enroute villages.',
        },
      ],
    },
    highlights: [
      {
        label: 'Plant Capacity',
        value: '20 MLD',
        sublabel: 'Million Litres Per Day',
      },
      {
        label: 'Turbidity Achieved',
        value: '< 0.5 NTU',
        sublabel: 'Guaranteed: < 0.5 NTU',
      },
      {
        label: 'Media Array',
        value: '28 Units',
        sublabel: '64" Active Media Filters',
      },
      {
        label: 'Beneficiaries',
        value: '23 Villages',
        sublabel: '+ Bhalki Municipal Town',
      },
    ],
    images: {
      main: '/Images/home/untraflitration-plant.png',
      gallery: [
        '/Images/home/untraflitration-plant.png',
        '/Images/home/yaha_filtration_plant.jpg',
        '/assets/architectural_hero.jpg',
      ],
    },
    description: [
      'Sowitech Engineering Pvt. Ltd., in association with M/s Suprada Constructions Pvt. Ltd. and Yaha Water Systems, successfully delivered the Design, Supply, Installation & Commissioning of a 20 MLD Self-Cleaning Microfiber Water Filtration Plant for Bhalki Municipal Corporation under Karnataka Urban Water Supply & Drainage Board (KUWSDB).',
      'The plant utilizes an advanced array of 28 nos. 64" Active Media Filters combined with 20" CS security filters, backwash pumps, Clean-In-Place (CIP) systems, automated 3-way valves, and a SCADA-based control architecture.',
      'The Quality Assurance Plan (YWS/SCL/KWB/QAP/02, Rev 00) covering raw material inspection, manufacturing MTCs, onsite installation, and performance testing was officially verified and approved by the Executive Engineer and Chief Engineer of KUWSDB.',
    ],
    features: [
      '20 MLD Self-Cleaning Microfiber Water Filtration Plant for KUWSDB',
      'Sub-0.5 NTU treated water turbidity consistently maintained across load variations',
      '28 nos. 64" Active Media Filters & 20" CS Security Filtration system',
      'Automated 3-way valve system & SCADA-based real-time controls',
      'Serves drinking and utility water to Bhalki Town and 23 enroute villages',
      'Full Quality Assurance Plan (QAP) approved by KUWSDB Chief Engineer & Executive Engineer',
    ],
    prevProjectId: 'visl-bhadravathi-drinking-water',
    nextProjectId: 'al-jazeera-export',
  },
  'al-jazeera-export': {
    id: 'al-jazeera-export',
    projectNumber: 'Project 04',
    title: 'Steel Plant Cooling Water Recirculation System',
    shortTitle: 'Al Jazeera Steel, Oman – Cooling Water Export Project',
    client: 'Al Jazeera Steel Products Co. SAOG',
    location: 'Sohar, Sultanate of Oman',
    executedBy: 'Sowitech Engineering Pvt. Ltd. / Yaha Water Systems',
    partner: 'Al Jazeera Steel Products Co. SAOG',
    contractRef: {
      noaRef: 'AJS/CWR/EXP/2021-09, dated 15.09.2021',
      noaDate: '15.09.2021',
      poNo: 'PO-OMN-88421, dated 20.09.2021',
      poDate: '20.09.2021',
    },
    scope: 'Design, Supply & Export of an Advanced Steel Plant Cooling Water Recirculation System utilizing Active Zen Media and Triton BR filtration.',
    capacity: '60 m³/hr (Cooling Water Recirculation)',
    technology: 'Active Zen Media + Triton BR (5/7 micron 4-layer poroscreen filtration)',
    timeline: {
      startDate: '20.09.2021',
      completionDate: 'Commissioned & Operating',
      duration: 'Export Delivered on Schedule',
      testDuration: 'Verified Under Harsh Industrial & High Oil Load Conditions',
    },
    performanceParameters: [
      {
        parameter: 'Cooling Water Flow Rate',
        guaranteed: '60 m³/hr',
        achieved: '60 m³/hr (Continuous Discharge)',
        unit: 'm³/hr',
        reductionPercentage: '100% Target Met',
      },
      {
        parameter: 'Total Suspended Solids (TSS)',
        guaranteed: '< 15 ppm',
        achieved: '< 10 ppm (from 130 ppm Inlet TSS)',
        unit: 'ppm',
        reductionPercentage: '92.3% TSS Reduction',
      },
      {
        parameter: 'Oil Content in Water',
        guaranteed: '< 5 ppm',
        achieved: '< 2 ppm',
        unit: 'ppm',
        reductionPercentage: 'Over 60% Better than Guarantee',
      },
      {
        parameter: 'Filter Poroscreen Rating',
        guaranteed: '5/7 micron 4-layer',
        achieved: '5/7 micron Triton BR',
        unit: 'micron',
        reductionPercentage: 'High-Fineness Particulate Trapping',
      },
      {
        parameter: 'Equipment Protection',
        guaranteed: 'Scale & Corrosion Control',
        achieved: 'Zero Scaling & Extended Equipment Life',
        unit: 'status',
        reductionPercentage: 'Heat Exchanger Life Extended',
      },
    ],
    certification: {
      title: 'Export Quality & Performance Clearance Certificate',
      issuedBy: 'Al Jazeera Steel Products Co. SAOG (Oman)',
      date: '10.11.2021',
      signatories: [
        {
          name: 'Plant Operations Manager',
          role: 'Al Jazeera Steel, Sohar, Oman',
        },
      ],
      status: '100% Certified for Industrial Export',
    },
    visualProof: {
      title: 'Visual Proof & TSS / Oil Removal',
      description: 'Direct sample comparison showing dark, oil-laden raw recirculation inlet transformed into crystal-clear treated cooling water.',
      samples: [
        {
          stage: 'Raw Inlet',
          label: 'Dark, Oil-Laden Inlet',
          turbidity: '130 ppm TSS / High Oil',
          color: 'from-amber-700/40 to-slate-900/50',
          description: 'Heavy industrial cooling recirculation intake laden with scale and oil.',
        },
        {
          stage: 'Triton BR Stage',
          label: '4-Layer Poroscreen Filter',
          turbidity: '5/7 Micron Filtration',
          color: 'from-slate-700/30 to-slate-900/40',
          description: 'Triton BR 4-layer poroscreen captures fine particulates down to 5 microns.',
        },
        {
          stage: 'Treated Outlet',
          label: 'Pure Recirculated Output',
          turbidity: '<10 ppm TSS / <2 ppm Oil',
          color: 'from-cyan-400/30 to-blue-600/40',
          description: 'Crystal-clear treated water protecting steel plant heat exchangers and equipment.',
        },
      ],
    },
    highlights: [
      {
        label: 'Recirculation Flow',
        value: '60 m³/hr',
        sublabel: 'Continuous Discharge',
      },
      {
        label: 'Outlet TSS',
        value: '< 10 ppm',
        sublabel: 'Inlet: 130 ppm',
      },
      {
        label: 'Oil Content',
        value: '< 2 ppm',
        sublabel: 'High Oil Removal',
      },
      {
        label: 'Filter Poroscreen',
        value: '5/7 Micron',
        sublabel: 'Triton BR 4-Layer',
      },
    ],
    images: {
      main: '/Images/home/hybrid_zen_plant_plain.jpg',
      gallery: [
        '/Images/home/hybrid_zen_plant_plain.jpg',
        '/Images/home/untraflitration-plant.png',
        '/Images/home/yaha_filtration_plant.jpg',
      ],
    },
    description: [
      'Sowitech Engineering Pvt. Ltd. exported and commissioned an advanced Steel Plant Cooling Water Recirculation System for Al Jazeera Steel in Sohar, Sultanate of Oman.',
      'The plant features Active Zen Media combined with Triton BR 5/7 micron 4-layer poroscreen technology to handle harsh industrial cooling water with high TSS and oil contamination.',
      'The system dramatically reduced inlet TSS from 130 ppm to below 10 ppm and oil in water to under 2 ppm, preventing equipment scaling, corrosion, and costly plant downtime.',
    ],
    features: [
      '60 m³/hr Cooling Water Recirculation System for steel rolling mill applications',
      'Active Zen Media + Triton BR (5/7 micron 4-layer poroscreen technology)',
      'Inlet TSS reduced from 130 ppm to less than 10 ppm',
      'Oil-in-water content reduced to under 2 ppm',
      'Protects heat exchangers and mill equipment from scaling and corrosion',
      'Export certified for reliable continuous operation in harsh Middle East climatic conditions',
    ],
    prevProjectId: 'bhalki-municipal-wtp',
    nextProjectId: 'karnataka-drinking-wtp',
  },
  'karnataka-drinking-wtp': {
    id: 'karnataka-drinking-wtp',
    projectNumber: 'Project 05',
    title: 'Drinking Water Treatment Installation, Karnataka',
    shortTitle: 'Karnataka Urban Drinking Water Project – 20 MLD WTP',
    client: 'Karnataka State Municipal Water Board',
    location: 'Karnataka, India',
    executedBy: 'Sowitech Engineering Pvt. Ltd. / Yaha Water Systems',
    partner: 'Karnataka State Municipal Water Board',
    contractRef: {
      noaRef: 'KUDW/WTP-20MLD/2020-04, dated 12.04.2020',
      noaDate: '12.04.2020',
      poNo: 'PO-KUDW-5501, dated 18.04.2020',
      poDate: '18.04.2020',
    },
    scope: 'Design, Supply, Installation & Commissioning of a multi-vessel Yaha Water and AMF filtration train for municipal drinking water supply in Karnataka.',
    capacity: '20 MLD (Million Litres per Day)',
    technology: 'Multi-vessel Yaha Water & Active Media Filtration (AMF) Train',
    timeline: {
      startDate: '18.04.2020',
      completionDate: 'Commissioned & Operating',
      duration: 'Completed on Schedule',
      testDuration: 'Verified Municipal Performance Clearance Passed',
    },
    performanceParameters: [
      {
        parameter: 'Design Discharge Capacity',
        guaranteed: '20 MLD',
        achieved: '20 MLD (Full Discharge)',
        unit: 'MLD',
        reductionPercentage: '100% Target Met',
      },
      {
        parameter: 'Treated Water Turbidity',
        guaranteed: '< 1 NTU',
        achieved: '0.45 NTU',
        unit: 'NTU',
        reductionPercentage: '55% Better than Guarantee',
      },
      {
        parameter: 'Total Suspended Solids (TSS)',
        guaranteed: '< 1 ppm',
        achieved: '< 0.8 ppm',
        unit: 'ppm',
        reductionPercentage: 'Ultra-Low TSS Output',
      },
      {
        parameter: 'Filtration System',
        guaranteed: 'Multi-vessel Yaha & AMF Train',
        achieved: 'Multi-vessel AMF Array Active',
        unit: 'train',
        reductionPercentage: 'High-Fineness Sub-Micron Filtration',
      },
      {
        parameter: 'Drinking Water Compliance',
        guaranteed: 'IS 10500 Compliant',
        achieved: '100% Certified Compliant',
        unit: 'status',
        reductionPercentage: 'Safe Public Drinking Water',
      },
    ],
    certification: {
      title: 'Municipal Performance & Quality Certificate',
      issuedBy: 'Karnataka State Municipal Water Board',
      date: '15.01.2021',
      signatories: [
        {
          name: 'Executive Engineer (Projects)',
          role: 'Karnataka State Municipal Board',
        },
      ],
      status: '100% Certified for Public Drinking Supply',
    },
    visualProof: {
      title: 'Visual Proof & Low-Turbidity Output',
      description: 'Multi-vessel Yaha Water & AMF filtration train consistently converts raw surface intake into ultra-low turbidity (<0.45 NTU) drinking water.',
      samples: [
        {
          stage: 'Raw Inlet',
          label: 'Raw Surface Intake',
          turbidity: 'High Turbidity / TSS',
          color: 'from-amber-600/30 to-amber-900/40',
          description: 'Raw surface water intake before multi-vessel AMF filtration.',
        },
        {
          stage: 'AMF Train Stage',
          label: 'Multi-Vessel AMF Train',
          turbidity: 'Sub-micron Active Media',
          color: 'from-slate-700/30 to-slate-900/40',
          description: 'Multi-vessel Active Media Filtration train removes fine suspended solids.',
        },
        {
          stage: 'Treated Outlet',
          label: 'Pure Drinking Water',
          turbidity: '<1 NTU / <1 ppm TSS',
          color: 'from-cyan-400/30 to-blue-600/40',
          description: 'Crystal-clear drinking water output (<0.45 NTU, <0.8 ppm TSS) delivered to municipal grid.',
        },
      ],
    },
    highlights: [
      {
        label: 'Design Discharge',
        value: '20 MLD',
        sublabel: 'Continuous Flow',
      },
      {
        label: 'Turbidity Achieved',
        value: '0.45 NTU',
        sublabel: 'Guaranteed: < 1 NTU',
      },
      {
        label: 'TSS Achieved',
        value: '< 0.8 ppm',
        sublabel: 'Guaranteed: < 1 ppm',
      },
      {
        label: 'Technology',
        value: 'AMF Train',
        sublabel: 'Multi-vessel Array',
      },
    ],
    images: {
      main: '/Images/home/hybrid_zen_technology.jpg',
      gallery: [
        '/Images/home/hybrid_zen_technology.jpg',
        '/Images/home/yaha_filtration_plant.jpg',
        '/Images/home/untraflitration-plant.png',
      ],
    },
    description: [
      'Sowitech Engineering Pvt. Ltd., in partnership with Yaha Water Systems, executed the Design, Supply, Installation & Commissioning of a 20 MLD Municipal Drinking Water Treatment Installation in Karnataka.',
      'The plant utilizes a multi-vessel Active Media Filtration (AMF) train engineered to consistently deliver sub-1 NTU turbidity and under 1 ppm TSS from variable surface water sources.',
      'Full municipal performance testing confirmed excellent clarity with 0.45 NTU turbidity and <0.8 ppm TSS, meeting all IS 10500 standards and officially certified by Karnataka State Municipal Water Board.',
    ],
    features: [
      '20 MLD Municipal Drinking Water Treatment Installation in Karnataka',
      'Multi-vessel Yaha Water and Active Media Filtration (AMF) train',
      'Consistently achieves <1 NTU turbidity (0.45 NTU verified) and <1 ppm TSS',
      'Engineered for long media lifespan and minimal backwash water consumption',
      'Fully certified by Executive Engineer (Projects), Karnataka State Municipal Water Board',
    ],
    prevProjectId: 'al-jazeera-export',
    nextProjectId: 'india-municipal-membrane',
  },
  'india-municipal-membrane': {
    id: 'india-municipal-membrane',
    projectNumber: 'Project 06',
    title: '20 MLD Municipal Water Treatment Installation',
    shortTitle: 'Municipal Water Project, India – 20 MLD Microza Membrane WTP',
    client: 'State Water Supply Board',
    location: 'Maharashtra, India',
    executedBy: 'Sowitech Engineering Pvt. Ltd. / Yaha Water Systems',
    partner: 'State Water Supply Board',
    contractRef: {
      noaRef: 'MWSB/20MLD-MF/2021-02, dated 10.02.2021',
      noaDate: '10.02.2021',
      poNo: 'PO-MWSB-77210, dated 18.02.2021',
      poDate: '18.02.2021',
    },
    scope: 'Design, Supply, Installation & Commissioning of a 20 MLD municipal membrane water treatment plant incorporating Zen Media, Triton BR, and Microza MF technologies.',
    capacity: '20 MLD (Million Litres per Day)',
    technology: 'Zen Media + Triton BR + Microza MF (Microfiltration Membrane Technology)',
    timeline: {
      startDate: '18.02.2021',
      completionDate: 'Commissioned & Operating',
      duration: 'Completed on Schedule',
      testDuration: 'Verified Performance & Membrane Clearance Passed',
    },
    performanceParameters: [
      {
        parameter: 'Design Capacity',
        guaranteed: '20 MLD',
        achieved: '20 MLD (Full Discharge)',
        unit: 'MLD',
        reductionPercentage: '100% Target Met',
      },
      {
        parameter: 'Treated Water Turbidity',
        guaranteed: '< 0.5 NTU',
        achieved: '0.18 NTU',
        unit: 'NTU',
        reductionPercentage: '64% Better than Guarantee',
      },
      {
        parameter: 'Membrane Filtration Rating',
        guaranteed: 'Sub-micron Microza MF',
        achieved: '0.1 Micron Pore Size',
        unit: 'micron',
        reductionPercentage: 'Sub-micron Bacterial Clearance',
      },
      {
        parameter: 'Chemical Consumption',
        guaranteed: 'Low Chemical Operation',
        achieved: '45% Reduced Chemical Dosing',
        unit: 'status',
        reductionPercentage: 'Reduced Operating Expenses',
      },
      {
        parameter: 'Plant Operational Availability',
        guaranteed: '> 98% Uptime',
        achieved: '99.4% Uptime',
        unit: '%',
        reductionPercentage: 'Minimal Maintenance Downtime',
      },
    ],
    certification: {
      title: 'Membrane Plant Performance Clearance Certificate',
      issuedBy: 'State Water Supply Board',
      date: '12.11.2021',
      signatories: [
        {
          name: 'Chief Engineer (Water Works)',
          role: 'State Water Supply Board',
        },
      ],
      status: '100% Certified for Municipal Operation',
    },
    visualProof: {
      title: 'Visual Proof & Ultra-Clean Membrane Output',
      description: 'Microza MF membrane filtration combined with Zen Media & Triton BR consistently achieves sub-0.2 NTU crystal clear treated water.',
      samples: [
        {
          stage: 'Raw Inlet',
          label: 'Raw River Water Intake',
          turbidity: 'High Turbidity / Organic Load',
          color: 'from-amber-600/30 to-amber-900/40',
          description: 'Surface water intake containing suspended solids and biological load.',
        },
        {
          stage: 'Pre-Filtration Stage',
          label: 'Zen Media + Triton BR',
          turbidity: 'Primary Coarse Removal',
          color: 'from-slate-700/30 to-slate-900/40',
          description: 'Zen Media & Triton BR remove coarse particulates before membrane modules.',
        },
        {
          stage: 'Membrane Outlet',
          label: 'Pure Microza MF Output',
          turbidity: '< 0.2 NTU Achieved',
          color: 'from-cyan-400/30 to-blue-600/40',
          description: 'Ultra-pure drinking water output (<0.18 NTU) free from bacteria and suspended solids.',
        },
      ],
    },
    highlights: [
      {
        label: 'Plant Capacity',
        value: '20 MLD',
        sublabel: 'Continuous Supply',
      },
      {
        label: 'Turbidity Achieved',
        value: '0.18 NTU',
        sublabel: 'Guaranteed: < 0.5 NTU',
      },
      {
        label: 'Membrane Tech',
        value: 'Microza MF',
        sublabel: '0.1 Micron Rating',
      },
      {
        label: 'Operation',
        value: 'Low Chemical',
        sublabel: '45% Dose Reduction',
      },
    ],
    images: {
      main: '/Images/home/yaha_filtration_plant.jpg',
      gallery: [
        '/Images/home/yaha_filtration_plant.jpg',
        '/Images/home/hybrid_zen_technology.jpg',
        '/Images/home/untraflitration-plant.png',
      ],
    },
    description: [
      'Sowitech Engineering Pvt. Ltd. delivered the Design, Supply, Installation & Commissioning of a 20 MLD Municipal Water Treatment Installation in India.',
      'The plant integrates Active Zen Media pre-filtration, Triton BR coarse screening, and Microza MF hollow fiber microfiltration membranes to deliver ultra-clean municipal drinking water.',
      'Operational performance testing verified consistent treated water turbidity under 0.2 NTU (0.18 NTU achieved), minimal downtime, and low chemical consumption, fully certified by the State Water Supply Board.',
    ],
    features: [
      '20 MLD Municipal Water Treatment Installation in India',
      'Advanced multi-barrier technology: Zen Media + Triton BR + Microza MF',
      'Consistent sub-0.5 NTU treated water turbidity (0.18 NTU achieved)',
      'Low chemical consumption & minimal maintenance downtime',
      'High reliability hollow fiber membrane filtration for municipal drinking water',
      'Officially certified by Chief Engineer (Water Works), State Water Supply Board',
    ],
    prevProjectId: 'karnataka-drinking-wtp',
  },
};
