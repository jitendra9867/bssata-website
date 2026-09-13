/* ═══════════════════════════════════════════════════════════════
   FOOTER CTA CONFIG — "Be Part of Our Legacy"
   Per-page content for the CTA band shown above the footer on
   inner pages. Homepage (/) is excluded — it has its own CTAs.
   ═══════════════════════════════════════════════════════════════ */

export const FOOTER_CTA = {
  /* ---- Program hub + program detail pages (slug-matched) ---- */
  programs: {
    eyebrow: 'Participate in Our Programs',
    title: 'Support These Programs',
    text: 'Every program runs on community support. Enroll a Vatuvu, sponsor a scholarship, or contribute towards Arama Kshetram expansion — every seva counts.',
    primary: { label: 'Donate Now', href: '/contact#donate' },
    secondary: { label: 'View All Programs', href: '/programs' },
  },
  about: {
    eyebrow: 'Be Part of Our Legacy',
    title: 'Join Three Decades of Seva',
    text: 'Since 1994 the Sangham has served the community through Upanayanams, scholarships and Annadanam. Join us — through membership, donations or volunteering.',
    primary: { label: 'Become a Member', href: '/register' },
    secondary: { label: 'View Members', href: '/members' },
  },
  committee: {
    eyebrow: 'Work With the Committee',
    title: 'Lend Your Time & Talent',
    text: 'The committee welcomes volunteers for event coordination, distribution drives and welfare schemes. Reach out to the Secretary to get involved.',
    primary: { label: 'Contact the Secretary', href: '/contact' },
    secondary: { label: 'About the Sangham', href: '/about' },
  },
  community: {
    eyebrow: 'Want to Contribute?',
    title: 'Grow the Circle of Giving',
    text: 'Pick up a Cow Kiddy Bank for your child, sponsor a batch of Yagnopaveethams, or volunteer as a distribution center next Jandhyala Pournami.',
    primary: { label: 'Contact Us', href: '/contact' },
    secondary: { label: 'Back to About Us', href: '/about' },
  },
  contact: {
    eyebrow: 'Ready to Help?',
    title: 'Every Rupee Reaches Seva',
    text: 'Donations are eligible for tax exemption under Section 12A. For queries about donations, membership or schemes, the Secretary is one call away.',
    primary: { label: 'Call 78939 61234', href: 'tel:7893961234' },
    secondary: { label: 'View Bank Details', href: '#bank-details' },
  },
  gallery: {
    eyebrow: 'Share Your Moments',
    title: 'Feature Your Photos',
    text: 'Have photos from Sangham events? Share them with us and help build a visual memory of three decades of community life.',
    primary: { label: 'Email Your Photos', href: 'mailto:brahmanaseva.ata97@gmail.com?subject=Gallery%20Photo%20Submission' },
    secondary: { label: 'View Welfare Schemes', href: '/schemes' },
  },
  members: {
    eyebrow: 'Join the Directory',
    title: 'Become a Life Member',
    text: 'Contribute ₹10,000 or above for permanent life membership — with access to all welfare schemes, scholarships and community programs.',
    primary: { label: 'Register Now', href: '/register' },
    secondary: { label: 'Bank Details & Donations', href: '/contact' },
  },
  register: {
    eyebrow: 'Almost There',
    title: 'Complete Your Enrollment',
    text: 'Submit the registration form and reach out to the Secretary to complete your life membership — benefits start immediately.',
    primary: { label: 'Call 78939 61234', href: 'tel:7893961234' },
    secondary: { label: 'View Members', href: '/members' },
  },
  calendar: {
    eyebrow: 'Free Sampradaya Calendar',
    title: 'Get a Calendar by Post',
    text: 'We distribute calendars free of cost across Andhra Pradesh, other states, and abroad. Write to us and we will send one to your address.',
    primary: { label: 'Request Calendar', href: 'mailto:brahmanaseva.ata97@gmail.com?subject=Sampradaya%20Calendar%20Request' },
    secondary: { label: 'View All Programs', href: '/programs' },
  },
  schemes: {
    eyebrow: 'Join Our Mission',
    title: 'Support a Welfare Scheme',
    text: 'From scholarships to Goseva, every scheme is powered by donors. Sponsor a scheme fully or partially — or register as a life member today.',
    primary: { label: 'Register Now', href: '/register' },
    secondary: { label: 'Donate Now', href: '/contact#donate' },
  },
};

/* Program detail page slugs → reuse the "programs" CTA content */
export const PROGRAM_SLUGS = [
  'uchita-upanayanamulu',
  'ugadi',
  'general-body-meeting',
  'sri-vidyanidhi',
  'jandhyala-pournami',
  'mahalaya-pakshalu',
  'karthika-samaradhana',
  'arama-kshetramu',
  'masikamulu-abdikamulu',
  'pura-pramukhulu',
];

/** Resolve CTA content for a pathname. Returns null on the homepage. */
export function getCtaForPath(pathname) {
  if (!pathname || pathname === '/') return null;
  const path = pathname.replace(/^\/+|\/+$/g, '');
  const [first, second] = path.split('/');

  if (first === 'programs') {
    /* second is a slug, empty (hub), or '[slug]' during prerender */
    if (!second || second.startsWith('[') || PROGRAM_SLUGS.includes(second)) return FOOTER_CTA.programs;
  }
  return FOOTER_CTA[first] || null;
}
