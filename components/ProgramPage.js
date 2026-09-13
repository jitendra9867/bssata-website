import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════════
   PROGRAM METADATA — 10 core programs of the Sangham
   Each entry powers a dedicated detail page at /programs/<slug>
   ═══════════════════════════════════════════════════════════════ */
export const PROGRAMS = [
  {
    slug: 'uchita-upanayanamulu',
    title: 'Uchita Upanayanamulu',
    icon: '🙏',
    tagline: 'Free Samuhika Upanayanams for underprivileged Vatuvus',
    description:
      'Uchita Upanayanamulu is the Sangham\'s sacred thread ceremony scheme — free Samuhika (mass) Upanayanams conducted at no cost to families, followed by community dining for all attendees. After a gap of 27 years the program was revived in 2024 and is now held every February at Santoshimata Temple, Syamala Nagar, Guntur.',
    highlights: [
      { icon: '🆓', title: 'Entirely Free', text: 'Ceremony, Purohit Dakshina, sacred materials and Annadanam — no cost to the family.' },
      { icon: '👥', title: 'Samuhika Format', text: '8–12 Vatuvus initiated together in one grand ceremony, with 250+ people dining.' },
      { icon: '🛕', title: 'Temple Venue', text: 'Held at Santoshimata Temple, Syamala Nagar — venue assured free by Sri Gabbita Sivaram Krishna Prasad.' },
      { icon: '📜', title: 'Long Legacy', text: 'First conducted in 1995 for 12 Vatuvus at Gayatri Mata Mandiram; revived in 2024 after 27 years.' },
    ],
    how: [
      'Contact the Secretary (Sri Pamidighantam V. Satyanarayana — 78939 61234) to register a Vatuvu.',
      'Provide the boy\'s name, gotram, date of birth and a recent photograph.',
      'Muhurtham, Purohit and all materials are arranged by the Sangham.',
      'Families, relatives and community members join the Annadanam after the ceremony.',
    ],
  },
  {
    slug: 'ugadi',
    title: 'Ugadi',
    icon: '🎉',
    tagline: 'Telugu New Year — Panchanga Sravanam & community honors',
    description:
      'The Sangham celebrates Telugu New Year (Ugadi) every year with Panchanga Sravanam, honoring of Visista Vyakthulu, and distributions to the needy — new clothes to Vedic students and Upadhyayulu, and sarees to poor ladies of the community. The event is held at local temples and is open to all community members.',
    highlights: [
      { icon: '📿', title: 'Panchanga Sravanam', text: 'Traditional reading of the new year Panchanga with forecasts for the Samvatsara.' },
      { icon: '🎁', title: 'Clothes & Sarees', text: 'New clothes to 45+ Vedic students and sarees to 50 poor ladies every year.' },
      { icon: '🏆', title: 'Visista Vyakthulu', text: 'Distinguished members of the community are felicitated on the occasion.' },
      { icon: '📖', title: '150 Panchangams', text: 'Free Panchangams distributed to attendees at the celebration.' },
    ],
    how: [
      'Held every Ugadi day at local temples in Guntur (recently Anjaneya Swamy Temple).',
      'All community members are welcome — no registration needed.',
      'Donors can sponsor clothes, sarees or Annadanam for the event.',
      'Visista Vyakthi nominations may be sent to the Secretary before the event.',
    ],
  },
  {
    slug: 'general-body-meeting',
    title: 'General Body Meeting',
    icon: '🗳️',
    tagline: 'Annual gathering of all life members',
    description:
      'The General Body Meeting is the annual gathering of all life members of the Sangham. The year\'s accounts are presented, activities are reviewed, plans for the coming year are discussed, and the executive committee is elected — traditionally unanimously, as per the Sangham\'s tradition.',
    highlights: [
      { icon: '📊', title: 'Accounts Presented', text: 'Audited income and expenditure accounts are placed before the members.' },
      { icon: '🗳️', title: 'Unanimous Elections', text: 'New office bearers elected unanimously — President, Secretary, Treasurer and committee.' },
      { icon: '📋', title: 'Activity Review', text: 'All programs, welfare schemes and infrastructure works reviewed openly.' },
      { icon: '🤝', title: 'Member Voice', text: 'Every life member has a voice and vote in shaping the Sangham\'s direction.' },
    ],
    how: [
      'Convened once a year — life members are notified of date and venue in advance.',
      'Members are requested to attend and review the Sangham\'s work.',
      'Not a life member yet? Enroll at the Membership page and attend the next meeting.',
      'The current body (elected May 2023) serves until the next election.',
    ],
  },
  {
    slug: 'sri-vidyanidhi',
    title: 'Sri Vidyanidhi',
    icon: '🎓',
    tagline: 'Scholarships for professional course students',
    description:
      'Sri Vidyanidhi is the Sangham\'s educational financial assistance scheme. Every August, scholarships are disbursed to meritorious B.Tech and professional course students from member families — growing every year, from ₹1,70,000 in 2025 to ₹1,97,000 in 2026.',
    highlights: [
      { icon: '💰', title: '₹1,97,000 in 2026', text: 'Disbursed to 4 B.Tech students — the amount grows every year with donor support.' },
      { icon: '📅', title: 'Every August', text: 'Scholarships are presented at a function with chief guests from the community.' },
      { icon: '🎯', title: 'Merit Focused', text: 'Supports students in B.Tech and professional courses from member families.' },
      { icon: '🌟', title: 'Sponsor a Scholar', text: 'Donors can fully or partially sponsor a student\'s scholarship.' },
    ],
    how: [
      'Applications open mid-year — watch this page or contact the Secretary.',
      'Eligibility: B.Tech / professional course students from member families.',
      'Submit mark lists, bonafide certificate and fee receipt with the application.',
      'Selection is announced at the August disbursement function.',
    ],
  },
  {
    slug: 'jandhyala-pournami',
    title: 'Jandhyala Pournami',
    icon: '🧵',
    tagline: 'Free Yagnopaveetham distribution across Guntur & abroad',
    description:
      'On Jandhyala Pournami (Upakarma day), the Sangham distributes Yagnopaveethams (sacred threads) free of cost through temples, Vedapathasalas and member residences — 2000 distributed at 34 places in 2024, reaching Guntur, Hyderabad, and even London.',
    highlights: [
      { icon: '🧵', title: '2000 Threads', text: 'Distributed in 2024 at 34 places — up from 1000 in 2023.' },
      { icon: '📍', title: '46 Centers', text: 'Temples, Vedapathasalas, member residences and coordinators across Guntur.' },
      { icon: '✈️', title: 'Reaches Abroad', text: 'Distribution points in London and Hyderabad for members staying away.' },
      { icon: '🆓', title: 'Completely Free', text: 'Every Yagnopaveetham is gifted in memory of donors\' families.' },
    ],
    how: [
      'Pick up your Yagnopaveetham from any of the 46 centers before Jandhyala Pournami.',
      'The full list of centers with contacts is on the About page.',
      'Want to sponsor a batch? Contact the Secretary — 1000 threads ≈ a memorable seva.',
      'Bulk supply available for temples and Vedapathasalas.',
    ],
  },
  {
    slug: 'mahalaya-pakshalu',
    title: 'Mahalaya Pakshalu',
    icon: '🕉️',
    tagline: 'Free Pitrupaksha Tila Tarpanams at Arama Kshetram',
    description:
      'During Mahalaya Pakshalu (Pitrupaksha — the fortnight dedicated to ancestors), the Sangham conducted for the first time in 2025 free Mahalaya Pitrupakshalu at Arama Kshetram, where 12+ people offered Tila Tarpanams to their forefathers with full Vedic guidance.',
    highlights: [
      { icon: '🆕', title: 'New in 2025', text: 'First time free Mahalaya Pitrupakshalu conducted at Arama Kshetram.' },
      { icon: '🌾', title: 'Tila Tarpanam', text: 'Tila (sesame) Tarpanams offered to ancestors with proper Vedic procedures.' },
      { icon: '🧑‍🏫', title: 'Purohit Guidance', text: 'Qualified Purohits guide every Kartaa through the rituals step by step.' },
      { icon: '🛕', title: 'At Arama Kshetram', text: 'Conducted at the Sangham\'s own facility on Guntur–Chilakaluripet Highway.' },
    ],
    how: [
      'Held every Mahalaya Amavasya fortnight at Arama Kshetram.',
      'All materials — tila, darbha, kalasam — are arranged by the Sangham.',
      'Intimate the thithi (date) of your forefather to the Secretary to book your slot.',
      'Families staying abroad can depute relatives or request coordination for the rites.',
    ],
  },
  {
    slug: 'karthika-samaradhana',
    title: 'Karthika Samaradhana',
    icon: '🪔',
    tagline: 'The flagship annual community feast',
    description:
      'Karthika Samaradhana is the largest gathering of the Sangham year — a grand community feast during the holy month of Karthika, with cultural and music programmes, donor felicitations and publication of the year\'s Sampradaya Calendar. Attendance has grown from 650 in 2023 to 800+ in 2025.',
    highlights: [
      { icon: '🍽️', title: '800+ Dine Together', text: 'The biggest Annadanam of the year, growing every single year.' },
      { icon: '🎵', title: 'Music Programmes', text: 'Cultural and classical music performances by community artists.' },
      { icon: '📅', title: 'Calendar Release', text: '3000 Sampradaya Calendars published and released at the event.' },
      { icon: '🏅', title: 'Donor Felicitation', text: 'Donors to Sangham projects are felicitated on stage.' },
    ],
    how: [
      'Held in the holy month of Karthika (Nov) — venues announced in advance.',
      'All community members are welcome; donors may sponsor the feast or part of it.',
      'Sampradaya Calendars for the next year are distributed at the event.',
      'Donors are felicitated — contact the Secretary to contribute.',
    ],
  },
  {
    slug: 'arama-kshetramu',
    title: 'Arama Kshetramu',
    icon: '🏗️',
    tagline: 'Infrastructure for final rites management',
    description:
      'Arama Kshetram is the Sangham\'s own facility for final rites — built on a 400 sq. yard site procured in 2011 near Visalakshi Cold Storage on the Guntur–Chilakaluripet Highway, with Gruhapravesam in 2015 and the first floor inaugurated in December 2023. The Sangham is now expanding: 100 sq. yards purchased in 2025-26 and Bhudanam collection for 200 more sq. yards is ongoing.',
    highlights: [
      { icon: '🛕', title: 'Own Facility', text: 'Full infrastructure for final rites with all Vedic facilities on Sangham land.' },
      { icon: '🏢', title: 'First Floor — 2023', text: 'Inaugurated formally with all rituals in Dec 2023, named in memory of founder Sri P.V. Ramanaiah.' },
      { icon: '📐', title: 'Expanding', text: '100 sq. yards purchased in 2025-26; Bhudanam collection for 200 sq. yards at ₹17,000/sq. yd ongoing.' },
      { icon: '🤲', title: 'Manageable Cost', text: 'Rites performed at the facility at a fraction of private costs.' },
    ],
    how: [
      'Located near Visalakshi Cold Storage, Guntur–Chilakaluripet Highway. Manager: 95027 12588.',
      'Contact the Manager or Secretary to book the facility for final rites.',
      'Support the expansion — donate towards Bhudanam of 200 sq. yards on the north side.',
      'Donations of ₹17,000 cover one square yard of the new site.',
    ],
  },
  {
    slug: 'masikamulu-abdikamulu',
    title: 'Masikamulu / Abdikamulu',
    icon: '🕉️',
    tagline: 'Coordination of monthly & annual memorial rites',
    description:
      'The Sangham coordinates Masikam (monthly) and Abdikam (annual) memorial rites for Brahmin families — a service especially valued by members staying outside Andhra Pradesh and abroad. Working with family priests and Arama Kshetram, the Sangham ensures rites are performed properly even when the family cannot travel to Guntur.',
    highlights: [
      { icon: '🌗', title: 'Masikam & Abdikam', text: 'Both monthly and annual memorial rites arranged with full Vedic procedure.' },
      { icon: '✈️', title: 'For NRI Families', text: 'Families in the UK, US and elsewhere rely on this coordination service.' },
      { icon: '🧑‍🏫', title: 'Priest Coordination', text: 'The Sangham liaises with your family priest or arranges a qualified Purohit.' },
      { icon: '🛕', title: 'Arama Kshetram Venue', text: 'Rites can be conducted at the Sangham\'s own facility when needed.' },
    ],
    how: [
      'Contact the Secretary with the name, thithi and details of the departed.',
      'The Sangham coordinates with your family priest or arranges one.',
      'Rites are performed at Arama Kshetram or a venue of your choice in Guntur.',
      'Families abroad receive updates and photos of the performed rites.',
    ],
  },
  {
    slug: 'pura-pramukhulu',
    title: 'Pura Pramukhulu',
    icon: '🏘️',
    tagline: 'Elders guiding each veda-patra / street',
    description:
      'Pura Pramukhulu are the elders and senior-most members of each veda-patra / street (pura) who guide the Sangham\'s activities and represent their locality\'s members — the living bridge between the committee and every household in the community.',
    highlights: [
      { icon: '🏛️', title: 'Local Leadership', text: 'Senior members of every pura anchor the Sangham at street level.' },
      { icon: '📢', title: 'Two-way Bridge', text: 'They carry member needs to the committee and Sangham news to every home.' },
      { icon: '🧭', title: 'Guidance Role', text: 'Advise on programs, enrollments and family welfare needs in their area.' },
      { icon: '📜', title: 'Being Compiled', text: 'The full list of Pura Pramukhulu will be published here.' },
    ],
    how: [
      'If you are a Pura Pramukh or know one in your area, contact the Secretary — 78939 61234.',
      'Pura Pramukhulu help identify beneficiaries for welfare schemes.',
      'They coordinate local distribution of Jandhyalas, Panchangams and Calendars.',
      'The compiled list will be published on this page shortly.',
    ],
  },
];

/* Map legacy anchor ids → slugs so old /programs#xyz links keep working */
export const LEGACY_ANCHOR_MAP = {
  upanayanam: 'uchita-upanayanamulu',
  ugadi: 'ugadi',
  'general-body': 'general-body-meeting',
  vidyanidhi: 'sri-vidyanidhi',
  jandhyala: 'jandhyala-pournami',
  mahalaya: 'mahalaya-pakshalu',
  karthika: 'karthika-samaradhana',
  arama: 'arama-kshetramu',
  masikam: 'masikamulu-abdikamulu',
  'pura-pramukhulu': 'pura-pramukhulu',
};

export function getProgram(slug) {
  return PROGRAMS.find((p) => p.slug === slug);
}

export default function ProgramPage({ program }) {
  if (!program) return null;

  const others = PROGRAMS.filter((p) => p.slug !== program.slug);

  return (
    <>
      <Head>
        <title>{program.title} — Programs — Brahmana Seva Samiti</title>
        <meta name="description" content={`${program.title}: ${program.tagline}. A flagship program of Brahmana Seva Samiti, Guntur.`} />
      </Head>

      {/* Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.png" alt="" fill className="object-cover object-center" sizes="100vw" priority />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-3xl" />
        <div className="relative page-container text-center">
          <span className="text-5xl mb-3 block">{program.icon}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">
            {program.title}
          </h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {program.tagline}
          </p>
        </div>
      </section>

      {/* About + Highlights */}
      <section className="py-14 md:py-16 section-tint">
        <div className="page-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-start mb-12">
              <div className="lg:col-span-2">
                <span className="section-eyebrow">About the Program</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
                  About this Program
                </h2>
                <div className="ornament-line mb-4 !mx-0" />
                <p className="text-base text-gray-700 leading-relaxed mb-5">{program.description}</p>
                <div className="callout border-saffron-200/80 bg-white">
                  <p className="text-sm text-saffron-800 leading-relaxed">
                    <strong>How to participate:</strong> Contact the Secretary at{' '}
                    <a href="tel:7893961234" className="underline font-semibold whitespace-nowrap">78939 61234</a>{' '}
                    or{' '}
                    <a href="mailto:brahmanaseva.ata97@gmail.com" className="underline font-semibold break-all">
                      brahmanaseva.ata97@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Program Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {program.highlights.map((h) => (
                    <div key={h.title} className="p-5 rounded-xl bg-white border border-cream-200 shadow-[0_2px_12px_rgba(195,74,44,0.06)] hover:border-saffron-200 hover:shadow-[0_10px_28px_rgba(195,74,44,0.10)] transition-all duration-300">
                      <span className="icon-badge mb-3">{h.icon}</span>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{h.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{h.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-cream-200 shadow-[0_2px_12px_rgba(195,74,44,0.06)]">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-5">How It Works</h3>
              <ol className="space-y-4">
                {program.how.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_4px_10px_rgba(195,74,44,0.3)]">
                      {i + 1}
                    </span>
                    <span className="text-base text-gray-700 leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Other programs */}
      <section className="py-14 md:py-16 section-photo border-y border-cream-200">
        <div className="page-container relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-eyebrow">Keep Exploring</span>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Explore Other Programs</h2>
              <div className="ornament-line mb-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="group p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-cream-200 text-center hover:border-saffron-300 hover:shadow-[0_12px_30px_rgba(195,74,44,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-3xl mb-2 block">{p.icon}</span>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-saffron-600 leading-snug block">
                    {p.title}
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-saffron-500 to-saffron-600 border border-saffron-500 hover:from-saffron-600 hover:to-saffron-700 hover:shadow-[0_10px_24px_rgba(195,74,44,0.3)] transition-all duration-300"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
