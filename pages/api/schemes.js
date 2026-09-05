import { query } from '../../db';

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
    }

    const sql = 'SELECT * FROM welfare_schemes ORDER BY display_order ASC';
    const [schemes] = await query(sql);

    return res.status(200).json({
      success: true,
      data: schemes,
    });
  } catch (error) {
    console.error('Schemes API Error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
