/* ═══════════════════════════════════════════════════════════════
   FALLBACK CONTENT — community, programs hub, calendar, members.
   Used ONLY when the WordPress GraphQL API is unreachable at build
   time. Shapes match lib/wordpress.js mappers.
   (Seeded to WP on 2026-09-26 via scripts/seed-wp-programs.js)
   ═══════════════════════════════════════════════════════════════ */

/* ── Program hub events, grouped by program slug ── */
export const PROGRAM_EVENTS_FALLBACK = {
  'mahalaya-pakshalu': [
    { year: '2025', date: '', detail: 'First time free Mahalaya Pitrupakshalu conducted at Arama Kshetram. 12+ people offered Tila Tarpanams with full Vedic guidance.' },
  ],
  'uchita-upanayanamulu': [
    { year: '1995', date: 'March', detail: 'First Samuhika Uchita Upanayanams for 12 Vatuvus at Gayatri Mata Mandiram.' },
    { year: '2024', date: 'February 29', detail: 'Free Samuhika Upanayanams for 9 Vatuvus at Santoshimata Temple after 27 years. 150 people dined.' },
    { year: '2025', date: 'February 15', detail: 'Uchita Upanayanams for 10 Vatuvus at Santoshimata Temple. 250 people dined.' },
    { year: '2026', date: 'February 20', detail: 'Free Upanayanams for 8 Vatuvus at Santoshimata Temple. 250 people dined. Venue assured free by Sri Gabbita Sivaram Krishna Prasad.' },
  ],
  ugadi: [
    { year: '2024', date: 'April 9', detail: 'Krodhi Nama Ugadi — Panchanga Sravanam, 150 Panchangams distributed, 49 Vedic students honored, 55 poor ladies presented sarees.' },
    { year: '2026', date: 'March 19', detail: 'Parabhava Nama Samvatsara Ugadi at Anjaneya Swamy Temple. Clothes to 45 Vedic students, 5 Upadhyayulu, sarees to 50 poor ladies.' },
  ],
  'general-body-meeting': [
    { year: '2023', date: 'May 28', detail: 'New body elected unanimously — President: Sri P.L. Kantharao, Secretary: P.V. Satyanarayana, Treasurer: Sri S.V. Ramana.' },
  ],
  'sri-vidyanidhi': [
    { year: '2025', date: 'August 10', detail: '₹1,70,000 scholarships disbursed to 4 B.Tech students.' },
    { year: '2026', date: 'August 9', detail: '₹1,97,000 disbursed to 4 B.Tech students. Chief Guests: Puipati Mallikharjuna Prasad & BVH Kameswara Sastry.' },
  ],
  'jandhyala-pournami': [
    { year: '2023', date: 'August 31', detail: '1000 Yagnopaveethams distributed across the city through temples and Vedapathasalas.' },
    { year: '2024', date: 'August 19', detail: '2000 Yagnopaveethams distributed at 34 places in Guntur and abroad at London.' },
  ],
  'karthika-samaradhana': [
    { year: '2023', date: 'November 19', detail: 'Karthika Samaradhana at Central Public School attended by 650 people. First floor donors felicitated.' },
    { year: '2024', date: 'November 3', detail: 'Karthika Samaradhana attended by 750+ people. 3000 Sampradaya Calendars published for 2025.' },
    { year: '2025', date: '', detail: 'Karthika Samaradhana attended by around 1000 people, with music programmes.' },
  ],
  'masikamulu-abdikamulu': [
    { year: 'Ongoing', date: '', detail: 'Masikam / Abdikamulu rites coordination for Brahmin families — including families staying outside Andhra Pradesh and abroad, via full coordination with family priests.' },
  ],
  'arama-kshetramu': [
    { year: '2010', date: '', detail: 'Decision to construct Arama Kshetram on own site — ₹1.5 Lakh donations announced on the spot.' },
    { year: '2011', date: '', detail: '400 sq. yards plot procured near Visalakshi Cold Storage.' },
    { year: '2015', date: '', detail: 'Grand Gruhapravesam celebrated.' },
    { year: '2023', date: '', detail: 'First floor inaugurated formally with all rituals, attended by 150 people.' },
    { year: '2025-26', date: '', detail: '100 sq. yards site purchased behind Arama Kshetram; Bhudanam collection started for 200 sq. yards on the north side.' },
  ],
  'pura-pramukhulu': [],
};

/* ── Jandhyala centers (46) ── */
export const CENTERS_FALLBACK = [
  ['1/13, Brodipet, BSS Office', 'BSS Office', '', 50],
  ['A.T. Agraharam, 1st Line — Gayatri Ammavari Temple', 'Sri Srinivas', '', 30],
  ['A.T. Agraharam, 2nd Line — Anjaneya Swamy Temple', 'Smt Bhanumathi', '', 30],
  ['Maruthi Nagar — Anjaneya Swamy Temple', 'Sri Srinivas, Secretary', '', 30],
  ['Arundalpet — Shivalayam', 'Sri Bhaskar Pujari', '', 30],
  ['Pattabhipuram — Veda Pathashala', 'Sri Simhadri Sastry', '', 30],
  ['Yagnavalkya Kshetram', 'Sri Vinay Kumar', '', 50],
  ['Brodpitet, 2nd Line — Omkara Kshetram Office', 'Secretary Sri Moorthy', '', 30],
  ['Syamala Nagar — Santoshimata Temple', 'Sri Uday Kumar', '', 30],
  ['Arundalpet — Ranganayaka Swamy Temple', 'Pujari Sri Satyanarayana', '', 30],
  ['Brodpitet 5/17 — Lalitha Ammavari Temple', 'Sri Shankar', '', 50],
  ['Chilakaluripet Road — Ganapathi Satchidanandam Ashram, Anjaneya Swamy Temple', 'Pujari Sri Venkateswara Rao', '', 20],
  ['A.T. Agraharam, 6th Line — BSS Office', 'BSS Office', '7893961234', 0],
  ['A.T. Agraharam, 3rd Line — Distinguished Advisor Residence', 'Sri Lakshmi Kantharao', '9347259787', 30],
  ['Munnangi Towers, Ramireddy Nagar — President Residence', 'Sri Shyamsundar', '9440235340', 30],
  ['SVN Colony — Executive President Residence', 'Sri Venkataramayya', '9866337559', 30],
  ['A.T. Agraharam, 2nd Line, 2nd Cross Road — Hon. President Residence', 'Sri Narayana Murthy', '9849311140', 30],
  ['A.T. Agraharam, 11th Line — Vice President Residence', 'Sri Anjaneya Sharma', '9491337464', 30],
  ['A.T. Agraharam, 3rd Line — Vice President Residence', 'Sri Umakantharao', '9440003840', 20],
  ['A.T. Agraharam, 4th Line, Ravi Residency — Vice President Residence', 'Sri Kota Jayashankaram', '8555022395', 30],
  ['A.T. Agraharam, 5th Line — Treasurer Residence', 'Sri Susarla Venkata Ramana', '9290515564', 30],
  ['A.T. Agraharam, 6th Line, near Bank — Joint Secretary Residence', 'Sri Ramamohan Rao', '9885700369', 20],
  ['Srinagar 7/5 — Asst. Secretary Residence', 'Sri Shesha Sai', '9177246569', 30],
  ['A.T. Agraharam, 0 Line — Committee Member Residence', 'Sri Chakradhara Sharma', '7382539357', 20],
  ['A.T. Agraharam, 9th Line — Committee Member Residence', 'Sri Shankar', '8374405180', 20],
  ['Ramireddy Nagar, 3rd Line — Committee Member Residence', 'Sri Poonapalli Srinivasa Rao', '9014062665', 20],
  ['A.T. Agraharam, 1st Line — Committee Member Residence', 'Sri Ramaraju Chandrashekar', '9676410165', 20],
  ['Ramireddy Nagar, 4th Line — Committee Member Residence', 'Sri Gade Venugopala Rao', '9849836567', 20],
  ['Sangdigunta, 1st Line — Committee Member Residence', 'Sri Telikepalli Ramakrishna Sastry', '9440234804', 30],
  ['Teachers Colony — Committee Member Residence', 'Sri Challapalli Dakshinamurthy', '9014980758', 30],
  ['London — Committee Member Residence', 'Sri Sreeramachandramurthy', '00447491963804', 0],
  ['London — Committee Member Residence', 'Sri Subbarao', '00441442218349', 0],
  ['London — Committee Member Residence', 'Sri Nagaraju', '00447789778720', 0],
  ['London — Sangha Member Residence', 'Sri Naresh', '00447747077409', 0],
  ['Nizampet, Hyderabad — Sangha Member Residence', 'Sri Pamidighantam Vasudevarao', '8374344777', 50],
  ['Saptarshi Medical Foundation', 'Dr. Revuri Harikrishna', '9666912354', 30],
  ['Pathagunturu — Gopal Jewellers', 'Sri Gopal', '', 30],
  ['Pathagunturu — Residence', 'Sri Chintalapudi Srinivas', '9440855123', 30],
  ['SVN Colony — Venkateswara Swamy Temple', 'Madhusudan Archaka', '', 30],
  ['Donkaroad, 6th Line, Valluri Vari Thota — Residence', 'Sri Akkapantula Ramarao', '9392015236', 20],
  ['Manager, Aramakshetram, New Colony, Chilakaluripet Road', 'Aramakshetram Manager', '9502712588', 30],
  ['Pattabhipuram — Satyanarayana Swamy Temple', 'Vijaya Krishna Archaka', '', 20],
  ['Reddipalem — Legal Cell President Residence', 'Sri Prabhakar Sharma', '9866088166', 30],
  ['A.T. Agraharam, 9th Line — Special Invitee Residence', 'Sri Sai Krishna', '9700912328', 20],
  ['A.T. Agraharam, 8th Line — Special Invitee Residence', 'Sri Pradeep', '9963158701', 20],
  ['Vengalayapalem — Committee Advisor Residence', 'Sri Krishna Chaitanya Mallik', '9849164553', 50],
].map(([location, contact, phone, qty], i) => ({ id: i + 1, location, contact, phone, qty }));

/* ── Bala Goseva donors (41) ── */
export const BALA_DONORS_FALLBACK = [
  ['Yallapragada Dhanasri Valli', '3rd Class — D/O Ramamohana Rao', 501],
  ['Ambatipudi Dedeepya Valli', 'UKG — D/O A. Umamaheswara Rao', 568],
  ['Anagha Lokesh Nagachandra Sai', '5th Class — S/O A. Subrahmanyam', 150],
  ['Anagha Venkata Naga Mrudula', '6th Class — D/O A. Subrahmanyam', 150],
  ['Ambatipudi Sri Atul Padmakar', '4th Class — S/O A.S. Sarath Babu', 1000],
  ['Ambatipudi Veda Geethika', '2nd Class — D/O A.S. Sarath Babu', 1000],
  ['Adusumalli Bhargava Karthik', '9th Class — S/O Ramana Murthy', 500],
  ['Rudravarapu Hema Charan', '4th Class — S/O Bhargava Rama Krishna', 365],
  ['Jonnalagadda Divija', '10th Class — D/O J. Nageswara Sarma', 1100],
  ['Jammalamadaka Moukthika', '4th Class — D/O Eswarchand', 1160],
  ['Bodapati Vikramaditya', 'LKG — S/O B. Aditya', 565],
  ['Ambatipudi Rehan', 'UKG — S/O A. Kamalakar', 1000],
  ['Ambatipudi Aadya', 'Nursery — D/O A. Kamalakar', 2000],
  ['Ambatipudi Sri Lasya Krithika', 'UKG — D/O A. Krishna Kamal', 2000],
  ['Jammalamadaka Nikhilesh', '9th Class — S/O Eswarchand', 1220],
  ['Vemuri Gnanasri Koumudi', '2nd Class — D/O V. Rajesh', 500],
  ['Vemuri Dharesh Anirudh', '7th Class — S/O V. Rajesh', 500],
  ['Ch Sreshta Yasaswini', '6th Class — D/O CH Phani Chaitanya', 311],
  ['Madanapalli Swapnika', 'Medicine — D/O P. Vasudevarao', 622],
  ['Susarla Srina & Srinitha', 'Babies — S&D/O Tejo Bharadwaj', 352],
  ['Pathuri Abhinav', '2nd Class — S/O Pathuri Sri Hari', 238],
  ['Kopalle Yasassu Avyakthu', '1½ Years — S/O Vamasikrishna', 505],
  ['Siva Phanindra', 'Graduation 1st Yr — S/O Talluri Nagaraju', 1250],
  ['Naga Kirthana', 'GCSE — D/O Talluri Nagaraju', 1250],
  ['Bharthipudi Harshit', '4th Class — S/O BV Kalyan Rao', 1000],
  ['Jammalamadaka Gayatri', 'Inter 1st Yr — D/O J. Purnachara Rao', 556],
  ['Jammalamadaka Ananya', '8th Class — D/O J. Purnachara Rao', 556],
  ['Sistla Asritha', '5th Class — D/O S. Chandrasekhar', 516],
  ['Sistla Shanmukha', '3rd Class — S/O S. Chandrasekhar', 516],
  ['Kopparthy Veer Arish', '2½ Years — S/O K. Avinash Bharadwaj', 1000],
  ['Susarla Advik & Dhruvika', '6 Yrs / 3 Yrs — Children of Susarla Bhavani Prasad', 516],
  ['Pamidighantam Urukram Anath Sriram', '6 Months — G/S/O P.V. Subbarao', 1000],
  ['Dharmavarapu Avirsai Lohithasya', '7 Years — D/O D. Ramakoteswara Rao', 951],
  ['Vivan Karthik Vemuri', '2nd Class — S/O Vijay Krishna', 500],
  ['Naga Saorya Yuvan', 'UKG — S/O Vijay Krishna', 500],
  ['Soujanya', '4th Class — D/O PVSS Teja Kumar Sarma', 251],
  ['Devakinandan', 'UKG — S/O PVSS Teja Kumar Sarma', 250],
  ['Sai Bhavyesh', '7th Class — S/O Aripirala Sai Srinivas', 522],
  ['Mamidala Eswar', 'Inter 1st Year — S/O Mamidala Krishna', 100],
  ['Mamidala Vaisali', '6th Class — D/O Mamidala Krishna', 100],
  ['Mamidala Vaishnavi', '6th Class — D/O Mamidala Krishna', 100],
].map(([name, cls, amount]) => ({ name, class: cls, amount }));

/* ── Sampradaya calendars ── */
export const CALENDARS_FALLBACK = [
  { year: '2026', pdf: '/images/calendars/cal 2026.pdf', description: 'Parabhava Nama Samvatsara — Current year calendar with auspicious dates, festivals, and muhurthams.', samvat: 'पराभव', latest: true, count: '3000+' },
  { year: '2025', pdf: '/images/calendars/cal 2025.pdf', description: 'Plava Nama Samvatsara — Last year calendar with complete festival schedule.', samvat: 'प्लव', latest: false, count: '3000+' },
  { year: '2024', pdf: '/images/calendars/cal 2024.pdf', description: 'Shobhakruth Nama Samvatsara — Calendar with traditional festivals and events.', samvat: 'शोभकृत्', latest: false, count: '3000+' },
  { year: '2023', pdf: '/images/calendars/cal 2023.pdf', description: 'Shubhakruth Nama Samvatsara — Calendar with traditional festivals and events.', samvat: 'शुभकृत्', latest: false, count: '3000+' },
];

/* ── Gotrams (members directory filter) ── */
export const GOTRAMS_FALLBACK = [
  'PARASARA', 'KOUNDINYASA', 'KASYAPASA', 'SYALAVATHASA',
  'LOHITHASA', 'BHARGAVASA', 'KAPISA', 'VADHULASA', 'KUSTASA',
  'SANDILYASA', 'SANKHYANASA', 'SRIVATSASA', 'GOWTHAMASA',
  'BARADWAJASA', 'KANVASA', 'VASISTA', 'SATAMARSHANA',
];
