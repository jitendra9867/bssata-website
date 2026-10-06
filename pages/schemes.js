import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getWelfareSchemes } from '../lib/wordpress';
import {
  SCHEMES_FALLBACK as fallbackSchemes,
  SCHEME_CATEGORIES as categories,
  IMPACT_STATS as impactStats,
} from '../lib/fallback-content';

export default function Schemes({ schemes }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSchemes =
    activeCategory === 'All'
      ? schemes
      : schemes.filter((scheme) => scheme.category === activeCategory);


  return (
    <>
      <Head>
        <title>Welfare Schemes — Brahmana Seva Sangham</title>
        <meta name="description" content="Explore the 14+ welfare schemes and activities by Brahmana Seva Sangham serving the Brahmin community since 1994." />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Welfare Schemes</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A comprehensive suite of welfare schemes and cultural programs designed to serve every member of our community.
          </p>

          {/* Hero chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { icon: '🎗️', label: '14+ Schemes' },
              { icon: '👥', label: '760+ Beneficiaries' },
              { icon: '🗓️', label: 'Since 1994' },
            ].map((chip) => (
              <span key={chip.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm text-sm font-semibold text-white">
                <span>{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 1 — Schemes Grid (cream tint, working filters) ─── */}
      <section className="py-16 md:py-20 section-tint">
        <div className="page-container">
          <div className="text-center mb-10">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">Schemes &amp; Activities</h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              Filter by category to explore each scheme — every one is powered by community donors
              and run entirely by volunteers.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              const count = cat.name === 'All' ? schemes.length : schemes.filter((s) => s.category === cat.name).length;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white border-saffron-500 shadow-[0_8px_20px_rgba(195,74,44,0.3)]'
                      : 'bg-white text-gray-700 hover:text-saffron-600 hover:bg-saffron-50 border-cream-200 hover:border-saffron-300 shadow-[0_2px_8px_rgba(195,74,44,0.05)]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                  <span className={`text-sm font-bold ${isActive ? 'text-white/80' : 'text-gray-400'}`}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Active filter note */}
          <p className="text-center text-sm text-gray-600 mb-8">
            Showing <strong className="text-saffron-700">{filteredSchemes.length}</strong> {filteredSchemes.length === 1 ? 'scheme' : 'schemes'}
            {activeCategory !== 'All' && (
              <>
                {' '}in <strong className="text-saffron-700">{activeCategory}</strong>
                <button onClick={() => setActiveCategory('All')} className="ml-2 text-saffron-600 hover:text-saffron-700 underline underline-offset-2">
                  Clear filter
                </button>
              </>
            )}
          </p>

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {filteredSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="group relative bg-white rounded-2xl border border-cream-200 shadow-[0_2px_14px_rgba(195,74,44,0.06)] overflow-hidden hover:shadow-[0_18px_44px_rgba(195,74,44,0.14)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Gradient top strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-saffron-400 via-gold-400 to-saffron-500 opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="title-badge !rounded-xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      {scheme.icon}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-saffron-50 border border-saffron-100 text-saffron-700 text-sm font-bold uppercase tracking-wider">
                      {scheme.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-saffron-600 transition-colors">
                    {scheme.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">{scheme.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {scheme.status}
                    </span>
                    {scheme.href && (
                      <Link
                        href={scheme.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-600 hover:text-saffron-700 transition-colors"
                      >
                        View details
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSchemes.length === 0 && (
            <div className="text-center py-14">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-700 font-semibold">No schemes found in this category.</p>
              <button onClick={() => setActiveCategory('All')} className="mt-3 text-saffron-600 hover:text-saffron-700 font-medium text-sm underline underline-offset-4">
                View all schemes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── Section 2 — Impact stats (photo background) ─── */}
      <section className="py-16 md:py-20 section-photo border-y border-cream-200">
        <div className="page-container">
          <div className="text-center mb-10">
            <span className="section-eyebrow">Our Reach</span>
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">Impact at a Glance</h2>
            <div className="ornament-line mb-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center border border-cream-200 shadow-[0_2px_14px_rgba(195,74,44,0.08)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(195,74,44,0.14)] transition-all duration-300"
              >
                <span className="text-3xl block mb-2">{stat.icon}</span>
                <div className="text-3xl md:text-4xl font-black text-saffron-700 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ISR: welfare schemes from headless WP, refreshed every 60s. */
export async function getStaticProps() {
  const wpSchemes = await getWelfareSchemes();
  return {
    props: { schemes: wpSchemes || fallbackSchemes },
    revalidate: 60,
  };
}
