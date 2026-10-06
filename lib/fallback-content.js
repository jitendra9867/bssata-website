/* ═══════════════════════════════════════════════════════════════
   FALLBACK CONTENT — bundled copies of all site content.
   Used ONLY when the WordPress GraphQL API is unreachable or a
   section is empty, so pages never render blank. Shapes match
   exactly what lib/wordpress.js returns from GraphQL.
   Update WP (wp-admin) as the source of truth; this is the safety
   net. (Seeded to WP on 2026-09-26 via scripts/seed-wp.js)
   ═══════════════════════════════════════════════════════════════ */

/* ── Committee (shape: getCommitteeMembers) ──
   Photographs live in public/images/committee/<slug>.jpg (imported from
   the client's CommitteeMembers/ folder via scripts/import-committee-photos.js).
   Roster reflects the committee elected April 2025: Sri Ambadipudi
   Syamsundara Rao (President) and Sri Peesapati Lakshmi Kantharao (Chief Advisor). */
export const COMMITTEE_FALLBACK = [
  { name: 'Sri Ambadipudi Syamsundara Rao', designation: 'President', phone: '', category: 'leadership', photo: '/images/committee/ambadipudi-syamsundara-rao.jpg' },
  { name: 'Sri Dendukuri Narayana Murthy', designation: 'Honorable President', phone: '9849311140', category: 'leadership', photo: '/images/committee/dendukuri-narayanamurthy.jpg' },
  { name: 'Sri Vankamamidi Venkataramayya', designation: 'Executive President', phone: '9866337559', category: 'leadership', photo: '/images/committee/vankamamidi-venkataramaiah.jpg' },
  { name: 'Sri Pamidighantam V. Satyanarayana', designation: 'Secretary', phone: '7893961234', category: 'leadership', photo: '/images/committee/pamidighantam-venkata-satyanarayana.jpg' },
  { name: 'Sri Susarla Venkata Ramana', designation: 'Treasurer', phone: '9290515564', category: 'leadership', photo: '/images/committee/susarla-venkata-ramana.jpg' },
  { name: 'Sri Jammalamadaka Sita Ramanjaneeya Sharma', designation: 'Vice President', phone: '9491337464', category: 'executive', photo: '/images/committee/jammalamadaka-sitaramanjaneya-sarma.jpg' },
  { name: 'Sri Kota Jayashankaram', designation: 'Vice President', phone: '9581957996', category: 'executive', photo: '/images/committee/kota-jayasankaram.jpg' },
  { name: 'Sri Turumella Umakantharao', designation: 'Vice President', phone: '9440003840', category: 'executive', photo: '/images/committee/turumella-umakantharao.jpg' },
  { name: 'Sri Yallapragada Ramamohan Rao', designation: 'Joint Secretary', phone: '9885700369', category: 'executive', photo: '/images/committee/yallapragada-ramamohana-rao.jpg' },
  { name: 'Sri Munnangi Shesha Sai', designation: 'Assistant Secretary', phone: '9177246569', category: 'executive', photo: '/images/committee/munnangi-sesshasai.jpg' },
  { name: 'Sri Dharmavarapu Chakradhara Rao', designation: 'Member', phone: '7382539357', category: 'members', photo: '/images/committee/dharmavarapu-chakradhararao.jpg' },
  { name: 'Sri Chevuri Shankar', designation: 'Member', phone: '8374405180', category: 'members', photo: '/images/committee/chevuri-sankar.jpg' },
  { name: 'Sri Poonapalli Srinivasa Rao', designation: 'Member', phone: '9014062665', category: 'members', photo: '/images/committee/punepalli-srinivasarao.jpg' },
  { name: 'Sri Challapalli Dakshina Murthy', designation: 'Member', phone: '9014980758', category: 'members', photo: '/images/committee/challapalli-dakshinamurthy.jpg' },
  { name: 'Sri Gade Venugopala Rao', designation: 'Member', phone: '9849836567', category: 'members', photo: '/images/committee/gade-venugopalarao.jpg' },
  { name: 'Sri Telikepalli Ramakrishna Shastri', designation: 'Member', phone: '9440234804', category: 'members', photo: '/images/committee/telkepalli-sivaramakrishna.jpg' },
  { name: 'Sri Ramaraju Chandrashekar', designation: 'Member', phone: '9676410165', category: 'members', photo: '/images/committee/ramaraju-chandrasekhar.jpg' },
  { name: 'Sri Peesapati Lakshmi Kantharao', designation: 'Chief Advisor', phone: '9347259787', category: 'advisors', photo: '/images/committee/peesapati-lakshmi-kantharao.jpg' },
  { name: 'Sri Mamidala Krishna Chaitanya Mallik', designation: 'Advisor', phone: '9849164553', category: 'advisors', photo: '/images/committee/mamidala-krishna-chaitanya-mallik.jpg' },
  { name: 'Sri Pamidighantam V. Subbarao', designation: 'UK Coordinator', phone: '00441442218349', category: 'abroad', photo: '/images/committee/pamidighantam-venkata-subbarao.jpg' },
  { name: 'Sri Talluri Nagaraju', designation: 'UK Coordinator', phone: '00447789778720', category: 'abroad', photo: '/images/committee/talluri-nagaraju.jpg' },
  { name: 'Sri Suripeddi Sreeramachandra Murthy', designation: 'UK Coordinator', phone: '00447491963804', category: 'abroad', photo: '/images/committee/suripeddi-sriramachandra-murthy.jpg' },
];

/* Local photos keyed by member name — lets a member fetched from WP
   still show their bundled photograph when the WP featured image is
   not set yet (see attachLocalPhotos below). */
export const COMMITTEE_PHOTO_BY_NAME = Object.fromEntries(
  COMMITTEE_FALLBACK.filter((m) => m.photo).map((m) => [m.name, m.photo])
);

/**
 * Fill in a bundled local photo for any committee member whose WP record
 * has no featured image yet. Returns a new array; non-matching members
 * are passed through untouched (they fall back to initials in the UI).
 * @param {Array} members
 * @returns {Array}
 */
export function attachLocalPhotos(members) {
  if (!Array.isArray(members)) return members;
  return members.map((m) =>
    m && !m.photo && COMMITTEE_PHOTO_BY_NAME[m.name]
      ? { ...m, photo: COMMITTEE_PHOTO_BY_NAME[m.name] }
      : m
  );
}

/* ── Homepage executive strip (order + avatar styling config) ── */
export const HOME_EXECUTIVE_FALLBACK = [
  { designation: 'President', name: 'Sri Ambadipudi Syamsundara Rao', phone: '', initials: 'AS', gradient: 'from-amber-400 to-orange-600', photo: '/images/committee/ambadipudi-syamsundara-rao.jpg' },
  { designation: 'Honorable President', name: 'Sri Dendukuri Narayana Murthy', phone: '9849311140', initials: 'DN', gradient: 'from-amber-500 to-orange-700', photo: '/images/committee/dendukuri-narayanamurthy.jpg' },
  { designation: 'Executive President', name: 'Sri Vankamamidi Venkataramayya', phone: '9866337559', initials: 'VV', gradient: 'from-orange-400 to-red-600', photo: '/images/committee/vankamamidi-venkataramaiah.jpg' },
  { designation: 'Secretary', name: 'Sri Pamidighantam V. Satyanarayana', phone: '7893961234', initials: 'PV', gradient: 'from-orange-500 to-rose-600', photo: '/images/committee/pamidighantam-venkata-satyanarayana.jpg' },
  { designation: 'Treasurer', name: 'Sri Susarla Venkata Ramana', phone: '9290515564', initials: 'SR', gradient: 'from-yellow-500 to-orange-600', photo: '/images/committee/susarla-venkata-ramana.jpg' },
  { designation: 'Vice President', name: 'Sri Jammalamadaka Sita Ramanjaneeya Sharma', phone: '9491337464', initials: 'JS', gradient: 'from-yellow-400 to-amber-600', photo: '/images/committee/jammalamadaka-sitaramanjaneya-sarma.jpg' },
];

/* ── Recent highlights (shape: getSiteHighlights) ── */
export const HIGHLIGHTS_FALLBACK = [
  { year: '2026', event: 'Scholarships of ₹1,97,000 disbursed to 4 B.Tech students', category: 'Scholarships', icon: '🎓' },
  { year: '2026', event: 'Ugadi celebrated — clothes to 45 Vedic students, sarees to 50 poor ladies', category: 'Celebrations', icon: '🎉' },
  { year: '2026', event: 'Free Upanayanams for 8 Vatuvus at Santoshimata Temple', category: 'Upanayanams', icon: '🙏' },
  { year: '2026', event: 'New 100 sq. yards site purchased behind Arama Kshetram for ₹8.5 Lakhs', category: 'Infrastructure', icon: '🏗️' },
  { year: '2025', event: 'Karthika Samaradhana attended by around 1000 people with music programme', category: 'Events', icon: '🪔' },
  { year: '2025', event: 'Scholarships of ₹1,70,000 disbursed to 4 B.Tech students', category: 'Scholarships', icon: '🎓' },
  { year: '2024', event: 'First Floor of Arama Kshetram inaugurated formally', category: 'Infrastructure', icon: '🏗️' },
  { year: '2024', event: '2000 Yagnopaveethams distributed on Jandhyala Pournami', category: 'Traditions', icon: '🧵' },
];

/* ── Testimonials (shape: getTestimonials) ── */
export const TESTIMONIALS_FALLBACK = [
  { name: 'Sri Kota Jayashankaram', role: 'Panchanga Pravachana Kartā', quote: 'Brahmana Seva Sangham has been a pillar of our community. Their Ugadi celebrations and Karthika Samaradhana bring together hundreds of families in devotion and togetherness.', icon: '🙏' },
  { name: 'Sri G.V.L.N. Sanjeeva Rao', role: 'Visista Vyakthi 2023', quote: 'The work BSS has done for the community is truly commendable — from free Upanayanams to scholarships. The Arama Kshetram is a blessing for all of us.', icon: '✨' },
  { name: 'Smt P. Mahalakshmamma & Sons', role: 'Visista Datalu 2023 — ₹18,00,000 Donors', quote: 'We are proud to contribute to the First Floor of Arama Kshetram in memory of late Sri P.V. Ramanaiah, our founder secretary.', icon: '❤️' },
  { name: 'Sri Medicharla Prabhakar Rao', role: 'Retd. Judge — Legal Cell Member', quote: "The Legal Cell formed by BSS provides affordable legal advice to Brahmin families. A unique initiative reflecting the Sangham's commitment to holistic welfare.", icon: '⚖️' },
  { name: 'Sri Velavarthipati Panduranga Vithal', role: 'National Secretary, AIBF', quote: 'BSSATA is one of the most active Brahmana Sanghams in AP. Their Sampradaya Calendars are distributed across the state and abroad.', icon: '🏛️' },
  { name: 'Scholarship Beneficiary', role: 'B.Tech Final Year Student', quote: 'The scholarship helped me complete my engineering education without financial burden. I am grateful for the support and will always remember this kindness.', icon: '🎓' },
];

/* ── Homepage hero slider (local banner assets + internal links) ── */
export const SLIDER_SLIDES = [
  { image: '/images/slider/banner-1.png', title: 'Brahmana Seva Sangham', subtitle: 'Serving the Community with Devotion and Seva Since 1994', cta: { label: 'About Us', href: '/about' } },
  { image: '/images/slider/banner-2.png', title: 'Jandhyala Pournami', subtitle: '2000 Yagnopaveethams Distributed Across 34 Places', cta: { label: 'Learn More', href: '/programs/jandhyala-pournami' } },
  { image: '/images/slider/banner-3.png', title: 'Ugadi Celebrations', subtitle: 'Clothes to Vedic Students and Sarees to the Needy', cta: { label: 'Learn More', href: '/programs/ugadi' } },
  { image: '/images/slider/banner-4.png', title: 'Karthika Samaradhana', subtitle: '1,000 Devotees Gather in Devotion Every Year', cta: { label: 'Learn More', href: '/programs/karthika-samaradhana' } },
  { image: '/images/slider/banner-5.png', title: 'Scholarships That Change Lives', subtitle: 'Over ₹30 Lakhs Awarded to Meritorious Students', cta: { label: 'Our Schemes', href: '/schemes' } },
  { image: '/images/slider/banner-6.png', title: 'Free Upanayanams', subtitle: 'Vedic Initiation for Vatuvus at Santoshimata Temple', cta: { label: 'Learn More', href: '/programs/uchita-upanayanamulu' } },
  { image: '/images/slider/banner-7.png', title: 'Arama Kshetram', subtitle: 'A Home for Our Community’s Cultural and Welfare Activities', cta: { label: 'Learn More', href: '/programs/arama-kshetramu' } },
  { image: '/images/slider/banner-8.png', title: 'Become a Life Member', subtitle: 'Join Us with a Contribution of ₹10,000 and Above', cta: { label: 'Life Members', href: '/members' } },
];

/* ── About: history timeline (shape: getHistoryHighlights, page maps
      impactTag→icon, description→event) ── */
export const TIMELINE_FALLBACK = [
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

/* ── About: welfare activities (title/description/icon) ── */
export const WELFARE_FALLBACK = [
  { title: 'Karthika Samaradhana', description: 'Annual community feast during the holy month of Karthika — attended by around 1000 people in 2025 with music programmes.', icon: '🪔' },
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
  { title: 'Bala Goseva', description: "Children's cow service initiative — Cow Kiddy Banks distributed to children. ₹27,428 contributed by 41 children in 2025.", icon: '🐄' },
  { title: 'Mahalaya Pitrupakshalu', description: 'First time free Mahalaya Pitrupakshalu conducted at Arama Kshetram. 12+ people offered Tila Tarpanams in 2025.', icon: '🕉️' },
];

/* ── About: honor rolls (shape: getDonorHonors split by type) ── */
export const VISISTA_VYAKTHULU_FALLBACK = [
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

export const VISISTA_DATALU_FALLBACK = [
  { year: '2023', name: 'Smt P. Mahalakshmamma & Sons — P.V. Subbarao, P.V. Satyanarayana & P. Vasudevarao', contribution: '₹18,00,000 — First Floor of Arama Kshetram named in memory of late Sri P.V. Ramanaiah, Founder Secretary' },
  { year: '2024', name: 'Sri Kalluri Venkateswara Rao', contribution: 'Major donor for Sangham activities during the year' },
  { year: '2025', name: 'Shri Ganapavarapu Venkata Anjaneya Sastry', contribution: 'Distinguished donor for community welfare' },
  { year: '2025', name: 'Shri Sarraju Balachandar', contribution: 'Distinguished donor for community welfare' },
];

/* ── Schemes (shape: getWelfareSchemes) + UI category config ── */
export const SCHEMES_FALLBACK = [
  { id: 1, title: 'Karthika Samaradhana', description: 'Annual community feast during the holy month of Karthika — attended by around 1000 people in 2025 with music programmes.', icon: '🪔', category: 'Cultural', status: 'Active', href: '/programs/karthika-samaradhana' },
  { id: 2, title: 'Sampradaya Calendar', description: 'Publication and distribution of traditional Sampradaya Calendars to 3000+ households across the state and abroad.', icon: '📅', category: 'Distribution', status: 'Active', href: '/calendar' },
  { id: 3, title: 'Free Mass Upanayanams', description: 'Sacred thread ceremonies conducted free of cost for underprivileged youth — 10 Vatuvus initiated in Feb 2025.', icon: '🙏', category: 'Religious', status: 'Active', href: '/programs/uchita-upanayanamulu' },
  { id: 4, title: 'Aabdheekam Services', description: 'Ancestral rites preservation services for Brahmin families, including those staying outside AP and abroad via coordination.', icon: '🕉️', category: 'Religious', status: 'Active', href: '/programs/masikamulu-abdikamulu' },
  { id: 5, title: 'Vedic Classes', description: 'Structured classes for Sandhyavandanam, Mantra Pushpam, Mahamantra Pushpam and Rudram for all age groups.', icon: '📖', category: 'Education', status: 'Active', href: null },
  { id: 6, title: 'Jandhyala Pournami', description: 'Distribution of Yagnopaveethams on the auspicious occasion — 2000 distributed at 34 places in 2024.', icon: '🧵', category: 'Distribution', status: 'Active', href: '/programs/jandhyala-pournami' },
  { id: 7, title: 'Life Certificate Desk', description: 'Issuance of Life Certificates for Central and State pensioners (Jan, Feb, Nov, Dec) with face reading method.', icon: '📋', category: 'Service', status: 'Active', href: null },
  { id: 8, title: 'Legal Cell', description: 'Low-cost legal advice by Retd. Judge Sri Medicharla Prabhakar Rao and Advocate Dendukuri Narayana Murthy.', icon: '⚖️', category: 'Service', status: 'Active', href: null },
  { id: 9, title: 'Sri Vidyanidhi Scholarships', description: 'Educational financial assistance — ₹1,97,000 disbursed to 4 B.Tech final year students in 2026.', icon: '🎓', category: 'Education', status: 'Active', href: '/programs/sri-vidyanidhi' },
  { id: 10, title: 'Life Membership', description: 'Life Membership Enrollment Scheme — donors contributing ₹10,000 and above receive permanent membership.', icon: '👤', category: 'Membership', status: 'Active', href: '/members#enrollment' },
  { id: 11, title: 'Arama Kshetram', description: 'Comprehensive infrastructure for final rites management — First floor inaugurated in Dec 2023. New site purchased in 2025-2026 for expansion.', icon: '🏗️', category: 'Infrastructure', status: 'Active', href: '/programs/arama-kshetramu' },
  { id: 12, title: 'Ugadi Celebrations', description: 'Panchanga Sravanam, Visista Vyakthi honors, clothes to Vedic students, sarees to poor ladies.', icon: '🎉', category: 'Cultural', status: 'Active', href: '/programs/ugadi' },
  { id: 13, title: 'Bala Goseva', description: "Children's cow service initiative — Cow Kiddy Banks distributed to children. ₹27,428 contributed by 41 children in 2025.", icon: '🐄', category: 'Service', status: 'Active', href: '/community#bala-goseva' },
  { id: 14, title: 'Mahalaya Pitrupakshalu', description: 'First time free Mahalaya Pitrupakshalu conducted at Arama Kshetram. 12+ people offered Tila Tarpanams in 2025.', icon: '🕉️', category: 'Religious', status: 'Active', href: '/programs/mahalaya-pakshalu' },
];

export const SCHEME_CATEGORIES = [
  { name: 'All', icon: '📋' },
  { name: 'Cultural', icon: '🎭' },
  { name: 'Religious', icon: '🙏' },
  { name: 'Education', icon: '📚' },
  { name: 'Service', icon: '🤝' },
  { name: 'Distribution', icon: '📦' },
  { name: 'Infrastructure', icon: '🏗️' },
  { name: 'Membership', icon: '👤' },
];

export const IMPACT_STATS = [
  { value: '14+', label: 'Active Schemes', icon: '🎗️' },
  { value: '760+', label: 'Beneficiaries', icon: '👥' },
  { value: '₹30L+', label: 'Distributed', icon: '💰' },
  { value: '30+', label: 'Years Active', icon: '🏛️' },
];

/* ── Site settings (shape: getSiteSettings) ── */
export const SITE_SETTINGS_FALLBACK = {
  organizationName: 'Brahmana Seva Sangham',
  regNo: '48/1997',
  tagline: 'Serving the Brahmin community with cultural preservation, welfare schemes, and community service since 1994.',
  address: 'Door No. 26-32-35, 6th Line,\nAnanda Theertha Agraharam,\nGuntur – 522 004, Andhra Pradesh',
  officeAddress: 'Arama Kshetram (Office & Operations): Near Visalakshi Cold Storage, Guntur – Chilakaluripet Highway, Guntur – 522 004. (Office shifted here from Aug 2025)',
  email: 'brahmanaseva.ata97@gmail.com',
  phone: '7893961234',
  website: 'https://www.bssata.org',
  twelveACertificateText: 'All donations are eligible for tax exemption under Section 12A. 12A exemption granted by the Income Tax Department valid from 2025-26 to 2030-31 (Provisional Registration obtained January 2025).',
  bankAccounts: [
    { bankName: 'Union Bank of India', accountNumber: '156910100019148', ifscCode: 'UBIN0815691', branch: 'A.T. Agraharam, Guntur – 522004' },
    { bankName: 'State Bank of India', accountNumber: '52112775646', ifscCode: 'SBIN0020715', branch: 'A.T. Agraharam, Guntur – 522004' },
  ],
};

/* ── Contact page key people (Secretary from settings; Auditor) ── */
export const KEY_PEOPLE_FALLBACK = [
  { role: 'Secretary', icon: '📞', name: 'Sri Pamidighantam Venkata Satyanarayana', phone: '7893961234', phoneDisplay: '78939 61234' },
  { role: 'Auditor', icon: '⚖️', name: 'Ketharaju Subba Rao & Co.', phone: '7702700117', phoneDisplay: '77027 00117', sub: '2/12, Brodipet, Guntur · Rep. by Ketharaju Subhash' },
];
