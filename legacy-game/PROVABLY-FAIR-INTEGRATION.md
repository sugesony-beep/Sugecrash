# Provably Fair Integration Notes

## What this package contains
- The original Crash Point frontend assets, preserved unchanged except for the launcher link added to `crash-point.html`.
- `provably-fair.html`, `styles.css`, and `provably-fair.js`: a standalone browser verifier.
- `server-example.js`: a Node.js reference implementation for a game operator that owns and controls the backend.

## Important limitation
The supplied original game bundle is a frontend shell that loads its actual application from a remote CDN/service and connects to a remote SignalR/WebSocket service. The ZIP does not contain that service's backend source, its secret generation/commitment logic, or an authenticated round-history API. Therefore this package cannot make the third-party live game Provably Fair, change its server-side crash outcomes, or automatically verify its rounds.

The verifier only verifies a round if the operator publishes the server-seed hash before the round and later reveals the matching server seed, client seed, nonce, and uses the exact documented HMAC-SHA256 and multiplier formula. Do not treat a locally generated demo result as proof about the remote game.

## Run
Serve the folder over HTTPS or localhost. Open `crash-point.html`; use the **Provably Fair Verifier** link. Enter the published hash, revealed server seed, client seed, nonce, and displayed multiplier from a completed round.

## To complete live integration
The owner/operator must provide backend source or a documented API and confirm the exact algorithm, including message encoding, digest-to-number conversion, house edge, rounding, and instant-crash rule. The backend must commit to a server-seed hash before betting, keep the seed secret until settlement, then reveal it and publish round inputs/results. The client verifier must use that exact specification.
