import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getCtaForPath } from './footerCtaConfig';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About & History' },
  { href: '/about#visista', label: 'Visista Datalu' },
  { href: '/committee', label: 'Executive Committee' },
  { href: '/members', label: 'Life Members' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/register', label: 'Registration' },
  { href: '/contact', label: 'Contact & Donations' },
];

const programLinks = [
  { href: '/schemes', label: 'Welfare Schemes' },
  { href: '/programs', label: 'Annual Programs' },
  { href: '/programs/sri-vidyanidhi', label: 'Sri Vidyanidhi Scholarships' },
  { href: '/programs/uchita-upanayanamulu', label: 'Free Upanayanams' },
  { href: '/programs/karthika-samaradhana', label: 'Karthika Samaradhana' },
  { href: '/programs/arama-kshetramu', label: 'Arama Kshetram' },
  { href: '/community#bala-goseva', label: 'Bala Goseva Donors' },
  { href: '/community#jandhyala-centers', label: 'Jandhyala Centers' },
  { href: '/calendar', label: 'Sampradaya Calendar' },
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z' },
  { label: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'YouTube', href: '#', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'WhatsApp', href: 'https://wa.me/917893961234', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
];

/* ═══════════════════════════════════════════════════════════════
   FOOTER CTA BAND — "Be Part of Our Legacy"
   Sits at the top of the footer with the same deep gold gradient
   as the homepage CTA. Content adapts to the current page
   (see footerCtaConfig.js) and the band is hidden on the homepage.
   ═══════════════════════════════════════════════════════════════ */
function FooterCtaBand() {
  const router = useRouter();
  const cta = getCtaForPath(router.pathname);
  if (!cta) return null;

  return (
    <div className="relative overflow-hidden text-white bg-gradient-to-br from-[#8a5f00] via-[#8b2500] to-[#6e1d00] border-b border-white/10">
      {/* Dot texture — same as homepage CTA */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '28px 28px' }}
      />
      {/* Golden glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative boxed-footer-container" style={{ paddingTop: '36px', paddingBottom: '36px' }}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left — heading + text */}
          <div className="max-w-xl">
            <p className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-gold-300 mb-2">
              <span className="w-5 h-0.5 bg-gradient-to-r from-gold-400 to-transparent rounded-full" />
              {cta.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-black mb-2.5">{cta.title}</h2>
            <p className="text-cream-100/75 leading-relaxed text-sm">{cta.text}</p>
          </div>

          {/* Right — action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <Link
              href={cta.primary.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#8a5f00] font-bold rounded-xl hover:bg-cream-100 transition-all duration-300 shadow-lg text-sm hover:-translate-y-0.5"
            >
              {cta.primary.label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href={cta.secondary.href}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300 text-sm text-center"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h4 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-gold-300 mb-5">
      <span className="w-5 h-0.5 bg-gradient-to-r from-gold-400 to-transparent rounded-full" />
      {children}
    </h4>
  );
}

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm text-cream-100/75 hover:text-white transition-colors duration-200"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-300 group-hover:scale-125 transition-all duration-200 flex-shrink-0" />
      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{label}</span>
    </Link>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-b from-[#2b6a00] via-[#256000] to-[#1b4a00] text-cream-100 overflow-hidden">
      {/* Gold top rule */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 z-10" />

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Golden glow */}
      <div className="absolute -top-24 left-1/4 w-[560px] h-56 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-gold-300/[0.07] blur-3xl pointer-events-none" />

      {/* Om watermark */}
      <span
        aria-hidden="true"
        className="absolute -bottom-20 -right-2 text-[260px] leading-none font-serif text-white/[0.05] select-none pointer-events-none"
      >
        ॐ
      </span>

      {/* Page-aware CTA band at the top of the footer — hidden on the homepage */}
      <FooterCtaBand />

      <div className="relative boxed-footer-container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="relative w-[100px] h-[100px] flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-[3px] shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                    <Image
                      src="/images/newlogo.png"
                      alt="Brahmana Seva Samiti Logo"
                      width={100}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-banner font-bold text-[22px] leading-tight text-white">
                  Brahmana Seva Sangham
                </h3>
                <p className="text-[12px] text-gold-300 uppercase tracking-[0.18em] mt-1 font-semibold">
                  Regd No: 48/97 • Guntur
                </p>
              </div>
            </div>

            <p className="text-sm text-cream-100/75 leading-relaxed mb-5 max-w-xs">
              Serving Brahmana Dharma through seva, education, and cultural
              preservation — proudly since 1994.
            </p>

            <p className="text-sm uppercase tracking-[0.18em] text-cream-100/50 font-semibold mb-3">
              Follow us
            </p>
            <div className="flex items-center gap-2.5 mb-7">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 text-cream-100 flex items-center justify-center hover:bg-gradient-to-br hover:from-gold-400 hover:to-amber-500 hover:border-gold-300 hover:text-[#1b4a00] hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact#donate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#D60C0C] to-[#B30A0A] hover:from-[#C20B0B] hover:to-[#9C0808] shadow-lg shadow-red-900/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Donate Now
              </Link>
              <Link
                href="/members#enrollment"
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold text-white border-2 border-white/35 hover:bg-white/10 hover:border-gold-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <SectionHeading>Explore</SectionHeading>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <SectionHeading>Programs & Seva</SectionHeading>
            <div className="space-y-3">
              {programLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <SectionHeading>Reach Us</SectionHeading>
            <div className="space-y-3.5 text-sm text-cream-100/75">
              <p className="flex items-start gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0 text-gold-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="pt-1.5">A.T. Agraharam,<br />Guntur – 522 004, A.P.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0 text-gold-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+917893961234" className="pt-1.5 hover:text-gold-300 transition-colors font-semibold text-white">
                  +91 78939 61234
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0 text-gold-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a
                  href="mailto:brahmanaseva.ata97@gmail.com"
                  className="pt-1.5 hover:text-gold-300 transition-colors break-all"
                >
                  brahmanaseva.ata97@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-gold-400/15 to-transparent border border-gold-400/30">
              <p className="flex items-center gap-1.5 text-sm text-gold-300 uppercase tracking-wider mb-1 font-bold">
                <span>✦</span> 12A Tax Exempt
              </p>
              <p className="text-sm text-cream-100/70">Donations exempt u/s 12A · Valid FY 2025-26 to 2030-31</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bank details strip */}
      <div className="relative border-t border-white/10 bg-black/[0.12]">
        <div className="boxed-footer-container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-4">
              <h4 className="text-lg font-serif font-bold text-white mb-2 flex items-center gap-2.5">
                <span className="w-8 h-px bg-gold-400/70" />
                Bank Details
              </h4>
              <p className="text-sm text-cream-100/70 leading-relaxed">
                Every rupee goes directly to community seva — scholarships,
                Upanayanams, and Annadanam. Donate to either account below.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              <div className="group p-4 rounded-xl bg-white/[0.06] border border-white/10 hover:border-gold-400/50 hover:bg-white/[0.09] transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gold-300 uppercase tracking-wider font-bold">
                    Union Bank
                  </p>
                  <span className="w-8 h-8 rounded-lg bg-gold-400/15 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 18h16M6 18v-7m4 7v-7m4 7v-7m4 7v-7M12 3l9 6H3l9-6z" />
                    </svg>
                  </span>
                </div>
                <p className="text-base font-mono text-white tracking-wider">156910100019148</p>
                <p className="text-sm text-cream-100/60 font-mono mt-1">IFSC: UBIN0815691</p>
              </div>
              <div className="group p-4 rounded-xl bg-white/[0.06] border border-white/10 hover:border-gold-400/50 hover:bg-white/[0.09] transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gold-300 uppercase tracking-wider font-bold">
                    State Bank of India
                  </p>
                  <span className="w-8 h-8 rounded-lg bg-gold-400/15 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 18h16M6 18v-7m4 7v-7m4 7v-7m4 7v-7M12 3l9 6H3l9-6z" />
                    </svg>
                  </span>
                </div>
                <p className="text-base font-mono text-white tracking-wider">52112775646</p>
                <p className="text-sm text-cream-100/60 font-mono mt-1">IFSC: SBIN0020715</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black/[0.18]">
        <div className="boxed-footer-container flex flex-col sm:flex-row justify-between items-center gap-4" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
          <p className="text-sm text-cream-100/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Brahmana Seva Samiti · Regd No: 48/97. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-cream-100/60">
            <span>Est. 1994</span>
            <span className="w-1 h-1 rounded-full bg-gold-400/50" />
            <span>Guntur, Andhra Pradesh</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/15 hover:border-gold-300 hover:bg-gold-400/15 text-gold-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
