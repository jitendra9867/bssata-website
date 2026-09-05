import mysql from 'mysql2/promise';

let pool;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'bss_portal',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      charset: 'utf8mb4',
    });
  }
  return pool;
}

/**
 * Execute a parameterized query against the MySQL database.
 * @param {string} sql  - The SQL query string.
 * @param {Array}  args - Bind parameters (optional).
 * @returns {Promise<Array>} Query result rows.
 */
export async function query(sql, args = []) {
  const pool = getPool();
  const [rows] = await pool.execute(sql, args);
  return rows;
}

/**
 * Get a single connection for transactions.
 * @returns {Promise<Object>} MySQL connection.
 */
export async function getConnection() {
  const pool = getPool();
  return pool.getConnection();
}

export default getPool;
