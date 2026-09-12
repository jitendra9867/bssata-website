import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const executiveCommittee = [
  { name: 'Sri Peesapati Lakshmi Kantharao', designation: 'Distinguished Advisor', phone: '9347259787', category: 'leadership' },
  { name: 'Sri Ambadipudi Shyam Sundar', designation: 'President', phone: '9440235340', category: 'leadership' },
  { name: 'Sri Vankamamidi Venkataramayya', designation: 'Executive President', phone: '9866337559', category: 'leadership' },
  { name: 'Sri Dendukuri Narayana Murthy', designation: 'Honorable President', phone: '9849311140', category: 'leadership' },
  { name: 'Sri Pamidighantam V. Satyanarayana', designation: 'Secretary', phone: '7893961234', category: 'leadership' },
  { name: 'Sri Susarla Venkata Ramana', designation: 'Treasurer', phone: '9290515564', category: 'leadership' },
  { name: 'Sri Jammalamadaka Sita Ramanjaneeya Sharma', designation: 'Vice President', phone: '9491337464', category: 'executive' },
  { name: 'Sri Kota Jayashankaram', designation: 'Vice President', phone: '9581957996', category: 'executive' },
  { name: 'Sri Turumella Umakantharao', designation: 'Vice President', phone: '9440003840', category: 'executive' },
  { name: 'Sri Yallapragada Ramamohan Rao', designation: 'Joint Secretary', phone: '9885700369', category: 'executive' },
  { name: 'Sri Munnangi Shesha Sai', designation: 'Assistant Secretary', phone: '9177246569', category: 'executive' },
  { name: 'Sri Dharmavarapu Chakradhara Rao', designation: 'Member', phone: '7382539357', category: 'members' },
  { name: 'Sri Chevuri Shankar', designation: 'Member', phone: '8374405180', category: 'members' },
  { name: 'Sri Poonapalli Srinivasa Rao', designation: 'Member', phone: '9014062665', category: 'members' },
  { name: 'Sri Challapalli Dakshina Murthy', designation: 'Member', phone: '9014980758', category: 'members' },
  { name: 'Sri Gade Venugopala Rao', designation: 'Member', phone: '9849836567', category: 'members' },
  { name: 'Sri Telikepalli Ramakrishna Shastri', designation: 'Member', phone: '9440234804', category: 'members' },
  { name: 'Sri Ramaraju Chandrashekar', designation: 'Member', phone: '9676410165', category: 'members' },
  { name: 'Sri Mamidala Krishna Chaitanya Mallik', designation: 'Advisor', phone: '9849164553', category: 'advisors' },
  { name: 'Sri Pamidighantam V. Subbarao', designation: 'UK Coordinator', phone: '00441442218349', category: 'abroad' },
  { name: 'Sri Talluri Nagaraju', designation: 'UK Coordinator', phone: '00447789778720', category: 'abroad' },
  { name: 'Sri Suripeddi Sreeramachandra Murthy', designation: 'UK Coordinator', phone: '00447491963804', category: 'abroad' },
];

const categories = {
  leadership: { label: 'Core Leadership', color: 'bg-saffron-500', textColor: 'text-saffron-500', bgColor: 'bg-saffron-50', borderColor: 'border-saffron-200' },
  executive: { label: 'Executive Committee', color: 'bg-gold-400', textColor: 'text-gold-600', bgColor: 'bg-gold-50', borderColor: 'border-gold-200' },
  members: { label: 'Committee Members', color: 'bg-cream-400', textColor: 'text-gray-600', bgColor: 'bg-cream-50', borderColor: 'border-cream-300' },
  advisors: { label: 'Advisors', color: 'bg-saffron-300', textColor: 'text-saffron-600', bgColor: 'bg-saffron-50', borderColor: 'border-saffron-200' },
  abroad: { label: 'UK / Abroad Coordinators', color: 'bg-gold-300', textColor: 'text-gold-700', bgColor: 'bg-gold-50', borderColor: 'border-gold-200' },
};

export default function Committee() {
  return (
    <>
      <Head>
        <title>Executive Committee — Brahmana Seva Samiti</title>
        <meta name="description" content="Meet the executive committee and governing body of Brahmana Seva Samiti, Guntur — serving the community since 1994." />
      </Head>

      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image src="/images/om-banner.png" alt="" fill className="object-cover" sizes="100vw" style={{ backgroundColor: '#1a0a00', opacity: 0.25 }} />
        <div className="absolute inset-0 hero-om-overlay" />
        <div className="relative page-container text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-banner font-black mb-4 tracking-tight">Executive Committee</h1>
          <div className="ornament-line mb-5" />
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">22 dedicated members working together to serve the Brahmin community. Elected unanimously on 18 April 2025.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream-50">
        <div className="page-container">
          {Object.entries(categories).map(([key, cat]) => {
            const members = executiveCommittee.filter(m => m.category === key);
            if (members.length === 0) return null;
            return (
              <div key={key} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <h2 className={`text-xl font-serif font-bold ${cat.textColor}`}>{cat.label}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {members.map((member) => (
                    <div key={member.name} className={`card p-5 border ${cat.borderColor} hover:scale-[1.02] transition-all duration-300`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full ${cat.bgColor} flex items-center justify-center text-lg font-bold ${cat.textColor} flex-shrink-0`}>
                          {member.name.split(' ').pop()[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-bold text-gray-800 text-sm mb-0.5 truncate">{member.name}</h3>
                          <p className={`text-sm font-semibold ${cat.textColor} mb-2`}>{member.designation}</p>
                          <a href={`tel:${member.phone}`} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-saffron-500 transition-colors">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Auditor */}
          <div className="card p-6 bg-cream-50 border-cream-300 max-w-md mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Our Auditor</p>
            <p className="font-serif font-bold text-gray-800">Ketharaju Subba Rao & Co.</p>
            <p className="text-sm text-gray-500">2/12, Brodipet, Guntur</p>
            <p className="text-sm text-gray-500">Rep. by Ketharaju Subhash — 7702700117</p>
          </div>
        </div>
      </section>
    </>
  );
}
