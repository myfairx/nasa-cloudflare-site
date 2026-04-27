export type Lang = 'ms' | 'en';

export const defaultLang: Lang = 'ms';

// ============================================================================
// SITE CONFIGURATION
// Verified contact details and site-wide settings
// ============================================================================

export const siteConfig = {
  name: 'NS Land Consultant',
  // [PLACEHOLDER] Update with real contact details
  email: 'info@nslandconsultant.com',
  phone: '+60 12-345 6789',
  address: '[NEEDS CLIENT INPUT] - Full office address',
  domain: 'nslandconsultant.com',
  // [PLACEHOLDER] Update with real social links
  social: {
    facebook: '[NEEDS CLIENT INPUT]',
    instagram: '[NEEDS CLIENT INPUT]',
    linkedin: '[NEEDS CLIENT INPUT]',
    whatsapp: '[NEEDS CLIENT INPUT]',
  },
};

// ============================================================================
// SEO METADATA
// Default SEO settings per page
// [NEEDS CLIENT INPUT] - Review and customize each page's metadata
// ============================================================================

export const seo = {
  // Global SEO
  global: {
    siteName: 'NS Land Consultant',
    siteUrl: 'https://nslandconsultant.com',
    // [PLACEHOLDER] 1200x630px recommended, should show company branding
    defaultOgImage: '/images/og-default.jpg',
    // [PLACEHOLDER] Consider adding theme color matching brand
    themeColor: '#1a365d',
  },

  // Home page
  home: {
    ms: {
      title:
        'NS Land Consultant | Perkhidmatan Perundingan Tanah Profesional Malaysia',
      description:
        '[NEEDS CLIENT INPUT] - 150-160 character description of company services and unique value proposition',
      keywords: [
        'perunding tanah',
        'hartanah Malaysia',
        'jual beli tanah',
        'perundingan hartanah',
      ],
    },
    en: {
      title:
        'NS Land Consultant | Professional Land Consultancy Services Malaysia',
      description:
        '[NEEDS CLIENT INPUT] - 150-160 character description of company services and unique value proposition',
      keywords: [
        'land consultant',
        'Malaysia property',
        'land advisory',
        'property consultancy',
      ],
    },
  },

  // About page
  about: {
    ms: {
      title: 'Tentang Kami | NS Land Consultant',
      description:
        '[NEEDS CLIENT INPUT] - Company history, mission, and team overview',
      keywords: [
        'tentang NS Land Consultant',
        'pasukan perunding tanah',
        'pengalaman perundingan',
      ],
    },
    en: {
      title: 'About Us | NS Land Consultant',
      description:
        '[NEEDS CLIENT INPUT] - Company history, mission, and team overview',
      keywords: [
        'about NS Land Consultant',
        'land consultancy team',
        'consultancy experience',
      ],
    },
  },

  // Services page
  services: {
    ms: {
      title: 'Perkhidmatan Kami | NS Land Consultant',
      description:
        '[NEEDS CLIENT INPUT] - Overview of land consultancy services offered',
      keywords: [
        'perkhidmatan perunding tanah',
        'urus tanah',
        'tukar syarat tanah',
      ],
    },
    en: {
      title: 'Our Services | NS Land Consultant',
      description:
        '[NEEDS CLIENT INPUT] - Overview of land consultancy services offered',
      keywords: [
        'land consultancy services',
        'land management',
        'land conversion',
      ],
    },
  },

  // Contact page
  contact: {
    ms: {
      title: 'Hubungi Kami | NS Land Consultant',
      description:
        '[NEEDS CLIENT INPUT] - Contact information and office location',
      keywords: [
        'hubungi perunding tanah',
        'lokasi pejabat',
        'konsultasi percuma',
      ],
    },
    en: {
      title: 'Contact Us | NS Land Consultant',
      description:
        '[NEEDS CLIENT INPUT] - Contact information and office location',
      keywords: [
        'contact land consultant',
        'office location',
        'free consultation',
      ],
    },
  },
};

// ============================================================================
// TRANSLATIONS
// All UI text organized by language and page
// [PLACEHOLDER] items marked for client review
// ============================================================================

export const translations = {
  ms: {
    // ============================================================================
    // Site Tagline (for meta description fallback)
    // ============================================================================
    tagline:
      '[PLACEHOLDER] Perkhidmatan perundingan tanah profesional di Malaysia',

    // ============================================================================
    // Language & Navigation
    // ============================================================================
    language: 'Bahasa',
    nav: {
      home: 'Laman Utama',
      about: 'Tentang Kami',
      services: 'Perkhidmatan',
      contact: 'Hubungi',
    },

    // ============================================================================
    // Hero Section (Homepage)
    // [NEEDS CLIENT INPUT] - Review hero messaging
    // ============================================================================
    hero: {
      // [PLACEHOLDER] Consider company-specific tagline
      title: 'Rakan Perunding Tanah Yang Dipercayai',
      subtitle:
        '[PLACEHOLDER] Panduan pakar untuk semua keperluan pembangunan tanah dan hartanah anda di seluruh Malaysia',
      cta: 'Hubungi Kami',
    },

    // ============================================================================
    // Services Section
    // [PLACEHOLDER] Review all service descriptions for accuracy
    // ============================================================================
    services: {
      title: 'Perkhidmatan Kami',
      subtitle:
        '[PLACEHOLDER] Perkhidmatan perundingan tanah komprehensif disesuaikan dengan keperluan anda',
      viewAll: 'Lihat semua perkhidmatan →',
      helpTitle: 'Perlukan Bantuan Memilih Perkhidmatan?',
      helpSubtitle:
        '[PLACEHOLDER] Pasukan kami sedia membantu anda dengan sebarang soalan mengenai perkhidmatan kami.',
      helpButton: 'Hubungi Kami',
      items: [
        {
          id: 'consultation',
          title: 'Perundingan Hartanah & Tanah',
          description:
            '[PLACEHOLDER] Nasihat jual beli tanah, analisis potensi dan kegunaan tanah, serta strategi pelaburan tanah.',
          icon: 'consulting',
        },
        {
          id: 'sales-management',
          title: 'Pengurusan Jual Beli Tanah',
          description:
            '[PLACEHOLDER] Urusan pemasaran tanah, mencari pembeli dan penjual yang sesuai (matching), serta rundingan harga dan penyelesaian urusan jual beli.',
          icon: 'handshake',
        },
        {
          id: 'inheritance',
          title: 'Pengurusan Tanah Pusaka',
          description:
            '[PLACEHOLDER] Urusan faraid dan pembahagian harta, pelantikan pentadbir atau wakil, serta penyediaan dokumen pusaka.',
          icon: 'family',
        },
        {
          id: 'verification',
          title: 'Semakan & Due Diligence Tanah',
          description:
            '[PLACEHOLDER] Semakan geran dan hak milik, status sekatan dan caveat, serta kategori dan syarat kegunaan tanah.',
          icon: 'search',
        },
        {
          id: 'conversion',
          title: 'Tukar Syarat Tanah & Pecah Lot',
          description:
            '[PLACEHOLDER] Permohonan tukar syarat tanah (pertanian kepada bangunan dan sebagainya), pecah lot dan pecah sempadan, serta penggabungan tanah (amalgamation).',
          icon: 'transform',
        },
        {
          id: 'documentation',
          title: 'Pengurusan Dokumentasi & Sokongan Legal',
          description:
            '[PLACEHOLDER] Penyediaan dokumen jual beli, surat perjanjian seperti LOA dan MOU, serta penyelarasan urusan bersama peguam.',
          icon: 'document',
        },
        {
          id: 'marketing',
          title: 'Pemasaran & Listing Tanah',
          description:
            '[PLACEHOLDER] Iklan profesional melalui Facebook, TikTok, dan portal hartanah, penyediaan poster dan video promosi, serta penjenamaan hartanah.',
          icon: 'megaphone',
        },
        {
          id: 'development',
          title: 'Khidmat Nasihat Pembangunan Tanah',
          description:
            '[PLACEHOLDER] Cadangan pembangunan seperti lot banglo, komersial dan lain-lain, kajian potensi projek, serta perancangan awal pembangunan.',
          icon: 'building',
        },
        {
          id: 'client-management',
          title: 'Pengurusan Pelanggan (Owner & Buyer)',
          description:
            '[PLACEHOLDER] Perkhidmatan menyeluruh dari awal hingga akhir, susulan bersama pelanggan, serta khidmat selepas jualan.',
          icon: 'users',
        },
        {
          id: 'special-consultation',
          title: 'Khidmat Perundingan Khas',
          description:
            '[PLACEHOLDER] Tanah bermasalah seperti pusaka, pertikaian, dan sekatan, tanah terbiar atau sukar dijual, serta kes rumit seperti ramai pemilik atau dokumen hilang.',
          icon: 'star',
        },
      ],
    },

    // ============================================================================
    // Why Choose Us Section
    // [NEEDS CLIENT INPUT] - Update with real company strengths
    // ============================================================================
    whyUs: {
      title: 'Mengapa Pilih Kami',
      subtitle:
        '[PLACEHOLDER] Kepakaran dipercayai untuk keperluan tanah dan hartanah anda',
      items: [
        {
          title: 'Pasukan Berpengalaman',
          description:
            '[PLACEHOLDER] Tahun kepakaran dalam peraturan tanah dan hartanah Malaysia.',
        },
        {
          title: 'Rakan Dipercayai',
          description:
            '[PLACEHOLDER] Bina hubungan jangka panjang dengan perkhidmatan telus dan boleh dipercayai.',
        },
        {
          title: 'Fokus Pelanggan',
          description:
            '[PLACEHOLDER] Penyelesian disesuaikan untuk memenuhi keperluan unik anda.',
        },
      ],
    },

    // ============================================================================
    // About Page
    // [NEEDS CLIENT INPUT] - Replace with actual company story
    // ============================================================================
    about: {
      title: 'Tentang NS Land Consultant',
      story:
        '[NEEDS CLIENT INPUT] Ditubuhkan dengan misi untuk menyederhanakan perundingan tanah di Malaysia, NS Land Consultant telah berkembang menjadi rakan kongsi dipercayai untuk pemaju hartanah, pelabur, dan pemilik tanah. Pasukan kami menggabungkan pengetahuan tempatan yang mendalam dengan kepakaran profesional untuk memberikan hasil yang bermakna.',
      valuesTitle: 'Nilai Kami',
      values: [
        '[PLACEHOLDER] Integriti dalam setiap urusan',
        '[PLACEHOLDER] Kecemerlangan dalam penyampaian perkhidmatan',
        '[PLACEHOLDER] Hubungan pelanggan jangka panjang',
      ],
    },

    // ============================================================================
    // Contact Page
    // ============================================================================
    contact: {
      title: 'Hubungi Kami',
      subtitle:
        '[PLACEHOLDER] Sedia untuk membincangkan keperluan tanah atau hartanah anda? Hubungi kami hari ini.',
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
        success: 'Terima kasih! Mesej anda telah dihantar.',
        error: 'Maaf, terdapat masalah menghantar mesej anda. Sila cuba lagi.',
      },
    },

    // ============================================================================
    // Footer
    // ============================================================================
    footer: {
      description:
        '[PLACEHOLDER] Perkhidmatan perundingan tanah profesional membantu pelanggan menavigasi landskap hartanah Malaysia dengan keyakinan.',
      quickLinks: 'Pautan Pantas',
      contact: 'Hubungi',
      copyright: '© {year} NS Land Consultant. Hak cipta terpelihara.',
    },

    // ============================================================================
    // Call to Action Section
    // ============================================================================
    cta: {
      title: 'Sedia Untuk Memulakan?',
      subtitle:
        '[PLACEHOLDER] Hubungi kami hari ini untuk perundingan percuma mengenai keperluan tanah atau hartanah anda.',
      button: 'Hubungi Kami',
    },
  },

  en: {
    // ============================================================================
    // Site Tagline (for meta description fallback)
    // ============================================================================
    tagline: '[PLACEHOLDER] Professional land consultancy services in Malaysia',

    // ============================================================================
    // Language & Navigation
    // ============================================================================
    language: 'Language',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },

    // ============================================================================
    // Hero Section
    // ============================================================================
    hero: {
      title: 'Your Trusted Land Consultancy Partner',
      subtitle:
        '[PLACEHOLDER] Expert guidance for all your land development and property needs across Malaysia',
      cta: 'Get in Touch',
    },

    // ============================================================================
    // Services Section
    // ============================================================================
    services: {
      title: 'Our Services',
      subtitle:
        '[PLACEHOLDER] Comprehensive land consultancy services tailored to your needs',
      viewAll: 'View all services →',
      helpTitle: 'Need Help Choosing a Service?',
      helpSubtitle:
        '[PLACEHOLDER] Our team is ready to assist you with any questions about our services.',
      helpButton: 'Contact Us',
      items: [
        {
          id: 'consultation',
          title: 'Property & Land Consultation',
          description:
            '[PLACEHOLDER] Advice on land sale and purchase, analysis of land potential and land use, and land investment strategies.',
          icon: 'consulting',
        },
        {
          id: 'sales-management',
          title: 'Land Sale and Purchase Management',
          description:
            '[PLACEHOLDER] Land marketing management, finding suitable buyers and sellers (matching), and price negotiation and deal closing.',
          icon: 'handshake',
        },
        {
          id: 'inheritance',
          title: 'Inheritance Land Management',
          description:
            '[PLACEHOLDER] Faraid matters and asset distribution, appointment of administrator or representative, and preparation of inheritance documents.',
          icon: 'family',
        },
        {
          id: 'verification',
          title: 'Land Verification & Due Diligence',
          description:
            '[PLACEHOLDER] Title deed and ownership verification, restriction and caveat status checking, and land use category and conditions.',
          icon: 'search',
        },
        {
          id: 'conversion',
          title: 'Land Conversion & Subdivision',
          description:
            '[PLACEHOLDER] Application for land use conversion (agriculture to building and others), land subdivision and boundary separation, and land amalgamation.',
          icon: 'transform',
        },
        {
          id: 'documentation',
          title: 'Documentation Management & Legal Support',
          description:
            '[PLACEHOLDER] Preparation of sale and purchase documents, agreement letters such as LOA and MOU, and coordination and liaison with lawyers.',
          icon: 'document',
        },
        {
          id: 'marketing',
          title: 'Land Marketing & Listing',
          description:
            '[PLACEHOLDER] Professional advertising through Facebook, TikTok, and property portals, preparation of promotional posters and videos, and property branding.',
          icon: 'megaphone',
        },
        {
          id: 'development',
          title: 'Land Development Advisory Services',
          description:
            '[PLACEHOLDER] Development proposals such as bungalow lots, commercial projects, and others, project potential studies, and early-stage development planning.',
          icon: 'building',
        },
        {
          id: 'client-management',
          title: 'Client Management (Owner & Buyer)',
          description:
            '[PLACEHOLDER] End-to-end service management, client follow-up, and after-sales support.',
          icon: 'users',
        },
        {
          id: 'special-consultation',
          title: 'Special Consultation Services',
          description:
            '[PLACEHOLDER] Problematic land cases such as inheritance issues, disputes, and ownership restrictions, abandoned land or difficult-to-sell properties, and complex cases such as multiple owners or missing documents.',
          icon: 'star',
        },
      ],
    },

    // ============================================================================
    // Why Choose Us Section
    // ============================================================================
    whyUs: {
      title: 'Why Choose Us',
      subtitle:
        '[PLACEHOLDER] Trusted expertise for your land and property needs',
      items: [
        {
          title: 'Experienced Team',
          description:
            '[PLACEHOLDER] Years of expertise in Malaysian land and property regulations.',
        },
        {
          title: 'Trusted Partner',
          description:
            '[PLACEHOLDER] Build long-term relationships with transparent, reliable service.',
        },
        {
          title: 'Client-Focused',
          description:
            '[PLACEHOLDER] Tailored solutions to meet your unique requirements.',
        },
      ],
    },

    // ============================================================================
    // About Page
    // ============================================================================
    about: {
      title: 'About NS Land Consultant',
      story:
        '[NEEDS CLIENT INPUT] Founded with a mission to simplify land consultancy in Malaysia, NS Land Consultant has grown to become a trusted partner for property developers, investors, and landowners. Our team combines deep local knowledge with professional expertise to deliver results that matter.',
      valuesTitle: 'Our Values',
      values: [
        '[PLACEHOLDER] Integrity in every transaction',
        '[PLACEHOLDER] Excellence in service delivery',
        '[PLACEHOLDER] Long-term client relationships',
      ],
    },

    // ============================================================================
    // Contact Page
    // ============================================================================
    contact: {
      title: 'Get in Touch',
      subtitle:
        '[PLACEHOLDER] Ready to discuss your land or property needs? Contact us today.',
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
        success: 'Thank you! Your message has been sent.',
        error:
          'Sorry, there was an error sending your message. Please try again.',
      },
    },

    // ============================================================================
    // Footer
    // ============================================================================
    footer: {
      description:
        "[PLACEHOLDER] Professional land consultancy services helping clients navigate Malaysia's property landscape with confidence.",
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '© {year} NS Land Consultant. All rights reserved.',
    },

    // ============================================================================
    // Call to Action Section
    // ============================================================================
    cta: {
      title: 'Ready to Get Started?',
      subtitle:
        '[PLACEHOLDER] Contact us today for a free consultation on your land or property needs.',
      button: 'Get in Touch',
    },
  },
};

// ============================================================================
// PROMOTIONS
// Promotional images and popup configuration
// [CLIENT ACTION] Upload images to /public/promos/ folder
// [CLIENT ACTION] Update dates when promotions expire
// ============================================================================

export const promotions = {
  // Toggle entire promo system on/off
  enabled: true,

  // Show on which pages (array of page names)
  showOn: ['home'],

  // Display settings
  settings: {
    delay: 2000, // milliseconds before showing (2 seconds)
    oncePerDay: true, // true = once per day, false = once per session
    storageKey: 'nslc-promo-shown', // localStorage key
    expiryDays: 30, // How long to remember close action (auto-expire)
  },

  // Images array (1 or 2 images supported)
  // If only 1 image: shows single image
  // If 2+ images: enables carousel with auto-rotation
  images: [
    {
      src: '/promos/promo-1.jpg',
      alt: {
        ms: '[NEEDS CLIENT INPUT] - Contoh: Promosi diskaun 20% perundingan pusaka',
        en: '[NEEDS CLIENT INPUT] - Example: 20% discount on inheritance consultation',
      },
      // Optional: link when clicking image
      link: '/contact',
      // Optional: only show between dates (YYYY-MM-DD format)
      startDate: '2026-04-01',
      endDate: '2026-05-31',
    },
    // Second image (optional - uncomment to enable)
    // {
    //   src: '/promos/promo-2.jpg',
    //   alt: {
    //     ms: '[NEEDS CLIENT INPUT] - Contoh: Perkhidmatan baharu - pengurusan tanah komersial',
    //     en: '[NEEDS CLIENT INPUT] - Example: New service - commercial land management',
    //   },
    //   link: '/services',
    //   startDate: '2026-04-01',
    //   endDate: '2026-05-31',
    // },
  ],

  // Auto-rotation settings (only applies if 2+ images configured)
  carousel: {
    enabled: false, // Auto-enabled when 2+ images
    interval: 5000, // 5 seconds between slides
    transition: 400, // 400ms fade transition
    showDots: true, // Show dot indicators
    pauseOnHover: true, // Pause when user hovers (desktop)
  },
};

// ============================================================================
// LEGACY EXPORTS
// DEPRECATED: These are for backward compatibility only.
// Will be removed once all components are updated to use translations object.
// ============================================================================

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
