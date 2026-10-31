'use strict';

const form = document.querySelector('#verify-form');
const verifyButton = document.querySelector('#verify-button');
const resultPanel = document.querySelector('#result');

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, '0')).join('');
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  return toHex(await crypto.subtle.digest('SHA-256', bytes));
}

async function hmacSha256(key, message) {
  const cryptoKey = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(key),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
  return toHex(signature);
}

function calculateCrashPoint(hmacHex) {
  const h = BigInt(`0x${hmacHex.slice(0, 13)}`); // First 52 bits
  const range = 1n << 52n;
  const cents = (99n * range) / (range - h);
  return Math.max(1, Number(cents) / 100);
}

function showError(message) {
  resultPanel.hidden = false;
  resultPanel.className = 'result failure';
  resultPanel.textContent = message;
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  resultPanel.hidden = true;
  verifyButton.disabled = true;
  verifyButton.textContent = 'Verifying…';

  try {
    if (!globalThis.crypto?.subtle) {
      throw new Error('Web Crypto is unavailable. Open this page over HTTPS or localhost.');
    }

    const serverSeed = document.querySelector('#server-seed').value.trim();
    const publishedHash = document.querySelector('#server-hash').value.trim().toLowerCase();
    const clientSeed = document.querySelector('#client-seed').value;
    const nonceText = document.querySelector('#nonce').value;
    const claimedText = document.querySelector('#claimed-result').value;
    const nonce = Number(nonceText);
    const claimedResult = Number(claimedText);

    if (!serverSeed || !clientSeed || !/^[a-f0-9]{64}$/.test(publishedHash)) {
      throw new Error('Enter the server seed, client seed, and a valid 64-character SHA-256 hash.');
    }
    if (nonceText === '' || !Number.isSafeInteger(nonce) || nonce < 0) {
      throw new Error('Nonce must be a non-negative safe integer.');
    }
    if (claimedText === '' || !Number.isFinite(claimedResult) || claimedResult < 1) {
      throw new Error('Enter a valid displayed multiplier of at least 1.00.');
    }

    const actualHash = await sha256(serverSeed);
    const digest = await hmacSha256(serverSeed, `${clientSeed}:${nonce}`);
    const calculatedResult = calculateCrashPoint(digest);
    const displayedCalculatedResult = calculatedResult.toFixed(2);
    const hashMatches = actualHash === publishedHash;
    const resultMatches = displayedCalculatedResult === claimedResult.toFixed(2);
    const allMatch = hashMatches && resultMatches;

    resultPanel.hidden = false;
    resultPanel.className = `result ${allMatch ? 'success' : 'failure'}`;
    resultPanel.innerHTML = `
      <h2>${allMatch ? 'Verification passed' : 'Verification failed'}</h2>
      <p>Server-seed commitment: <strong class="${hashMatches ? 'pass' : 'fail'}">${hashMatches ? 'MATCH' : 'MISMATCH'}</strong></p>
      <p>Crash multiplier: <strong class="${resultMatches ? 'pass' : 'fail'}">${resultMatches ? 'MATCH' : 'MISMATCH'}</strong></p>
      <p>Recalculated multiplier: <strong>${displayedCalculatedResult}x</strong></p>
      <p>Calculated HMAC-SHA256 digest:</p>
      <pre></pre>
      <p>Calculated server-seed SHA-256 hash:</p>
      <pre></pre>`;
    const codeBlocks = resultPanel.querySelectorAll('pre');
    codeBlocks[0].textContent = digest;
    codeBlocks[1].textContent = actualHash;
  } catch (error) {
    showError(error instanceof Error ? error.message : 'An unexpected verification error occurred.');
  } finally {
    verifyButton.disabled = false;
    verifyButton.textContent = 'Verify round';
  }
});
