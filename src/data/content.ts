export type Lang = 'ms' | 'en';

export const defaultLang: Lang = 'ms';

// ============================================================================
// SITE CONFIGURATION
// Verified contact details and site-wide settings
// ============================================================================

export const siteConfig = {
  name: 'NS Land Consultant Sdn. Bhd.',
  shortName: 'NS Land Consultant',
  email: 'admin@nslandconsultant.com',
  phone: '+60 17-517 0609',
  address: 'Lot 14079 Jalan Taiping, Kampung Teluk Medan 34300 Bagan Serai',
  domain: 'nslandconsultant.com',
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    whatsapp: 'https://wa.me/60175170609',
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
    siteName: 'NS Land Consultant Sdn. Bhd.',
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
        'NS Land Consultant menyediakan perkhidmatan perundingan tanah profesional untuk pemilik tanah, pembeli, pelabur dan projek pembangunan tanah.',
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
        'NS Land Consultant provides professional land consultancy services for landowners, buyers, investors, and land development projects.',
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
        'Ketahui latar belakang NS Land Consultant, misi syarikat dan pendekatan kami dalam membantu pelanggan mengurus urusan tanah.',
      keywords: [
        'tentang NS Land Consultant',
        'pasukan perunding tanah',
        'pengalaman perundingan',
      ],
    },
    en: {
      title: 'About Us | NS Land Consultant',
      description:
        'Learn about NS Land Consultant, our mission, and our professional approach in assisting clients with land-related matters.',
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
        'Perkhidmatan kami meliputi perundingan tanah, jual beli, semakan geran, pusaka, tukar syarat, pecah lot dan nasihat pembangunan.',
      keywords: [
        'perkhidmatan perunding tanah',
        'urus tanah',
        'tukar syarat tanah',
      ],
    },
    en: {
      title: 'Our Services | NS Land Consultant',
      description:
        'Our services include land consultation, sale and purchase coordination, title checks, inheritance matters, conversion, subdivision, and development advisory.',
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
        'Hubungi NS Land Consultant untuk mendapatkan khidmat nasihat berkaitan tanah, hartanah, dokumentasi dan projek pembangunan tanah.',
      keywords: [
        'hubungi perunding tanah',
        'lokasi pejabat',
        'konsultasi percuma',
      ],
    },
    en: {
      title: 'Contact Us | NS Land Consultant',
      description:
        'Contact NS Land Consultant for professional advice on land, property, documentation, and land development projects.',
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
    tagline: 'Perkhidmatan perundingan tanah profesional di Malaysia',

    // ============================================================================
    // Language & Navigation
    // ============================================================================
    language: 'Bahasa',
    nav: {
      home: 'Utama',
      about: 'Tentang Kami',
      services: 'Khidmat',
      contact: 'Hubungi',
    },

    // ============================================================================
    // Hero Section (Homepage)
    // [NEEDS CLIENT INPUT] - Review hero messaging
    // ============================================================================
    hero: {
      title: 'Rakan Perunding Tanah Profesional Anda',
      subtitle:
        'Membantu pemilik tanah, pembeli dan pelabur mengurus urusan tanah dengan lebih tersusun, telus dan strategik.',
      cta: 'Hubungi Kami',
    },

    // ============================================================================
    // Services Section
    // [PLACEHOLDER] Review all service descriptions for accuracy
    // ============================================================================
    services: {
      title: 'Perkhidmatan Kami',
      subtitle:
        'Perkhidmatan perundingan tanah komprehensif yang disusun untuk keperluan anda.',
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
            'Kami menyediakan khidmat nasihat berkaitan potensi tanah, status hakmilik, kegunaan tanah, risiko transaksi dan langkah terbaik sebelum pelanggan membuat keputusan.',
          icon: 'consulting',
        },
        {
          id: 'sales-management',
          title: 'Pengurusan Jual Beli Tanah',
          description:
            'Kami membantu menyusun proses jual beli tanah termasuk pengurusan listing, pencarian pembeli, susunan booking, dokumentasi awal dan koordinasi dengan pihak berkaitan.',
          icon: 'handshake',
        },
        {
          id: 'inheritance',
          title: 'Pengurusan Tanah Pusaka',
          description:
            'Kami membantu pelanggan memahami dan menyusun urusan tanah pusaka melalui semakan dokumen, penyelarasan waris dan rujukan kepada pihak profesional yang berkaitan.',
          icon: 'family',
        },
        {
          id: 'verification',
          title: 'Semakan Tanah & Due Diligence',
          description:
            'Kami membantu membuat semakan awal berkaitan geran, kategori tanah, syarat nyata, sekatan kepentingan, status pegangan dan risiko sebelum sebarang transaksi diteruskan.',
          icon: 'search',
        },
        {
          id: 'conversion',
          title: 'Tukar Syarat Tanah & Pecah Lot',
          description:
            'Kami membantu pelanggan memahami proses tukar syarat tanah, pecah sempadan, pecah lot dan keperluan asas sebelum permohonan dimulakan bersama pihak teknikal berkaitan.',
          icon: 'transform',
        },
        {
          id: 'documentation',
          title: 'Dokumentasi & Sokongan Perundangan',
          description:
            'Kami membantu menyediakan dan menyusun dokumen sokongan berkaitan urusan tanah serta menyelaras perkara yang memerlukan rujukan kepada peguam atau pihak berautoriti.',
          icon: 'document',
        },
        {
          id: 'marketing',
          title: 'Pemasaran & Listing Tanah',
          description:
            'Kami membantu memasarkan listing tanah secara tersusun melalui bahan promosi, pangkalan data pembeli, jaringan agent dan saluran pemasaran digital yang sesuai.',
          icon: 'megaphone',
        },
        {
          id: 'development',
          title: 'Nasihat Pembangunan Tanah',
          description:
            'Kami menyediakan nasihat awal berkaitan potensi pembangunan tanah, kesesuaian projek, struktur JV, anggaran nilai dan keperluan pihak teknikal sebelum projek diteruskan.',
          icon: 'building',
        },
        {
          id: 'client-management',
          title: 'Pengurusan Pelanggan End-to-End',
          description:
            'Kami membantu pelanggan dari peringkat pertanyaan awal sehingga urusan susulan, termasuk rekod pelanggan, kemas kini status dan penyelarasan antara pihak yang terlibat.',
          icon: 'users',
        },
        {
          id: 'special-consultation',
          title: 'Konsultasi Kes Tanah Khas',
          description:
            'Kami membantu menilai kes tanah yang kompleks seperti dokumen tidak lengkap, pertikaian keluarga, isu pemilik bersama, tanah bermasalah dan kes yang memerlukan strategi penyelesaian.',
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
        'Pendekatan profesional, fokus kepada penyelesaian dan pengurusan yang tersusun.',
      items: [
        {
          title: 'Pendekatan Profesional',
          description:
            'Kami mengurus setiap urusan tanah secara tersusun melalui semakan maklumat, dokumentasi dan penyelarasan proses yang jelas.',
        },
        {
          title: 'Fokus Kepada Penyelesaian',
          description:
            'Kami bukan sekadar memasarkan tanah, tetapi membantu pelanggan memahami masalah, risiko dan strategi terbaik untuk setiap kes.',
        },
        {
          title: 'Pengurusan End-to-End',
          description:
            'Kami membantu dari peringkat awal sehingga tindakan susulan, termasuk koordinasi dengan owner, buyer, agent, peguam dan pihak berkaitan.',
        },
      ],
    },

    // ============================================================================
    // About Page
    // [NEEDS CLIENT INPUT] - Replace with actual company story
    // ============================================================================
    about: {
      title: 'Tentang NS Land Consultant Sdn. Bhd.',
      story: [
        'NS Land Consultant Sdn. Bhd. ditubuhkan sebagai sebuah syarikat perundingan tanah profesional yang membantu pemilik tanah, pembeli, pelabur dan pihak berkepentingan menguruskan hal ehwal tanah dengan lebih tersusun, telus dan strategik. Kami memberi fokus kepada perkhidmatan berkaitan pengurusan tanah, semakan maklumat hartanah, urusan jual beli, dokumentasi, pusaka, tukar syarat, pecah lot, perancangan pembangunan serta nasihat struktur projek tanah.',
        'Dengan pendekatan yang sistematik dan berorientasikan penyelesaian, kami membantu pelanggan memahami proses tanah yang kompleks melalui panduan yang jelas dan praktikal. Matlamat kami adalah untuk menjadi rakan perunding tanah yang dipercayai dalam membantu pelanggan membuat keputusan yang lebih tepat, selamat dan bernilai dalam setiap urusan tanah.',
      ],
      valuesTitle: 'Nilai Kami',
      values: [
        'Integriti dalam setiap urusan tanah',
        'Ketelusan dalam komunikasi dan proses',
        'Penyelesaian strategik untuk kepentingan pelanggan',
        'Profesionalisme dalam dokumentasi dan pengurusan',
        'Membina kepercayaan jangka panjang',
      ],
    },

    // ============================================================================
    // Contact Page
    // ============================================================================
    contact: {
      title: 'Hubungi Kami',
      subtitle:
        'Sedia untuk membincangkan urusan tanah anda? Hubungi NS Land Consultant hari ini untuk mendapatkan panduan awal berkaitan tanah, hartanah dan dokumentasi.',
      getInTouch: 'Hubungi Kami',
      whatsappButton: 'WhatsApp Kami',
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
        'NS Land Consultant Sdn. Bhd. menyediakan perkhidmatan perundingan tanah profesional untuk membantu pelanggan mengurus urusan tanah dengan lebih yakin dan tersusun.',
      quickLinks: 'Pautan Pantas',
      social: 'Media Sosial',
      contact: 'Hubungi',
      copyright: 'Hak cipta terpelihara.',
    },

    // ============================================================================
    // Call to Action Section
    // ============================================================================
    cta: {
      title: 'Sedia Untuk Memulakan?',
      subtitle:
        'Hubungi kami hari ini untuk perbincangan awal mengenai keperluan tanah atau hartanah anda.',
      button: 'Hubungi Kami',
      whatsappButton: 'WhatsApp Kami',
    },
    agentSystem: {
      title: 'Sistem Agent NS Land Consultant',
      subtitle:
        'Untuk memastikan pengurusan listing dan booking berjalan secara lebih tersusun, NS Land Consultant menyediakan sistem borang khas untuk kegunaan agent.',
      items: [
        {
          title: 'Borang Listing Tanah',
          description:
            'Digunakan oleh agent untuk menghantar maklumat tanah yang diperoleh daripada pemilik tanah.',
        },
        {
          title: 'Borang Booking Buyer',
          description:
            'Digunakan oleh agent apabila pembeli telah bersetuju untuk membuat booking bagi sesuatu listing tanah.',
        },
      ],
      notes:
        'Semua maklumat yang dihantar melalui borang ini akan direkod dan disemak oleh pihak admin untuk tujuan follow up, pengesahan dan pengurusan transaksi.',
      buttons: [
        'Hantar Listing Tanah',
        'Hantar Booking Buyer',
        'Daftar Sebagai Agent',
        'Semak Status Listing',
        'Hubungi Admin',
      ],
    },
  },

  en: {
    // ============================================================================
    // Site Tagline (for meta description fallback)
    // ============================================================================
    tagline: 'Professional land consultancy services in Malaysia',

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
      title: 'Your Professional Land Consultancy Partner',
      subtitle:
        'Helping landowners, buyers, and investors manage land matters in a structured, transparent, and strategic way.',
      cta: 'Contact Us',
    },

    // ============================================================================
    // Services Section
    // ============================================================================
    services: {
      title: 'Our Services',
      subtitle:
        'Comprehensive land consultancy services tailored to your needs.',
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
            'We provide advisory services on land potential, title status, land use, transaction risks, and the best course of action before clients make decisions.',
          icon: 'consulting',
        },
        {
          id: 'sales-management',
          title: 'Land Sale and Purchase Management',
          description:
            'We assist in structuring land sale and purchase processes, including listing management, buyer sourcing, booking coordination, preliminary documentation, and stakeholder coordination.',
          icon: 'handshake',
        },
        {
          id: 'inheritance',
          title: 'Inheritance Land Management',
          description:
            'We assist clients in understanding and organizing inheritance land matters through document review, heir coordination, and referrals to relevant professionals.',
          icon: 'family',
        },
        {
          id: 'verification',
          title: 'Land Verification & Due Diligence',
          description:
            'We assist with preliminary checks on titles, land category, express conditions, restrictions in interest, tenure status, and risks before any transaction proceeds.',
          icon: 'search',
        },
        {
          id: 'conversion',
          title: 'Land Conversion & Subdivision',
          description:
            'We help clients understand the process of land conversion, boundary subdivision, lot subdivision, and basic requirements before applications are initiated with relevant technical parties.',
          icon: 'transform',
        },
        {
          id: 'documentation',
          title: 'Documentation Management & Legal Support',
          description:
            'We assist in preparing and organizing supporting documents for land matters and coordinate issues that require referral to lawyers or relevant authorities.',
          icon: 'document',
        },
        {
          id: 'marketing',
          title: 'Land Marketing & Listing',
          description:
            'We assist in marketing land listings through promotional materials, buyer databases, agent networks, and suitable digital marketing channels.',
          icon: 'megaphone',
        },
        {
          id: 'development',
          title: 'Land Development Advisory Services',
          description:
            'We provide preliminary advisory on land development potential, project suitability, JV structures, estimated value, and technical requirements before projects proceed.',
          icon: 'building',
        },
        {
          id: 'client-management',
          title: 'End-to-End Client Management',
          description:
            'We assist clients from initial inquiry to follow-up stages, including client records, status updates, and coordination between involved parties.',
          icon: 'users',
        },
        {
          id: 'special-consultation',
          title: 'Special Land Case Consultation',
          description:
            'We assist in assessing complex land cases such as incomplete documents, family disputes, co-owner issues, problematic land, and cases requiring a structured resolution strategy.',
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
        'Professional approach, solution-focused support, and structured management.',
      items: [
        {
          title: 'Professional Approach',
          description:
            'We manage every land matter in a structured way through information review, documentation, and clear process coordination.',
        },
        {
          title: 'Solution-Focused',
          description:
            'We do not only market land; we help clients understand the issues, risks, and best strategies for each case.',
        },
        {
          title: 'End-to-End Management',
          description:
            'We assist from the initial stage to follow-up actions, including coordination with owners, buyers, agents, lawyers, and relevant parties.',
        },
      ],
    },

    // ============================================================================
    // About Page
    // ============================================================================
    about: {
      title: 'About NS Land Consultant Sdn. Bhd.',
      story: [
        'NS Land Consultant Sdn. Bhd. was established as a professional land consultancy company that assists landowners, buyers, investors, and stakeholders in managing land-related matters in a more structured, transparent, and strategic manner. We focus on land management services, property information verification, sale and purchase coordination, documentation, inheritance land matters, land conversion, subdivision, development planning, and land project advisory.',
        'Through a systematic and solution-oriented approach, we help clients understand complex land processes with clear and practical guidance. Our mission is to become a trusted land consultancy partner that helps clients make better, safer, and more valuable decisions in every land-related transaction.',
      ],
      valuesTitle: 'Our Values',
      values: [
        'Integrity in every land transaction',
        'Transparency in communication and process',
        'Strategic solutions for client interests',
        'Professionalism in documentation and management',
        'Building long-term trust',
      ],
    },

    // ============================================================================
    // Contact Page
    // ============================================================================
    contact: {
      title: 'Get in Touch',
      subtitle:
        'Ready to discuss your land matter? Contact NS Land Consultant today for preliminary guidance on land, property, and documentation matters.',
      getInTouch: 'Get in Touch',
      whatsappButton: 'Chat on WhatsApp',
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
        'NS Land Consultant Sdn. Bhd. provides professional land consultancy services to help clients manage land matters with greater confidence and structure.',
      quickLinks: 'Quick Links',
      social: 'Social Media',
      contact: 'Contact',
      copyright: 'All rights reserved.',
    },

    // ============================================================================
    // Call to Action Section
    // ============================================================================
    cta: {
      title: 'Ready to Get Started?',
      subtitle:
        'Contact us today for a discussion about your land or property needs.',
      button: 'Contact Us',
      whatsappButton: 'Chat on WhatsApp',
    },
    agentSystem: {
      title: 'NS Land Consultant Agent System',
      subtitle:
        'To ensure a more structured management of listings and bookings, NS Land Consultant provides dedicated forms for agent use.',
      items: [
        {
          title: 'Land Listing Form',
          description:
            'Used by agents to submit land information obtained from landowners.',
        },
        {
          title: 'Buyer Booking Form',
          description:
            'Used by agents when a buyer has agreed to place a booking for a land listing.',
        },
      ],
      notes:
        'All information submitted through these forms will be recorded and reviewed by the admin team for follow-up, verification, and transaction management.',
      buttons: [
        'Submit Land Listing',
        'Submit Buyer Booking',
        'Register as Agent',
        'Check Listing Status',
        'Contact Admin',
      ],
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
        ms: 'NAK BELI TANAH TAPI TAKUT KENA TIPU?',
        en: 'WANT TO BUY LAND BUT AFRAID OF BEING SCAMMED?',
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
