import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  getCommitteeMembers,
  getSiteHighlights,
  getTestimonials,
  getSliderSlides,
} from '../lib/wordpress';
import {
  SLIDER_SLIDES as sliderSlides,
  HOME_EXECUTIVE_FALLBACK,
  HIGHLIGHTS_FALLBACK,
  TESTIMONIALS_FALLBACK,
} from '../lib/fallback-content';

/* ─── Hero Slider ─── */
function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderSlides = slides && slides.length ? slides : SLIDER_SLIDES;

  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % sliderSlides.length), []);
  const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + sliderSlides.length) % sliderSlides.length), []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full aspect-[8/3] sm:aspect-[1900/700] bg-white overflow-hidden" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Mobile: 8/3 ratio box; sm+: full 1900/700 banner shape (desktop look unchanged). object-contain = full image always visible, no cropping */}
      {/* Only mount the visible slide ±1 so the browser never downloads
          all 8 banners up front; remaining slides load as the carousel
          approaches them (sequential autoplay → always pre-cached). */}
      {sliderSlides.map((slide, i) => {
        const distance = Math.min(Math.abs(i - current), sliderSlides.length - Math.abs(i - current));
        if (distance > 1) return null;
        return (
          <div key={i} className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={slide.image} alt={slide.title} fill className="object-contain object-center" priority={i === 0} sizes="100vw" loading={i === 0 ? undefined : 'lazy'} />
          </div>
        );
      })}
      {/* Warm the optimizer cache for the NEXT slide during idle time */}
      <link rel="prefetch" as="image" href={`/_next/image?url=${encodeURIComponent(sliderSlides[(current + 1) % sliderSlides.length].image)}&w=1920&q=75`} />

      {/* Dimmed overlay — softens the banner so the centered content stays readable (banner images themselves are untouched) */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      {/* Centered content over the banner — title + subtitle only, no CTA button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div key={current} className="text-center px-12 sm:px-6 animate-fade-in-up">
          <h1 className="text-lg min-[420px]:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-banner font-black text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] leading-tight mb-2 sm:mb-3 md:mb-4">
            {sliderSlides[current].title}
          </h1>
          <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl text-cream-100/95 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
            {sliderSlides[current].subtitle}
          </p>
        </div>
      </div>

      {/* Arrows — smaller on phones and tucked closer to the edges */}
      <button onClick={prevSlide} className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black/35 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-white/25 shadow-lg" aria-label="Previous">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black/35 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-white/25 shadow-lg" aria-label="Next">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </section>
  );
}

/* ─── Testimonials ─── */
function TestimonialsCarousel({ testimonials }) {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prevPage = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);

  useEffect(() => {
    const t = setInterval(nextPage, 7000);
    return () => clearInterval(t);
  }, [nextPage]);

  const visible = testimonials.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <section className="relative py-[50px] overflow-hidden bg-cream-100">
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-gold-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-gold-100/60 rounded-full blur-3xl" />

      <div className="relative page-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-gray-800 mb-4">What People Say</h2>
          <div className="ornament-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10">
          {visible.map((t, i) => (
            <div key={`${page}-${i}`} className={`relative rounded-2xl p-6 md:p-7 border shadow-[0_4px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(195,74,44,0.15)] transition-all duration-400 hover:-translate-y-1 flex flex-col group ${testimonialStyles[i % testimonialStyles.length].card}`}>
              {/* Gold top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Big decorative quote mark */}
              <span className="absolute top-4 right-6 text-[64px] leading-none font-serif text-black/5 select-none pointer-events-none">&rdquo;</span>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.196-1.538-1.118l1.285-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-800 text-sm leading-relaxed mb-6 font-serif italic flex-1">{t.quote}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div className="w-11 h-11 rounded-full bg-white ring-2 ring-gold-300/60 shadow-md flex items-center justify-center text-lg flex-shrink-0">{t.icon}</div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm truncate">{t.name}</p>
                  <p className="text-sm text-saffron-700 font-semibold truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button onClick={prevPage} className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white text-saffron-600 flex items-center justify-center hover:bg-saffron-50 transition-all border border-cream-200 shadow-sm" aria-label="Previous">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} className={`transition-all duration-300 rounded-full ${i === page ? 'w-6 h-1.5 bg-saffron-500' : 'w-1.5 h-1.5 bg-cream-300 hover:bg-saffron-300'}`} aria-label={`Page ${i + 1}`} />
            ))}
          </div>
          <button onClick={nextPage} className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white text-saffron-600 flex items-center justify-center hover:bg-saffron-50 transition-all border border-cream-200 shadow-sm" aria-label="Next">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* Rotating tint styles for What People Say cards */
const testimonialStyles = [
  { card: 'bg-saffron-50 border-saffron-200' },
  { card: 'bg-gold-50 border-gold-200' },
  { card: 'bg-cream-100 border-cream-300' },
];

/* Rotating tint styles for Recent Highlights cards */
const highlightStyles = [
  { card: 'bg-saffron-50 border border-saffron-200/70', tile: 'from-saffron-500 to-saffron-600', tileShadow: 'shadow-saffron-500/30', accent: 'text-saffron-600' },
  { card: 'bg-gold-50 border border-gold-200/70', tile: 'from-gold-400 to-amber-500', tileShadow: 'shadow-gold-400/30', accent: 'text-gold-600' },
  { card: 'bg-cream-100/70 border border-cream-300/80', tile: 'from-maroon-500 to-saffron-600', tileShadow: 'shadow-maroon-500/30', accent: 'text-maroon-600' },
  { card: 'bg-gold-100/50 border border-gold-200/80', tile: 'from-saffron-600 to-maroon-600', tileShadow: 'shadow-saffron-600/30', accent: 'text-saffron-700' },
];

/* ─── Main Page ─── */
export default function Home({ executive, highlights, testimonials, sliderSlides }) {
  return (
    <>
      <Head>
        <title>Brahmana Seva Samiti (Regd No: 48/97) — Guntur</title>
        <meta name="description" content="Brahmana Seva Samiti — Serving the Brahmin community with cultural preservation, welfare schemes, and community service since 1994. Guntur, Andhra Pradesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/newlogo.png" />
      </Head>

      <HeroSlider slides={sliderSlides} />

      {/* ─── About Us ─── */}
      <section className="relative py-[50px] overflow-hidden bg-gradient-to-b from-white via-cream-50 to-white">
        <div className="absolute top-0 left-0 w-[460px] h-[460px] bg-gold-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-saffron-100/40 rounded-full blur-3xl" />

        <div className="relative page-container">
          {/* Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-gray-800 mb-4 leading-tight">
              About <span className="bg-gradient-to-r from-gold-500 via-[#cd8901] to-gold-500 bg-clip-text text-transparent">Brahmana Seva Samiti</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              A legacy of service, devotion, and community upliftment — spanning over three decades.
            </p>
            <div className="ornament-line mt-4" />
          </div>

          {/* Story + Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Story */}
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                <strong className="text-gray-900">Brahmana Seva Samiti</strong> was founded on the Telugu New Year of 1994 at A.T. Agraharam, Guntur, and registered as <strong className="text-gray-900">Society No. 48/1997</strong>.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5">
                What began as a small gathering of families has grown into one of the most active Sanghams in Andhra Pradesh — serving through free mass Upanayanams, Yagnopaveetham distribution, scholarships, legal aid, and the Arama Kshetram, with families connected as far as London.
              </p>
              <blockquote className="border-l-4 border-gold-400 pl-4 py-1 mb-7 text-sm text-gray-600 italic leading-relaxed">
                &ldquo;To help the Brahmin community in their livelihood, continue their customs and cultural identity — standing away from politics.&rdquo;
              </blockquote>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/about" className="group/btn inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#cd8901] to-[#b87701] text-white font-semibold rounded-xl hover:from-[#b87701] hover:to-[#a06c00] transition-all duration-300 text-sm shadow-lg shadow-gold-500/25 hover:-translate-y-0.5">
                  Learn More About Us
                  <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/committee" className="inline-flex items-center px-6 py-3 border-2 border-gold-200 text-gold-700 font-semibold rounded-xl hover:bg-gold-50 hover:border-gold-300 transition-all duration-300 text-sm">
                  Meet the Committee
                </Link>
              </div>
            </div>

            {/* Photo with golden frame */}
            <div className="relative mt-4 lg:mt-0">
              <div className="rounded-[28px] bg-gradient-to-br from-gold-300 via-gold-400 to-amber-600 p-[3px] shadow-[0_24px_60px_rgba(205,137,1,0.25)]">
                <div className="relative rounded-[25px] overflow-hidden">
                  <Image
                    src="/images/slider/ugadi-2026-2.jpg"
                    alt="Brahmana Seva Samiti Community Service"
                    width={600}
                    height={430}
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="w-full h-[300px] md:h-[390px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-serif font-bold text-lg drop-shadow-lg leading-snug">Serving the Community Since 1994</h3>
                    <p className="text-white/75 text-sm mt-1">Registered Society · Regd No: 48/97, Guntur</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-5 left-4 md:-left-6 bg-white rounded-2xl shadow-xl border border-cream-200/80 px-4 py-3 flex items-center gap-3">
                <span className="text-2xl">🛕</span>
                <div>
                  <div className="font-serif font-bold text-[#cd8901] leading-none">30+ Years</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400 mt-1 font-semibold">of Seva</div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant stats strip */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-cream-200/80 rounded-2xl overflow-hidden border border-cream-200/80 shadow-[0_10px_36px_rgba(205,137,1,0.08)]">
            {[
              { value: '1994', label: 'Established' },
              { value: '48/97', label: 'Registered Society' },
              { value: '760+', label: 'Life Members' },
              { value: '12+', label: 'Welfare Activities' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white py-5 px-3 text-center">
                <div className="text-xl md:text-2xl font-bold font-serif text-[#cd8901] leading-none">{stat.value}</div>
                <div className="text-sm md:text-sm text-gray-400 mt-1.5 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ─── Mission Pillars — with counts ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-12">
            {[
              { icon: '🎓', title: 'Education & Scholarships', desc: 'Sri Vidyanidhi financial support for meritorious B.Tech students from weaker sections.', href: '/schemes#scholarships', bg: 'bg-saffron-50', border: 'border-saffron-200/70', accent: 'from-saffron-500 to-saffron-600', count: '₹30L+', countLabel: 'Awarded' },
              { icon: '🏛️', title: 'Cultural Preservation', desc: 'Jandhyala Pournami, Ugadi Panchanga Sravanam and Karthika Samaradhana celebrations.', href: '/programs', bg: 'bg-gold-50', border: 'border-gold-200/70', accent: 'from-gold-400 to-amber-500', count: '3000+', countLabel: 'Calendars / Year' },
              { icon: '🏘️', title: 'Community Welfare', desc: 'Free mass Upanayanams, Yagnopaveetham distribution and family support services.', href: '/about#welfare', bg: 'bg-cream-100/70', border: 'border-cream-300/80', accent: 'from-maroon-500 to-saffron-600', count: '2000+', countLabel: 'Yagnopaveethams' },
              { icon: '⚖️', title: 'Legal Aid Cell', desc: 'Affordable legal advice by a Retd. Judge and senior advocates for families in need.', href: '/about#welfare', bg: 'bg-gold-100/50', border: 'border-gold-200/80', accent: 'from-gold-600 to-maroon-600', count: '2', countLabel: 'Expert Advisors' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className={`group ${item.bg} ${item.border} border rounded-2xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(195,74,44,0.12)]`}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} shadow-md flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h4 className="font-serif font-bold text-gray-800 text-base mb-1.5">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
                <div className="flex items-baseline gap-1.5 mt-4 pt-3 border-t border-black/5">
                  <span className={`text-xl font-bold font-serif ${item.accent.includes('gold-400') ? 'text-gold-600' : 'text-saffron-600'}`}>{item.count}</span>
                  <span className="text-sm uppercase tracking-wider text-gray-400 font-semibold">{item.countLabel}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Executive Committee ─── */}
      <section className="relative py-[50px] overflow-hidden">
        <Image src="/images/om-banner.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#b47a20]/85 via-[#94591a]/80 to-[#5f3a0c]/92" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl" />

        <div className="relative page-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-white mb-3">Executive Committee</h2>
            <div className="ornament-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {executive.map((m) => (
              <div key={m.designation} className="group relative bg-[#241300]/80 backdrop-blur-md rounded-2xl border border-gold-400/30 overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:bg-[#1a0d00]/90 hover:border-gold-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                {/* Left gold edge */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-amber-500 to-gold-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-4 p-5 pl-6">
                  {/* Compact avatar with golden ring */}
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-gold-400 to-amber-600 p-[2.5px] shadow-[0_6px_20px_rgba(218,165,32,0.35)] group-hover:scale-105 transition-transform duration-300">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center`}>
                        <span className="text-base font-serif font-black text-white drop-shadow">{m.initials}</span>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    {/* Designation */}
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold-300 mb-1">
                      {m.designation}
                    </p>
                    {/* Name */}
                    <h3 className="text-sm md:text-base font-serif font-bold text-white leading-snug mb-2.5">{m.name}</h3>
                    {/* Phone pill */}
                    <a
                      href={`tel:${m.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sm font-semibold text-white hover:bg-gold-400 hover:text-[#3a0f04] transition-all duration-300"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      {m.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/committee" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-gold-400 to-amber-500 text-[#3a0f04] font-bold rounded-xl hover:from-yellow-300 hover:to-gold-400 transition-all duration-300 text-sm shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5">
              View Full Committee
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Recent Highlights ─── */}
      <section className="relative py-[50px] overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-saffron-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-100/40 rounded-full blur-3xl" />

        <div className="relative page-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-gray-800 mb-3">Recent Highlights</h2>
            <div className="ornament-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {highlights.map((item, idx) => {
              const s = highlightStyles[idx % highlightStyles.length];
              return (
                <div key={idx} className={`group relative ${s.card} rounded-2xl p-6 overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(195,74,44,0.16)]`}>
                  {/* Watermark icon */}
                  <span className="absolute -bottom-4 -right-2 text-[76px] leading-none opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </span>

                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.tile} ${s.tileShadow} shadow-lg ring-4 ring-white/70 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                      <span className="text-2xl drop-shadow-sm">{item.icon}</span>
                    </div>
                    <span className="text-sm font-bold text-white bg-gray-800/70 backdrop-blur-sm px-2.5 py-1 rounded-full whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>

                  <span className={`relative block text-sm font-extrabold uppercase tracking-[0.16em] ${s.accent} mb-1.5`}>{item.category}</span>
                  <p className="relative text-sm text-gray-700 leading-relaxed font-medium">{item.event}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/about" className="btn-primary text-sm">
              View Full History
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel testimonials={testimonials} />

      {/* ─── Join CTA — deep gold gradient, text left / buttons right ─── */}
      <section className="relative py-10 md:py-12 overflow-hidden text-white bg-gradient-to-br from-[#8a5f00] via-[#8b2500] to-[#6e1d00]">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="relative page-container">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left — heading + text */}
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-serif font-black mb-2.5">Be Part of Our Legacy</h2>
              <p className="text-cream-100/75 leading-relaxed text-sm">
                Become a life member and join our mission to serve the community and preserve our rich cultural heritage.
                Life membership is open with a contribution of <strong className="text-gold-300">₹10,000 and above</strong>.
              </p>
            </div>

            {/* Right — action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <Link href="/members" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#8a5f00] font-bold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-lg text-sm hover:-translate-y-0.5">
                View Life Members
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300 text-sm text-center">
                Bank Details & Donations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ISR: homepage dynamic sections from headless WP, refreshed every
   60s; bundled fallbacks render when the API is unreachable. */
export async function getStaticProps() {
  const [wpCommittee, wpHighlights, wpTestimonials, wpSlides] = await Promise.all([
    getCommitteeMembers(),
    getSiteHighlights(),
    getTestimonials(),
    getSliderSlides(),
  ]);

  /* Executive strip: 6 designations with avatar styling config */
  const GRADIENT_BY_DESIGNATION = {
    'President': 'from-amber-400 to-orange-600',
    'Honorable President': 'from-amber-500 to-orange-700',
    'Executive President': 'from-orange-400 to-red-600',
    'Secretary': 'from-orange-500 to-rose-600',
    'Treasurer': 'from-yellow-500 to-orange-600',
    'Vice President': 'from-yellow-400 to-amber-600',
  };
  const desiredOrder = ['President', 'Honorable President', 'Executive President', 'Secretary', 'Treasurer', 'Vice President'];
  const initialsOf = (name) =>
    name.replace(/^(Sri|Smt|Dr)\s+/, '').split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  let executive;
  if (wpCommittee) {
    executive = desiredOrder
      .map((designation) => {
        const m = wpCommittee.find((c) => c.designation === designation);
        if (!m) return null;
        return {
          designation,
          name: m.name,
          phone: m.phone,
          initials: initialsOf(m.name),
          gradient: GRADIENT_BY_DESIGNATION[designation],
        };
      })
      .filter(Boolean);
  } else {
    executive = HOME_EXECUTIVE_FALLBACK;
  }

  return {
    props: {
      executive,
      highlights: wpHighlights || HIGHLIGHTS_FALLBACK,
      testimonials: wpTestimonials || TESTIMONIALS_FALLBACK,
      sliderSlides: wpSlides || [], /* [] → component uses bundled SLIDER_SLIDES */
    },
    revalidate: 60,
  };
}
