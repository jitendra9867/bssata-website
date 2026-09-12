import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PROGRAMS } from './ProgramPage';

const CONTACT_PHONE = '7893961234';
const CONTACT_PHONE_DISPLAY = '78939 61234';
const WHATSAPP_URL = `https://wa.me/91${CONTACT_PHONE}`;

const navLinks = [
  { 
    href: '/', 
    label: 'Home',
    children: []
  },
  { 
    href: '/about', 
    label: 'About Us',
    children: [
      { href: '/about#history', label: 'Our History' },
      { href: '/about#welfare', label: 'Welfare Activities' },
      { href: '/about#visista', label: 'Visista Vyakthulu' },
      { href: '/about#datalu', label: 'Visista Datalu' },
      { href: '/community#bala-goseva', label: 'Bala Goseva Donors' },
      { href: '/community#jandhyala-centers', label: 'Jandhyala Centers' },
    ]
  },
  { 
    href: '/programs', 
    label: 'Programs',
    children: [
      { href: '/programs', label: 'All Programs' },
      ...PROGRAMS.map((p) => ({ href: `/programs/${p.slug}`, label: p.title })),
    ]
  },
  { 
    href: '/committee', 
    label: 'Committee',
    children: [
      { href: '/committee#executive', label: 'Executive Committee' },
      { href: '/committee#members', label: 'Committee Members' },
      { href: '/committee#advisors', label: 'Advisors' },
      { href: '/committee#uk', label: 'UK Coordinators' },
    ]
  },
  { 
    href: '/members', 
    label: 'Life Members',
    children: [
      { href: '/members', label: 'Member Directory' },
      { href: '/members#enrollment', label: 'Enrollment' },
    ]
  },
  { 
    href: '/gallery', 
    label: 'Gallery',
    children: [
      { href: '/gallery#events', label: 'Event Photos' },
      { href: '/gallery#celebrations', label: 'Celebrations' },
    ]
  },
  { 
    href: '/contact', 
    label: 'Contact',
    children: [
      { href: '/contact#bank', label: 'Bank Details' },
      { href: '/contact#donate', label: 'Donate' },
    ]
  },
  { 
    href: '/schemes', 
    label: 'Schemes',
    children: [
      { href: '/schemes#scholarships', label: 'Scholarships' },
      { href: '/schemes#welfare', label: 'Welfare Schemes' },
    ]
  },
  { 
    href: '/community', 
    label: 'Community',
    children: [
      { href: '/community#bala-goseva', label: 'Bala Goseva Donors' },
      { href: '/community#jandhyala-centers', label: 'Jandhyala Centers' },
    ]
  },
];

/* Sun icon — solid yellow center with orange rays */
function SunIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center circle */}
      <circle cx="12" cy="12" r="4.5" fill="#FFD700" stroke="#FFA500" strokeWidth="1" />
      {/* Rays — 4 main + 4 diagonal */}
      <g stroke="#FF8C00" strokeWidth="2.2" strokeLinecap="round">
        <line x1="12" y1="1.8" x2="12" y2="4.6" />
        <line x1="12" y1="19.4" x2="12" y2="22.2" />
        <line x1="1.8" y1="12" x2="4.6" y2="12" />
        <line x1="19.4" y1="12" x2="22.2" y2="12" />
        <line x1="4.7" y1="4.7" x2="6.8" y2="6.8" />
        <line x1="17.2" y1="17.2" x2="19.3" y2="19.3" />
        <line x1="19.3" y1="4.7" x2="17.2" y2="6.8" />
        <line x1="6.8" y1="17.2" x2="4.7" y2="19.3" />
      </g>
    </svg>
  );
}

function DropdownMenu({ children, isOpen, alignRight = false }) {
  return (
    <div className={`absolute top-full pt-2 transition-all duration-200 z-50 ${alignRight ? 'right-0' : 'left-0'} ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
      <div className="bg-white rounded-xl shadow-xl border border-cream-200/60 py-2 min-w-[230px] max-h-[70vh] overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (href) => {
    const base = href.split('#')[0];
    if (base === '/') return router.pathname === '/';
    return router.pathname === base || router.pathname.startsWith(`${base}/`);
  };

  return (
    <>
    {/* Logo/top bar — sticks on mobile (holds the hamburger), scrolls away on desktop */}
    <header className="sticky top-0 z-50 lg:static">
      {/* ─── Top row: Logo left + Calendar button right ─── */}
      <div className={`bg-[#8B2500] transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="boxed-nav-container">
          <div className="flex items-center justify-between gap-4 py-2.5">
            {/* Logo left */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 flex-shrink-0">
                {/* Golden ring border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-[3px] shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                    <Image
                      src="/images/newlogo.png"
                      alt="Brahmana Seva Samiti Logo"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-lg lg:text-xl 2xl:text-[22px] font-bold text-white font-banner tracking-wide leading-tight uppercase">
                  Brahmana Seva Sangham
                </h1>
                <p className="text-sm md:text-sm text-gold-400 font-semibold tracking-wider uppercase mt-0.5">
                  Regd No: 48/97 • Guntur
                </p>
              </div>
            </Link>

            {/* Donate + Calendar buttons + mobile toggle */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-sm font-bold text-[#3a0f04] bg-gradient-to-r from-gold-400 to-amber-500 hover:from-yellow-300 hover:to-gold-400 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Donate Now
              </Link>

              <a
                href="/images/calendars/cal%202026.pdf"
                download
                className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#D60C0C] hover:bg-[#C20B0B] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <SunIcon className="w-4 h-4" />
                Sampradaya Calendar
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors z-10"
                aria-label="Toggle navigation"
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-[7px]' : ''}`} />
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

    </header>

    {/* ─── Desktop navigation bar — sticky on its own, logo block scrolls away ─── */}
    <div className="hidden lg:block sticky top-0 z-50 bg-[#6E1D00] border-t border-white/10 shadow-md">
        <div className="boxed-nav-container">
          <div className="flex items-center justify-between gap-4">
          <nav className="flex items-center flex-wrap gap-1" ref={dropdownRef}>
            {navLinks.map((link, idx) => {
              const active = isActive(link.href);
              /* Menus near the right edge open leftwards, so hidden dropdowns can't
                 stick out past the viewport and create a horizontal scrollbar */
              const alignRight = idx >= navLinks.length - 3;
              return (
                <div 
                  key={link.href} 
                  className="relative"
                  onMouseEnter={() => link.children.length > 0 && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`relative px-2 xl:px-3.5 py-2.5 rounded-lg text-sm xl:text-base font-normal transition-all duration-200 flex items-center gap-1 ${
                      openDropdown === link.label
                        ? 'text-white bg-white/20'
                        : active
                        ? 'text-gold-300'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {link.children.length > 0 && (
                      <svg 
                        className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gold-400" />
                    )}
                  </Link>
                  
                  {link.children.length > 0 && (
                    <DropdownMenu isOpen={openDropdown === link.label} alignRight={alignRight}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2.5 text-[15px] font-normal transition-all duration-200 ${
                            child.label === 'All Programs'
                              ? 'font-semibold text-saffron-600 hover:bg-saffron-50'
                              : 'text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </DropdownMenu>
                  )}
                </div>
              );
            })}
          </nav>

            {/* Phone + WhatsApp — right side of the navigation bar */}
            <div className="flex items-center gap-2 flex-shrink-0 pl-3 border-l border-white/15">
              <a
                href={`tel:+91${CONTACT_PHONE}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors duration-200 whitespace-nowrap"
              >
                <svg className="w-4 h-4 text-gold-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#1ebe5a] hover:scale-105 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden sticky top-[84px] md:top-[100px] z-40 overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-cream-200/60 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="boxed-nav-container py-3 space-y-0.5">
            {/* Calendar + Donate buttons - at top of mobile menu */}
            <div className="pt-3 px-4 flex flex-col gap-2">
              <a
                href="/images/calendars/cal%202026.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-white bg-[#D60C0C] hover:bg-[#C20B0B] transition-all duration-300 shadow-lg"
              >
                <SunIcon className="w-5 h-5" />
                Sampradaya Calendar
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-[#3a0f04] bg-gradient-to-r from-gold-400 to-amber-500 hover:from-yellow-300 hover:to-gold-400 transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Donate Now
              </Link>

            </div>

            {/* Call + WhatsApp quick actions */}
            <div className="pt-2 px-4 flex items-center gap-2">
              <a
                href={`tel:+91${CONTACT_PHONE}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-white bg-saffron-600 hover:bg-saffron-700 transition-all duration-300 shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-bold text-white bg-[#25D366] hover:bg-[#1ebe5a] transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl text-base font-normal text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/70 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {link.label}
                  </Link>
                  {link.children.length > 0 && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {link.children.length > 0 && mobileExpanded === link.label && (
                  <div className="ml-8 space-y-0.5 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-[15px] font-normal text-gray-500 hover:text-saffron-600 hover:bg-saffron-50/50 transition-all duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
