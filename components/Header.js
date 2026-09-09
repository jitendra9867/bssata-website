import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PROGRAMS } from './ProgramPage';

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
      { href: '/about#timeline', label: 'Timeline' },
      { href: '/about#visista', label: 'Visista Vyakthulu' },
      { href: '/about#datalu', label: 'Visista Datalu' },
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
    href: '/programs', 
    label: 'Programs',
    children: [
      { href: '/programs', label: 'All Programs' },
      ...PROGRAMS.map((p) => ({ href: `/programs/${p.slug}`, label: p.title })),
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

function DropdownMenu({ children, isOpen }) {
  return (
    <div className={`absolute top-full left-0 pt-2 transition-all duration-200 z-50 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
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
    <header className="boxed-header">
      {/* ─── Top row: Logo left + Calendar button right ─── */}
      <div className={`bg-[#8B2500] transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="boxed-nav-container">
          <div className="flex items-center justify-between gap-4 py-2.5">
            {/* Logo left */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                {/* Golden ring border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-[3px] shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                    <Image
                      src="/images/newlogo.png"
                      alt="Brahmana Seva Samiti Logo"
                      width={60}
                      height={60}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-xl md:text-[20px] font-bold text-white font-serif tracking-wide leading-tight uppercase">
                  Brahmana Seva Sangham
                </h1>
                <p className="text-[11px] md:text-xs text-gold-400 font-semibold tracking-wider uppercase mt-0.5">
                  Regd No: 48/97 • Guntur
                </p>
              </div>
            </Link>

            {/* Calendar button + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="/images/calendars/cal%202026.pdf"
                download
                className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-[13px] font-bold text-white bg-[#D60C0C] hover:bg-[#C20B0B] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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

      {/* ─── Bottom row: Navigation (desktop) ─── */}
      <div className="hidden lg:block bg-[#6E1D00] border-t border-white/10 shadow-md">
        <div className="boxed-nav-container">
          <nav className="flex items-center justify-center flex-wrap gap-0.5" ref={dropdownRef}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div 
                  key={link.href} 
                  className="relative"
                  onMouseEnter={() => link.children.length > 0 && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 xl:px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
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
                    <DropdownMenu isOpen={openDropdown === link.label}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
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
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-cream-200/60 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="boxed-nav-container py-3 space-y-0.5">
            {/* Calendar button - moved to bottom of mobile menu */}
            <div className="pt-3 px-4">
              <a
                href="/images/calendars/cal%202026.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-white bg-[#D60C0C] hover:bg-[#C20B0B] transition-all duration-300 shadow-lg"
              >
                <SunIcon className="w-5 h-5" />
                Sampradaya Calendar
              </a>
            </div>

            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/70 font-medium transition-all duration-200"
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
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-saffron-600 hover:bg-saffron-50/50 font-medium transition-all duration-200"
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
    </header>
  );
}
