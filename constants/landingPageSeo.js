const CANONICAL_PATH = '/';

export const LANDING_PAGE = {
  canonicalUrl: 'https://calpolyprintcopy.com/',
  canonicalPath: CANONICAL_PATH,
  orderUrl: 'https://calpoly.webdeskprint.com/PSP/app/',
  businessName: 'Cal Poly Print & Copy',
  email: 'calpolyprints@calpoly.edu',
  address: {
    name: 'Robert E. Kennedy Library',
    streetAddress: '1 Grand Ave., Building 35',
    addressLocality: 'San Luis Obispo',
    addressRegion: 'CA',
    postalCode: '93407',
    addressCountry: 'US',
  },
  geo: {
    latitude: 35.3004,
    longitude: -120.6596,
  },
  openingHours: [
    'Tuesday - Thursday: 9:00 AM - 1:00 PM',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  serviceArea: ['On-Campus', 'San Luis Obispo', 'San Luis Obispo County'],
  audiencePriority: ['students', 'faculty/staff', 'public'],
  services: [
    'Basic Copies',
    'Banners',
    'Booklets/Programs',
    'Brochures',
    'Graphic Design Only',
    'NCR / Carbonless',
    'Post Cards',
    'Posters',
    'Signage',
  ],
  title:
    'Cal Poly Print & Copy | Posters, Banners, Booklets, and Online Ordering',
  description:
    'Cal Poly Print & Copy is your print solutions center. Conveniently located in Building 35, we specialize in small and large format prints for presentations, events, and the classroom. With easy online ordering and flexible hours, Cal Poly Print & Copy is the premier solution for your printing needs.',
  heroImage: '/logo.png',
};

export const LANDING_PAGE_CITATION_FACTS = [
  'Cal Poly Print & Copy is located at 1 Grand Ave., Building 35, San Luis Obispo, CA 93407.',
  'Current office hours are Tuesday through Thursday from 9:00 AM to 1:00 PM.',
  'Students, faculty/staff, and the public can place print orders online.',
  'Primary service area includes on-campus locations, San Luis Obispo, and San Luis Obispo County.',
  'Core services include Basic Copies, Banners, Booklets/Programs, Brochures, Posters, and Signage.',
  'Online ordering is available through the Cal Poly WebDesk Print portal.',
];

export const LANDING_PAGE_FAQS = [
  {
    question: 'How do I submit a print order online?',
    answer:
      'Use our online ordering portal, select your product and options, upload your file, and submit your order. Contact us by email if you need help choosing options.',
  },
  {
    question: 'Who is eligible to place orders through the online ordering system?',
    answer:
      'Students, faculty, staff, and the public can place print orders through our online workflow based on the job type and account requirements.',
  },
  {
    question: 'Can students place print orders, or is it only for faculty and staff?',
    answer:
      'Students can place print orders. Faculty and staff can also place orders and may use department billing workflows when applicable.',
  },
  {
    question: 'How far in advance should I submit my print job?',
    answer:
      'Submit as early as possible, especially for event, course, or deadline-driven materials. Advance notice helps us confirm production windows and finishing options.',
  },
  {
    question: 'What is the typical turnaround time for printing?',
    answer:
      'Turnaround depends on quantity, complexity, finishing, and current production volume. Most standard jobs are completed quickly, while complex jobs may require more time.',
  },
  {
    question: 'Can I request rush or same-day printing?',
    answer:
      'Rush requests may be available based on workload and job specifications. Contact us promptly to confirm feasibility before finalizing deadlines.',
  },
  {
    question: 'How will I know when my order is ready for pickup?',
    answer:
      'Pickup readiness is communicated through the ordering workflow or direct follow-up from our team when needed.',
  },
  {
    question: 'Can I make changes to an order after it has been submitted?',
    answer:
      'If production has not started, updates are often possible. Contact us immediately with your order details so we can confirm available changes.',
  },
  {
    question: 'What file formats do you accept (PDF, Word, PowerPoint, etc.)?',
    answer:
      'Common file formats are accepted, including PDF and standard office formats. PDF is usually preferred for print consistency.',
  },
  {
    question: 'What resolution should images be for high-quality printing?',
    answer:
      'For most print work, use high-resolution source files. Around 300 DPI at final print size is a common target for quality output.',
  },
  {
    question: 'Do my files need bleed and crop marks?',
    answer:
      'Bleed and crop marks are recommended for edge-to-edge designs and trimmed pieces. Include them when your design requires precise trimming.',
  },
  {
    question: 'Can you help me fix formatting issues before printing?',
    answer:
      'Yes. We can help review and resolve common formatting issues so your print file is production-ready.',
  },
  {
    question: 'Will you review my file before printing to catch errors?',
    answer:
      'We review files for print-readiness signals, but content-level proofreading remains the customer responsibility unless separately arranged.',
  },
  {
    question: 'What happens if my uploaded file is corrupted or missing fonts?',
    answer:
      'We will contact you to request a corrected file or alternate format before production proceeds.',
  },
  {
    question: 'Do you print flyers, brochures, handouts, and booklets?',
    answer:
      'Yes. We produce a range of small-format products, including flyers, brochures, classroom handouts, and booklets/programs.',
  },
  {
    question: 'Can you print double-sided documents?',
    answer:
      'Yes. Double-sided printing is available for many document formats and paper options.',
  },
  {
    question: 'What paper sizes are available?',
    answer:
      'Multiple standard and specialty sizes are available depending on the product type and print method.',
  },
  {
    question: 'Can I choose between color and black-and-white printing?',
    answer:
      'Yes. Color and black-and-white printing options are available for eligible products.',
  },
  {
    question: 'Do you offer stapling, folding, or binding services?',
    answer:
      'Yes. We support finishing services such as stapling, folding, and binding when compatible with the selected product.',
  },
  {
    question: 'What quantities can you print?',
    answer:
      'We support both small runs and larger production quantities, with timelines based on scope and finishing.',
  },
  {
    question: 'Do you print posters for classes, research presentations, and events?',
    answer:
      'Yes. We produce posters for classes, research presentations, events, and campus programs.',
  },
  {
    question: 'What is the largest size poster or banner you can produce?',
    answer:
      'Maximum size depends on product and material. Contact us with your target dimensions to confirm current capabilities.',
  },
  {
    question: 'Can I print on materials other than paper?',
    answer:
      'Some specialty materials may be available depending on the job and finishing requirements.',
  },
  {
    question: 'Do you offer mounting or laminating services for posters?',
    answer:
      'Mounting and laminating may be available for qualifying projects. Include these requirements when requesting your job.',
  },
  {
    question: 'How long does large-format printing usually take?',
    answer:
      'Large-format timelines vary by size, quantity, materials, and finishing. Submit early to secure your desired deadline.',
  },
  {
    question: 'What paper types and weights are available?',
    answer:
      'We offer a range of paper stocks and weights aligned to documents, marketing materials, and presentation outputs.',
  },
  {
    question: 'Which paper is best for presentations or marketing materials?',
    answer:
      'Paper selection depends on the use case and finish preference. We can recommend options based on durability, appearance, and budget.',
  },
  {
    question: 'Do you offer recycled or environmentally friendly paper options?',
    answer:
      'Environmentally conscious stock options may be available depending on current inventory and product requirements.',
  },
  {
    question: 'Can I request specialty paper or custom stock?',
    answer:
      'Specialty and custom stocks may be supported by request. Lead times can vary for non-standard materials.',
  },
  {
    question: 'What finishing options are available (lamination, trimming, binding, etc.)?',
    answer:
      'Available finishing options can include trimming, folding, stapling, binding, and laminating based on the selected product.',
  },
  {
    question: 'How much will my print job cost?',
    answer:
      'Pricing depends on print type, quantity, size, stock, and finishing. The ordering flow and quote process provide the most accurate cost for your job.',
  },
  {
    question: 'Can I get a quote before placing an order?',
    answer:
      'Yes. You can request pricing details for your specifications before final production.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'Payment and billing methods depend on account type and workflow. Departmental and customer payment options are handled through the approved process.',
  },
  {
    question: 'Do I need a PO number for departmental billing?',
    answer:
      'Departmental billing may require a PO number depending on current policy. Confirm required billing fields before checkout.',
  },
  {
    question: 'Can I charge print jobs to a campus account?',
    answer:
      'Campus account billing may be available for eligible users and order types under current campus processes.',
  },
  {
    question: 'Where is Print & Copy located?',
    answer:
      'Cal Poly Print & Copy is located in the Robert E. Kennedy Library area at 1 Grand Ave., Building 35, San Luis Obispo, CA 93407.',
  },
  {
    question: 'What are your hours of operation?',
    answer:
      'Current office hours are Tuesday through Thursday from 9:00 AM to 1:00 PM. Hours may change seasonally.',
  },
  {
    question: 'Can someone else pick up my order for me?',
    answer:
      'Third-party pickup may be possible depending on order details and verification requirements.',
  },
  {
    question: 'Do you offer campus delivery?',
    answer:
      'Delivery options vary by job and campus workflow. Contact us to confirm available fulfillment methods.',
  },
  {
    question: 'What should I do if I need help choosing the right print option?',
    answer:
      'Email calpolyprints@calpoly.edu with your project goals, dimensions, quantities, and deadline, and we will guide you to the best fit.',
  },
];

export function withOrderUtm(url, contentLabel = 'hero_button') {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set('utm_source', 'calpolyprintcopy.com');
    parsed.searchParams.set('utm_medium', 'referral');
    parsed.searchParams.set('utm_campaign', 'landing_page');
    parsed.searchParams.set('utm_content', contentLabel);
    return parsed.toString();
  } catch {
    return url;
  }
}

export function buildLandingSchemas(baseSiteUrl = LANDING_PAGE.canonicalUrl) {
  const canonical = new URL(LANDING_PAGE.canonicalPath, baseSiteUrl).toString();
  const orderUrl = LANDING_PAGE.orderUrl;
  const faqEntities = LANDING_PAGE_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: LANDING_PAGE.title,
      description: LANDING_PAGE.description,
      url: canonical,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        url: baseSiteUrl,
        name: LANDING_PAGE.businessName,
      },
      potentialAction: {
        '@type': 'ViewAction',
        target: orderUrl,
        name: 'Submit Print Order Online',
      },
      about: {
        '@type': 'Thing',
        name: 'Printing services in San Luis Obispo',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      additionalType: 'https://schema.org/Store',
      name: LANDING_PAGE.businessName,
      url: canonical,
      image: new URL(LANDING_PAGE.heroImage, baseSiteUrl).toString(),
      email: LANDING_PAGE.email,
      address: {
        '@type': 'PostalAddress',
        ...LANDING_PAGE.address,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: LANDING_PAGE.geo.latitude,
        longitude: LANDING_PAGE.geo.longitude,
      },
      areaServed: LANDING_PAGE.serviceArea,
      openingHoursSpecification: LANDING_PAGE.openingHoursSpecification,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Print Services',
        itemListElement: LANDING_PAGE.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
            serviceType: service,
            provider: {
              '@type': 'Organization',
              name: LANDING_PAGE.businessName,
            },
            areaServed: LANDING_PAGE.serviceArea,
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntities,
    },
  ];
}