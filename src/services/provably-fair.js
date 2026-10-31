const crypto = require('node:crypto');
const sha256 = value => crypto.createHash('sha256').update(value, 'utf8').digest('hex');
const hmacSha256 = (key, message) => crypto.createHmac('sha256', key).update(message, 'utf8').digest('hex');
function createRound({ clientSeed = crypto.randomBytes(16).toString('hex'), nonce = 0 } = {}) {
  if (!Number.isSafeInteger(nonce) || nonce < 0) throw new TypeError('Invalid nonce');
  const serverSeed = crypto.randomBytes(32).toString('hex');
  const serverSeedHash = sha256(serverSeed);
  const digest = hmacSha256(serverSeed, `${clientSeed}:${nonce}`);
  const h = BigInt(`0x${digest.slice(0, 13)}`);
  const range = 1n << 52n;
  const cents = (99n * range) / (range - h);
  const crashPoint = Math.max(1, Number(cents) / 100).toFixed(2);
  return { serverSeed, serverSeedHash, clientSeed, nonce, digest, crashPoint };
}
module.exports = { createRound, sha256, hmacSha256 };
