import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact & Donations — Brahmana Seva Samiti</title>
        <meta name="description" content="Contact Brahmana Seva Samiti, Guntur. Bank details for donations, address, and get in touch with our team." />
      </Head>

      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-background.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.25 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8a53a]/85 via-[#c47a1a]/75 to-[#8a4a10]/90" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Contact & Donations</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Your generous contributions help us serve the community better. All donations are eligible for tax exemption under Section 12A.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream-50">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

            {/* Bank Details */}
            <div className="space-y-6">
              <div className="card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-saffron-50 flex items-center justify-center text-xl">🏦</div>
                  <h2 className="text-xl font-serif font-bold text-gray-800">Bank Details</h2>
                </div>

                {/* Account 1 */}
                <div className="p-4 bg-cream-50 rounded-lg border border-cream-200 mb-4">
                  <p className="text-sm font-bold text-saffron-500 uppercase tracking-wider mb-2">Union Bank of India</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p><span className="text-gray-500">A/C No:</span> <strong>156910100019148</strong></p>
                    <p><span className="text-gray-500">IFSC:</span> <strong>UBIN0815691</strong></p>
                    <p><span className="text-gray-500">Branch:</span> A.T. Agraharam, Guntur – 522004</p>
                  </div>
                </div>

                {/* Account 2 */}
                <div className="p-4 bg-cream-50 rounded-lg border border-cream-200">
                  <p className="text-sm font-bold text-saffron-500 uppercase tracking-wider mb-2">State Bank of India</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p><span className="text-gray-500">A/C No:</span> <strong>52112775646</strong></p>
                    <p><span className="text-gray-500">IFSC:</span> <strong>SBIN0020715</strong></p>
                    <p><span className="text-gray-500">Branch:</span> A.T. Agraharam, Guntur – 522004</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-4 text-center">
                  Account Name: BRAHMANA SEVA SANGHAM, A.T. Agraharam, Guntur
                </p>
              </div>

              {/* Tax Exemption */}
              <div className="card p-6 bg-gradient-to-br from-cream-50 to-saffron-50 border-saffron-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✅</span>
                  <h3 className="font-serif font-bold text-gray-800">Tax Exemption</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  BSS has been granted <strong>12A exemption</strong> by the Income Tax Department, valid from
                  FY 2025-26 to 2030-31. All donations to BSS are eligible for tax benefits.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Registered on <strong>Darpan Portal</strong> (RBI compliance) — verified and up to date.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-saffron-50 flex items-center justify-center text-xl">📍</div>
                  <h2 className="text-xl font-serif font-bold text-gray-800">Reach Us</h2>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center text-lg flex-shrink-0">🏛️</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Office Address</p>
                      <p className="text-sm text-gray-600">
                        Door No. 26-32-35, 6th Line,<br />
                        Ananda Theertha Agraharam,<br />
                        Guntur – 522 004, Andhra Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center text-lg flex-shrink-0">🏗️</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Arama Kshetram (Office & Operations)</p>
                      <p className="text-sm text-gray-600">
                        Near Visalakshi Cold Storage,<br />
                        Guntur – Chilakaluripet Highway,<br />
                        Guntur – 522 004
                      </p>
                      <p className="text-sm text-saffron-500 mt-1">ℹ️ Office shifted here from Aug 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center text-lg flex-shrink-0">✉️</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Email</p>
                      <a href="mailto:brahmanaseva.ata97@gmail.com" className="text-sm text-saffron-500 hover:text-saffron-600">
                        brahmanaseva.ata97@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center text-lg flex-shrink-0">🌐</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Website</p>
                      <a href="https://www.bssata.org" target="_blank" rel="noopener noreferrer" className="text-sm text-saffron-500 hover:text-saffron-600">
                        www.bssata.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secretary Contact */}
              <div className="card p-6 bg-cream-50 border-cream-300">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">Secretary</p>
                <p className="font-serif font-bold text-gray-800">Sri Pamidighantam Venkata Satyanarayana</p>
                <a href="tel:7893961234" className="text-sm text-saffron-500 hover:text-saffron-600">📞 78939 61234</a>
              </div>

              {/* Auditor */}
              <div className="card p-6 bg-cream-50 border-cream-300">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">Auditor</p>
                <p className="font-serif font-bold text-gray-800">Ketharaju Subba Rao & Co.</p>
                <p className="text-sm text-gray-600">2/12, Brodipet, Guntur</p>
                <p className="text-sm text-gray-500">Rep. by Ketharaju Subhash — 7702700117</p>
              </div>
            </div>
          </div>

          {/* Membership CTA */}
          <div className="mt-12 max-w-3xl mx-auto text-center card p-8 md:p-12 bg-gradient-to-br from-saffron-500 to-saffron-600 text-white border-0">
            <div className="text-4xl mb-4">👤</div>
            <h2 className="text-xl md:text-2xl font-serif font-bold mb-3">Become a Life Member</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Contribute ₹10,000 or above to receive permanent life membership with access to all welfare schemes and community programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:brahmanaseva.ata97@gmail.com?subject=Life%20Membership%20Enquiry" className="px-8 py-3.5 bg-white text-saffron-600 font-semibold rounded-lg hover:bg-cream-100 transition-all shadow-lg text-center">
                ✉ Enquire About Membership
              </a>
              <Link href="/members" className="px-8 py-3.5 border-2 border-gold-400 text-gold-300 font-semibold rounded-lg hover:bg-white/10 transition-all text-center">
                View Members Directory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
