import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  getHistoryHighlights,
  getWelfareSchemes,
  getDonorHonors,
  getCommitteeMembers,
} from '../lib/wordpress';
import {
  TIMELINE_FALLBACK,
  WELFARE_FALLBACK,
  VISISTA_VYAKTHULU_FALLBACK,
  VISISTA_DATALU_FALLBACK,
  COMMITTEE_FALLBACK,
} from '../lib/fallback-content';

/* Timeline grouped by year — all events of the same year share one card */
function groupTimelineByYear(events) {
  return events.reduce((acc, item) => {
    const last = acc[acc.length - 1];
    if (last && last.year === item.year) {
      last.items.push(item);
    } else {
      acc.push({ year: item.year, items: [item] });
    }
    return acc;
  }, []);
}

export default function About({ timeline, welfareActivities, visistaVyakthulu, visistaDatalu, governingBody }) {
  const timelineYears = groupTimelineByYear(timeline);

  return (
    <>
      <Head>
        <title>About Us — Brahmana Seva Sangham</title>
        <meta
          name="description"
          content="Learn about Brahmana Seva Sangham's history from 1994, governance, and 12 welfare activities serving the Brahmin community in Guntur."
        />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">About Our Organization</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Since 1994, Brahmana Seva Sangham has been a beacon of community service, cultural preservation,
            and welfare for the Brahmin community in Guntur and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Objective — text + related image */}
      <section className="py-16 md:py-20 section-tint">
        <div className="page-container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                Rooted in Dharma,<br />Serving with Devotion
              </h2>
              <div className="ornament-line mb-6 !mx-0" />
              <blockquote className="text-gray-700 leading-relaxed italic border-l-4 border-gold-400 pl-4 py-2 bg-white/80 rounded-r-lg mb-4">
                &ldquo;To help Brahmin community in their livelihood, continue their customs and cultural identity. Stand away from politics.&rdquo;
              </blockquote>
              <p className="text-gray-700 leading-relaxed mb-4">
                Brahmana Seva Sangham was started on the Telugu New Year of <strong>Bhava</strong> (1994) at the house of
                Shri P.V. Ramanaiah, A.T. Agraharam, Guntur. It was later registered as <strong>Society No. 48/1997</strong> on
                January 25, 1997.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Started as an extension of Brahmana Seva Samithi, Brodipet, it grew to cater to the needs of
                Brahmins across entire Guntur and beyond, with services extending to those staying outside
                Andhra Pradesh and abroad.
              </p>
            </div>

            {/* Related image with frame + floating badge */}
            <div className="relative max-w-md lg:max-w-none mx-auto w-full pt-4 pb-8">
              <div className="absolute -top-1 -right-3 w-28 h-28 rounded-2xl pattern-dots" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(195,74,44,0.18)]">
                <Image
                  src="/images/slider/banner-1.png"
                  alt="Brahmana Seva Sangham community gathering"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-1 left-5 bg-white rounded-2xl shadow-lg border border-cream-200 px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">🛕</span>
                <div>
                  <p className="text-base font-black text-saffron-600 leading-none">Since 1994</p>
                  <p className="text-sm text-gray-600 mt-1">Serving Guntur &amp; beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Body — separate section on photo background */}
      <section className="py-16 md:py-20 section-photo border-y border-cream-200">
        <div className="page-container">
          <div className="text-center mb-12">
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Governing Body
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              The elected office bearers who guide the Sangham — leading with
              tradition, transparency and tireless seva.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {governingBody.map((member) => (
              <div
                key={member.name}
                className="card p-5 bg-white/95 backdrop-blur-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(195,74,44,0.14)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-lg font-bold text-white flex-shrink-0 shadow-md">
                  {member.name.split(' ').pop()[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{member.name}</p>
                  <p className="text-sm text-saffron-700 font-semibold">{member.role}</p>
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-saffron-600 transition-colors mt-0.5"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-9">
            <Link
              href="/committee"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 shadow-[0_8px_20px_rgba(195,74,44,0.28)] hover:-translate-y-0.5 transition-all duration-300"
            >
              View Full Committee
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Welfare Activities — redesigned grid */}
      <section id="welfare" className="py-16 md:py-20 section-plain scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Our Welfare Activities
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              A comprehensive suite of welfare schemes and cultural programs designed to serve
              every member of our community across all stages of life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {welfareActivities.map((activity, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-cream-200 shadow-[0_2px_14px_rgba(195,74,44,0.06)] overflow-hidden hover:shadow-[0_18px_44px_rgba(195,74,44,0.14)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Gradient top strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-saffron-400 via-gold-400 to-saffron-500 opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-5">
                    <span className="title-badge !rounded-xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      {activity.icon}
                    </span>
                    <span className="text-sm font-bold text-gray-500 bg-cream-50 border border-cream-200 px-2.5 py-1 rounded-full">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-saffron-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline — grouped by year, one card per year */}
      <section id="history" className="py-16 md:py-20 section-tint scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Our History
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              From a small gathering in 1994 to a registered society serving 760+ members —
              three decades of unwavering community service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] md:left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-saffron-200 via-cream-300 to-gold-200" aria-hidden="true" />

            <div className="space-y-7">
              {timelineYears.map((group) => {
                const isCurrentYear = group.year === String(new Date().getFullYear());
                return (
                  <div key={group.year} className="relative flex items-start gap-4 md:gap-6">
                    {/* Year node on the line */}
                    <div
                      className={`relative z-10 w-11 h-11 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-black shadow-lg ${
                        isCurrentYear
                          ? 'bg-gradient-to-br from-gold-400 to-saffron-600 text-white text-sm md:text-base ring-4 ring-gold-200'
                          : 'bg-white border-2 border-saffron-200 text-saffron-700 text-sm md:text-base'
                      }`}
                    >
                      {group.year}
                    </div>

                    {/* One card = all events of this year */}
                    <div
                      className={`flex-1 min-w-0 rounded-2xl p-5 md:p-6 ${
                        isCurrentYear
                          ? 'bg-gradient-to-br from-gold-50 to-saffron-50 border-2 border-gold-300 shadow-[0_16px_40px_rgba(218,165,32,0.22)]'
                          : 'bg-white border border-cream-200 shadow-[0_2px_14px_rgba(195,74,44,0.06)]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <h3 className={`text-lg md:text-xl font-serif font-black ${isCurrentYear ? 'text-saffron-800' : 'text-gray-900'}`}>
                          {group.year}
                        </h3>
                        {isCurrentYear ? (
                          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-gradient-to-r from-gold-400 to-saffron-500 px-3 py-1 rounded-full flex-shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Current Year
                          </span>
                        ) : (
                          <span className="text-sm font-bold text-gray-500 bg-cream-50 border border-cream-200 px-2.5 py-0.5 rounded-full flex-shrink-0">
                            {group.items.length} {group.items.length === 1 ? 'milestone' : 'milestones'}
                          </span>
                        )}
                      </div>

                      <div className={`gap-4 ${group.items.length > 1 ? 'grid md:grid-cols-2' : 'grid'}`}>
                        {group.items.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start gap-3 p-3.5 rounded-xl ${
                              isCurrentYear
                                ? 'bg-white/85 border border-gold-200'
                                : 'bg-cream-50/80 border border-cream-200/70'
                            }`}
                          >
                            <span className="icon-badge !w-9 !h-9 !text-base">{item.icon}</span>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-saffron-700 mb-0.5">{item.date}</p>
                              <p className="text-sm text-gray-700 leading-relaxed">{item.event}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Visista Vyakthulu — Distinguished Persons */}
      <section id="visista" className="py-16 md:py-20 section-warm scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Visista Vyakthulu
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              Every year, the Sangham honors a distinguished member of the Brahmin community
              for their exceptional contributions to society and dharma.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {visistaVyakthulu.map((item, idx) => (
              <div key={idx} className="card p-4 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">
                  {item.year}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-serif font-bold text-gray-900 leading-snug">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visista Datalu — Distinguished Donors */}
      <section id="datalu" className="py-16 md:py-20 section-tint scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Visista Datalu
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              The Sangham recognizes major donors whose generous contributions have
              helped build our Arama Kshetram and sustain our welfare activities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {visistaDatalu.map((item, idx) => (
              <div key={idx} className="card p-6 bg-gradient-to-r from-cream-50 to-saffron-50 border-saffron-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-bold text-lg flex-shrink-0">
                    {item.year}
                  </div>
                  <div>
                  <p className="text-base font-serif font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-saffron-800 font-medium mt-1">{item.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights — full lists moved to /community page */}
      <section id="community-links" className="py-16 md:py-20 section-plain">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Bala Goseva &amp; Jandhyala Centers
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              The full contributor lists and all 46 distribution centers are now on a
              dedicated page to keep this one easy to browse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/community#bala-goseva"
              className="card group p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">🐄</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Bala Goseva Contributors</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Our youngest donors — children who contribute through Cow Kiddy Banks.
                ₹27,428 collected from 41 children in 2025.
              </p>
              <span className="text-sm font-semibold text-saffron-600 group-hover:text-saffron-700">
                View All Contributors →
              </span>
            </Link>

            <Link
              href="/community#jandhyala-centers"
              className="card group p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧵</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Jandhyala Distribution Centers</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Free Yagnopaveethams distributed annually through 46 centers across
                Guntur, Hyderabad, London and beyond.
              </p>
              <span className="text-sm font-semibold text-saffron-600 group-hover:text-saffron-700">
                Find a Center Near You →
              </span>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

/* ISR: timeline, welfare activities and honor rolls from headless WP,
   refreshed every 60s; bundled fallbacks keep the page alive offline. */
export async function getStaticProps() {
  const [wpTimeline, wpSchemes, wpHonors, wpCommittee] = await Promise.all([
    getHistoryHighlights(),
    getWelfareSchemes(),
    getDonorHonors(),
    getCommitteeMembers(),
  ]);

  const timeline = wpTimeline
    ? wpTimeline.map((t) => ({ year: t.year, date: t.date, event: t.description, icon: t.impactTag || '•' }))
    : TIMELINE_FALLBACK;

  const welfareActivities = wpSchemes
    ? wpSchemes.map((s) => ({ title: s.title, description: s.description, icon: s.icon }))
    : WELFARE_FALLBACK;

  const honors = wpHonors || null;
  const visistaVyakthulu = honors
    ? honors.filter((h) => h.honorType === 'visista-vyakthi').map((h) => ({ year: h.year, name: h.name }))
    : VISISTA_VYAKTHULU_FALLBACK;
  const visistaDatalu = honors
    ? honors.filter((h) => h.honorType === 'visista-data').map((h) => ({ year: h.year, name: h.name, contribution: h.contribution }))
    : VISISTA_DATALU_FALLBACK;

  const governingBody = wpCommittee
    ? wpCommittee.filter((c) => c.category === 'leadership').map((c) => ({ name: c.name, role: c.designation, phone: c.phone }))
    : COMMITTEE_FALLBACK.filter((c) => c.category === 'leadership').map((c) => ({ name: c.name, role: c.designation, phone: c.phone }));

  return {
    props: { timeline, welfareActivities, visistaVyakthulu, visistaDatalu, governingBody },
    revalidate: 60,
  };
}
