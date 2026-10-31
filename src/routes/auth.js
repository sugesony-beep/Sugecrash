const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const pool = require('../db/pool');
const { jwtSecret } = require('../config/env');
const getVerifiedCountry = require('../middleware/verified-country');

const registerSchema = z.object({
  email: z.string().email().max(254).transform(v => v.toLowerCase()),
  password: z.string().min(12).max(128),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
});
const loginSchema = z.object({ email: z.string().email().max(254), password: z.string().min(1).max(128) });

router.post('/register', async (req, res, next) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: 'INVALID_INPUT', details: parsed.error.flatten() });
    const country = getVerifiedCountry(req);
    if (!country) return res.status(403).json({ error: 'MARKET_UNVERIFIED' });
    const dob = new Date(`${parsed.data.dateOfBirth}T00:00:00.000Z`);
    if (Number.isNaN(dob.valueOf()) || dob.toISOString().slice(0, 10) !== parsed.data.dateOfBirth || dob >= new Date()) return res.status(400).json({ error: 'INVALID_DATE_OF_BIRTH' });
    const passwordHash = await bcrypt.hash(parsed.data.password, 12);
    const { rows } = await pool.query(
      `INSERT INTO users(email,password_hash,date_of_birth,country_code,kyc_status)
       VALUES($1,$2,$3,$4,'pending') RETURNING id,email,country_code,kyc_status,account_status`,
      [parsed.data.email, passwordHash, parsed.data.dateOfBirth, country]
    );
    res.status(201).json({ user: rows[0], message: 'Account created. Identity and age verification are required before any regulated services.' });
  } catch (e) {
    if (e.code === '23505') return res.status(409).json({ error: 'ACCOUNT_EXISTS' });
    next(e);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: 'INVALID_INPUT' });
    const { rows } = await pool.query('SELECT id,email,password_hash,account_status,kyc_status,role FROM users WHERE email=$1', [parsed.data.email.toLowerCase()]);
    const user = rows[0];
    if (!user || !(await bcrypt.compare(parsed.data.password, user.password_hash))) return res.status(401).json({ error: 'INVALID_CREDENTIALS' });
    if (user.account_status !== 'active') return res.status(403).json({ error: 'ACCOUNT_UNAVAILABLE' });
    const token = jwt.sign({ sub: user.id, role: user.role }, jwtSecret, { algorithm: 'HS256', expiresIn: '15m', issuer: 'worldwide-crash-casino' });
    res.json({ token, tokenType: 'Bearer', expiresIn: 900, user: { id: user.id, email: user.email, kycStatus: user.kyc_status, role: user.role } });
  } catch (e) { next(e); }
});
module.exports = router;
