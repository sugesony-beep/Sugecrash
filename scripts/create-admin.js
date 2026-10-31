require('dotenv').config();
const bcrypt = require('bcryptjs');
const pool = require('../src/db/pool');
(async () => {
  const email = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const password = String(process.env.ADMIN_PASSWORD || '');
  if (!email || !/^\S+@\S+\.\S+$/.test(email) || password.length < 16) {
    throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD (minimum 16 characters) in .env before running npm run admin:create');
  }
  const hash = await bcrypt.hash(password, 12);
  await pool.query(`INSERT INTO users(email,password_hash,date_of_birth,country_code,kyc_status,role)
    VALUES($1,$2,'1900-01-01','ZZ','verified','admin')
    ON CONFLICT(email) DO UPDATE SET password_hash=EXCLUDED.password_hash,role='admin'`, [email, hash]);
  console.log(`Admin account created/updated: ${email}`);
})().catch(e => { console.error(e.message); process.exitCode = 1; }).finally(() => pool.end());
