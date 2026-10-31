'use strict';

// Reference implementation for a game you own. Run with Node.js 18+.
// Keep the raw server seed secret until the round has settled.
const crypto = require('node:crypto');

const sha256 = value => crypto.createHash('sha256').update(value, 'utf8').digest('hex');
const hmacSha256 = (key, message) => crypto.createHmac('sha256', key).update(message, 'utf8').digest('hex');

function createRound({ clientSeed = crypto.randomBytes(16).toString('hex'), nonce = 0 } = {}) {
  if (!Number.isSafeInteger(nonce) || nonce < 0) throw new TypeError('Nonce must be a non-negative safe integer.');

  const serverSeed = crypto.randomBytes(32).toString('hex');
  const serverSeedHash = sha256(serverSeed);
  const digest = hmacSha256(serverSeed, `${clientSeed}:${nonce}`);
  const h = BigInt(`0x${digest.slice(0, 13)}`);
  const range = 1n << 52n;
  const crashCents = (99n * range) / (range - h);
  const crashPoint = Math.max(1, Number(crashCents) / 100).toFixed(2);

  return {
    publishBeforeRound: { serverSeedHash, clientSeed, nonce },
    revealAfterRound: { serverSeed, hmac: digest, crashPoint }
  };
}

module.exports = { createRound, sha256, hmacSha256 };

if (require.main === module) {
  const round = createRound({ clientSeed: 'example-player-seed', nonce: 1 });
  console.log('PUBLISH BEFORE ROUND:', round.publishBeforeRound);
  console.log('REVEAL AFTER ROUND:', round.revealAfterRound);
}
