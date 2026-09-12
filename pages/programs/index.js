import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════════
   ANNUAL PROGRAMS & EVENTS — 10 core programs of the Sangham
   ═══════════════════════════════════════════════════════════════ */

const mahalayaEvents2 = [
  { year: '2025', detail: 'First time free Mahalaya Pitrupakshalu conducted at Arama Kshetram. 12+ people offered Tila Tarpanams with full Vedic guidance.' },
];

const upanayanamEvents = [
  { year: '1995', date: 'March', detail: 'First Samuhika Uchita Upanayanams for 12 Vatuvus at Gayatri Mata Mandiram.' },
  { year: '2024', date: 'February 29', detail: 'Free Samuhika Upanayanams for 9 Vatuvus at Santoshimata Temple after 27 years. 150 people dined.' },
  { year: '2025', date: 'February 15', detail: 'Uchita Upanayanams for 10 Vatuvus at Santoshimata Temple. 250 people dined.' },
  { year: '2026', date: 'February 20', detail: 'Free Upanayanams for 8 Vatuvus at Santoshimata Temple. 250 people dined. Venue assured free by Sri Gabbita Sivaram Krishna Prasad.' },
];

const ugadiEvents = [
  { year: '2024', date: 'April 9', detail: 'Krodhi Nama Ugadi — Panchanga Sravanam, 150 Panchangams distributed, 49 Vedic students honored, 55 poor ladies presented sarees.' },
  { year: '2026', date: 'March 19', detail: 'Parabhava Nama Samvatsara Ugadi at Anjaneya Swamy Temple. Clothes to 45 Vedic students, 5 Upadhyayulu, sarees to 50 poor ladies.' },
];

const generalBodyEvents = [
  { year: '2023', date: 'May 28', detail: 'New body elected unanimously — President: Sri P.L. Kantharao, Secretary: P.V. Satyanarayana, Treasurer: Sri S.V. Ramana.' },
];

const vidyanidhiEvents = [
  { year: '2025', date: 'August 10', detail: '₹1,70,000 scholarships disbursed to 4 B.Tech students.' },
  { year: '2026', date: 'August 9', detail: '₹1,97,000 disbursed to 4 B.Tech students. Chief Guests: Puipati Mallikharjuna Prasad & BVH Kameswara Sastry.' },
];

const jandhyalaEvents = [
  { year: '2023', date: 'August 31', detail: '1000 Yagnopaveethams distributed across the city through temples and Vedapathasalas.' },
  { year: '2024', date: 'August 19', detail: '2000 Yagnopaveethams distributed at 34 places in Guntur and abroad at London.' },
];

const karthikaEvents = [
  { year: '2023', date: 'November 19', detail: 'Karthika Samaradhana at Central Public School attended by 650 people. First floor donors felicitated.' },
  { year: '2024', date: 'November 3', detail: 'Karthika Samaradhana attended by 750+ people. 3000 Sampradaya Calendars published for 2025.' },
  { year: '2025', detail: 'Karthika Samaradhana attended by 800+ people, with music programmes.' },
];

const masikamEvents = [
  { year: 'Ongoing', detail: 'Masikam / Abdikamulu rites coordination for Brahmin families — including families staying outside Andhra Pradesh and abroad, via full coordination with family priests.' },
];

/* Quick navigation chips — programNav derived from shared metadata */
const programNav = [
  { slug: 'uchita-upanayanamulu', label: 'Uchita Upanayanamulu', icon: '🙏' },
  { slug: 'ugadi', label: 'Ugadi', icon: '🎉' },
  { slug: 'general-body-meeting', label: 'General Body Meeting', icon: '🗳️' },
  { slug: 'sri-vidyanidhi', label: 'Sri Vidyanidhi', icon: '🎓' },
  { slug: 'jandhyala-pournami', label: 'Jandhyala Pournami', icon: '🧵' },
  { slug: 'mahalaya-pakshalu', label: 'Mahalaya Pakshalu', icon: '🕉️' },
  { slug: 'karthika-samaradhana', label: 'Karthika Samaradhana', icon: '🪔' },
  { slug: 'arama-kshetramu', label: 'Arama Kshetramu', icon: '🏗️' },
  { slug: 'masikamulu-abdikamulu', label: 'Masikamulu / Abdikamulu', icon: '🔱' },
  { slug: 'pura-pramukhulu', label: 'Pura Pramukhulu', icon: '🏘️' },
];

function EventList({ events }) {
  return (
    <div className="space-y-3">
      {events.map((e, i) => (
        <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-200/70">
          <span className="text-sm font-bold text-saffron-600 bg-white border border-saffron-200 px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap">
            {e.year}
          </span>
          <div className="min-w-0">
            {e.date && <span className="text-sm text-gray-400 font-medium mr-1.5">{e.date} —</span>}
            <span className="text-sm text-gray-600 leading-relaxed">{e.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Programs() {
  return (
    <>
      <Head>
        <title>Annual Programs & Events — Brahmana Seva Samiti</title>
        <meta
          name="description"
          content="Annual programs of Brahmana Seva Samiti: Uchita Upanayanamulu, Ugadi, General Body Meeting, Sri Vidyanidhi scholarships, Jandhyala Pournami, Karthika Samaradhana, Arama Kshetramu, Masikamulu/Abdikamulu and Pura Pramukhulu."
        />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.25 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8a53a]/85 via-[#c47a1a]/75 to-[#8a4a10]/90" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Annual Programs & Events</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Ten flagship programs conducted every year for the community — religious ceremonies,
            education support, welfare services and community infrastructure.
          </p>
        </div>
      </section>

      {/* Quick jump navigation */}
      <section className="py-8 bg-white border-b border-cream-200/60">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-2.5">
            {programNav.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50 text-sm font-medium text-gray-600 hover:text-saffron-600 hover:bg-saffron-50 border border-cream-200 hover:border-saffron-200 transition-all duration-300"
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Uchita Upanayanamulu */}
      <section id="uchita-upanayanamulu" className="py-14 md:py-16 bg-white scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🙏</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Uchita Upanayanamulu</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Free Samuhika (mass) Upanayanam ceremonies for underprivileged Vatuvus — the sacred
                thread ceremony conducted at no cost to families, followed by community dining.
              </p>
              <div className="p-3.5 rounded-xl bg-saffron-50 border border-saffron-200/60">
                <p className="text-sm text-saffron-700 leading-relaxed">
                  <strong>Regular venue:</strong> Santoshimata Temple, Syamala Nagar, Guntur.
                  Families interested in enrolling a Vatuvu can contact the Secretary.
                </p>
              </div>
              <Link href="/programs/uchita-upanayanamulu" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={upanayanamEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ugadi */}
      <section id="ugadi" className="py-14 md:py-16 bg-cream-50 scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🎉</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Ugadi</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Telugu New Year celebrations with Panchanga Sravanam, honoring of Visista Vyakthulu,
                distribution of new clothes to Vedic students and sarees to poor ladies of the community.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-cream-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Held every year</strong> on Ugadi day at local temples — all community members are welcome.
                </p>
              </div>
              <Link href="/programs/ugadi" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={ugadiEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. General Body Meeting */}
      <section id="general-body-meeting" className="py-14 md:py-16 bg-white scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🗳️</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">General Body Meeting</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The annual gathering of all life members where the year's accounts are presented,
                activities are reviewed and the executive committee is elected.
              </p>
              <div className="p-3.5 rounded-xl bg-saffron-50 border border-saffron-200/60">
                <p className="text-sm text-saffron-700 leading-relaxed">
                  <strong>Life members</strong> are notified of the date and venue in advance.
                  Election of the new body is conducted unanimously as per the Sangham's tradition.
                </p>
              </div>
              <Link href="/programs/general-body-meeting" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={generalBodyEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sri Vidyanidhi */}
      <section id="sri-vidyanidhi" className="py-14 md:py-16 bg-cream-50 scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🎓</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Sri Vidyanidhi</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Educational financial assistance scheme supporting meritorious students of the community
                in professional courses — disbursed every August.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-cream-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Eligibility:</strong> B.Tech and professional course students from member
                  families. Applications open mid-year — watch this page or contact the Secretary.
                </p>
              </div>
              <Link href="/programs/sri-vidyanidhi" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={vidyanidhiEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Jandhyala Pournami */}
      <section id="jandhyala-pournami" className="py-14 md:py-16 bg-white scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🧵</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Jandhyala Pournami</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Free distribution of Yagnopaveethams (sacred threads) on Jandhyala Pournami through
                temples, Vedapathasalas and member residences across Guntur — and even abroad.
              </p>
              <div className="p-3.5 rounded-xl bg-saffron-50 border border-saffron-200/60">
                <p className="text-sm text-saffron-700 leading-relaxed">
                  <strong>46 distribution centers</strong> across Guntur, Hyderabad and London.
                  The full list of centers with contacts is on the{' '}
                  <Link href="/community#jandhyala-centers" className="underline font-semibold">Community page</Link>.
                </p>
              </div>
              <Link href="/programs/jandhyala-pournami" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={jandhyalaEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Karthika Samaradhana */}
      <section id="karthika-samaradhana" className="py-14 md:py-16 bg-cream-50 scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🪔</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Karthika Samaradhana</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The flagship annual community feast during the holy month of Karthika — the largest
                gathering of the Sangham year, with cultural and music programmes.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-cream-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Attendance growing every year:</strong> 650 (2023) → 750+ (2024) → 800+ (2025).
                  Donors are felicitated at the event.
                </p>
              </div>
              <Link href="/programs/karthika-samaradhana" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={karthikaEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Arama Kshetramu */}
      <section id="arama-kshetramu" className="py-14 md:py-16 bg-white scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🏗️</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Arama Kshetramu</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Comprehensive infrastructure for final rites management, built on the Sangham's own
                site near Visalakshi Cold Storage on the Guntur–Chilakaluripet Highway.
              </p>
              <div className="p-3.5 rounded-xl bg-saffron-50 border border-saffron-200/60">
                <p className="text-sm text-saffron-700 leading-relaxed">
                  <strong>Expansion:</strong> First floor inaugurated Dec 2023; 100 sq. yards purchased
                  in 2025-26; Bhudanam collection for 200 sq. yards ongoing.{' '}
                  <Link href="/contact#donate" className="underline font-semibold">Support the expansion →</Link>
                </p>
              </div>
              <Link href="/programs/arama-kshetramu" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {[
                  { year: '2010', detail: 'Decision to construct Arama Kshetram on own site — ₹1.5 Lakh donations announced on the spot.' },
                  { year: '2011', detail: '400 sq. yards plot procured near Visalakshi Cold Storage.' },
                  { year: '2015', detail: 'Grand Gruhapravesam celebrated.' },
                  { year: '2023', detail: 'First floor inaugurated formally with all rituals, attended by 150 people.' },
                  { year: '2025-26', detail: '100 sq. yards site purchased behind Arama Kshetram; Bhudanam collection started for 200 sq. yards on the north side.' },
                ].map((e, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-200/70">
                    <span className="text-sm font-bold text-saffron-600 bg-white border border-saffron-200 px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap">
                      {e.year}
                    </span>
                    <span className="text-sm text-gray-600 leading-relaxed">{e.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Masikamulu / Abdikamulu */}
      <section id="masikamulu-abdikamulu" className="py-14 md:py-16 bg-cream-50 scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🕉️</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Masikamulu / Abdikamulu</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Coordination of monthly (Masikam) and annual (Abdikam) memorial rites for families —
                a service especially valued by members staying outside Andhra Pradesh and abroad.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-cream-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>How it works:</strong> The Sangham coordinates with family priests and the
                  Arama Kshetram so rites are performed properly even when the family cannot travel.
                  Contact the Secretary to arrange.
                </p>
              </div>
              <Link href="/programs/masikamulu-abdikamulu" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={masikamEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mahalaya Pakshalu */}
      <section id="mahalaya-pakshalu" className="py-14 md:py-16 bg-white scroll-mt-24">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <span className="text-4xl mb-3 block">🕉️</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Mahalaya Pakshalu</h2>
              <div className="ornament-line mb-4 !mx-0" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Free Mahalaya Pitrupakshalu at Arama Kshetram during the fortnight dedicated to
                ancestors — Tila Tarpanams offered with full Vedic guidance, first conducted in 2025.
              </p>
              <div className="p-3.5 rounded-xl bg-saffron-50 border border-saffron-200/60">
                <p className="text-sm text-saffron-700 leading-relaxed">
                  <strong>When:</strong> Every Mahalaya Amavasya fortnight at Arama Kshetram.
                  Intimate the thithi of your forefather to the Secretary to book a slot.
                </p>
              </div>
              <Link href="/programs/mahalaya-pakshalu" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <EventList events={mahalayaEvents2} />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pura Pramukhulu */}
      <section id="pura-pramukhulu" className="py-14 md:py-16 bg-white scroll-mt-24">
        <div className="page-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-4xl mb-3 block">🏘️</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">Pura Pramukhulu</h2>
              <div className="ornament-line mb-4" />
              <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Elders and senior most members of each veda-patra / street (pura) who guide the
                Sangham's activities and represent their locality's members.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-cream-50 border border-cream-200 text-center max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                The list of Pura Pramukhulu is being compiled and will be published here.
                If you are a Pura Pramukh or know one in your area, please contact the Secretary
                at <a href="tel:7893961234" className="text-saffron-600 font-semibold">78939 61234</a>.
              </p>
              <Link href="/programs/pura-pramukhulu" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors">
                View full details <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-saffron-600 via-saffron-700 to-gray-900 text-white overflow-hidden">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-black mb-4">Participate in Our Programs</h2>
            <div className="ornament-line mb-5" />
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Every program runs on community support. Enroll a Vatuvu, sponsor a scholarship,
              or contribute towards Arama Kshetram expansion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact#donate" className="px-7 py-3 bg-white text-saffron-700 font-semibold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-xl text-center text-sm hover:-translate-y-0.5">
                Donate Now
              </Link>
              <Link href="/contact" className="px-7 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
