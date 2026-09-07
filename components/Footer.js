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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-700 via-green-700 to-green-800 text-white">
      {/* Decorative top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

      <div className="boxed-footer-container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl overflow-hidden ring-2 ring-green-400/30 shadow-lg">
                <Image src="/images/newlogo.png" alt="BSS" width={44} height={44} className="object-contain w-full h-full" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[15px] leading-tight">Brahmana Seva Samiti</h3>
                <p className="text-[10px] text-green-200/70 uppercase tracking-widest mt-0.5">Regd No: 48/97</p>
              </div>
            </div>
            <p className="text-sm text-green-100/70 leading-relaxed mb-5">
              Committed to Brahmana Dharma, community service, and cultural preservation since 1994.
            </p>              <div className="flex items-center gap-2">
              <span className="text-green-300 text-lg">🙏</span>
              <span className="text-xs text-green-300/70 italic font-serif">वसुधैव कुटुम्बकम्</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-green-200 mb-5">Quick Links</h4>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-green-100/70 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-1 h-1 rounded-full bg-green-600 group-hover:bg-green-300 transition-colors duration-200 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-green-200 mb-5">Programs</h4>
            <div className="space-y-2.5">
              {welfareLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-green-100/70 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-1 h-1 rounded-full bg-green-600 group-hover:bg-green-300 transition-colors duration-200 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 p-3 rounded-xl bg-white/10 border border-green-600/20">
              <p className="text-[10px] text-green-300/70 uppercase tracking-wider mb-1">12A Tax Exempt</p>
              <p className="text-xs text-green-100/70">Valid FY 2025-26 to 2030-31</p>
            </div>
          </div>

          {/* Contact & Bank */}
          <div>              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-green-200 mb-5">Contact & Bank</h4>
            <div className="space-y-3 text-sm text-green-100/70">
              <p className="flex items-start gap-2">
                <span className="text-green-200/60 mt-0.5">📍</span>
                A.T. Agraharam, Guntur – 522 004
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-200/60 mt-0.5">✉️</span>
                <a href="mailto:brahmanaseva.ata97@gmail.com" className="hover:text-green-200 transition-colors break-all">
                  brahmanaseva.ata97@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="p-2.5 rounded-lg bg-white/10 border border-green-600/20">
                <p className="text-[10px] text-green-300/70 uppercase tracking-wider mb-1">Union Bank</p>
                <p className="text-xs font-mono text-white">156910100019148</p>
                <p className="text-[10px] text-green-300/70 font-mono">IFSC: UBIN0815691</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/10 border border-green-600/20">
                <p className="text-[10px] text-green-300/70 uppercase tracking-wider mb-1">State Bank of India</p>
                <p className="text-xs font-mono text-white">52112775646</p>
                <p className="text-[10px] text-green-300/70 font-mono">IFSC: SBIN0020715</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-600/30">
        <div className="boxed-footer-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-green-200/70">
            &copy; {new Date().getFullYear()} Brahmana Seva Samiti. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-green-200/70">
            <span>Guntur, Andhra Pradesh</span>
            <span className="w-1 h-1 rounded-full bg-green-500/50" />
            <span>Est. 1994</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
