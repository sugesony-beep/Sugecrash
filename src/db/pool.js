const { Pool } = require('pg');
const { databaseUrl } = require('../config/env');
const pool = new Pool({ connectionString: databaseUrl, max: 10, idleTimeoutMillis: 30000, connectionTimeoutMillis: 5000, ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: true } : undefined });
module.exports = pool;
