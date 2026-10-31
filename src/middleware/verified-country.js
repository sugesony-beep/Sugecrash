const crypto = require('node:crypto');

// The edge proxy must remove any client-supplied x-verified-country and
// x-geo-signature headers, then set its own HMAC-signed country code.
// Without the shared secret/signature, country verification fails closed.
module.exports = function getVerifiedCountry(req) {
  const secret = process.env.GEOIP_SHARED_SECRET || '';
  const country = String(req.headers['x-verified-country'] || '').toUpperCase();
  const signature = String(req.headers['x-geo-signature'] || '').toLowerCase();
  if (!secret || !/^[A-Z]{2}$/.test(country) || !/^[a-f0-9]{64}$/.test(signature)) return null;
  const expected = crypto.createHmac('sha256', secret).update(country, 'utf8').digest();
  const supplied = Buffer.from(signature, 'hex');
  return crypto.timingSafeEqual(expected, supplied) ? country : null;
};
