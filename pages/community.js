import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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

export default function Community() {
  return (
    <>
      <Head>
        <title>Community — Bala Goseva &amp; Jandhyala Centers | Brahmana Seva Samiti</title>
        <meta
          name="description"
          content="Bala Goseva young contributors and the 46 Jandhyala Pournami Yagnopaveetham distribution centers across Guntur, Hyderabad and London."
        />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00' }} />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Bala Goseva &amp; Jandhyala Centers</h1>
          <div className="ornament-line mb-5" />
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
      <section id="bala-goseva" className="py-16 md:py-20 bg-cream-50 scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
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
                <div className="w-9 h-9 rounded-full bg-cream-100 flex items-center justify-center text-sm font-bold text-saffron-500 flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                  <p className="text-sm text-gray-400 truncate">{item.class}</p>
                </div>
                <span className="text-sm font-bold text-saffron-500 flex-shrink-0">₹{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jandhyala Pournami Distribution Centers */}
      <section id="jandhyala-centers" className="py-16 md:py-20 bg-white scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center text-3xl md:text-4xl">
              Jandhyala Pournami Distribution Centers
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Free Yagnopaveethams are distributed annually through <strong className="text-saffron-500">46 centers</strong>
              {' '}across Guntur, abroad, and other parts of the country. Pick up your sacred thread
              from the center nearest to you before Jandhyala Pournami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {jandhyalaCenters.map((center) => (
              <div key={center.id} className="card p-4 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-sm font-bold text-saffron-600 flex-shrink-0 mt-0.5">
                    {center.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-800 leading-snug mb-1">{center.location}</p>
                    <p className="text-sm text-gray-500 mb-1.5">{center.contact}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {center.phone && (
                        <a href={`tel:${center.phone}`} className="inline-flex items-center gap-1 text-sm text-saffron-500 hover:text-saffron-600">
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
            <p className="text-sm text-gray-400">
              For bulk distribution or queries, contact the Secretary at <a href="tel:7893961234" className="text-saffron-500 font-medium">78939 61234</a>
            </p>
          </div>
        </div>
      </section>

      {/* Back to About CTA */}
      <section className="py-14 md:py-16 bg-gradient-to-br from-saffron-600 via-saffron-700 to-gray-900 text-white overflow-hidden">
        <div className="page-container text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-black mb-4">Want to Contribute?</h2>
          <div className="ornament-line mb-5" />
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Pick up a Cow Kiddy Bank for your child, or volunteer as a distribution
            center for Jandhyala Pournami next year.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="px-7 py-3 bg-white text-saffron-700 font-semibold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-xl text-sm hover:-translate-y-0.5">
              Contact Us
            </Link>
            <Link href="/about" className="px-7 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-sm">
              Back to About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
