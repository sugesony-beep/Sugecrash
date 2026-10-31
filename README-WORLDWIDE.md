# Worldwide Crash Casino — Node.js + PostgreSQL

## Current safety state
- Real-money wagering: OFF
- Deposits/withdrawals: OFF
- Market policy: default BLOCKED
- Development: play-money mode only

This is a starter backend, not a production or licensed gambling platform. The supplied frontend is a browser game package and may load game code from an external service; this backend does not yet own or replace that game runtime. The HMAC crash function is illustrative and needs independent mathematical/security/regulatory review before real-money use.

## Local setup
Requirements: Node.js 20+, Docker, PostgreSQL client (`psql`).

```bash
docker compose up -d db
cd backend
cp .env.example .env
npm install
psql "postgresql://casino:change-me@localhost:5432/casino" -f migrations/001_initial.sql
npm test
npm run dev
```

Health: `http://localhost:3000/health`
Market check: `http://localhost:3000/api/markets/SO` (expected blocked)

## Included API
- `GET /health`
- `GET /api/markets/:countryCode` — default-deny jurisdiction decision
- `POST /api/payments/deposit` — disabled stub
- `POST /api/payments/withdrawal` — disabled stub
- `POST /api/bets` — denied unless market gates pass; even then live engine remains unactivated

## Market approval checklist
For each country, obtain qualified local legal advice and verify remote-gambling rules, operator licence/authorization, tax/reporting duties, age/KYC, AML/sanctions, responsible-gambling requirements, privacy/data rules, game/RNG certification, and written payment-provider approval for the operator/product/market. A country dropdown or IP lookup is not legal permission. IP location is only one risk signal.

Before launch, implement and independently review: secure authentication/MFA, transactional double-entry ledger, server-authoritative round orchestration, certified RNG/fairness, signed payment webhooks and idempotency/reconciliation, refunds/chargebacks, admin RBAC/dual control, self-exclusion and limits, monitoring, penetration testing, incident response, and disaster recovery. Never store card details; use provider-hosted payment flows. Do not attempt to bypass a country's restrictions.
