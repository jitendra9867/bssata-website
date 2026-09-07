import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const schemes = [
  {
    id: 1,
    title: 'Karthika Samaradhana',
    description: 'Annual community feast during the holy month of Karthika — attended by 800+ people in 2025 with music programmes.',
    icon: '🪔',
    category: 'Cultural',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Sampradaya Calendar',
    description: 'Publication and distribution of traditional Sampradaya Calendars to 3000+ households across the state and abroad.',
    icon: '📅',
    category: 'Distribution',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Free Mass Upanayanams',
    description: 'Sacred thread ceremonies conducted free of cost for underprivileged youth — 10 Vatuvus initiated in Feb 2025.',
    icon: '🙏',
    category: 'Religious',
    status: 'Active',
  },
  {
    id: 4,
    title: 'Aabdheekam Services',
    description: 'Ancestral rites preservation services for Brahmin families, including those staying outside AP and abroad via coordination.',
    icon: '🕉️',
    category: 'Religious',
    status: 'Active',
  },
  {
    id: 5,
    title: 'Vedic Classes',
    description: 'Structured classes for Sandhyavandanam, Mantra Pushpam, Mahamantra Pushpam and Rudram for all age groups.',
    icon: '📖',
    category: 'Education',
    status: 'Active',
  },
  {
    id: 6,
    title: 'Jandhyala Pournami',
    description: 'Distribution of Yagnopaveethams on the auspicious occasion — 2000 distributed at 34 places in 2024.',
    icon: '🧵',
    category: 'Distribution',
    status: 'Active',
  },
  {
    id: 7,
    title: 'Life Certificate Desk',
    description: 'Issuance of Life Certificates for Central and State pensioners (Jan, Feb, Nov, Dec) with face reading method.',
    icon: '📋',
    category: 'Service',
    status: 'Active',
  },
  {
    id: 8,
    title: 'Legal Cell',
    description: 'Low-cost legal advice by Retd. Judge Sri Medicharla Prabhakar Rao and Advocate Dendukuri Narayana Murthy.',
    icon: '⚖️',
    category: 'Service',
    status: 'Active',
  },
  {
    id: 9,
    title: 'Sri Vidyanidhi Scholarships',
    description: 'Educational financial assistance — ₹1,97,000 disbursed to 4 B.Tech final year students in 2026.',
    icon: '🎓',
    category: 'Education',
    status: 'Active',
  },
  {
    id: 10,
    title: 'Life Membership',
    description: 'Life Membership Enrollment Scheme — donors contributing ₹10,000 and above receive permanent membership.',
    icon: '👤',
    category: 'Membership',
    status: 'Active',
  },
  {
    id: 11,
    title: 'Arama Kshetram',
    description: 'Comprehensive infrastructure for final rites management — First floor inaugurated in Dec 2023. New site purchased in 2025-2026 for expansion.',
    icon: '🏗️',
    category: 'Infrastructure',
    status: 'Active',
  },
  {
    id: 12,
    title: 'Ugadi Celebrations',
    description: 'Panchanga Sravanam, Visista Vyakthi honors, clothes to Vedic students, sarees to poor ladies.',
    icon: '🎉',
    category: 'Cultural',
    status: 'Active',
  },
  {
    id: 13,
    title: 'Bala Goseva',
    description: 'Children\'s cow service initiative — Cow Kiddy Banks distributed to children. ₹27,428 contributed by 41 children in 2025.',
    icon: '🐄',
    category: 'Service',
    status: 'Active',
  },
  {
    id: 14,
    title: 'Mahalaya Pitrupakshalu',
    description: 'First time free Mahalaya Pitrupakshalu conducted at Arama Kshetram. 12+ people offered Tila Tarpanams in 2025.',
    icon: '🕉️',
    category: 'Religious',
    status: 'Active',
  },
];

const categories = [
  { name: 'All', icon: '📋' },
  { name: 'Cultural', icon: '🎭' },
  { name: 'Religious', icon: '🙏' },
  { name: 'Education', icon: '📚' },
  { name: 'Service', icon: '🤝' },
  { name: 'Distribution', icon: '📦' },
  { name: 'Infrastructure', icon: '🏗️' },
  { name: 'Membership', icon: '👤' },
];

export default function Schemes() {
  return (
    <>
      <Head>
        <title>Welfare Schemes — Brahmana Seva Samiti</title>
        <meta name="description" content="Explore the 14+ welfare schemes and activities by Brahmana Seva Samiti serving the Brahmin community since 1994." />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.25 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-700/90 via-saffron-800/85 to-gray-900/90" />
        <div className="relative page-container text-center">
          <p className="text-gold-300 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Our Initiatives</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-4 tracking-tight">Welfare Schemes</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A comprehensive suite of welfare schemes and cultural programs designed to serve every member of our community.
          </p>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="page-container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-medium text-gray-600 hover:text-saffron-600 hover:bg-saffron-50 border border-cream-200 hover:border-saffron-200 transition-all duration-300"
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <div key={scheme.id} className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{scheme.icon}</span>
                  <span className="px-2 py-1 rounded-full bg-saffron-50 text-saffron-600 text-[10px] font-bold uppercase tracking-wider">
                    {scheme.category}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-saffron-600 transition-colors">{scheme.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{scheme.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {scheme.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 bg-gradient-to-r from-saffron-600 to-saffron-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">14+</div>
                <div className="text-saffron-100 text-sm">Active Schemes</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">760+</div>
                <div className="text-blue-100 text-sm">Beneficiaries</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">₹30L+</div>
                <div className="text-blue-100 text-sm">Distributed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">30+</div>
                <div className="text-blue-100 text-sm">Years Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-black text-gray-800 mb-4">Join Our Mission</h2>
            <div className="ornament-line mb-6" />
            <p className="text-gray-600 mb-8 leading-relaxed">
              Become a life member and help us continue these welfare schemes for the community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="px-8 py-3 bg-gradient-to-r from-saffron-600 to-saffron-700 text-white font-semibold rounded-xl hover:from-saffron-700 hover:to-saffron-800 transition-all duration-300 shadow-lg text-center">
                Register Now
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-saffron-200 text-saffron-600 font-semibold rounded-xl hover:bg-saffron-50 transition-all duration-300 text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
