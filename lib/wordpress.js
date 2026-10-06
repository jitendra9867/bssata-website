/* ═══════════════════════════════════════════════════════════════
   WORDPRESS DATA LAYER — central GraphQL client for the headless
   WP backend (api.bssata.org).

   Every query function returns `null` on any failure (network,
   GraphQL errors, empty/missing content) so callers can fall back
   to their bundled static content instead of crashing the page.

   Content model this expects (created in Phase 2 on WordPress):
     - CPT  CommitteeMember   → graphqlPluralName: committeeMembers
       ACF: designation, phone, category, display_order
     - CPT  TimelineEvent     → timelineEvents
       ACF: event_year, event_date, description, impact_tag
     - CPT  Program           → programs
       ACF: tagline, description, display_order
     - CPT  WelfareScheme     → welfareSchemes
       ACF: description, icon, category, status, link, display_order
     - CPT  SiteHighlight     → siteHighlights
       ACF: event_year, category, icon, display_order
     - CPT  Testimonial       → testimonials
       ACF: role, quote, icon, display_order
     - CPT  DonorHonor        → donorHonors
       ACF: honor_year, contribution, honor_type, display_order
     - ACF Options page "Site Settings" → siteSettings
       (bank accounts, 12A certificate text, address, contacts)
   ═══════════════════════════════════════════════════════════════ */

const WP_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://api.bssata.org/graphql';

/* ═══════════════════════════════════════════════════════════════
   IN-PROCESS RESPONSE CACHE
   WPGraphQL is queried with POST, and Next.js only caches GET
   requests in its Data Cache — so without this every ISR
   regeneration and API hit re-requests WordPress from scratch
   (the life-members query alone paginates ~8 upstream calls).
   Cache successful responses in memory for a short TTL that matches
   the pages' revalidate window. Failures (null) are never cached.
   ═══════════════════════════════════════════════════════════════ */

const RESPONSE_TTL_MS = 60_000; /* matches page revalidate */
const RESPONSE_CACHE_MAX = 200; /* bounded so memory can't grow unbounded */
const responseCache = new Map();

function cacheGet(key) {
  const hit = responseCache.get(key);
  if (!hit) return undefined;
  if (Date.now() - hit.at > RESPONSE_TTL_MS) {
    responseCache.delete(key);
    return undefined;
  }
  return hit.data;
}

function cacheSet(key, data) {
  if (responseCache.size >= RESPONSE_CACHE_MAX) {
    /* drop the oldest entry (Map preserves insertion order) */
    const oldest = responseCache.keys().next().value;
    if (oldest !== undefined) responseCache.delete(oldest);
  }
  responseCache.set(key, { at: Date.now(), data });
}

/* ═══════════════════════════════════════════════════════════════
   GENERIC FETCH HELPER
   ═══════════════════════════════════════════════════════════════ */

/**
 * Execute a GraphQL query against the WordPress backend.
 * Returns the `data` object, or null on ANY failure so pages can
 * fall back to bundled content.
 *
 * @param {string} query    GraphQL query string.
 * @param {object} [variables]
 * @param {object} [options]
 * @param {number} [options.timeoutMs=8000]
 * @returns {Promise<object|null>}
 */
export async function fetchGraphQL(query, variables = {}, options = {}) {
  const { timeoutMs = 8000 } = options;
  const cacheKey = JSON.stringify([query, variables]);

  const cached = cacheGet(cacheKey);
  if (cached !== undefined) return cached;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(WP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
      /* Next.js data cache — ISR-friendly; pages may override via
         their own revalidate when using getStaticProps. */
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    if (!json || json.errors || !json.data) return null;
    cacheSet(cacheKey, json.data);
    return json.data;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/* ═══════════════════════════════════════════════════════════════
   SHARED FRAGMENTS
   ═══════════════════════════════════════════════════════════════ */

/* Fields are exposed FLAT on each CPT type by the BSSATA Headless
   Content Model plugin (registered via register_graphql_field):
   e.g. committeeMembers { title designation phone category }. */

const MEDIA_FIELDS = /* GraphQL */ `
  featuredImage {
    node {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
  }
`;

/* ═══════════════════════════════════════════════════════════════
   COMMITTEE MEMBERS
   Title, Designation, Phone, Category (+ photo)
   ═══════════════════════════════════════════════════════════════ */

const COMMITTEE_FIELDS = /* GraphQL */ `
  nodes {
    id
    databaseId
    title
    menuOrder
    designation
    phone
    category
    ${MEDIA_FIELDS}
  }
`;

/**
 * Fetch committee members, grouped by category, ordered by
 * designation seniority (menu_order asc).
 * @returns {Promise<Array|null>} null when backend unavailable/empty
 */
export async function getCommitteeMembers() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllCommitteeMembers {
        committeeMembers(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          ${COMMITTEE_FIELDS}
        }
      }
    `
  );
  if (!data?.committeeMembers?.nodes?.length) return null;

  return data.committeeMembers.nodes.map((m) => ({
    id: m.databaseId,
    name: m.title,
    designation: m.designation || '',
    phone: m.phone || '',
    category: m.category || 'members',
    photo: m.featuredImage?.node?.sourceUrl || null,
    photoAlt: m.featuredImage?.node?.altText || m.title,
  }));
}

/* ═══════════════════════════════════════════════════════════════
   HISTORY TIMELINE (About page)
   Year, Title, Description, Impact Tag
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch history timeline events (oldest → newest by menu_order).
 * @returns {Promise<Array|null>}
 */
export async function getHistoryHighlights() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllTimelineEvents {
        timelineEvents(first: 200, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            id
            databaseId
            title
            menuOrder
            eventYear
            eventDate
            description
            impactTag
          }
        }
      }
    `
  );
  if (!data?.timelineEvents?.nodes?.length) return null;

  return data.timelineEvents.nodes.map((e) => ({
    id: e.databaseId,
    title: e.title,
    year: e.eventYear || '',
    date: e.eventDate || '',
    description: e.description || e.title,
    impactTag: e.impactTag || '',
  }));
}

/* ═══════════════════════════════════════════════════════════════
   PROGRAMS (events & welfare programs)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch programs ordered by menu_order.
 * @returns {Promise<Array|null>}
 */
export async function getPrograms() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllPrograms {
        programs(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            id
            databaseId
            title
            slug
            menuOrder
            tagline
            description
            icon
            ${MEDIA_FIELDS}
          }
        }
      }
    `
  );
  if (!data?.programs?.nodes?.length) return null;

  return data.programs.nodes.map((p) => ({
    id: p.databaseId,
    title: p.title,
    slug: p.slug,
    tagline: p.tagline || '',
    description: p.description || '',
    icon: p.icon || '🙏',
    image: p.featuredImage?.node?.sourceUrl || null,
  }));
}

/* ═══════════════════════════════════════════════════════════════
   WELFARE SCHEMES
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch welfare schemes (title, description, icon, category,
 * status, link).
 * @returns {Promise<Array|null>}
 */
export async function getWelfareSchemes() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllWelfareSchemes {
        welfareSchemes(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            id
            databaseId
            title
            slug
            menuOrder
            description
            icon
            category
            status
            link
          }
        }
      }
    `
  );
  if (!data?.welfareSchemes?.nodes?.length) return null;

  return data.welfareSchemes.nodes.map((s) => ({
    id: s.databaseId,
    title: s.title,
    slug: s.slug,
    description: s.description || '',
    icon: s.icon || '🎗️',
    category: s.category || 'Service',
    status: s.status || 'Active',
    href: s.link || null,
  }));
}

/* ═══════════════════════════════════════════════════════════════
   SITE HIGHLIGHTS (home "Recent Highlights")
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch recent-highlight cards for the homepage.
 * @returns {Promise<Array|null>}
 */
export async function getSiteHighlights() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllSiteHighlights {
        siteHighlights(first: 50, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            id
            databaseId
            title
            menuOrder
            eventYear
            category
            icon
          }
        }
      }
    `
  );
  if (!data?.siteHighlights?.nodes?.length) return null;

  return data.siteHighlights.nodes.map((h) => ({
    id: h.databaseId,
    event: h.title,
    year: h.eventYear || '',
    category: h.category || '',
    icon: h.icon || '✨',
  }));
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS ("What People Say")
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch testimonials.
 * @returns {Promise<Array|null>}
 */
export async function getTestimonials() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllTestimonials {
        testimonials(first: 50, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            id
            databaseId
            title
            menuOrder
            role
            quote
            icon
          }
        }
      }
    `
  );
  if (!data?.testimonials?.nodes?.length) return null;

  return data.testimonials.nodes.map((t) => ({
    id: t.databaseId,
    name: t.title,
    role: t.role || '',
    quote: t.quote || '',
    icon: t.icon || '🙏',
  }));
}

/* ═══════════════════════════════════════════════════════════════
   DONOR HONORS (Visista Vyakthulu / Visista Datalu)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch donor/honor roll entries.
 * `honorType` distinguishes the two honours lists:
 *   - "visista-vyakthi"  (distinguished person of the year)
 *   - "visista-data"     (distinguished donor of the year)
 * @returns {Promise<Array|null>}
 */
export async function getDonorHonors() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllDonorHonors {
        donorHonors(first: 200, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            id
            databaseId
            title
            menuOrder
            honorYear
            contribution
            honorType
          }
        }
      }
    `
  );
  if (!data?.donorHonors?.nodes?.length) return null;

  return data.donorHonors.nodes.map((d) => ({
    id: d.databaseId,
    name: d.title,
    year: d.honorYear || '',
    contribution: d.contribution || '',
    honorType: d.honorType || 'visista-vyakthi',
  }));
}

/* ═══════════════════════════════════════════════════════════════
   PROGRAMS (detail pages) — by slug, with gallery + rich content
   ═══════════════════════════════════════════════════════════════ */

function safeJson(str) {
  try { return JSON.parse(str); } catch { return null; }
}

/**
 * Fetch one program by slug incl. highlights/how/overview JSON and
 * its photo gallery (resolved from WP media library IDs).
 * @returns {Promise<object|null>}
 */
export async function getProgramBySlug(slug) {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query ProgramBySlug($slug: ID!) {
        program(id: $slug, idType: SLUG) {
          id
          databaseId
          title
          slug
          icon
          tagline
          description
          highlightsJson
          howJson
          overviewJson
          gallery {
            mediaId
            src
            alt
            year
          }
        }
      }
    `,
    { slug }
  );
  const p = data?.program;
  if (!p) return null;
  return {
    id: p.databaseId,
    slug: p.slug,
    title: p.title,
    icon: p.icon || '🙏',
    tagline: p.tagline || '',
    description: p.description || '',
    highlights: safeJson(p.highlightsJson) || [],
    how: safeJson(p.howJson) || [],
    overview: safeJson(p.overviewJson) || null,
    gallery: (p.gallery || []).map((g) => ({ src: g.src, alt: g.alt || p.title, year: g.year })),
  };
}

/**
 * Fetch all program detail cards (nav + fallback rendering).
 * @returns {Promise<Array|null>}
 */
export async function getAllPrograms() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllProgramCards {
        programs(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            databaseId
            title
            slug
            icon
            tagline
            description
            highlightsJson
            howJson
            overviewJson
          }
        }
      }
    `
  );
  if (!data?.programs?.nodes?.length) return null;
  return data.programs.nodes.map((p) => ({
    id: p.databaseId,
    slug: p.slug,
    title: p.title,
    icon: p.icon || '🙏',
    tagline: p.tagline || '',
    description: p.description || '',
    highlights: safeJson(p.highlightsJson) || [],
    how: safeJson(p.howJson) || [],
    overview: safeJson(p.overviewJson) || null,
    gallery: [],
  }));
}

/* ═══════════════════════════════════════════════════════════════
   PROGRAM EVENTS (hub page year-by-year lists)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch program events grouped as { slug, events: [{year,date,detail}] }.
 * @returns {Promise<Array|null>}
 */
export async function getProgramEvents() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllProgramEvents {
        programEvents(first: 200, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            databaseId
            title
            programSlug
            eventYear
            eventDate
            detail
          }
        }
      }
    `
  );
  if (!data?.programEvents?.nodes?.length) return null;
  const bySlug = {};
  for (const e of data.programEvents.nodes) {
    (bySlug[e.programSlug] = bySlug[e.programSlug] || []).push({
      year: e.eventYear,
      date: e.eventDate,
      detail: e.detail,
    });
  }
  return bySlug;
}

/* ═══════════════════════════════════════════════════════════════
   JANDHYALA CENTERS
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch Jandhyala distribution centers.
 * @returns {Promise<Array|null>}
 */
export async function getJandhyalaCenters() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllJandhyalaCenters {
        jandhyalaCenters(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            databaseId
            location
            contact
            phone
            qty
          }
        }
      }
    `
  );
  if (!data?.jandhyalaCenters?.nodes?.length) return null;
  return data.jandhyalaCenters.nodes.map((c, i) => ({
    id: i + 1,
    location: c.location,
    contact: c.contact || '',
    phone: c.phone || '',
    qty: parseInt(c.qty, 10) || 0,
  }));
}

/* ═══════════════════════════════════════════════════════════════
   BALA GOSEVA DONORS
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch Bala Goseva (cow kiddy bank) donors.
 * @returns {Promise<Array|null>}
 */
export async function getBalaGosevaDonors() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllBalaGosevaDonors {
        balaGosevaDonors(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            databaseId
            title
            donorClass
            amount
          }
        }
      }
    `
  );
  if (!data?.balaGosevaDonors?.nodes?.length) return null;
  return data.balaGosevaDonors.nodes.map((d) => ({
    name: d.title,
    class: d.donorClass || '',
    amount: parseInt(d.amount, 10) || 0,
  }));
}

/* ═══════════════════════════════════════════════════════════════
   SLIDER SLIDES (homepage hero)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch homepage hero slider slides (image from WP media library).
 * @returns {Promise<Array|null>}
 */
export async function getSliderSlides() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllSliderSlides {
        sliderSlides(first: 20, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            databaseId
            title
            subtitle
            ctaLabel
            ctaHref
            sortOrder
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `
  );
  if (!data?.sliderSlides?.nodes?.length) return null;
  return data.sliderSlides.nodes
    .filter((s) => s.featuredImage?.node?.sourceUrl)
    .map((s) => ({
      image: s.featuredImage.node.sourceUrl,
      imageAlt: s.featuredImage.node.altText || s.title,
      title: s.title,
      subtitle: s.subtitle || '',
      cta: { label: s.ctaLabel || 'Learn More', href: s.ctaHref || '#' },
    }));
}

/* ═══════════════════════════════════════════════════════════════
   SAMPRADAYA CALENDARS (download page)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch Sampradaya calendar editions (PDF from WP media library).
 * @returns {Promise<Array|null>}
 */
export async function getSampradayaCalendars() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query AllSampradayaCalendars {
        sampradayaCalendars(first: 20, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
          nodes {
            databaseId
            title
            calYear
            samvat
            calDescription
            copyCount
            isLatest
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `
  );
  if (!data?.sampradayaCalendars?.nodes?.length) return null;
  /* newest year first */
  return data.sampradayaCalendars.nodes
    .map((c) => ({
      year: c.calYear,
      pdf: c.featuredImage?.node?.sourceUrl || null,
      description: c.calDescription || '',
      samvat: c.samvat || '',
      latest: c.isLatest === 'yes',
      count: c.copyCount || '3000+',
    }))
    .sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
}

/* ═══════════════════════════════════════════════════════════════
   LIFE MEMBERS (directory page)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch all life members for the directory.
 * WPGraphQL caps `first` at 100, so this paginates through every
 * page (menu_order asc) before mapping.
 *
 * Resilience: each page is retried up to 3 times; if a page other
 * than the first keeps failing we return null (→ caller falls back
 * to the bundled full list) rather than silently serving a PARTIAL
 * directory, which is worse than none.
 *
 * @returns {Promise<Array|null>}
 */
export async function getLifeMembers() {
  const nodes = [];
  let after = null;
  let page = 0;
  for (;;) {
    let data = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      data = await fetchGraphQL(
        /* GraphQL */ `
          query LifeMembersPage($after: String) {
            lifeMembers(first: 100, after: $after, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
              pageInfo {
                hasNextPage
                endCursor
              }
              nodes {
                databaseId
                title
                rNo
                gotram
                address
                phoneNo
              }
            }
          }
        `,
        { after },
        { timeoutMs: 15000 }
      );
      if (data) break;
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
    }

    /* First page failed → WP unavailable, use fallback. A later page
       failing after retries → refuse to serve a partial directory. */
    if (!data?.lifeMembers?.nodes?.length) {
      if (page === 0) return null;
      console.error(`getLifeMembers: page ${page + 1} failed after retries — returning null to avoid partial data`);
      return null;
    }

    nodes.push(...data.lifeMembers.nodes);
    if (!data.lifeMembers.pageInfo?.hasNextPage) break;
    after = data.lifeMembers.pageInfo.endCursor;
    page++;
    if (nodes.length > 5000) break; /* hard stop safety net */
  }
  return nodes.map((m) => ({
    r_no: parseInt(m.rNo, 10) || 0,
    fullname: m.title,
    gotram: m.gotram || '',
    address: m.address || '',
    phone_no: m.phoneNo || '',
  }));
}

/* ═══════════════════════════════════════════════════════════════
   SITE SETTINGS (ACF Options page)
   Bank details, 12A certificate text, Address, Contact details
   ═══════════════════════════════════════════════════════════════ */

/**
 * Fetch site-wide settings from the ACF options page.
 * Expected shape (registered in Phase 2):
 * {
 *   organizationName, regNo, tagline,
 *   address: { line1, line2, city, state, pincode },
 *   officeAddress, email, phone, website,
 *   twelveACertificateText,
 *   bankAccounts: [{ bankName, accountNumber, ifscCode, branch }]
 * }
 * @returns {Promise<object|null>}
 */
export async function getSiteSettings() {
  const data = await fetchGraphQL(
    /* GraphQL */ `
      query SiteSettings {
        siteSettings {
          organizationName
          regNo
          tagline
          address {
            line1
            line2
            city
            state
            pincode
          }
          officeAddress
          email
          phone
          website
          twelveACertificateText
          bankAccounts {
            bankName
            accountNumber
            ifscCode
            branch
          }
        }
      }
    `
  );
  if (!data?.siteSettings) return null;
  return data.siteSettings;
}
