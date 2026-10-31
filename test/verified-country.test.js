const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const getVerifiedCountry = require('../src/middleware/verified-country');

test('country verification fails closed without shared secret', () => {
  delete process.env.GEOIP_SHARED_SECRET;
  assert.equal(getVerifiedCountry({ headers: { 'x-verified-country': 'GB', 'x-geo-signature': '0'.repeat(64) } }), null);
});

test('country verification accepts a valid edge HMAC', () => {
  process.env.GEOIP_SHARED_SECRET = 'test-only-secret';
  const country = 'GB';
  const signature = crypto.createHmac('sha256', process.env.GEOIP_SHARED_SECRET).update(country).digest('hex');
  assert.equal(getVerifiedCountry({ headers: { 'x-verified-country': country, 'x-geo-signature': signature } }), country);
});

test('country verification rejects a changed country code', () => {
  process.env.GEOIP_SHARED_SECRET = 'test-only-secret';
  const signature = crypto.createHmac('sha256', process.env.GEOIP_SHARED_SECRET).update('GB').digest('hex');
  assert.equal(getVerifiedCountry({ headers: { 'x-verified-country': 'SO', 'x-geo-signature': signature } }), null);
});
