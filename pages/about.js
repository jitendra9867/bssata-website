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

const jandhyalaCenters = [
  { id: 1, location: '1/13, Brodipet, BSS Office', contact: 'BSS Office', phone: '', qty: 50 },
  { id: 2, location: 'A.T. Agraharam, 1st Line — Gayatri Ammavari Temple', contact: 'Sri Srinivas', phone: '', qty: 30 },
  { id: 3, location: 'A.T. Agraharam, 2nd Line — Anjaneya Swamy Temple', contact: 'Smt Bhanumathi', phone: '', qty: 30 },
  { id: 4, location: 'Maruthi Nagar — Anjaneya Swamy Temple', contact: 'Sri Srinivas, Secretary', phone: '', qty: 30 },
  { id: 5, location: 'Arundalpet — Shivalayam', contact: 'Sri Bhaskar Pujari', phone: '', qty: 30 },
  { id: 6, location: 'Pattabhipuram — Veda Pathashala', contact: 'Sri Simhadri Sastry', phone: '', qty: 30 },
  { id: 7, location: 'Yagnavalkya Kshetram', contact: 'Sri Vinay Kumar', phone: '', qty: 50 },
  { id: 8, location: 'Brodpitet, 2nd Line — Omkara Kshetram Office', contact: 'Secretary Sri Moorthy', phone: '', qty: 30 },
  { id: 9, location: 'Syamala Nagar — Santoshimata Temple', contact: 'Sri Uday Kumar', phone: '', qty: 30 },
  { id: 10, location: 'Arundalpet — Ranganayaka Swamy Temple', contact: 'Pujari Sri Satyanarayana', phone: '', qty: 30 },
  { id: 11, location: 'Brodpitet 5/17 — Lalitha Ammavari Temple', contact: 'Sri Shankar', phone: '', qty: 50 },
  { id: 12, location: 'Chilakaluripet Road — Ganapathi Satchidanandam Ashram, Anjaneya Swamy Temple', contact: 'Pujari Sri Venkateswara Rao', phone: '', qty: 20 },
  { id: 13, location: 'A.T. Agraharam, 6th Line — BSS Office', contact: 'BSS Office', phone: '7893961234', qty: 0 },
  { id: 14, location: 'A.T. Agraharam, 3rd Line — Distinguished Advisor Residence', contact: 'Sri Lakshmi Kantharao', phone: '9347259787', qty: 30 },
  { id: 15, location: 'Munnangi Towers, Ramireddy Nagar — President Residence', contact: 'Sri Shyamsundar', phone: '9440235340', qty: 30 },
  { id: 16, location: 'SVN Colony — Executive President Residence', contact: 'Sri Venkataramayya', phone: '9866337559', qty: 30 },
  { id: 17, location: 'A.T. Agraharam, 2nd Line, 2nd Cross Road — Hon. President Residence', contact: 'Sri Narayana Murthy', phone: '9849311140', qty: 30 },
  { id: 18, location: 'A.T. Agraharam, 11th Line — Vice President Residence', contact: 'Sri Anjaneya Sharma', phone: '9491337464', qty: 30 },
  { id: 19, location: 'A.T. Agraharam, 3rd Line — Vice President Residence', contact: 'Sri Umakantharao', phone: '9440003840', qty: 20 },
  { id: 20, location: 'A.T. Agraharam, 4th Line, Ravi Residency — Vice President Residence', contact: 'Sri Kota Jayashankaram', phone: '8555022395', qty: 30 },
  { id: 21, location: 'A.T. Agraharam, 5th Line — Treasurer Residence', contact: 'Sri Susarla Venkata Ramana', phone: '9290515564', qty: 30 },
  { id: 22, location: 'A.T. Agraharam, 6th Line, near Bank — Joint Secretary Residence', contact: 'Sri Ramamohan Rao', phone: '9885700369', qty: 20 },
  { id: 23, location: 'Srinagar 7/5 — Asst. Secretary Residence', contact: 'Sri Shesha Sai', phone: '9177246569', qty: 30 },
  { id: 24, location: 'A.T. Agraharam, 0 Line — Committee Member Residence', contact: 'Sri Chakradhara Sharma', phone: '7382539357', qty: 20 },
  { id: 25, location: 'A.T. Agraharam, 9th Line — Committee Member Residence', contact: 'Sri Shankar', phone: '8374405180', qty: 20 },
  { id: 26, location: 'Ramireddy Nagar, 3rd Line — Committee Member Residence', contact: 'Sri Poonapalli Srinivasa Rao', phone: '9014062665', qty: 20 },
  { id: 27, location: 'A.T. Agraharam, 1st Line — Committee Member Residence', contact: 'Sri Ramaraju Chandrashekar', phone: '9676410165', qty: 20 },
  { id: 28, location: 'Ramireddy Nagar, 4th Line — Committee Member Residence', contact: 'Sri Gade Venugopala Rao', phone: '9849836567', qty: 20 },
  { id: 29, location: 'Sangdigunta, 1st Line — Committee Member Residence', contact: 'Sri Telikepalli Ramakrishna Sastry', phone: '9440234804', qty: 30 },
  { id: 30, location: 'Teachers Colony — Committee Member Residence', contact: 'Sri Challapalli Dakshinamurthy', phone: '9014980758', qty: 30 },
  { id: 31, location: 'London — Committee Member Residence', contact: 'Sri Sreeramachandramurthy', phone: '00447491963804', qty: 0 },
  { id: 32, location: 'London — Committee Member Residence', contact: 'Sri Subbarao', phone: '00441442218349', qty: 0 },
  { id: 33, location: 'London — Committee Member Residence', contact: 'Sri Nagaraju', phone: '00447789778720', qty: 0 },
  { id: 34, location: 'London — Sangha Member Residence', contact: 'Sri Naresh', phone: '00447747077409', qty: 0 },
  { id: 35, location: 'Nizampet, Hyderabad — Sangha Member Residence', contact: 'Sri Pamidighantam Vasudevarao', phone: '8374344777', qty: 50 },
  { id: 36, location: 'Saptarshi Medical Foundation', contact: 'Dr. Revuri Harikrishna', phone: '9666912354', qty: 30 },
  { id: 37, location: 'Pathagunturu — Gopal Jewellers', contact: 'Sri Gopal', phone: '', qty: 30 },
  { id: 38, location: 'Pathagunturu — Residence', contact: 'Sri Chintalapudi Srinivas', phone: '9440855123', qty: 30 },
  { id: 39, location: 'SVN Colony — Venkateswara Swamy Temple', contact: 'Madhusudan Archaka', phone: '', qty: 30 },
  { id: 40, location: 'Donkaroad, 6th Line, Valluri Vari Thota — Residence', contact: 'Sri Akkapantula Ramarao', phone: '9392015236', qty: 20 },
  { id: 41, location: 'Manager, Aramakshetram, New Colony, Chilakaluripet Road', contact: 'Aramakshetram Manager', phone: '9502712588', qty: 30 },
  { id: 42, location: 'Pattabhipuram — Satyanarayana Swamy Temple', contact: 'Vijaya Krishna Archaka', phone: '', qty: 20 },
  { id: 43, location: 'Reddipalem — Legal Cell President Residence', contact: 'Sri Prabhakar Sharma', phone: '9866088166', qty: 30 },
  { id: 44, location: 'A.T. Agraharam, 9th Line — Special Invitee Residence', contact: 'Sri Sai Krishna', phone: '9700912328', qty: 20 },
  { id: 45, location: 'A.T. Agraharam, 8th Line — Special Invitee Residence', contact: 'Sri Pradeep', phone: '9963158701', qty: 20 },
  { id: 46, location: 'Vengalayapalem — Committee Advisor Residence', contact: 'Sri Krishna Chaitanya Mallik', phone: '9849164553', qty: 50 },
];

const balaGosevaDonors = [
  { name: 'Yallapragada Dhanasri Valli', class: '3rd Class — D/O Ramamohana Rao', amount: 501 },
  { name: 'Ambatipudi Dedeepya Valli', class: 'UKG — D/O A. Umamaheswara Rao', amount: 568 },
  { name: 'Anagha Lokesh Nagachandra Sai', class: '5th Class — S/O A. Subrahmanyam', amount: 150 },
  { name: 'Anagha Venkata Naga Mrudula', class: '6th Class — D/O A. Subrahmanyam', amount: 150 },
  { name: 'Ambatipudi Sri Atul Padmakar', class: '4th Class — S/O A.S. Sarath Babu', amount: 1000 },
  { name: 'Ambatipudi Veda Geethika', class: '2nd Class — D/O A.S. Sarath Babu', amount: 1000 },
  { name: 'Adusumalli Bhargava Karthik', class: '9th Class — S/O Ramana Murthy', amount: 500 },
  { name: 'Rudravarapu Hema Charan', class: '4th Class — S/O Bhargava Rama Krishna', amount: 365 },
  { name: 'Jonnalagadda Divija', class: '10th Class — D/O J. Nageswara Sarma', amount: 1100 },
  { name: 'Jammalamadaka Moukthika', class: '4th Class — D/O Eswarchand', amount: 1160 },
  { name: 'Bodapati Vikramaditya', class: 'LKG — S/O B. Aditya', amount: 565 },
  { name: 'Ambatipudi Rehan', class: 'UKG — S/O A. Kamalakar', amount: 1000 },
  { name: 'Ambatipudi Aadya', class: 'Nursery — D/O A. Kamalakar', amount: 2000 },
  { name: 'Ambatipudi Sri Lasya Krithika', class: 'UKG — D/O A. Krishna Kamal', amount: 2000 },
  { name: 'Jammalamadaka Nikhilesh', class: '9th Class — S/O Eswarchand', amount: 1220 },
  { name: 'Vemuri Gnanasri Koumudi', class: '2nd Class — D/O V. Rajesh', amount: 500 },
  { name: 'Vemuri Dharesh Anirudh', class: '7th Class — S/O V. Rajesh', amount: 500 },
  { name: 'Ch Sreshta Yasaswini', class: '6th Class — D/O CH Phani Chaitanya', amount: 311 },
  { name: 'Madanapalli Swapnika', class: 'Medicine — D/O P. Vasudevarao', amount: 622 },
  { name: 'Susarla Srina & Srinitha', class: 'Babies — S&D/O Tejo Bharadwaj', amount: 352 },
  { name: 'Pathuri Abhinav', class: '2nd Class — S/O Pathuri Sri Hari', amount: 238 },
  { name: 'Kopalle Yasassu Avyakthu', class: '1½ Years — S/O Vamasikrishna', amount: 505 },
  { name: 'Siva Phanindra', class: 'Graduation 1st Yr — S/O Talluri Nagaraju', amount: 1250 },
  { name: 'Naga Kirthana', class: 'GCSE — D/O Talluri Nagaraju', amount: 1250 },
  { name: 'Bharthipudi Harshit', class: '4th Class — S/O BV Kalyan Rao', amount: 1000 },
  { name: 'Jammalamadaka Gayatri', class: 'Inter 1st Yr — D/O J. Purnachara Rao', amount: 556 },
  { name: 'Jammalamadaka Ananya', class: '8th Class — D/O J. Purnachara Rao', amount: 556 },
  { name: 'Sistla Asritha', class: '5th Class — D/O S. Chandrasekhar', amount: 516 },
  { name: 'Sistla Shanmukha', class: '3rd Class — S/O S. Chandrasekhar', amount: 516 },
  { name: 'Kopparthy Veer Arish', class: '2½ Years — S/O K. Avinash Bharadwaj', amount: 1000 },
  { name: 'Susarla Advik & Dhruvika', class: '6 Yrs / 3 Yrs — Children of Susarla Bhavani Prasad', amount: 516 },
  { name: 'Pamidighantam Urukram Anath Sriram', class: '6 Months — G/S/O P.V. Subbarao', amount: 1000 },
  { name: 'Dharmavarapu Avirsai Lohithasya', class: '7 Years — D/O D. Ramakoteswara Rao', amount: 951 },
  { name: 'Vivan Karthik Vemuri', class: '2nd Class — S/O Vijay Krishna', amount: 500 },
  { name: 'Naga Saorya Yuvan', class: 'UKG — S/O Vijay Krishna', amount: 500 },
  { name: 'Soujanya', class: '4th Class — D/O PVSS Teja Kumar Sarma', amount: 251 },
  { name: 'Devakinandan', class: 'UKG — S/O PVSS Teja Kumar Sarma', amount: 250 },
  { name: 'Sai Bhavyesh', class: '7th Class — S/O Aripirala Sai Srinivas', amount: 522 },
  { name: 'Mamidala Eswar', class: 'Inter 1st Year — S/O Mamidala Krishna', amount: 100 },
  { name: 'Mamidala Vaisali', class: '6th Class — D/O Mamidala Krishna', amount: 100 },
  { name: 'Mamidala Vaishnavi', class: '6th Class — D/O Mamidala Krishna', amount: 100 },
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
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-700/90 via-saffron-800/85 to-gray-900/90" />
        <div className="relative page-container text-center">
          <p className="text-gold-300 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Our Heritage</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-4 tracking-tight">About Our Organization</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
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
                <p className="text-xs uppercase tracking-[0.2em] text-saffron-400 font-semibold mb-3">
                  Our Foundation
                </p>
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
                      <div className="w-8 h-8 rounded-full bg-saffron-50 flex items-center justify-center text-xs font-bold text-saffron-500 flex-shrink-0 mt-0.5">
                        {member.name.split(' ').pop()[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{member.name}</p>
                        <p className="text-xs text-saffron-500">{member.role}</p>
                      </div>
                      <a href={`tel:${member.phone}`} className="text-xs text-gray-400 hover:text-saffron-500 flex-shrink-0">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron-400 font-semibold mb-3">
              What We Do
            </p>
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
                    <span className="text-xs font-bold text-gray-400 bg-cream-50 px-2 py-1 rounded">
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
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron-400 font-semibold mb-3">
              Journey Through Time
            </p>
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
                          <span className="text-xs font-bold text-saffron-500">{item.year}</span>
                          <span className="text-xs text-gray-400">— {item.date}</span>
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
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron-400 font-semibold mb-3">
              Honoring Excellence
            </p>
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
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron-400 font-semibold mb-3">
              Gratitude & Recognition
            </p>
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

      {/* Bala Goseva Donors */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron-400 font-semibold mb-3">
              Nurturing Young Hearts
            </p>
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Bala Goseva Contributors
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our youngest contributors — children who lovingly donate through Cow Kiddy Banks
              to support cow welfare and Goseva. Total collected in 2025: <strong className="text-saffron-500">₹27,428</strong> from <strong className="text-saffron-500">41 children</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {balaGosevaDonors.map((item, idx) => (
              <div key={idx} className="card p-3 flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-cream-100 flex items-center justify-center text-xs font-bold text-saffron-500 flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-gray-800 truncate">{item.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{item.class}</p>
                </div>
                <span className="text-xs font-bold text-saffron-500 flex-shrink-0">₹{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jandhyala Pournami Distribution Centers */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="page-container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron-400 font-semibold mb-3">
              Access Points Across Guntur & Beyond
            </p>
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Jandhyala Pournami Distribution Centers
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Free Yagnopaveethams are distributed annually through <strong className="text-saffron-500">46 centers</strong>
              across Guntur, abroad, and other parts of the country. Pick up your sacred thread
              from the center nearest to you before Jandhyala Pournami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {jandhyalaCenters.map((center) => (
              <div key={center.id} className="card p-4 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-xs font-bold text-saffron-600 flex-shrink-0 mt-0.5">
                    {center.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-800 leading-snug mb-1">{center.location}</p>
                    <p className="text-xs text-gray-500 mb-1.5">{center.contact}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {center.phone && (
                        <a href={`tel:${center.phone}`} className="inline-flex items-center gap-1 text-xs text-saffron-500 hover:text-saffron-600">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {center.phone}
                        </a>
                      )}
                      {center.qty > 0 && (
                        <span className="text-[10px] font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full">
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
            <p className="text-sm text-gray-400">
              For bulk distribution or queries, contact the Secretary at <a href="tel:7893961234" className="text-saffron-500 font-medium">78939 61234</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-saffron-600 via-saffron-700 to-gray-900 text-white overflow-hidden">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-300 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Join Our Mission</p>
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
