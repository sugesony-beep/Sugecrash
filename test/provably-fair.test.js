const test = require('node:test');
const assert = require('node:assert/strict');
const { createRound, sha256, hmacSha256 } = require('../src/services/provably-fair');

test('round publishes a SHA-256 commitment before seed reveal', () => {
  const round = createRound({ clientSeed: 'test-client', nonce: 12 });
  assert.equal(round.serverSeedHash, sha256(round.serverSeed));
  assert.equal(round.digest, hmacSha256(round.serverSeed, 'test-client:12'));
  assert.match(round.crashPoint, /^\d+\.\d{2}$/);
  assert.ok(Number(round.crashPoint) >= 1);
});

test('same inputs reproduce the same commitment and result only when same server seed is used', () => {
  const round = createRound({ clientSeed: 'test-client', nonce: 12 });
  assert.equal(round.digest, hmacSha256(round.serverSeed, 'test-client:12'));
});
