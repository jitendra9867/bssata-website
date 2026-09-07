import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    href: '/calendar', 
    label: 'Calendar',
    children: [
      { href: '/calendar', label: 'Sampradaya Calendar' },
      { href: '/calendar#download', label: 'Download' },
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
];

const socialLinks = [
  { 
    name: 'Facebook', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  { 
    name: 'YouTube', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  { 
    name: 'WhatsApp', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
];

const marqueeItems = [
  { icon: '✦', text: 'Community Service Since 1994' },
  { icon: '◆', text: 'Committed to Brahmana Dharma' },
  { icon: '✦', text: 'Cultural Preservation & Welfare' },
  { icon: '◆', text: '760+ Life Members Strong' },
  { icon: '✦', text: 'www.bssata.org' },
];

/* Wavy Sun SVG icon matching the screenshot style */
function SunIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* Center circle */}
      <circle cx="12" cy="12" r="4.5" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5"/>
      {/* Wavy flame-like rays */}
      <g fill="#FF8C00">
        {/* Top ray - curves right */}
        <path d="M12 1 C12.8 2.5, 13.5 3.5, 12 7.5 C10.5 3.5, 11.2 2.5, 12 1Z" />
        {/* Top-right ray - curves clockwise */}
        <path d="M16.5 2.5 C15.5 4, 14.8 5, 12.5 7 C14.5 5, 15.5 4, 16.5 2.5Z" />
        {/* Right ray - curves down */}
        <path d="M23 12 C21.5 12.8, 20.5 13.5, 16.5 12 C20.5 10.5, 21.5 11.2, 23 12Z" />
        {/* Bottom-right ray - curves clockwise */}
        <path d="M21.5 16.5 C20 15.5, 19 14.8, 17 12.5 C19 14.5, 20 15.5, 21.5 16.5Z" />
        {/* Bottom ray - curves left */}
        <path d="M12 23 C11.2 21.5, 10.5 20.5, 12 16.5 C13.5 20.5, 12.8 21.5, 12 23Z" />
        {/* Bottom-left ray - curves counter-clockwise */}
        <path d="M7.5 21.5 C8.5 20, 9.2 19, 11.5 17 C9.5 19, 8.5 20, 7.5 21.5Z" />
        {/* Left ray - curves up */}
        <path d="M1 12 C2.5 11.2, 3.5 10.5, 7.5 12 C3.5 13.5, 2.5 12.8, 1 12Z" />
        {/* Top-left ray - curves counter-clockwise */}
        <path d="M2.5 7.5 C4 8.5, 5 9.2, 7 11.5 C5 9.5, 4 8.5, 2.5 7.5Z" />
      </g>
    </svg>
  );
}

function DropdownMenu({ children, isOpen }) {
  return (
    <div className={`absolute top-full left-0 pt-2 transition-all duration-200 z-50 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
      <div className="bg-white rounded-xl shadow-xl border border-cream-200/60 py-2 min-w-[200px] overflow-hidden">
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

  return (
    <header className="boxed-header">
      {/* Marquee notice bar */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white py-1.5 px-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-6 text-[11px] font-medium tracking-wide">
                <span className="text-blue-200 text-[8px]">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Top bar: Logo left, Buttons right */}
      <div className="bg-white border-b border-gray-200">
        <div className="boxed-nav-container">
          <div className="flex items-center justify-between py-3 md:py-4">
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
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 font-serif tracking-wide leading-tight">
                  Brahmana Seva Samiti
                </h1>
                <p className="text-[11px] md:text-xs text-gray-500 font-semibold tracking-wider uppercase mt-0.5">
                  Regd No: 48/97 • Guntur
                </p>
              </div>
            </Link>

            {/* Buttons right */}
            <div className="hidden md:flex items-center gap-3">
              <Link 
                href="/calendar" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold text-white bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-700 hover:to-saffron-800 transition-all duration-300 shadow-[0_4px_14px_rgba(195,74,44,0.35)] hover:shadow-[0_6px_20px_rgba(195,74,44,0.45)] hover:-translate-y-0.5"
              >
                <SunIcon className="w-4 h-4" />
                Sampradaya Calendar
              </Link>
              <Link 
                href="/register" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* User/Registration icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <line x1="19" y1="8" x2="19" y2="14"/>
                  <line x1="22" y1="11" x2="16" y2="11"/>
                </svg>
                Registration
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors z-10"
              aria-label="Toggle navigation"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar: Orange gradient with white text */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 shadow-md">
        <div className="boxed-nav-container">
          <nav className="hidden lg:flex items-center justify-between">
            {/* Nav links */}
            <div className="flex items-center gap-0.5" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div 
                  key={link.href} 
                  className="relative"
                  onMouseEnter={() => link.children.length > 0 && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 xl:px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 flex items-center gap-1 ${
                      openDropdown === link.label 
                        ? 'text-white bg-white/20' 
                        : 'text-white/90 hover:text-white hover:bg-white/15'
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
                  </Link>
                  
                  {link.children.length > 0 && (
                    <DropdownMenu isOpen={openDropdown === link.label}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/50 transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </DropdownMenu>
                  )}
                </div>
              ))}
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-cream-200/60 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="boxed-nav-container py-3 space-y-0.5">
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
            
            {/* Mobile buttons */}
            <div className="pt-3 px-4 space-y-2">
              <Link
                href="/calendar"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-700 hover:to-saffron-800 transition-all duration-300 shadow-[0_4px_14px_rgba(195,74,44,0.35)]"
              >
                <SunIcon className="w-5 h-5" />
                Sampradaya Calendar
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <line x1="19" y1="8" x2="19" y2="14"/>
                  <line x1="22" y1="11" x2="16" y2="11"/>
                </svg>
                Registration
              </Link>
            </div>

            {/* Mobile social icons */}
            <div className="flex items-center justify-center gap-3 pt-4 pb-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-gray-100 text-gray-500 hover:text-white hover:bg-amber-500 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
