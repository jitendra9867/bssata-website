import Head from 'next/head';
import Image from 'next/image';
import { getSiteSettings } from '../lib/wordpress';
import { SITE_SETTINGS_FALLBACK, KEY_PEOPLE_FALLBACK } from '../lib/fallback-content';

/* UI copy for fixed contact channels (icons/labels) — address, email
   and website values come from WP siteSettings */
const CONTACT_CHANNEL_UI = [
  { icon: '🏛️', label: 'Office Address', field: 'address' },
  { icon: '🏗️', label: 'Arama Kshetram (Office & Operations)', field: 'officeAddress', note: 'ℹ️ Office shifted here from Aug 2025' },
  { icon: '✉️', label: 'Email', field: 'email', type: 'email' },
  { icon: '🌐', label: 'Website', field: 'website', type: 'url' },
];

export default function Contact({ settings, keyPeople }) {
  return (
    <>
      <Head>
        <title>Contact & Donations — Brahmana Seva Sangham</title>
        <meta name="description" content="Contact Brahmana Seva Sangham, Guntur. Bank details for donations, address, and get in touch with our team." />
      </Head>

      {/* Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Contact &amp; Donations</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/85 max-w-xl mx-auto leading-relaxed">
            Your generous contributions help us serve the community better. All donations are eligible for tax exemption under Section 12A.
          </p>

          {/* Hero chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { icon: '🏦', label: '2 Bank Accounts' },
              { icon: '✅', label: '12A Tax Exempt' },
              { icon: '📞', label: 'Secretary Available' },
            ].map((chip) => (
              <span key={chip.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm text-sm font-semibold text-white">
                <span>{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 1 — Reach Us (cream tint) ─── */}
      <section className="py-16 md:py-20 section-tint">
        <div className="page-container">
          <div className="text-center mb-12">
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">Reach Us</h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              Visit our office, write to us or call the Secretary — we are happy to help
              with memberships, schemes, rites coordination and donations.
            </p>
          </div>

          {/* Contact channel cards */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {CONTACT_CHANNEL_UI.map((channel) => {
              const value = settings[channel.field] || '';
              return (
                <div
                  key={channel.label}
                  className="bg-white rounded-2xl p-6 border border-cream-200 shadow-[0_2px_14px_rgba(195,74,44,0.06)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(195,74,44,0.12)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="icon-badge">{channel.icon}</span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-snug">{channel.label}</h3>
                      {channel.type === 'email' && (
                        <a href={`mailto:${value}`} className="text-saffron-600 hover:text-saffron-700 font-medium break-all">
                          {value}
                        </a>
                      )}
                      {channel.type === 'url' && (
                        <a href={value} target="_blank" rel="noopener noreferrer" className="text-saffron-600 hover:text-saffron-700 font-medium">
                          {value.replace(/^https?:\/\//, '')}
                        </a>
                      )}
                      {!channel.type && (
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{value}</p>
                      )}
                      {channel.note && (
                        <p className="text-sm text-saffron-700 mt-2 font-medium">{channel.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key people */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mt-8">
            {keyPeople.map((person) => (
              <div
                key={person.role}
                className="bg-white rounded-2xl p-6 border border-saffron-100 shadow-[0_2px_14px_rgba(195,74,44,0.06)] text-center"
              >
                <span className="icon-badge !mx-auto mb-3">{person.icon}</span>
                <p className="text-sm uppercase tracking-[0.18em] text-gray-500 font-bold mb-1.5">{person.role}</p>
                <p className="font-serif font-bold text-base text-gray-900 leading-snug">{person.name}</p>
                {person.sub && <p className="text-sm text-gray-600 mt-1">{person.sub}</p>}
                <a
                  href={`tel:${person.phone}`}
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 shadow-[0_6px_16px_rgba(195,74,44,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {person.phoneDisplay}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2 — Bank Details & Donations (photo background) ─── */}
      <section id="donate" className="py-16 md:py-20 section-photo border-y border-cream-200 scroll-mt-28 lg:scroll-mt-14">
        <div className="page-container">
          <div id="bank" className="text-center mb-12 scroll-mt-28 lg:scroll-mt-14">
            <span className="section-eyebrow">Support Our Seva</span>
            <h2 className="section-title text-center text-3xl md:text-4xl !text-gray-900">Donation Bank Accounts</h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-700 max-w-2xl mx-auto">
              Every rupee goes directly to community seva — scholarships, Upanayanams and Annadanam.
              Donate to either account below.
            </p>
          </div>

          {/* Bank account cards */}
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {settings.bankAccounts.map((account) => (
              <div key={account.bankName} className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-[0_2px_14px_rgba(195,74,44,0.08)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(195,74,44,0.14)] transition-all duration-300">
                <div className="h-1.5 bg-gradient-to-r from-saffron-400 via-gold-400 to-saffron-500" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="icon-badge">🏦</span>
                    <h3 className="text-base font-bold text-saffron-700 uppercase tracking-wide">{account.bankName}</h3>
                  </div>
                  <dl className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2.5 px-3.5 rounded-xl bg-cream-50 border border-cream-200">
                      <dt className="text-sm font-semibold text-gray-500">A/C No</dt>
                      <dd className="text-sm font-mono font-bold text-gray-900 tracking-wider break-all">{account.accountNumber}</dd>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2.5 px-3.5 rounded-xl bg-cream-50 border border-cream-200">
                      <dt className="text-sm font-semibold text-gray-500">IFSC</dt>
                      <dd className="text-sm font-mono font-bold text-gray-900 tracking-wider">{account.ifscCode}</dd>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2.5 px-3.5 rounded-xl bg-cream-50 border border-cream-200">
                      <dt className="text-sm font-semibold text-gray-500">Branch</dt>
                      <dd className="text-sm text-gray-800 text-right">{account.branch || 'A.T. Agraharam, Guntur – 522004'}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>

          {/* Account name note */}
          <div className="max-w-xl mx-auto mt-6 text-center">
            <p className="inline-block px-5 py-2.5 rounded-2xl bg-white border border-saffron-200 shadow-[0_2px_10px_rgba(195,74,44,0.06)] text-sm font-semibold text-gray-800">
              Account Name: <span className="text-saffron-700">BRAHMANA SEVA SANGHAM</span>, A.T. Agraharam, Guntur
            </p>
          </div>

          {/* Tax exemption callout */}
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl p-6 md:p-8 border border-saffron-200 shadow-[0_2px_16px_rgba(195,74,44,0.08)]">
            <div className="flex items-start gap-4">
              <span className="icon-badge">✅</span>
              <div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">12A Tax Exemption</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {settings.twelveACertificateText}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Registered on the <strong>Darpan Portal</strong> (RBI compliance) — verified and up to date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ISR: site settings (bank details, address, contacts, 12A text) from
   headless WP, refreshed every 60s. */
export async function getStaticProps() {
  const wpSettings = await getSiteSettings();
  return {
    props: {
      settings: wpSettings || SITE_SETTINGS_FALLBACK,
      keyPeople: KEY_PEOPLE_FALLBACK,
    },
    revalidate: 60,
  };
}
