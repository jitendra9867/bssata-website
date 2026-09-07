import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const executiveMembers = [
  { designation: 'Distinguished Advisor', name: 'Sri Peesapati Lakshmi Kantharao', phone: '9347259787', initials: 'PL', gradient: 'from-saffron-500 to-saffron-700' },
  { designation: 'President', name: 'Sri Ambadipudi Shyam Sundar', phone: '9440235340', initials: 'AS', gradient: 'from-gold-500 to-gold-600' },
  { designation: 'Executive President', name: 'Sri Vankamamidi Venkataramayya', phone: '9866337559', initials: 'VV', gradient: 'from-saffron-600 to-maroon-600' },
  { designation: 'Honorable President', name: 'Sri Dendukuri Narayana Murthy', phone: '9849311140', initials: 'DN', gradient: 'from-gold-500 to-saffron-500' },
  { designation: 'Secretary', name: 'Sri Pamidighantam V. Satyanarayana', phone: '7893961234', initials: 'PV', gradient: 'from-maroon-500 to-saffron-600' },
  { designation: 'Treasurer', name: 'Sri Susarla Venkata Ramana', phone: '9290515564', initials: 'SR', gradient: 'from-saffron-600 to-gold-500' },
];

const quickStats = [
  { label: 'Established', value: '1994', icon: '🏛️', suffix: '' },
  { label: 'Regd. Society', value: '48', suffix: '/97' },
  { label: 'Life Members', value: '760', suffix: '+' },
  { label: 'Welfare Schemes', value: '12', suffix: '+' },
];

const recentHighlights = [
  { year: '2026', event: 'Scholarships of ₹1,97,000 disbursed to 4 B.Tech students', category: 'Scholarships', accent: 'bg-gold-500' },
  { year: '2026', event: 'Ugadi celebrated — clothes to 45 Vedic students, sarees to 50 poor ladies', category: 'Celebrations', accent: 'bg-saffron-500' },
  { year: '2026', event: 'Free Upanayanams for 8 Vatuvus at Santoshimata Temple', category: 'Upanayanams', accent: 'bg-maroon-500' },
  { year: '2026', event: 'New 100 sq. yards site purchased behind Arama Kshetram for ₹8.5 Lakhs', category: 'Infrastructure', accent: 'bg-gold-600' },
  { year: '2025', event: 'Karthika Samaradhana attended by 800+ people with music programme', category: 'Events', accent: 'bg-saffron-600' },
  { year: '2025', event: 'Scholarships of ₹1,70,000 disbursed to 4 B.Tech students', category: 'Scholarships', accent: 'bg-gold-500' },
  { year: '2024', event: 'First Floor of Arama Kshetram inaugurated formally', category: 'Infrastructure', accent: 'bg-gold-600' },
  { year: '2024', event: '2000 Yagnopaveethams distributed on Jandhyala Pournami', category: 'Traditions', accent: 'bg-saffron-500' },
];

const sliderSlides = [
  { image: '/images/slider/jandhyala-2025.jpg', title: 'Jandhyala Pournami 2025', subtitle: '2000 Yagnopaveethams Distributed Across 34 Places', cta: { label: 'Learn More', href: '/about' } },
  { image: '/images/slider/ugadi-2026-2.jpg', title: 'Community Service Since 1994', subtitle: '760+ Life Members — 12+ Welfare Schemes', cta: { label: 'Life Members', href: '/members' } },
  { image: '/images/slider/jandhyala-2025-2.jpg', title: 'Preserving Our Heritage', subtitle: 'Brahmana Dharma — Cultural Preservation & Welfare', cta: { label: 'About Us', href: '/about' } },
  { image: '/images/slider/ugadi-2026-3.jpg', title: 'Sampradaya Calendar 2026', subtitle: 'Free Traditional Hindu Calendar — Download Now', cta: { label: 'Download', href: '/calendar' } },
];

const testimonials = [
  { name: 'Sri Kota Jayashankaram', role: 'Panchanga Pravachana Kartā', quote: 'Brahmana Seva Samiti has been a pillar of our community. Their Ugadi celebrations and Karthika Samaradhana bring together hundreds of families in devotion and togetherness.', icon: '🙏' },
  { name: 'Sri G.V.L.N. Sanjeeva Rao', role: 'Visista Vyakthi 2023', quote: 'The work BSS has done for the community is truly commendable — from free Upanayanams to scholarships. The Arama Kshetram is a blessing for all of us.', icon: '✨' },
  { name: 'Smt P. Mahalakshmamma & Sons', role: 'Visista Datalu 2023 — ₹18,00,000 Donors', quote: 'We are proud to contribute to the First Floor of Arama Kshetram in memory of late Sri P.V. Ramanaiah, our founder secretary.', icon: '❤️' },
  { name: 'Sri Medicharla Prabhakar Rao', role: 'Retd. Judge — Legal Cell Member', quote: 'The Legal Cell formed by BSS provides affordable legal advice to Brahmin families. A unique initiative reflecting the Sangham\'s commitment to holistic welfare.', icon: '⚖️' },
  { name: 'Sri Velavarthipati Panduranga Vithal', role: 'National Secretary, AIBF', quote: 'BSSATA is one of the most active Brahmana Sanghams in AP. Their Sampradaya Calendars are distributed across the state and abroad.', icon: '🏛️' },
  { name: 'Scholarship Beneficiary', role: 'B.Tech Final Year Student', quote: 'The scholarship helped me complete my engineering education without financial burden. I am grateful for the support and will always remember this kindness.', icon: '🎓' },
];

/* ─── Hero Slider ─── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % sliderSlides.length), []);
  const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + sliderSlides.length) % sliderSlides.length), []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full h-[350px] md:h-[400px] max-h-[400px] overflow-hidden" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Slides */}
      {sliderSlides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'}`}>
          <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={i === 0} sizes="100vw" style={{ backgroundColor: '#1a0a00' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="page-container w-full text-center">
          <div className="max-w-2xl mx-auto">
            {sliderSlides.map((slide, i) => (
              <div key={i} className={`transition-all duration-700 ease-out ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 absolute inset-0 flex items-center justify-center'}`}>
                {i === current && (
                  <>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                      <span className="text-gold-300 text-[11px] uppercase tracking-[0.15em] font-semibold">Brahmana Seva Samiti</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-white mb-3 leading-[1.15] text-shadow-hero tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-white/75 text-base md:text-lg mb-7 max-w-lg leading-relaxed mx-auto">
                      {slide.subtitle}
                    </p>
                    <Link href={slide.cta.href} className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-sm">
                      {slide.cta.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/10" aria-label="Previous">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/10" aria-label="Next">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {sliderSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-400 rounded-full ${i === current ? 'w-7 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function TestimonialsCarousel() {
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
    <section className="relative py-16 md:py-20 text-white overflow-hidden">
      <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.35 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90" />

      <div className="relative page-container">
        <div className="text-center mb-12">
          <p className="text-gold-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Voices of Our Community</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black mb-4">What People Say</h2>
          <div className="ornament-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10">
          {visible.map((t, i) => (
            <div key={`${page}-${i}`} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-400 hover:-translate-y-1 flex flex-col group">
              <div className="text-3xl text-gold-400/60 font-serif leading-none mb-3 group-hover:text-gold-400 transition-colors">&ldquo;</div>
              <p className="text-white/80 text-sm leading-relaxed mb-5 font-serif italic flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base flex-shrink-0">{t.icon}</div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{t.name}</p>
                  <p className="text-[11px] text-gold-300/80 truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button onClick={prevPage} className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/10" aria-label="Previous">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} className={`transition-all duration-300 rounded-full ${i === page ? 'w-6 h-1.5 bg-gold-400' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'}`} aria-label={`Page ${i + 1}`} />
            ))}
          </div>
          <button onClick={nextPage} className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/10" aria-label="Next">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Head>
        <title>Brahmana Seva Samiti (Regd No: 48/97) — Guntur</title>
        <meta name="description" content="Brahmana Seva Samiti — Serving the Brahmin community with cultural preservation, welfare schemes, and community service since 1994. Guntur, Andhra Pradesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/newlogo.png" />
      </Head>

      <HeroSlider />

      {/* ─── About Us ─── */}
      <section className="relative py-[60px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-white to-cream-50/50" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-saffron-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-100/30 rounded-full blur-3xl" />

        <div className="relative page-container">
          {/* Header */}
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-gray-800 mb-4 leading-tight">
              About <span className="bg-gradient-to-r from-saffron-600 via-gold-500 to-saffron-600 bg-clip-text text-transparent">Brahmana Seva Samiti</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              A legacy of service, devotion, and community upliftment — spanning over three decades.
            </p>
            <div className="ornament-line mt-4" />
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">

            {/* Left column — Image + Stats (5 cols) */}
            <div className="lg:col-span-5">
              {/* Featured image */}
              <div className="relative rounded-2xl overflow-hidden mb-6 group shadow-[0_8px_30px_rgba(195,74,44,0.1)]">
                <Image
                  src="/images/slider/ugadi-2026-2.jpg"
                  alt="Brahmana Seva Samiti Community Service"
                  width={600}
                  height={400}
                  className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
                    <span className="text-saffron-700 text-[10px] uppercase tracking-wider font-bold">Community Service</span>
                  </div>
                  <h3 className="text-white font-serif font-bold text-lg drop-shadow-lg">Serving the Community Since 1994</h3>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="group bg-white rounded-2xl p-4 border border-cream-200/60 hover:border-saffron-200 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(195,74,44,0.06)] hover:-translate-y-0.5 text-center">
                    <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="text-xl md:text-2xl font-bold text-saffron-600 font-serif leading-none">
                      {stat.value}<span className="text-sm text-saffron-400">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1.5 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — Story + Mission (7 cols) */}
            <div className="lg:col-span-7">
              {/* Story card */}
              <div className="relative bg-white rounded-2xl p-7 md:p-8 border border-cream-200/60 hover:shadow-[0_12px_40px_rgba(195,74,44,0.06)] transition-all duration-500 mb-6">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center shadow-lg shadow-saffron-500/20">
                    <span className="text-2xl">🙏</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-800 text-lg">Our Story</h3>
                    <p className="text-saffron-400 text-[11px] uppercase tracking-wider font-semibold">Since 1994 · Guntur, Andhra Pradesh</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  <strong className="text-gray-800">Brahmana Seva Samiti (Regd. No. 48/97)</strong> was founded with a vision to serve the Brahmin community through cultural preservation, educational empowerment, and welfare initiatives. What began as a small community effort has grown into one of the most active Sanghams in Andhra Pradesh.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Over three decades, we have touched thousands of lives — from distributing 2,000 Yagnopaveethams on Jandhyala Pournami to awarding scholarships to engineering students, from organizing grand Karthika Samaradhana celebrations to providing affordable legal aid. Our Arama Kshetram stands as a symbol of our commitment to the community.
                </p>
              </div>

              {/* Mission pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '🎓', title: 'Education & Scholarships', desc: 'Financial support to meritorious students from economically weaker sections.', accent: 'from-saffron-500 to-saffron-600', bg: 'bg-saffron-50' },
                  { icon: '🏛️', title: 'Cultural Preservation', desc: 'Jandhyala Pournami, Ugadi, and Karthika Samaradhana celebrations.', accent: 'from-gold-500 to-gold-600', bg: 'bg-gold-50' },
                  { icon: '🏘️', title: 'Community Welfare', desc: 'Free Upanayanams, Yagnopaveetham distribution, and family support.', accent: 'from-maroon-500 to-saffron-600', bg: 'bg-saffron-50' },
                  { icon: '⚖️', title: 'Legal Aid Cell', desc: 'Affordable legal advice and support for Brahmin families in need.', accent: 'from-gold-600 to-maroon-600', bg: 'bg-gold-50' },
                ].map((item) => (
                  <div key={item.title} className="group/item bg-white rounded-2xl p-4 border border-cream-200/60 hover:border-saffron-200 hover:shadow-[0_6px_20px_rgba(195,74,44,0.06)] transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-105 transition-transform duration-300`}>
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm mb-0.5">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Link href="/about" className="group/btn inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-saffron-600 to-gold-600 text-white font-semibold rounded-xl hover:from-saffron-500 hover:to-gold-500 transition-all duration-300 text-sm shadow-lg shadow-saffron-600/20 hover:shadow-saffron-500/30 hover:-translate-y-0.5">
                  Learn More About Us
                  <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ─── Impact Numbers ─── */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-serif font-black text-gray-800 mb-3">
                Our Impact Over <span className="text-saffron-600">30 Years</span>
              </h3>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">Numbers that reflect our commitment to community service and cultural preservation.</p>
              <div className="ornament-line mt-4" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { value: '30+', label: 'Years of Service', icon: '🕐', desc: 'Serving since 1994' },
                { value: '760+', label: 'Life Members', icon: '👥', desc: 'Across Andhra Pradesh' },
                { value: '₹30L+', label: 'Scholarships Awarded', icon: '🎓', desc: 'To meritorious students' },
                { value: '3000+', label: 'Calendars Distributed', icon: '📅', desc: 'Sampradaya Calendar annually' },
              ].map((item) => (
                <div key={item.label} className="group relative bg-white rounded-2xl p-6 border border-cream-200/60 hover:border-saffron-200 transition-all duration-400 hover:-translate-y-1 text-center overflow-hidden hover:shadow-[0_12px_40px_rgba(195,74,44,0.08)]">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold font-serif text-saffron-600 leading-none mb-1">{item.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">{item.label}</div>
                  <div className="text-[11px] text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── Executive Committee ─── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron-500/5 rounded-full blur-3xl" />

        <div className="relative page-container">
          <div className="text-center mb-12">
            <p className="text-gold-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Our Leaders</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-white mb-3">Executive Committee</h2>
            <p className="text-gray-500 text-sm mb-4">2025 – 2027</p>
            <div className="ornament-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {executiveMembers.map((m) => (
              <div key={m.designation} className="group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:bg-white/[0.08] transition-all duration-400 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-lg font-serif font-black text-white">{m.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="inline-block px-2 py-0.5 mb-2 text-[9px] font-bold uppercase tracking-wider text-gold-300/80 bg-gold-400/10 rounded border border-gold-400/10">
                      {m.designation}
                    </div>
                    <h3 className="text-[15px] font-serif font-bold text-white mb-1.5 leading-snug">{m.name}</h3>
                    <a href={`tel:${m.phone}`} className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold-300 transition-colors">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      {m.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/committee" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/10 text-sm">
              View Full Committee
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Recent Highlights ─── */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-saffron-100/40 rounded-full blur-3xl" />

        <div className="relative page-container">
          <div className="text-center mb-12">
            <p className="text-saffron-500 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Milestones</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-gray-800 mb-3">Recent Highlights</h2>
            <div className="ornament-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {recentHighlights.map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-5 border border-cream-200/60 hover:border-saffron-200 transition-all duration-400 hover:-translate-y-1 overflow-hidden hover:shadow-[0_12px_40px_rgba(195,74,44,0.08)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-1 h-8 rounded-full ${item.accent}`} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{item.category}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium mb-3">{item.event}</p>
                <div className="text-[10px] font-bold text-saffron-400">{item.year}</div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-saffron-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about" className="btn-primary text-sm">
              View Full History
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* ─── Calendar CTA ─── */}
      <section className="relative py-12 md:py-14 overflow-hidden bg-cream-50">
        <div className="relative page-container">
          <div className="relative bg-white rounded-2xl border border-cream-200/60 overflow-hidden hover:shadow-[0_12px_40px_rgba(195,74,44,0.06)] transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-8 md:p-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-saffron-50 to-gold-50 border border-saffron-100 flex items-center justify-center text-3xl md:text-4xl flex-shrink-0">
                📅
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-2">Sampradaya Calendar 2026</h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  Download our free traditional Hindu calendar with festivals, muhurtham dates, and auspicious days. Published annually and distributed to 3000+ households.
                </p>
              </div>
              <Link href="/calendar" className="btn-primary text-sm flex-shrink-0">
                Download Calendar
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Join CTA ─── */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden">
        <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.25 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-700/90 via-saffron-800/85 to-gray-900/90" />

        <div className="relative page-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-300 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Join Our Mission</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black mb-4">Be Part of Our Legacy</h2>
            <div className="ornament-line mb-6" />
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Become a life member and join our mission to serve the community and preserve our rich cultural heritage.
              Life membership is open with a contribution of <strong className="text-gold-300">₹10,000 and above</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/members" className="w-full sm:w-auto px-7 py-3 bg-white text-saffron-700 font-semibold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-xl text-center text-sm hover:-translate-y-0.5">
                View Life Members
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-7 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-sm">
                Bank Details & Donations
              </Link>
              <Link href="/gallery" className="w-full sm:w-auto px-7 py-3 border border-white/10 text-white/70 font-medium rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300 text-center text-sm">
                Photo Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
