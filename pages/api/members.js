import { query } from '../../db';

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const { gotram, search, page = 1, limit = 50 } = req.query;
        const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);

        let sql = 'SELECT * FROM life_members';
        let countSql = 'SELECT COUNT(*) AS total FROM life_members';
        const conditions = [];
        const params = [];

        if (gotram && gotram !== 'all') {
          conditions.push('gotram = ?');
          params.push(gotram);
        }

        if (search) {
          conditions.push('(fullname LIKE ? OR phone_no LIKE ? OR r_no LIKE ?)');
          const searchTerm = `%${search}%`;
          params.push(searchTerm, searchTerm, searchTerm);
        }

        if (conditions.length > 0) {
          const whereClause = ' WHERE ' + conditions.join(' AND ');
          sql += whereClause;
          countSql += whereClause;
        }

        sql += ' ORDER BY r_no ASC LIMIT ? OFFSET ?';

        const [members] = await query(sql, [...params, parseInt(limit, 10), offset]);
        const [countResult] = await query(countSql, params);

        return res.status(200).json({
          success: true,
          data: members,
          pagination: {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
            total: countResult[0].total,
          },
        });
      }

      case 'POST': {
        const { r_no, enrollment_date, fullname, address, gotram, phone_no } = req.body;

        if (!r_no || !fullname || !gotram || !phone_no) {
          return res.status(400).json({
            success: false,
            error: 'Missing required fields: r_no, fullname, gotram, phone_no',
          });
        }

        const sql = `
          INSERT INTO life_members (r_no, enrollment_date, fullname, address, gotram, phone_no)
          VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await query(sql, [
          r_no,
          enrollment_date || null,
          fullname,
          address || '',
          gotram,
          phone_no,
        ]);

        return res.status(201).json({
          success: true,
          data: { sl_no: result.insertId, r_no, fullname, gotram, phone_no },
        });
      }

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error('Members API Error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
