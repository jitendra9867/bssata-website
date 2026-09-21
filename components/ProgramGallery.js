import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════════
   PROGRAM GALLERY — per-program photo section with lightbox
   Pass `images`: [{ src, alt, year? }] and optional `title`.
   Clicking any photo opens a beautiful full-image popup with
   prev/next arrows, dot indicators, keyboard arrows, Esc to close,
   swipe support on touch devices, and body scroll lock.
   ═══════════════════════════════════════════════════════════════ */

function Lightbox({ images, index, onClose, onNavigate }) {
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);
  const current = images[index];

  const goPrev = useCallback(() => {
    setDirection(-1);
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    setDirection(1);
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  /* Keyboard controls + body scroll lock */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [goPrev, goNext, onClose]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
    >
      {/* Backdrop — deep warm blur */}
      <div className="absolute inset-0 bg-[#1c0d04]/95 backdrop-blur-md" />

      {/* ─── Main image ─── */}
      <div
        key={index}
        className="relative z-10 max-w-5xl w-full max-w-[calc(100vw-1.5rem)] md:max-w-[calc(100vw-7rem)] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) (dx < 0 ? goNext : goPrev)();
          touchStartX.current = null;
        }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)] ring-1 ring-gold-400/30 bg-[#241300]">
          <Image
            src={current.src}
            alt={current.alt}
            width={1400}
            height={933}
            className="w-full max-h-[76vh] object-contain"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        </div>

        {/* Caption bar under the image — year pill shown separately on phones so the caption never wraps awkwardly */}
        {(current.alt || current.year) && (
          <div className="mt-3 text-center px-10">
            {current.year && (
              <span className="inline-block px-3 py-0.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-sm font-bold tracking-wider uppercase mr-2">
                {current.year}
              </span>
            )}
            <span className="text-cream-100/90 text-sm md:text-base">{current.alt}</span>
          </div>
        )}

        {/* Counter */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md text-white text-sm font-semibold border border-white/15">
          {index + 1} / {images.length}
        </div>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-1 md:-left-16 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/45 backdrop-blur-md text-white flex items-center justify-center hover:bg-gold-400 hover:text-[#3a0f04] transition-all duration-300 border border-white/20 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-1 md:-right-16 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/45 backdrop-blur-md text-white flex items-center justify-center hover:bg-gold-400 hover:text-[#3a0f04] transition-all duration-300 border border-white/20 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </div>

      {/* Close button — always visible, top-right of screen */}
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-600 transition-all duration-300 border border-white/20 shadow-xl"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Dot indicators */}
      {images.length > 1 && images.length <= 24 && (
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/15"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); onNavigate(i); }}
              aria-label={`Photo ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === index ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProgramGallery({ title, images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!images || images.length === 0) return null;

  /* Group photos by year (desc), keeping each group in its given order */
  const years = [...new Set(images.map((img) => img.year || 'Photos'))];
  const visibleYears = years.slice(0, 2); // show at most 2 year groups inline

  return (
    <section className="py-14 md:py-16 section-plain border-t border-cream-200">
      <div className="page-container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="section-eyebrow">📸 Photo Gallery</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
              {title || 'Moments from this Program'}
            </h2>
            <div className="ornament-line mb-4" />
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Click on any photo to view it in full screen.
            </p>
          </div>

          {/* Year groups */}
          {visibleYears.map((year) => {
            const yearImages = images.filter((img) => (img.year || 'Photos') === year);
            return (
              <div key={year} className="mb-10 last:mb-0">
                {years.length > 1 && (
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-lg font-serif font-bold text-saffron-700">{year}</h3>
                    <span className="text-sm font-semibold text-gray-400 bg-cream-100 border border-cream-200 px-2.5 py-0.5 rounded-full">
                      {yearImages.length} photos
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cream-300 to-transparent" />
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {yearImages.map((img, i) => {
                    const globalIndex = images.indexOf(img);
                    return (
                      <button
                        key={img.src}
                        onClick={() => setLightboxIndex(globalIndex)}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-cream-200 bg-cream-50 shadow-[0_2px_10px_rgba(195,74,44,0.06)] hover:shadow-[0_14px_34px_rgba(195,74,44,0.18)] hover:-translate-y-1 hover:border-saffron-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron-400"
                        aria-label={`View photo: ${img.alt}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          loading="lazy"
                        />
                        {/* Hover veil + zoom hint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 text-saffron-600 items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 hidden sm:flex">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-image popup */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
