import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getJandhyalaCenters, getBalaGosevaDonors } from '../lib/wordpress';
import { CENTERS_FALLBACK, BALA_DONORS_FALLBACK } from '../lib/fallback-community';

export default function Community({ jandhyalaCenters, balaGosevaDonors }) {
  return (
    <>
      <Head>
        <title>Community — Bala Goseva &amp; Jandhyala Centers | Brahmana Seva Sangham</title>
        <meta
          name="description"
          content="Bala Goseva young contributors and the 46 Jandhyala Pournami Yagnopaveetham distribution centers across Guntur, Hyderabad and London."
        />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Bala Goseva &amp; Jandhyala Centers</h1>
          <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our youngest donors and the sacred thread distribution network —
            two beautiful expressions of community participation in seva.
          </p>
        </div>
      </section>

      {/* Quick section nav */}
      <div className="bg-white border-b border-cream-200/60 py-3 hidden lg:block sticky top-[52px] z-30">
        <div className="page-container flex items-center justify-center gap-3 flex-wrap">
          <Link href="#bala-goseva" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-saffron-600 bg-saffron-50 hover:bg-saffron-100 transition-colors">
            🐄 Bala Goseva Donors
          </Link>
          <Link href="#jandhyala-centers" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-saffron-600 bg-saffron-50 hover:bg-saffron-100 transition-colors">
            🧵 Jandhyala Distribution Centers
          </Link>
        </div>
      </div>

      {/* Bala Goseva Donors */}
      <section id="bala-goseva" className="py-16 md:py-20 section-tint scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Bala Goseva Contributors
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our youngest contributors — children who lovingly donate through Cow Kiddy Banks
              to support cow welfare and Goseva. Total collected in 2025: <strong className="text-saffron-500">₹27,428</strong> from <strong className="text-saffron-500">{balaGosevaDonors.length} children</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {balaGosevaDonors.map((item, idx) => (
              <div key={idx} className="card p-3 flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-saffron-100 border border-saffron-200 flex items-center justify-center text-sm font-bold text-saffron-700 flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                  <p className="text-sm text-gray-500 truncate">{item.class}</p>
                </div>
                <span className="text-sm font-bold text-saffron-700 flex-shrink-0">₹{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jandhyala Pournami Distribution Centers */}
      <section id="jandhyala-centers" className="py-16 md:py-20 section-photo border-y border-cream-200 scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">
              Jandhyala Pournami Distribution Centers
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              Free Yagnopaveethams are distributed annually through <strong className="text-saffron-700">{jandhyalaCenters.length} centers</strong>
              {' '}across Guntur, abroad, and other parts of the country. Pick up your sacred thread
              from the center nearest to you before Jandhyala Pournami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {jandhyalaCenters.map((center) => (
              <div key={center.id} className="card p-4 bg-white/95 backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(195,74,44,0.12)] transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron-100 border border-saffron-200 flex items-center justify-center text-sm font-bold text-saffron-700 flex-shrink-0 mt-0.5">
                    {center.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">{center.location}</p>
                    <p className="text-sm text-gray-600 mb-1.5">{center.contact}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {center.phone && (
                        <a href={`tel:${center.phone}`} className="inline-flex items-center gap-1 text-sm text-saffron-600 hover:text-saffron-700">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {center.phone}
                        </a>
                      )}
                      {center.qty > 0 && (
                        <span className="text-sm font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full">
                          Qty: {center.qty}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              For bulk distribution or queries, contact the Secretary at <a href="tel:7893961234" className="text-saffron-700 font-semibold hover:text-saffron-800">78939 61234</a>
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

/* ISR: centers + donors from headless WP, refreshed every 60s. */
export async function getStaticProps() {
  const [wpCenters, wpDonors] = await Promise.all([
    getJandhyalaCenters(),
    getBalaGosevaDonors(),
  ]);
  return {
    props: {
      jandhyalaCenters: wpCenters || CENTERS_FALLBACK,
      balaGosevaDonors: wpDonors || BALA_DONORS_FALLBACK,
    },
    revalidate: 60,
  };
}
