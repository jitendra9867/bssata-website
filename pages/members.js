import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const GOTRAM_OPTIONS = [
  'all', 'PARASARA', 'KOUNDINYASA', 'KASYAPASA', 'SYALAVATHASA',
  'LOHITHASA', 'BHARGAVASA', 'KAPISA', 'VADHULASA', 'KUSTASA',
  'SANDILYASA', 'SANKHYANASA', 'SRIVATSASA', 'GOWTHAMASA',
  'BARADWAJASA', 'KANVASA', 'VASISTA', 'SATAMARSHANA',
];

/** Returns true if a fullname is purely numeric (bad data). */
function isInvalidName(name) {
  return /^\d+$/.test(String(name || '').trim());
}

/** Safely display the member's name, falling back for bad data. */
function displayName(member) {
  if (isInvalidName(member.fullname)) {
    return `Member #${member.r_no}`;
  }
  return member.fullname || '—';
}

export default function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gotramFilter, setGotramFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('r_no');
  const [sortDirection, setSortDirection] = useState('asc');
  const [page, setPage] = useState(1);
  const perPage = 50;

  useEffect(() => {
    async function fetchMembers() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (gotramFilter !== 'all') params.set('gotram', gotramFilter);
        if (searchTerm) params.set('search', searchTerm);
        params.set('limit', '1000');

        const res = await fetch(`/api/members?${params.toString()}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data.length > 0) {
            setMembers(json.data);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Fall through to static data
      }

      try {
        const res = await fetch('/data/members.json');
        if (res.ok) {
          const data = await res.json();
          setMembers(data);
        }
      } catch {
        setMembers([]);
      }
      setLoading(false);
    }
    fetchMembers();
  }, []);

  const filteredMembers = useMemo(() => {
    let result = [...members];

    if (gotramFilter !== 'all') {
      result = result.filter((m) => m.gotram?.toUpperCase() === gotramFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (m) =>
          (m.fullname || '').toLowerCase().includes(term) ||
          (m.phone_no || '').includes(term) ||
          String(m.r_no || '').includes(term) ||
          (m.gotram || '').toLowerCase().includes(term) ||
          (m.address || '').toLowerCase().includes(term)
      );
    }

    result.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [members, gotramFilter, searchTerm, sortField, sortDirection]);

  const totalPages = Math.ceil(filteredMembers.length / perPage);
  const paginatedMembers = filteredMembers.slice((page - 1) * perPage, page * perPage);

  useEffect(() => { setPage(1); }, [gotramFilter, searchTerm]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <span className="text-white/40 ml-1">↕</span>;
    return <span className="text-gold-300 ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>;
  };

  const gotramCounts = useMemo(() => {
    const counts = {};
    members.forEach(m => {
      const g = m.gotram || 'Unknown';
      counts[g] = (counts[g] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [members]);

  /** Count how many entries have bad (numeric) fullnames */
  const invalidNameCount = useMemo(
    () => members.filter((m) => isInvalidName(m.fullname)).length,
    [members]
  );

  return (
    <>
      <Head>
        <title>Life Members Directory — Brahmana Seva Samiti</title>
        <meta name="description" content={`Browse ${members.length}+ life members of Brahmana Seva Samiti, Guntur. Search by name, registration number, or gotram.`} />
      </Head>

      {/* Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.png" alt="" fill className="object-cover object-center" sizes="100vw" priority />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Life Members Directory</h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Browse our growing family of <strong className="text-gold-300">{members.length}+</strong> life members united by tradition, service, and community spirit.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-cream-50">
        <div className="page-container">

          {/* Filters & Search */}
          <div className="card p-5 md:p-6 mb-8 shadow-lg border border-cream-200/80">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
              <div className="flex-1 relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name, reg. no, phone, gotram, or address…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-cream-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-300 focus:border-saffron-400 transition-all text-sm"
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="gotram-filter" className="text-sm font-medium text-gray-600 whitespace-nowrap">Gotram:</label>
                <select
                  id="gotram-filter"
                  value={gotramFilter}
                  onChange={(e) => setGotramFilter(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-cream-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-saffron-300 focus:border-saffron-400 transition-all text-sm min-w-[160px]"
                >
                  {GOTRAM_OPTIONS.map((g) => (
                    <option key={g} value={g}>{g === 'all' ? 'All Gotrams' : g}</option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-gray-500 whitespace-nowrap px-2">
                {loading ? (
                  <span className="flex items-center gap-2"><span className="animate-spin inline-block">⏳</span> Loading…</span>
                ) : (
                  <span>
                    <strong className="text-saffron-500">{filteredMembers.length}</strong> member{filteredMembers.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Gotram Distribution Pills */}
          {!loading && gotramCounts.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {gotramCounts.slice(0, 10).map(([gotram, count]) => (
                <button
                  key={gotram}
                  onClick={() => setGotramFilter(gotramFilter === gotram ? 'all' : gotram)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    gotramFilter === gotram
                      ? 'bg-saffron-500 text-white shadow-md shadow-saffron-300/40'
                      : 'bg-white text-gray-600 hover:bg-cream-100 border border-cream-300 hover:border-saffron-300'
                  }`}
                >
                  {gotram} <span className="ml-1 opacity-70">({count})</span>
                </button>
              ))}
            </div>
          )}

          {/* Table Card */}
          <div className="card overflow-hidden shadow-lg border border-cream-200/80">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-saffron-600 via-saffron-500 to-maroon-500 text-white">
                    <th className="px-5 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <button onClick={() => handleSort('r_no')} className="flex items-center gap-0.5 hover:text-gold-200 transition-colors">
                        R. No <SortIcon field="r_no" />
                      </button>
                    </th>
                    <th className="px-5 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <button onClick={() => handleSort('fullname')} className="flex items-center gap-0.5 hover:text-gold-200 transition-colors">
                        Full Name <SortIcon field="fullname" />
                      </button>
                    </th>
                    <th className="px-5 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <button onClick={() => handleSort('gotram')} className="flex items-center gap-0.5 hover:text-gold-200 transition-colors">
                        Gotram <SortIcon field="gotram" />
                      </button>
                    </th>
                    <th className="px-5 py-4 text-left font-semibold text-sm uppercase tracking-wider hidden lg:table-cell">Address</th>
                    <th className="px-5 py-4 text-left font-semibold text-sm uppercase tracking-wider">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200">
                  {paginatedMembers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-16 text-center text-gray-500">
                        <div className="text-5xl mb-4">🔍</div>
                        <p className="font-semibold text-gray-700 text-base">No members found</p>
                        <p className="text-sm text-gray-400 mt-1">Try adjusting your search or filter criteria.</p>
                      </td>
                    </tr>
                  ) : (
                    paginatedMembers.map((member, idx) => {
                      const hasInvalidName = isInvalidName(member.fullname);
                      return (
                        <tr
                          key={member.r_no || idx}
                          className={`transition-colors ${
                            idx % 2 === 0 ? 'bg-white' : 'bg-cream-50/60'
                          } hover:bg-saffron-50/50`}
                        >
                          <td className="px-5 py-3.5 font-mono font-bold text-saffron-600 text-sm">
                            {member.r_no}
                          </td>
                          <td className="px-5 py-3.5">
                            {hasInvalidName ? (
                              <span className="inline-flex items-center gap-1.5 text-gray-400 italic text-sm">
                                <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Name not available
                              </span>
                            ) : (
                              <span className="font-medium text-gray-800">{member.fullname}</span>
                            )}
                          </td>
                          <td className="px-5 py-3.5">
                            <span className="inline-block px-2.5 py-1 text-sm font-bold rounded-full bg-saffron-50 text-saffron-600 border border-saffron-200/80 uppercase tracking-wide">
                              {member.gotram}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-gray-500 hidden lg:table-cell max-w-[220px]">
                            <span className="truncate block">{member.address}</span>
                          </td>
                          <td className="px-5 py-3.5">
                            {member.phone_no ? (
                              <a href={`tel:${(member.phone_no || '').replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-saffron-500 transition-colors group">
                                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-saffron-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {member.phone_no}
                              </a>
                            ) : (
                              <span className="text-sm text-gray-300">—</span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-gray-600 hover:bg-saffron-50 hover:text-saffron-600 border border-cream-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                ← Prev
              </button>
              <span className="text-sm text-gray-500 px-3 font-medium">
                Page <span className="text-saffron-500 font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
              </span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-gray-600 hover:bg-saffron-50 hover:text-saffron-600 border border-cream-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                Next →
              </button>
            </div>
          )}

          {/* Enrollment CTA */}
          <div className="mt-14 text-center card p-10 md:p-14 bg-gradient-to-br from-white via-cream-50 to-saffron-50 border border-saffron-200/60 shadow-lg rounded-2xl">
            <div className="w-16 h-16 mx-auto rounded-full bg-saffron-100 flex items-center justify-center text-3xl mb-5">
              🙏
            </div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3">Become a Life Member</h2>
            <p className="text-gray-500 mb-7 max-w-lg mx-auto leading-relaxed">
              Join our community with a contribution of <strong className="text-saffron-600">₹10,000 and above</strong> to
              receive permanent life membership with access to all welfare schemes and community programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:brahmanaseva.ata97@gmail.com?subject=Life%20Membership%20Enquiry" className="btn-primary px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all">
                ✉ Enquire About Membership
              </a>
              <Link href="/contact" className="btn-secondary px-6 py-3 rounded-xl font-semibold border border-cream-300 hover:bg-cream-100 transition-all">
                Bank Details & Donations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
