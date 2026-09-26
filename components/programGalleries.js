/* ═══════════════════════════════════════════════════════════════
   PROGRAM GALLERIES — photo lists per program slug
   Consumed by components/ProgramPage.js → components/ProgramGallery.js
   Each entry: slug → [{ src, alt, year }]
   Photos are grouped by `year` in the gallery section (newest first).
   To add photos: drop numbered .jpg files into
   public/images/gallery/<folder>/<year>/ and add entries below.
   ═══════════════════════════════════════════════════════════════ */

function range(from, to) {
  const out = [];
  for (let i = from; i <= to; i++) out.push(i);
  return out;
}

function yearPhotos(folder, year, count, alt) {
  return range(1, count).map((n) => ({
    src: `/images/gallery/${folder}/${year}/${n}.jpg`,
    alt,
    year,
  }));
}

export const PROGRAM_GALLERIES = {
  ugadi: [
    ...yearPhotos('ugadi', '2026', 55, 'Ugadi — Parabhava Nama Samvatsara at Anjaneya Swamy Temple'),
    ...yearPhotos('ugadi', '2025', 33, 'Ugadi — Viswavasu Nama Samvatsara celebrations'),
    ...yearPhotos('ugadi', '2024', 28, 'Ugadi — Krodhi Nama Samvatsara celebrations'),
    ...yearPhotos('ugadi', '2023', 29, 'Ugadi celebrations'),
  ],

  'jandhyala-pournami': [
    ...range(1, 4).map((n) => ({
      src: `/images/gallery/jandhyala-pournami/${n}.jpg`,
      alt: 'Jandhyala Pournami — free Yagnopaveetham distribution',
      year: '2025',
    })),
  ],

  'karthika-samaradhana': [
    ...yearPhotos('karthika-samaradhana', '2025', 25, 'Karthika Samaradhana 2025 — rituals, music programmes and community lunch'),
    ...yearPhotos('karthika-samaradhana', '2024', 25, 'Karthika Samaradhana 2024 — rituals, music programmes and community lunch'),
  ],

  'pura-pramukhulu': [
    ...range(1, 16).map((n) => ({
      src: `/images/gallery/pura-pramukhulu/${n}.jpg`,
      alt: 'Pura Pramukhulu felicitation and gatherings',
      year: '2026',
    })),
  ],
};

/* Helper used by program pages */
export function getProgramGallery(slug) {
  return PROGRAM_GALLERIES[slug] || [];
}
