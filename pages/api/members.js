import { getLifeMembers } from '../../lib/wordpress';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
  }

  try {
    const { gotram, search } = req.query;
    let members = (await getLifeMembers()) || [];

    if (gotram && gotram !== 'all') {
      members = members.filter((m) => (m.gotram || '').toUpperCase() === String(gotram).toUpperCase());
    }
    if (search) {
      const term = String(search).toLowerCase();
      members = members.filter(
        (m) =>
          (m.fullname || '').toLowerCase().includes(term) ||
          (m.phone_no || '').includes(term) ||
          String(m.r_no || '').includes(term)
      );
    }

    return res.status(200).json({ success: true, data: members });
  } catch (error) {
    console.error('Members API Error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
