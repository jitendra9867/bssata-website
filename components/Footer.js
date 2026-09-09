import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About & History' },
  { href: '/committee', label: 'Executive Committee' },
  { href: '/members', label: 'Life Members' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact & Donations' },
  { href: '/calendar', label: 'Sampradaya Calendar' },
];

const welfareLinks = [
  { href: '/schemes', label: 'Welfare Schemes' },
  { href: '/about#welfare', label: 'Welfare Activities' },
  { href: '/gallery', label: 'Event Photos' },
  { href: '/members', label: 'Member Directory' },
  { href: '/contact', label: 'Bank & Donate' },
];

function SectionHeading({ children }) {
  return (
    <h4 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400 mb-5">
      <span className="w-4 h-px bg-gold-400/60" />
      {children}
    </h4>
  );
}

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm text-cream-100/70 hover:text-white transition-colors duration-200"
    >
      <svg
        className="w-3 h-3 text-gold-400/60 group-hover:text-gold-300 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
      {label}
    </Link>
  );
}

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z' },
  { label: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'YouTube', href: '#', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'WhatsApp', href: '#', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#2b6a00] text-cream-100 overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft golden glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-48 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      <div className="relative boxed-footer-container pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-[2.5px] shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                    <Image
                      src="/images/newlogo.png"
                      alt="Brahmana Seva Samiti Logo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base leading-tight text-white">
                  Brahmana Seva Sangham
                </h3>
                <p className="text-[10px] text-gold-400/90 uppercase tracking-[0.18em] mt-1 font-semibold">
                  Regd No: 48/97 • Guntur
                </p>
              </div>
            </div>

            <p className="text-sm text-cream-100/70 leading-relaxed mb-5 max-w-xs">
              Committed to Brahmana Dharma, community service, and cultural preservation since 1994.
            </p>

            <div className="flex items-center gap-2.5 mb-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-cream-100/50 font-semibold">
                Follow us
              </p>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 text-cream-100 flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 hover:text-[#2b6a00] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact#donate"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-bold text-white bg-[#D60C0C] hover:bg-[#C20B0B] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Donate Now
              </Link>
              <Link
                href="/members#enrollment"
                className="inline-flex items-center px-5 py-2 rounded-full text-[13px] font-bold text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/70 hover:-translate-y-0.5 transition-all duration-300"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <SectionHeading>Quick Links</SectionHeading>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <SectionHeading>Programs</SectionHeading>
            <div className="space-y-2.5">
              {welfareLinks.map((link) => (
                <FooterLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
            <div className="mt-6 p-3.5 rounded-xl bg-white/[0.06] border border-gold-400/20">
              <p className="flex items-center gap-1.5 text-[10px] text-gold-400 uppercase tracking-wider mb-1 font-bold">
                <span>✦</span> 12A Tax Exempt
              </p>
              <p className="text-xs text-cream-100/70">Valid FY 2025-26 to 2030-31</p>
            </div>
          </div>

          {/* Contact & Bank */}
          <div className="lg:col-span-3">
            <SectionHeading>Contact & Bank</SectionHeading>
            <div className="space-y-3 text-sm text-cream-100/70">
              <p className="flex items-start gap-2.5">
                <span className="text-gold-400/80 mt-0.5">📍</span>
                A.T. Agraharam, Guntur – 522 004
              </p>
              <p className="flex items-start gap-2.5">
                <span className="text-gold-400/80 mt-0.5">✉️</span>
                <a
                  href="mailto:brahmanaseva.ata97@gmail.com"
                  className="hover:text-gold-300 transition-colors break-all"
                >
                  brahmanaseva.ata97@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="p-3 rounded-lg bg-white/[0.06] border border-white/10 hover:border-gold-400/40 transition-colors duration-300">
                <p className="text-[10px] text-gold-400/80 uppercase tracking-wider mb-1 font-semibold">
                  Union Bank
                </p>
                <p className="text-xs font-mono text-white tracking-wide">156910100019148</p>
                <p className="text-[10px] text-cream-100/50 font-mono mt-0.5">IFSC: UBIN0815691</p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.06] border border-white/10 hover:border-gold-400/40 transition-colors duration-300">
                <p className="text-[10px] text-gold-400/80 uppercase tracking-wider mb-1 font-semibold">
                  State Bank of India
                </p>
                <p className="text-xs font-mono text-white tracking-wide">52112775646</p>
                <p className="text-[10px] text-cream-100/50 font-mono mt-0.5">IFSC: SBIN0020715</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="boxed-footer-container py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-100/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Brahmana Seva Samiti · Regd No: 48/97. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream-100/60">
            <span>Guntur, Andhra Pradesh</span>
            <span className="w-1 h-1 rounded-full bg-gold-400/50" />
            <span>Est. 1994</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 hover:border-gold-400/50 hover:bg-gold-400/10 text-gold-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
