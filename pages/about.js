import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const timeline = [
  { year: '1994', date: 'Telugu New Year Bhava', event: 'Brahmana Seva Sangham started at the house of Shri P.V. Ramanaiah, A.T. Agraharam, Guntur with Shri Nallapati Venkatrao as President and Shri Pamidighantam Venkata Ramanaiah as Secretary.', icon: '🏗️' },
  { year: '1994', date: 'July', event: 'Mantrapushpam classes started at Gayatri Ammavari Mandiram by Sagi Subrahmanyam Garu.', icon: '📖' },
  { year: '1995', date: 'March', event: 'First Samuhika Uchita Upanayanams conducted for 12 Vatuvus at Gayatri Mata Mandiram.', icon: '🙏' },
  { year: '1997', date: 'January 25', event: 'Brahmana Seva Sangham registered as Society No. 48/1997 under Societies Registration Act, XXI of 1860.', icon: '📜' },
  { year: '2010', date: 'March', event: 'Major decision to construct Arama Kshetram by purchasing own site. Nearly ₹1.5 Lakh donations announced on the spot.', icon: '💡' },
  { year: '2011', date: 'February', event: '400 sq. yards plot procured near Visalakshi Cold Storage on Guntur–Chilakaluripet Highway.', icon: '🏗️' },
  { year: '2012', date: 'November', event: 'Foundation laid for construction of Arama Kshetram at the purchased site.', icon: '🪔' },
  { year: '2015', date: 'March', event: 'Grand Gruhapravesam of Arama Kshetram celebrated.', icon: '🎉' },
  { year: '2021', date: 'August 29', event: 'Website bssata.org developed and opened by Dr. Sri KVV Nagasanthosh Kumar Garu.', icon: '🌐' },
  { year: '2023', date: 'May 28', event: 'General Body meeting — New body elected unanimously. President: Sri P.L. Kantharao, Secretary: P.V. Satyanarayana, Treasurer: Sri S.V. Ramana.', icon: '🗳️' },
  { year: '2023', date: 'August 31', event: 'Jandhyala Pournami — 1000 Yagnopaveethams distributed across city through temples and Vedapathasalas.', icon: '🧵' },
  { year: '2023', date: 'November 19', event: 'Karthika Samaradhana at Central Public School attended by 650 people. First floor donors felicitated.', icon: '🪔' },
  { year: '2023', date: 'December 6', event: 'Arama Kshetram First Floor inaugurated formally with all rituals, attended by 150 people.', icon: '🏗️' },
  { year: '2024', date: 'February 29', event: 'Free Samuhika Upanayanams for 9 Vatuvus at Santoshimata Temple after 27 years. 150 people dined.', icon: '🙏' },
  { year: '2024', date: 'April 9', event: 'Krodhi Nama Ugadi — Panchanga Sravanam, 150 Panchangams distributed, 49 Vedic students honored, 55 poor ladies presented sarees.', icon: '🎉' },
  { year: '2024', date: 'August 19', event: 'Jandhyala Pournami — 2000 Yagnopaveethams distributed at 34 places in Guntur and abroad at London.', icon: '🧵' },
  { year: '2024', date: 'November 3', event: 'Karthika Samaradhana attended by 750+ people. 3000 Sampradaya Calendars published for 2025.', icon: '🪔' },
  { year: '2025', date: 'January 18', event: '12A Provisional Registration obtained for income tax exemption.', icon: '📋' },
  { year: '2025', date: 'February 15', event: 'Uchita Upanayanams for 10 Vatuvus at Santoshimata Temple. 250 people dined.', icon: '🙏' },
  { year: '2025', date: 'June 12', event: 'Sangham purchased 100 sq. yards of site on cement road behind Arama Kshetram.', icon: '🏗️' },
  { year: '2025', date: 'August 10', event: 'Sri Vidyanidhi — ₹1,70,000 scholarships disbursed to 4 B.Tech students.', icon: '🎓' },
  { year: '2025', date: 'November 20', event: 'Income Tax Dept granted 12A exemption to BSS valid from 2025-26 to 2030-31.', icon: '✅' },
  { year: '2026', date: 'February 20', event: 'Free Upanayanams for 8 Vatuvus at Santoshimata Temple. 250 people dined. Sri Gabbita Sivaram Krishna Prasad assured venue free.', icon: '🙏' },
  { year: '2026', date: 'March 3', event: 'Sri Rudravarapu Bharadwaj felicitated on his election as Chairman, Guntur Chapter of ICAI.', icon: '🏆' },
  { year: '2026', date: 'March 19', event: 'Parabhava Nama Samvatsara Ugadi celebrated at Anjaneya Swamy Temple. Clothes to 45 Vedic students, 5 Upadhyayulu, sarees to 50 poor ladies.', icon: '🎉' },
  { year: '2026', date: 'April 2', event: 'Sri Velavarthipati Panduranga Vithal honored on his nomination as National Secretary of All India Brahmana Federation.', icon: '🎖️' },
  { year: '2026', date: 'April 26', event: 'Started collecting donations for Bhudanam of 200 sq. yards of site on north side of Arama Kshetram at ₹17,000/- per sq. yd.', icon: '🏗️' },
  { year: '2026', date: 'June 23', event: 'Agreement signed for purchase of 100 sq. yards of site behind Arama Kshetram for ₹8,50,000/- from Smt Yerubandi Lakshmikantam.', icon: '📋' },
  { year: '2026', date: 'August 9', event: 'Sri Vidyanidhi Scholarships disbursed to 4 B.Tech students — ₹1,97,000 total. Chief Guests: Puipati Mallikharjuna Prasad & BVH Kameswara Sastry.', icon: '🎓' },
];

const welfareActivities = [
  { title: 'Karthika Samaradhana', description: 'Annual community feast during the holy month of Karthika — attended by 800+ people in 2025 with music programmes.', icon: '🪔' },
  { title: 'Sampradaya Calendar', description: 'Publication and distribution of traditional Sampradaya Calendars to 3000+ households across the state and abroad.', icon: '📅' },
  { title: 'Free Mass Upanayanams', description: 'Sacred thread ceremonies conducted free of cost for underprivileged youth — 10 Vatuvus initiated in Feb 2025.', icon: '🙏' },
  { title: 'Aabdheekam Services', description: 'Ancestral rites preservation services for Brahmin families, including those staying outside AP and abroad via coordination.', icon: '🕉️' },
  { title: 'Vedic Classes', description: 'Structured classes for Sandhyavandanam, Mantra Pushpam, Mahamantra Pushpam and Rudram for all age groups.', icon: '📖' },
  { title: 'Jandhyala Pournami', description: 'Distribution of Yagnopaveethams on the auspicious occasion — 2000 distributed at 34 places in 2024.', icon: '🧵' },
  { title: 'Life Certificate Desk', description: 'Issuance of Life Certificates for Central and State pensioners (Jan, Feb, Nov, Dec) with face reading method.', icon: '📋' },
  { title: 'Legal Cell', description: 'Low-cost legal advice by Retd. Judge Sri Medicharla Prabhakar Rao and Advocate Dendukuri Narayana Murthy.', icon: '⚖️' },
  { title: 'Sri Vidyanidhi Scholarships', description: 'Educational financial assistance — ₹1,70,000 disbursed to 4 B.Tech final year students in 2025.', icon: '🎓' },
  { title: 'Life Membership', description: 'Life Membership Enrollment Scheme — donors contributing ₹10,000 and above receive permanent membership.', icon: '👤' },
  { title: 'Arama Kshetram', description: 'Comprehensive infrastructure for final rites management — First floor inaugurated in Dec 2023. New site purchased in 2025-2026 for expansion.', icon: '🏗️' },
  { title: 'Ugadi Celebrations', description: 'Panchanga Sravanam, Visista Vyakthi honors, clothes to Vedic students, sarees to poor ladies.', icon: '🎉' },
  { title: 'Bala Goseva', description: 'Children\'s cow service initiative — Cow Kiddy Banks distributed to children. ₹27,428 contributed by 41 children in 2025.', icon: '🐄' },
  { title: 'Mahalaya Pitrupakshalu', description: 'First time free Mahalaya Pitrupakshalu conducted at Arama Kshetram. 12+ people offered Tila Tarpanams in 2025.', icon: '🕉️' },
];

const visistaVyakthulu = [
  { year: '1996', name: 'Shri Moguluri Narasimha Rao' },
  { year: '1997', name: 'Shri Ambatipudi Satyanarayana Avadhani' },
  { year: '1998', name: 'Shri Vemu Bhavannarayana' },
  { year: '1999', name: 'Shri Chintalapati Perayya Sastry' },
  { year: '2000', name: 'Shri Petluri Mallikarjuna Rao' },
  { year: '2003', name: 'Shri Ghantasala Satyanarayana' },
  { year: '2006', name: 'Smt K.V. Ranganayakamma' },
  { year: '2007', name: 'Shri Yadavalli Srihari Rao' },
  { year: '2008', name: 'Shri Malladi Srihari Sastry' },
  { year: '2010', name: 'Shri Valluri Suryanarayana Murthy' },
  { year: '2012', name: 'Shri Burra Seetharama Sastry' },
  { year: '2013', name: 'Shri Ketaraju Narasimha Rao' },
  { year: '2014', name: 'Shri Machiraju Sitapathi Rao' },
  { year: '2015', name: 'Shri Jannabhatla Veereswara Sastry' },
  { year: '2016', name: 'Shri Pathuri Venkatrama Sastry' },
  { year: '2017', name: 'Shri Dendukuri Sambamurthy' },
  { year: '2018', name: 'Shri Pamidighantam Venkata Ramanaiah' },
  { year: '2019', name: 'Shri Valluri Suryanarayana Murthy' },
  { year: '2020', name: 'Shri Nethi Visweswara Rao' },
  { year: '2021', name: 'Shri Neti Visweswara Rao' },
  { year: '2022', name: 'Shri Kota Jayasankaram' },
  { year: '2023', name: 'Shri Goparaju V.L.N. Sanjeeva Rao' },
  { year: '2024', name: 'Shri Ambadipudi Syamsundara Rao' },
  { year: '2025', name: 'Shri Turumella Umakantha Rao' },
  { year: '2026', name: 'Shri Peesapati Lakshmi Kantha Rao' },
  { year: '2026', name: 'Shri Jammalamadaka Seetharamanjaneeya Sarma' },
];

const visistaDatalu = [
  { year: '2023', name: 'Smt P. Mahalakshmamma & Sons — P.V. Subbarao, P.V. Satyanarayana & P. Vasudevarao', contribution: '₹18,00,000 — First Floor of Arama Kshetram named in memory of late Sri P.V. Ramanaiah, Founder Secretary' },
  { year: '2024', name: 'Sri Kalluri Venkateswara Rao', contribution: 'Major donor for Sangham activities during the year' },
  { year: '2025', name: 'Shri Ganapavarapu Venkata Anjaneya Sastry', contribution: 'Distinguished donor for community welfare' },
  { year: '2025', name: 'Shri Sarraju Balachandar', contribution: 'Distinguished donor for community welfare' },
];

const governingBody = [
  { name: 'Sri Peesapati Lakshmi Kantharao', role: 'Distinguished Advisor', phone: '9347259787' },
  { name: 'Sri Ambadipudi Shyam Sundar', role: 'President', phone: '9440235340' },
  { name: 'Sri Vankamamidi Venkataramayya', role: 'Executive President', phone: '9866337559' },
  { name: 'Sri Dendukuri Narayana Murthy', role: 'Honorable President', phone: '9849311140' },
  { name: 'Sri Pamidighantam V. Satyanarayana', role: 'Secretary', phone: '7893961234' },
  { name: 'Sri Susarla Venkata Ramana', role: 'Treasurer', phone: '9290515564' },
  { name: 'Sri Jammalamadaka Sita Ramanjaneeya Sharma', role: 'Vice President', phone: '9491337464' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Brahmana Seva Samiti</title>
        <meta
          name="description"
          content="Learn about Brahmana Seva Samiti's history from 1994, governance, and 12 welfare activities serving the Brahmin community in Guntur."
        />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.25 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8a53a]/85 via-[#c47a1a]/75 to-[#8a4a10]/90" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">About Our Organization</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Since 1994, Brahmana Seva Samiti has been a beacon of community service, cultural preservation,
            and welfare for the Brahmin community in Guntur and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Objective */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
                  Rooted in Dharma,<br />Serving with Devotion
                </h2>
                <div className="ornament-line mb-6 !mx-0" />
                <blockquote className="text-gray-600 leading-relaxed italic border-l-4 border-gold-400 pl-4 py-2 bg-cream-50 rounded-r-lg mb-4 text-sm">
                  &ldquo;To help Brahmin community in their livelihood, continue their customs and cultural identity. Stand away from politics.&rdquo;
                </blockquote>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Brahmana Seva Sangham was started on the Telugu New Year of <strong>Bhava</strong> (1994) at the house of
                  Shri P.V. Ramanaiah, A.T. Agraharam, Guntur. It was later registered as <strong>Society No. 48/1997</strong> on
                  January 25, 1997.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Started as an extension of Brahmana Seva Samithi, Brodipet, it grew to cater to the needs of
                  Brahmins across entire Guntur and beyond, with services extending to those staying outside
                  Andhra Pradesh and abroad.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-serif font-bold text-xl text-saffron-500 mb-4 text-center">
                  Governing Body
                </h3>
                <div className="space-y-3">
                  {governingBody.map((member) => (
                    <div key={member.name} className="flex items-start gap-3 py-2 border-b border-cream-200 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-saffron-50 flex items-center justify-center text-sm font-bold text-saffron-500 flex-shrink-0 mt-0.5">
                        {member.name.split(' ').pop()[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{member.name}</p>
                        <p className="text-sm text-saffron-500">{member.role}</p>
                      </div>
                      <a href={`tel:${member.phone}`} className="text-sm text-gray-400 hover:text-saffron-500 flex-shrink-0">
                        {member.phone}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Link href="/committee" className="text-sm text-saffron-500 hover:text-saffron-600 font-medium">
                    View Full Committee →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Welfare Activities */}
      <section id="welfare" className="py-16 md:py-20 bg-white scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Our Welfare Activities
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              A comprehensive suite of welfare schemes and cultural programs designed to serve
              every member of our community across all stages of life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {welfareActivities.map((activity, idx) => (
              <div key={idx} className="card group hover:scale-[1.02] transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{activity.icon}</span>
                    <span className="text-sm font-bold text-gray-400 bg-cream-50 px-2 py-1 rounded">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-16 md:py-20 bg-cream-50 scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Our History
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              From a small gathering in 1994 to a registered society serving 760+ members —
              three decades of unwavering community service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-cream-300 -translate-x-1/2" />

              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`relative flex items-start gap-4 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-saffron-500 rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-white" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className="card p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm font-bold text-saffron-500">{item.year}</span>
                          <span className="text-sm text-gray-400">— {item.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visista Vyakthulu — Distinguished Persons */}
      <section id="visista" className="py-16 md:py-20 bg-white scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Visista Vyakthulu
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every year, the Sangham honors a distinguished member of the Brahmin community
              for their exceptional contributions to society and dharma.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {visistaVyakthulu.map((item, idx) => (
              <div key={idx} className="card p-4 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-400 to-gold-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow">
                  {item.year}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-serif font-bold text-gray-800 leading-snug">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visista Datalu — Distinguished Donors */}
      <section id="datalu" className="py-16 md:py-20 bg-cream-50 scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Visista Datalu
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
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
                    <p className="text-base font-serif font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm text-saffron-600 font-medium mt-1">{item.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights — full lists moved to /community page */}
      <section id="community-links" className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Bala Goseva &amp; Jandhyala Centers
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
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
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Bala Goseva Contributors</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our youngest donors — children who contribute through Cow Kiddy Banks.
                ₹27,428 collected from 41 children in 2025.
              </p>
              <span className="text-sm font-semibold text-saffron-500 group-hover:text-saffron-600">
                View All Contributors →
              </span>
            </Link>

            <Link
              href="/community#jandhyala-centers"
              className="card group p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧵</span>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Jandhyala Distribution Centers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Free Yagnopaveethams distributed annually through 46 centers across
                Guntur, Hyderabad, London and beyond.
              </p>
              <span className="text-sm font-semibold text-saffron-500 group-hover:text-saffron-600">
                Find a Center Near You →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-saffron-600 via-saffron-700 to-gray-900 text-white overflow-hidden">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-black mb-4">Be Part of Our Legacy</h2>
            <div className="ornament-line mb-5" />
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Join us in our mission to serve the community. Whether through membership, donations,
              or volunteering — every contribution strengthens our bonds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="px-7 py-3 bg-white text-saffron-700 font-semibold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-xl text-center text-sm hover:-translate-y-0.5">
                Contact & Donate
              </Link>
              <Link href="/members" className="px-7 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-sm">
                View Members
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
