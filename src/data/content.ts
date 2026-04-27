export type Lang = 'ms' | 'en';

export const defaultLang: Lang = 'ms';

export const siteConfig = {
  name: 'NS Land Consultant',
  email: 'info@nslandconsultant.com',
  phone: '+60 12-345 6789',
  address: 'Kuala Lumpur, Malaysia',
  domain: 'nslandconsultant.com',
};

export const translations = {
  ms: {
    tagline: 'Perkhidmatan Perundingan Tanah Profesional di Malaysia',
    nav: {
      home: 'Laman Utama',
      about: 'Tentang Kami',
      services: 'Perkhidmatan',
      contact: 'Hubungi',
    },
    hero: {
      title: 'Rakan Perunding Tanah Yang Dipercayai',
      subtitle:
        'Panduan pakar untuk semua keperluan pembangunan tanah dan hartanah anda di seluruh Malaysia',
      cta: 'Hubungi Kami',
    },
    services: {
      title: 'Perkhidmatan Kami',
      subtitle:
        'Perkhidmatan perundingan tanah komprehensif disesuaikan dengan keperluan anda',
      viewAll: 'Lihat semua perkhidmatan →',
      helpTitle: 'Perlukan Bantuan Memilih Perkhidmatan?',
      helpSubtitle:
        'Pasukan kami sedia membantu anda dengan sebarang soalan mengenai perkhidmatan kami.',
      helpButton: 'Hubungi Kami',
      items: [
        {
          id: 'consultation',
          title: 'Perundingan Hartanah & Tanah',
          description:
            'Nasihat jual beli tanah, analisis potensi dan kegunaan tanah, serta strategi pelaburan tanah.',
          icon: 'consulting',
        },
        {
          id: 'sales-management',
          title: 'Pengurusan Jual Beli Tanah',
          description:
            'Urusan pemasaran tanah, mencari pembeli dan penjual yang sesuai (matching), serta rundingan harga dan penyelesaian urusan jual beli.',
          icon: 'handshake',
        },
        {
          id: 'inheritance',
          title: 'Pengurusan Tanah Pusaka',
          description:
            'Urusan faraid dan pembahagian harta, pelantikan pentadbir atau wakil, serta penyediaan dokumen pusaka.',
          icon: 'family',
        },
        {
          id: 'verification',
          title: 'Semakan & Due Diligence Tanah',
          description:
            'Semakan geran dan hak milik, status sekatan dan caveat, serta kategori dan syarat kegunaan tanah.',
          icon: 'search',
        },
        {
          id: 'conversion',
          title: 'Tukar Syarat Tanah & Pecah Lot',
          description:
            'Permohonan tukar syarat tanah (pertanian kepada bangunan dan sebagainya), pecah lot dan pecah sempadan, serta penggabungan tanah (amalgamation).',
          icon: 'transform',
        },
        {
          id: 'documentation',
          title: 'Pengurusan Dokumentasi & Sokongan Legal',
          description:
            'Penyediaan dokumen jual beli, surat perjanjian seperti LOA dan MOU, serta penyelarasan urusan bersama peguam.',
          icon: 'document',
        },
        {
          id: 'marketing',
          title: 'Pemasaran & Listing Tanah',
          description:
            'Iklan profesional melalui Facebook, TikTok, dan portal hartanah, penyediaan poster dan video promosi, serta penjenamaan hartanah.',
          icon: 'megaphone',
        },
        {
          id: 'development',
          title: 'Khidmat Nasihat Pembangunan Tanah',
          description:
            'Cadangan pembangunan seperti lot banglo, komersial dan lain-lain, kajian potensi projek, serta perancangan awal pembangunan.',
          icon: 'building',
        },
        {
          id: 'client-management',
          title: 'Pengurusan Pelanggan (Owner & Buyer)',
          description:
            'Perkhidmatan menyeluruh dari awal hingga akhir, susulan bersama pelanggan, serta khidmat selepas jualan.',
          icon: 'users',
        },
        {
          id: 'special-consultation',
          title: 'Khidmat Perundingan Khas',
          description:
            'Tanah bermasalah seperti pusaka, pertikaian, dan sekatan, tanah terbiar atau sukar dijual, serta kes rumit seperti ramai pemilik atau dokumen hilang.',
          icon: 'star',
        },
      ],
    },
    whyUs: {
      title: 'Mengapa Pilih Kami',
      subtitle: 'Kepakaran dipercayai untuk keperluan tanah dan hartanah anda',
      items: [
        {
          title: 'Pasukan Berpengalaman',
          description:
            'Tahun kepakaran dalam peraturan tanah dan hartanah Malaysia.',
        },
        {
          title: 'Rakan Dipercayai',
          description:
            'Bina hubungan jangka panjang dengan perkhidmatan telus dan boleh dipercayai.',
        },
        {
          title: 'Fokus Pelanggan',
          description:
            'Penyelesaian disesuaikan untuk memenuhi keperluan unik anda.',
        },
      ],
    },
    about: {
      title: 'Tentang NS Land Consultant',
      story:
        'Ditubuhkan dengan misi untuk menyederhanakan perundingan tanah di Malaysia, NS Land Consultant telah berkembang menjadi rakan kongsi dipercayai untuk pemaju hartanah, pelabur, dan pemilik tanah. Pasukan kami menggabungkan pengetahuan tempatan yang mendalam dengan kepakaran profesional untuk memberikan hasil yang bermakna.',
      valuesTitle: 'Nilai Kami',
      values: [
        'Integriti dalam setiap urusan',
        'Kecemerlangan dalam penyampaian perkhidmatan',
        'Hubungan pelanggan jangka panjang',
      ],
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle:
        'Sedia untuk membincangkan keperluan tanah atau hartanah anda? Hubungi kami hari ini.',
      getInTouch: 'Hubungi Kami',
      address: 'Alamat',
      email: 'Emel',
      phone: 'Telefon',
      form: {
        name: 'Nama',
        email: 'Emel',
        phone: 'Telefon',
        message: 'Mesej',
        submit: 'Hantar Mesej',
      },
    },
    footer: {
      description:
        'Perkhidmatan perundingan tanah profesional membantu pelanggan menavigasi landskap hartanah Malaysia dengan keyakinan.',
      quickLinks: 'Pautan Pantas',
      contact: 'Hubungi',
      copyright: '© {year} NS Land Consultant. Hak cipta terpelihara.',
    },
    cta: {
      title: 'Sedia Untuk Memulakan?',
      subtitle:
        'Hubungi kami hari ini untuk perundingan percuma mengenai keperluan tanah atau hartanah anda.',
      button: 'Hubungi Kami',
    },
    language: 'Bahasa',
  },
  en: {
    tagline: 'Professional Land Consultancy Services in Malaysia',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      title: 'Your Trusted Land Consultancy Partner',
      subtitle:
        'Expert guidance for all your land development and property needs across Malaysia',
      cta: 'Get in Touch',
    },
    services: {
      title: 'Our Services',
      subtitle:
        'Comprehensive land consultancy services tailored to your needs',
      viewAll: 'View all services →',
      helpTitle: 'Need Help Choosing a Service?',
      helpSubtitle:
        'Our team is ready to assist you with any questions about our services.',
      helpButton: 'Contact Us',
      items: [
        {
          id: 'consultation',
          title: 'Property & Land Consultation',
          description:
            'Advice on land sale and purchase, analysis of land potential and land use, and land investment strategies.',
          icon: 'consulting',
        },
        {
          id: 'sales-management',
          title: 'Land Sale and Purchase Management',
          description:
            'Land marketing management, finding suitable buyers and sellers (matching), and price negotiation and deal closing.',
          icon: 'handshake',
        },
        {
          id: 'inheritance',
          title: 'Inheritance Land Management',
          description:
            'Faraid matters and asset distribution, appointment of administrator or representative, and preparation of inheritance documents.',
          icon: 'family',
        },
        {
          id: 'verification',
          title: 'Land Verification & Due Diligence',
          description:
            'Title deed and ownership verification, restriction and caveat status checking, and land use category and conditions.',
          icon: 'search',
        },
        {
          id: 'conversion',
          title: 'Land Conversion & Subdivision',
          description:
            'Application for land use conversion (agriculture to building and others), land subdivision and boundary separation, and land amalgamation.',
          icon: 'transform',
        },
        {
          id: 'documentation',
          title: 'Documentation Management & Legal Support',
          description:
            'Preparation of sale and purchase documents, agreement letters such as LOA and MOU, and coordination and liaison with lawyers.',
          icon: 'document',
        },
        {
          id: 'marketing',
          title: 'Land Marketing & Listing',
          description:
            'Professional advertising through Facebook, TikTok, and property portals, preparation of promotional posters and videos, and property branding.',
          icon: 'megaphone',
        },
        {
          id: 'development',
          title: 'Land Development Advisory Services',
          description:
            'Development proposals such as bungalow lots, commercial projects, and others, project potential studies, and early-stage development planning.',
          icon: 'building',
        },
        {
          id: 'client-management',
          title: 'Client Management (Owner & Buyer)',
          description:
            'End-to-end service management, client follow-up, and after-sales support.',
          icon: 'users',
        },
        {
          id: 'special-consultation',
          title: 'Special Consultation Services',
          description:
            'Problematic land cases such as inheritance issues, disputes, and ownership restrictions, abandoned land or difficult-to-sell properties, and complex cases such as multiple owners or missing documents.',
          icon: 'star',
        },
      ],
    },
    whyUs: {
      title: 'Why Choose Us',
      subtitle: 'Trusted expertise for your land and property needs',
      items: [
        {
          title: 'Experienced Team',
          description:
            'Years of expertise in Malaysian land and property regulations.',
        },
        {
          title: 'Trusted Partner',
          description:
            'Build long-term relationships with transparent, reliable service.',
        },
        {
          title: 'Client-Focused',
          description: 'Tailored solutions to meet your unique requirements.',
        },
      ],
    },
    about: {
      title: 'About NS Land Consultant',
      story:
        'Founded with a mission to simplify land consultancy in Malaysia, NS Land Consultant has grown to become a trusted partner for property developers, investors, and landowners. Our team combines deep local knowledge with professional expertise to deliver results that matter.',
      valuesTitle: 'Our Values',
      values: [
        'Integrity in every transaction',
        'Excellence in service delivery',
        'Long-term client relationships',
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle:
        'Ready to discuss your land or property needs? Contact us today.',
      getInTouch: 'Get in Touch',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send Message',
      },
    },
    footer: {
      description:
        "Professional land consultancy services helping clients navigate Malaysia's property landscape with confidence.",
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '© {year} NS Land Consultant. All rights reserved.',
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle:
        'Contact us today for a free consultation on your land or property needs.',
      button: 'Get in Touch',
    },
    language: 'Language',
  },
};

// Legacy exports for backward compatibility (will be deprecated)
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const hero = {
  title: 'Your Trusted Land Consultancy Partner',
  subtitle:
    'Expert guidance for all your land development and property needs across Malaysia',
  cta: 'Get in Touch',
  ctaHref: '/contact',
};

export const services = [
  {
    id: 'land-development',
    title: 'Land Development Consulting',
    description:
      'Comprehensive advice on land conversion, zoning, and development planning for residential and commercial projects.',
    icon: 'building',
  },
  {
    id: 'property-advisory',
    title: 'Property Advisory',
    description:
      'Strategic advice on property investment, valuation, and portfolio management for individuals and corporations.',
    icon: 'chart',
  },
  {
    id: 'title-management',
    title: 'Title Management',
    description:
      'Assistance with land title applications, transfers, and regularization processes with government authorities.',
    icon: 'document',
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    description:
      'Guidance on land-related legal requirements, permits, and regulatory compliance for seamless project execution.',
    icon: 'shield',
  },
];

export const whyUs = [
  {
    title: 'Experienced Team',
    description:
      'Years of expertise in Malaysian land and property regulations.',
  },
  {
    title: 'Trusted Partner',
    description:
      'Build long-term relationships with transparent, reliable service.',
  },
  {
    title: 'Client-Focused',
    description: 'Tailored solutions to meet your unique requirements.',
  },
];

export const about = {
  title: 'About NS Land Consultant',
  story:
    'Founded with a mission to simplify land consultancy in Malaysia, NS Land Consultant has grown to become a trusted partner for property developers, investors, and landowners. Our team combines deep local knowledge with professional expertise to deliver results that matter.',
  values: [
    'Integrity in every transaction',
    'Excellence in service delivery',
    'Long-term client relationships',
  ],
};

export const contact = {
  title: 'Get in Touch',
  subtitle: 'Ready to discuss your land or property needs? Contact us today.',
  form: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    submit: 'Send Message',
  },
};

export const footer = {
  description:
    "Professional land consultancy services helping clients navigate Malaysia's property landscape with confidence.",
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  copyright: `© ${new Date().getFullYear()} NS Land Consultant. All rights reserved.`,
};
