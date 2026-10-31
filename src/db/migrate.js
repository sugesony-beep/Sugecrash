require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const pool = require('./pool');
(async () => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, '../../migrations/001_initial.sql'), 'utf8');
    await pool.query(sql);
    console.log('Database migration completed.');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally { await pool.end(); }
})();
