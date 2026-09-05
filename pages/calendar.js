import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const calendars = [
  { year: '2026', pdf: '/images/calendars/cal 2026.pdf', description: 'Parabhava Nama Samvatsara — Current year calendar with auspicious dates, festivals, and muhurthams.', samvat: 'पराभव', latest: true, count: '3000+' },
  { year: '2025', pdf: '/images/calendars/cal 2025.pdf', description: 'Plava Nama Samvatsara — Last year calendar with complete festival schedule.', samvat: 'प्लव', latest: false, count: '3000+' },
  { year: '2024', pdf: '/images/calendars/cal 2024.pdf', description: 'Shobhakruth Nama Samvatsara — Calendar with traditional festivals and events.', samvat: 'शोभकृत्', latest: false, count: '3000+' },
  { year: '2023', pdf: '/images/calendars/cal 2023.pdf', description: 'Shubhakruth Nama Samvatsara — Calendar with traditional festivals and events.', samvat: 'शुभकृत्', latest: false, count: '3000+' },
];

const features = [
  { icon: '📅', title: 'Traditional Dates', description: 'Complete Hindu calendar with Tithis, Nakshatras, and Yogas for every day of the year.', color: 'from-saffron-500 to-saffron-600', bg: 'bg-saffron-50' },
  { icon: '🎉', title: 'Festival Schedule', description: 'All major festivals and celebrations marked clearly for easy planning.', color: 'from-gold-500 to-gold-600', bg: 'bg-gold-50' },
  { icon: '🕐', title: 'Muhurtham Dates', description: 'Auspicious dates for weddings, housewarmings, and new ventures.', color: 'from-maroon-500 to-saffron-500', bg: 'bg-saffron-50' },
  { icon: '🙏', title: 'Vratam Days', description: 'Ekadashi, Pradosham, and other vratam days highlighted throughout.', color: 'from-gold-600 to-saffron-600', bg: 'bg-gold-50' },
];

const stats = [
  { value: '4', label: 'Years Available', icon: '📆' },
  { value: '3000+', label: 'Distributed Annually', icon: '📮' },
  { value: 'Free', label: 'Of Cost', icon: '🆓' },
  { value: '2026', label: 'Latest Edition', icon: '✨' },
];

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Sampradaya Calendar — Brahmana Seva Samiti</title>
        <meta name="description" content="Download traditional Sampradaya Calendars from Brahmana Seva Samiti. Hindu calendar with festivals, muhurtham dates, and auspicious days for 2023-2026." />
      </Head>

      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.2 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-700/90 via-saffron-800/85 to-gray-900/90" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-saffron-400/8 rounded-full blur-3xl" />

        <div className="relative page-container text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-xl">📅</span>
            <span className="text-gold-300 text-[11px] uppercase tracking-[0.2em] font-semibold">Free Sampradaya Calendar</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-5 tracking-tight">
            Sampradaya Calendar
          </h1>
          <div className="ornament-line mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
            Free traditional Hindu calendars published annually by Brahmana Seva Samiti, Guntur.
            Distributed to 3000+ households across Andhra Pradesh and abroad.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 px-4 py-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.1] transition-all duration-300">
                <span className="text-2xl">{stat.icon}</span>
                <div className="text-center">
                  <div className="text-white font-bold text-xl leading-none">{stat.value}</div>
                  <div className="text-white/50 text-[10px] mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Downloads */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-saffron-500 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Download</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-gray-800 mb-3">Our Sampradaya Calendars</h2>
            <div className="ornament-line mb-5" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Click any calendar below to download the PDF. Published free of cost and distributed across the state and abroad.
            </p>
          </div>

          {/* Featured Latest Calendar */}
          {calendars.filter(c => c.latest).map((cal) => (
            <a
              key={cal.year}
              href={cal.pdf}
              download
              className="group relative block max-w-4xl mx-auto mb-8 bg-white rounded-3xl border-2 border-saffron-200 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(195,74,44,0.15)]"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Left - Year visual */}
                <div className="bg-gradient-to-br from-saffron-500 via-saffron-600 to-gold-500 p-8 md:p-10 flex flex-col items-center justify-center md:w-48 flex-shrink-0">
                  <div className="text-5xl md:text-6xl font-serif font-black text-white leading-none mb-2">{cal.year}</div>
                  <div className="text-white/70 text-xs font-medium uppercase tracking-wider">{cal.samvat} Nama Samvatsara</div>
                  <div className="mt-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Latest
                    </span>
                  </div>
                </div>
                {/* Right - Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-serif font-black text-gray-800 mb-2">Sampradaya Calendar {cal.year}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cal.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="px-2 py-0.5 bg-cream-100 rounded-full font-medium">{cal.count} copies</span>
                      <span className="px-2 py-0.5 bg-cream-100 rounded-full font-medium">Free Download</span>
                    </div>
                  </div>
                </div>
                {/* Download button */}
                <div className="flex items-center justify-center p-6 md:p-8 md:w-32">
                  <div className="w-14 h-14 rounded-2xl bg-saffron-500 text-white flex items-center justify-center shadow-lg group-hover:bg-saffron-600 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Past Calendars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {calendars.filter(c => !c.latest).map((cal) => (
              <a
                key={cal.year}
                href={cal.pdf}
                download
                className="group bg-white rounded-2xl border border-cream-200/60 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(195,74,44,0.08)] hover:border-saffron-200"
              >
                {/* Year header */}
                <div className="bg-gradient-to-r from-cream-50 to-cream-100 px-5 py-4 border-b border-cream-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-cream-200 flex items-center justify-center shadow-sm group-hover:border-saffron-200 transition-colors">
                      <div className="text-center">
                        <div className="text-lg font-serif font-black text-gray-700 leading-none">{cal.year.slice(-2)}</div>
                        <div className="text-[7px] font-bold text-gray-400 uppercase">{cal.year}</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-800 text-sm">Calendar {cal.year}</h3>
                      <p className="text-[10px] text-gray-400">{cal.samvat} Nama Samvatsara</p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-cream-100 text-gray-400 flex items-center justify-center group-hover:bg-saffron-50 group-hover:text-saffron-500 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{cal.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-saffron-500 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">What&apos;s Included</p>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-gray-800 mb-3">Calendar Features</h2>
            <div className="ornament-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div key={feature.title} className="group text-center p-6 rounded-2xl bg-white border border-cream-200/60 hover:border-saffron-200 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(195,74,44,0.08)]">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-serif font-bold text-gray-800 text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-saffron-500 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Ways to Get</p>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-gray-800 mb-3">How to Get Your Calendar</h2>
              <div className="ornament-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '📥', title: 'Download PDF', desc: 'Click any calendar above to download instantly. Free for everyone, anywhere in the world.', color: 'from-saffron-500 to-saffron-600' },
                { icon: '📮', title: 'Request by Post', desc: 'Write to us and we\'ll send a printed calendar to your address across AP or abroad.', color: 'from-gold-500 to-gold-600' },
                { icon: '🏛️', title: 'Pick Up Locally', desc: 'Collect from our office at A.T. Agraharam, Guntur or any of our 46 distribution centers.', color: 'from-maroon-500 to-saffron-500' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-cream-200/60 hover:border-saffron-200 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(195,74,44,0.08)] text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg text-2xl`}>
                    {item.icon}
                  </div>
                  <h4 className="font-serif font-bold text-gray-800 text-base mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distribution CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-600 via-saffron-700 to-gray-900" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />

        <div className="relative page-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center text-3xl mb-6">
              📮
            </div>
            <p className="text-gold-300 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Free Distribution</p>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-white mb-4">Want a Calendar by Post?</h2>
            <div className="ornament-line mb-5" />
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              We distribute calendars free of cost across Andhra Pradesh, other states, and abroad.
              If you haven&apos;t received yours, write to us and we&apos;ll send one to your address.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:brahmanaseva.ata97@gmail.com?subject=Sampradaya%20Calendar%20Request"
                className="w-full sm:w-auto px-7 py-3 bg-white text-saffron-700 font-semibold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-xl text-center text-sm hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Request Calendar
              </a>
              <Link href="/contact" className="w-full sm:w-auto px-7 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
