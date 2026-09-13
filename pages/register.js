import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    address: '',
    gotram: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Registration — Brahmana Seva Samiti</title>
        <meta name="description" content="Register as a life member of Brahmana Seva Samiti. Join our community and support cultural preservation and welfare activities." />
      </Head>

      {/* Page Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.png" alt="" fill className="object-cover object-center" sizes="100vw" priority />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Registration</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Become a life member and join our mission to serve the community and preserve our rich cultural heritage.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-20 section-tint">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200/60">
                <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Life Membership Registration</h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-xl font-serif font-bold text-saffron-600 mb-2">Registration Successful!</h3>
                    <p className="text-gray-600 mb-6">Thank you for joining Brahmana Seva Samiti.</p>
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-600 text-white rounded-xl font-semibold hover:bg-saffron-700 transition-all">
                      Return Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                      <textarea
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all resize-none"
                        rows={3}
                        placeholder="Enter your address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gotram *</label>
                      <select
                        required
                        value={formData.gotram}
                        onChange={(e) => setFormData({...formData, gotram: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all bg-white"
                      >
                        <option value="">Select your Gotram</option>
                        <option value="PARASARA">PARASARA</option>
                        <option value="KOUNDINYASA">KOUNDINYASA</option>
                        <option value="KASYAPASA">KASYAPASA</option>
                        <option value="SYALAVATHASA">SYALAVATHASA</option>
                        <option value="LOHITHASA">LOHITHASA</option>
                        <option value="BHARGAVASA">BHARGAVASA</option>
                        <option value="KAPISA">KAPISA</option>
                        <option value="VADHULASA">VADHULASA</option>
                        <option value="KUSTASA">KUSTASA</option>
                        <option value="SANDILYASA">SANDILYASA</option>
                        <option value="SANKHYANASA">SANKHYANASA</option>
                        <option value="SRIVATSASA">SRIVATSASA</option>
                        <option value="GOWTHAMASA">GOWTHAMASA</option>
                        <option value="BARADWAJASA">BARADWAJASA</option>
                        <option value="KANVASA">KANVASA</option>
                        <option value="VASISTA">VASISTA</option>
                        <option value="SATAMARSHANA">SATAMARSHANA</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-saffron-600 to-saffron-700 text-white font-semibold rounded-xl hover:from-saffron-700 hover:to-saffron-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Submit Registration
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200/60">
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">💎</span>
                    Life Membership Benefits
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      Participate in all community events and celebrations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      Access to welfare schemes and scholarships
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      Free Yagnopaveetham on Jandhyala Pournami
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      Legal aid and support services
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      Sampradaya Calendar annually
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-saffron-50 to-cream-100 rounded-2xl p-6 border border-saffron-200">
                  <h3 className="text-lg font-serif font-bold text-saffron-800 mb-3">Membership Fee</h3>
                  <div className="text-4xl font-bold text-saffron-700 mb-2">₹10,000</div>
                  <p className="text-sm text-saffron-700">and above for life membership</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200/60">
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📞</span>
                    Need Help?
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    For any queries regarding registration, please contact:
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:7893961234" className="flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      78939 61234 (Secretary)
                    </a>
                    <a href="mailto:brahmanaseva.ata97@gmail.com" className="flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      brahmanaseva.ata97@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
