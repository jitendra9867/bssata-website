import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const GALLERY_CATEGORIES = ['All', 'Ugadi', 'Jandhyala Pournami', 'Karthika Samaradhana', 'Upanayanams', 'Scholarships', 'Pura Pramukhulu', 'Bala Goseva', 'Community Events'];

const galleryItems = [
  {
    id: 1, title: 'Ugadi Celebrations 2026', category: 'Ugadi',
    description: 'Parabhava Nama Samvatsara Ugadi at Anjaneya Swamy Temple. Panchanga Pravachanam by Shri Kota Jayashankaram. Clothes to 45 Vedic students, sarees to 50 poor ladies.',
    date: 'March 19, 2026', icon: '🎉', color: 'from-gold-100 to-gold-200',
    images: ['/images/gallery/ugadi-2026/1.jpg', '/images/gallery/ugadi-2026/2.jpg', '/images/gallery/ugadi-2026/3.jpg', '/images/gallery/ugadi-2026/4.jpg', '/images/gallery/ugadi-2026/5.jpg', '/images/gallery/ugadi-2026/6.jpg', '/images/gallery/ugadi-2026/7.jpg', '/images/gallery/ugadi-2026/8.jpg'],
    coverImage: '/images/gallery/ugadi-2026/1.jpg',
  },
  {
    id: 2, title: 'Ugadi Celebrations 2025', category: 'Ugadi',
    description: 'Viswavasu Nama Ugadi celebrated with Panchanga Pravachanam. Clothes to 38 Vedic students, 7 Upadhyayulu, sarees to 50 poor ladies, 200 Panchangams distributed.',
    date: 'March 30, 2025', icon: '🎉', color: 'from-gold-100 to-gold-200',
    images: ['/images/gallery/ugadi-2025/1.jpg', '/images/gallery/ugadi-2025/2.jpg', '/images/gallery/ugadi-2025/3.jpg', '/images/gallery/ugadi-2025/4.jpg', '/images/gallery/ugadi-2025/5.jpg', '/images/gallery/ugadi-2025/6.jpg'],
    coverImage: '/images/gallery/ugadi-2025/1.jpg',
  },
  {
    id: 3, title: 'Ugadi 2024 — Krodhi Nama', category: 'Ugadi',
    description: 'Panchanga Sravanam by Kota Jayashankaram. Ambadipudi Shyam Sundara Rao honored as Visista Vyakthi. 150 Panchangams distributed, 49 Vedic students honored.',
    date: 'April 9, 2024', icon: '🎉', color: 'from-gold-100 to-gold-200',
    images: ['/images/gallery/ugadi-2024/1.jpg', '/images/gallery/ugadi-2024/2.jpg', '/images/gallery/ugadi-2024/3.jpg', '/images/gallery/ugadi-2024/4.jpg', '/images/gallery/ugadi-2024/5.jpg', '/images/gallery/ugadi-2024/6.jpg'],
    coverImage: '/images/gallery/ugadi-2024/1.jpg',
  },
  {
    id: 4, title: 'Ugadi 2023', category: 'Ugadi',
    description: 'GVLN Sanjeeva Rao as Visista Vyakthi. Clothes to 43 Veda Vidyarthulu, sarees for 48 poor ladies.',
    date: 'March 22, 2023', icon: '🎉', color: 'from-gold-100 to-gold-200',
    images: ['/images/gallery/ugadi-2023/1.jpg', '/images/gallery/ugadi-2023/2.jpg', '/images/gallery/ugadi-2023/3.jpg', '/images/gallery/ugadi-2023/4.jpg', '/images/gallery/ugadi-2023/5.jpg', '/images/gallery/ugadi-2023/6.jpg'],
    coverImage: '/images/gallery/ugadi-2023/1.jpg',
  },
  {
    id: 5, title: 'Jandhyala Pournami 2025', category: 'Jandhyala Pournami',
    description: '2000 Yagnopaveethams distributed at 34 places in Guntur and abroad at London.',
    date: 'August 9, 2025', icon: '🧵', color: 'from-cream-50 to-saffron-100',
    images: ['/images/gallery/jandhyala-pournami/1.jpg', '/images/gallery/jandhyala-pournami/2.jpg', '/images/gallery/jandhyala-pournami/3.jpg', '/images/gallery/jandhyala-pournami/4.jpg'],
    coverImage: '/images/gallery/jandhyala-pournami/1.jpg',
  },
  {
    id: 6, title: 'Pura Pramukhulu Felicitation 2026', category: 'Pura Pramukhulu',
    description: 'Former presidents and leaders of the Sangham were felicitated during Ugadi celebrations for their contributions.',
    date: 'March 19, 2026', icon: '🏆', color: 'from-cream-100 to-saffron-100',
    images: ['/images/gallery/pura-pramukhulu/1.jpg', '/images/gallery/pura-pramukhulu/2.jpg', '/images/gallery/pura-pramukhulu/3.jpg', '/images/gallery/pura-pramukhulu/4.jpg', '/images/gallery/pura-pramukhulu/5.jpg', '/images/gallery/pura-pramukhulu/6.jpg', '/images/gallery/pura-pramukhulu/7.jpg'],
    coverImage: '/images/gallery/pura-pramukhulu/1.jpg',
  },
  {
    id: 7, title: 'Karthika Samaradhana 2025', category: 'Karthika Samaradhana',
    description: 'Grand community feast at Central Public School attended by 800+ people. Shri Premkumar team performed music programme. Many entrepreneurs came forward to help.',
    date: 'October 26, 2025', icon: '🪔', color: 'from-saffron-100 to-saffron-200',
    images: [],
  },
  {
    id: 8, title: 'Karthika Samaradhana 2024', category: 'Karthika Samaradhana',
    description: 'Annual Karthika feast attended by 750+ people. Sri Chennai Sastry felicitated as renowned Aparakarma Purohit. 3000 calendars distributed.',
    date: 'November 3, 2024', icon: '🪔', color: 'from-saffron-100 to-saffron-200',
    images: [],
  },
  {
    id: 9, title: 'Free Upanayanams — 8 Vatuvus 2026', category: 'Upanayanams',
    description: 'Uchita Samuhika Upanayanams at Santoshimata Temple, Syamala Nagar. 250 people dined. Vasukumar Purohit conducted the programme.',
    date: 'February 20, 2026', icon: '🙏', color: 'from-cream-100 to-cream-200',
    images: [],
  },
  {
    id: 10, title: 'Free Upanayanams — 9 Vatuvus 2024', category: 'Upanayanams',
    description: 'First time after 27 years — free Samuhika Upanayanams for 9 Vatuvus at Santoshimata Temple. 150 people dined.',
    date: 'February 29, 2024', icon: '🙏', color: 'from-cream-100 to-cream-200',
    images: [],
  },
  {
    id: 11, title: 'Sri Vidyanidhi Scholarships 2025', category: 'Scholarships',
    description: '₹1,70,000 scholarships disbursed to 4 B.Tech final year students. Chief Guests: Puipati Mallikharjuna Prasad and BVH Kameswara Sastry.',
    date: 'August 10, 2025', icon: '🎓', color: 'from-gold-50 to-cream-100',
    images: [],
  },
  {
    id: 12, title: 'Sri Vidyanidhi Scholarships 2026', category: 'Scholarships',
    description: '₹1,97,000 scholarships disbursed to 4 B.Tech students. Chief Guests: Puipati Mallikharjuna Prasad, Director HCIT & BVH Kameswara Sastry.',
    date: 'August 9, 2026', icon: '🎓', color: 'from-gold-50 to-cream-100',
    images: [],
  },
  {
    id: 13, title: 'Bala Goseva — Children\'s Cow Service', category: 'Bala Goseva',
    description: 'Cow Kiddy Banks distributed to children to promote Goseva. ₹27,428 contributed by 41 children for green grass and dana.',
    date: 'January 11, 2026', icon: '🐄', color: 'from-cream-50 to-gold-50',
    images: ['/images/gallery/bala-goseva/pamphlet.jpg'],
    coverImage: '/images/gallery/bala-goseva/pamphlet.jpg',
  },
  {
    id: 14, title: 'Ugadi 2026 Pamphlet', category: 'Ugadi',
    description: 'Official pamphlet for Parabhava Nama Samvatsara Ugadi celebrations at Anjaneya Swamy Temple, 2nd Line, A.T. Agraharam.',
    date: 'March 19, 2026', icon: '📄', color: 'from-gold-50 to-cream-100',
    images: ['/images/gallery/ugadi-pamphlet.jpg'],
    coverImage: '/images/gallery/ugadi-pamphlet.jpg',
  },
  {
    id: 15, title: 'Mahalaya Pitrupakshalu', category: 'Community Events',
    description: 'First time Mahalaya Pitrupakshalu conducted by the Sangham for free at Arama Kshetram. 12 people offered Tila Tarpanams.',
    date: 'September 14, 2025', icon: '🕉️', color: 'from-cream-100 to-saffron-50',
    images: [],
  },
  {
    id: 16, title: 'Sringeri Jagatguruvulu Blessings', category: 'Community Events',
    description: 'Brochure with Arama Kshetram photos presented to Sri Vidushekhara Bharathi Teertha Mahaswami during Guntur visit. His Holiness blessed the Sangham.',
    date: 'November 22, 2024', icon: '🙏', color: 'from-saffron-50 to-gold-50',
    images: [],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Head>
        <title>Media & Gallery — Brahmana Seva Samiti</title>
        <meta name="description" content="Photos and media from Brahmana Seva Samiti's Karthika Samaradhana, Ugadi, Upanayanams, scholarships, and community events." />
      </Head>

      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.25 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-700/90 via-saffron-800/85 to-gray-900/90" />
        <div className="relative page-container text-center">
          <p className="text-gold-300 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Our Moments</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-4 tracking-tight">Media & Gallery</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Capturing our community&rsquo;s spirit through three decades of events, celebrations, and moments of togetherness.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream-50">
        <div className="page-container">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-saffron-500 text-white shadow-md'
                    : 'bg-cream-100 text-gray-600 hover:bg-cream-200 border border-cream-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="card group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                {/* Image or Icon */}
                <div className={`h-52 relative overflow-hidden ${item.coverImage ? '' : `bg-gradient-to-br ${item.color} flex items-center justify-center`}`}>
                  {item.coverImage ? (
                    <>
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </>
                  ) : (
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  )}
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-saffron-600 shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-saffron-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">📷</div>
              <p className="text-gray-500 font-medium">No media found for this category.</p>
              <button onClick={() => setActiveCategory('All')} className="mt-4 text-saffron-500 hover:text-saffron-600 font-medium text-sm underline underline-offset-4">
                View all media →
              </button>
            </div>
          )}

          <div className="mt-12 text-center card p-8 md:p-12 bg-gradient-to-br from-cream-50 to-saffron-50 border-saffron-200">
            <div className="text-4xl mb-4">📸</div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3">Share Your Moments</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Have photos from our community events? Share them with us to be featured in our gallery.
            </p>
            <a href="mailto:brahmanaseva.ata97@gmail.com?subject=Gallery%20Photo%20Submission" className="btn-primary">
              ✉ Submit Photos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
