import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/committee', label: 'Committee' },
  { href: '/members', label: 'Life Members' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const marqueeItems = [
  { icon: '✦', text: 'Community Service Since 1994' },
  { icon: '◆', text: 'Committed to Brahmana Dharma' },
  { icon: '✦', text: 'Cultural Preservation & Welfare' },
  { icon: '◆', text: '760+ Life Members Strong' },
  { icon: '✦', text: 'www.bssata.org' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      {/* Marquee notice bar */}
      <div className="bg-gradient-to-r from-saffron-600 via-saffron-500 to-saffron-600 text-white py-1.5 px-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-6 text-[11px] font-medium tracking-wide">
                <span className="text-gold-300 text-[8px]">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-cream-200/60">
        <div className="page-container">
          <nav className="flex items-center justify-between h-16 md:h-[68px]">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 md:w-12 md:h-12 flex-shrink-0 rounded-xl overflow-hidden shadow-md ring-2 ring-saffron-100 group-hover:ring-saffron-300 transition-all duration-300">
                <Image
                  src="/images/logo.jpeg"
                  alt="Brahmana Seva Samiti Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-[15px] md:text-lg font-bold text-saffron-600 font-serif tracking-wide leading-tight">
                  Brahmana Seva Samiti
                </div>
                <div className="text-[10px] md:text-[11px] text-gray-400 font-medium tracking-wider uppercase">
                  Regd No: 48/97 &bull; Guntur
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 xl:px-4 py-2 rounded-lg text-[14px] font-medium text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/70 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-px h-5 bg-cream-300 mx-2" />
              <Link href="/calendar" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold text-white bg-saffron-600 hover:bg-saffron-700 transition-all duration-300 shadow-[0_2px_10px_rgba(195,74,44,0.25)] hover:shadow-[0_4px_16px_rgba(195,74,44,0.35)] hover:-translate-y-0.5">
                📅 Sampradaya Calendar
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-cream-100 transition-colors"
              aria-label="Toggle navigation"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`block h-0.5 bg-saffron-600 rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-saffron-600 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-0.5 bg-saffron-600 rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-[7px]' : ''}`} />
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-cream-200/60 shadow-xl">
          <div className="page-container py-3 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/70 font-medium transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-300 flex-shrink-0" />
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/calendar"
                onClick={() => setMobileOpen(false)}
                className="block btn-secondary text-center text-sm !rounded-xl"
              >
                📅 Sampradaya Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
