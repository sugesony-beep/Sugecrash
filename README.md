# Worldwide Crash — Node.js + PostgreSQL (Android-first)

A mobile-first, compliance-gated Crash platform foundation. Includes a responsive installable PWA dashboard, Express API, PostgreSQL schema with a default-blocked ISO market catalogue, authentication, admin read-only APIs, a demo-only Crash preview, and payment-provider adapter contracts.

## Safety defaults
- `REAL_MONEY_ENABLED=false` is enforced by default.
- Every market/territory is seeded as blocked.
- No live wagering settlement engine is exposed.
- Deposit and withdrawal endpoints intentionally return unavailable until a licensed provider, signed webhooks, reconciliation and legal approval exist.
- Demo preview uses no stakes, wallet balance, prizes or cash value.

This is not a licensed or production-ready gambling product. IP geolocation, a country dropdown, or a payment method does not establish legal permission. Obtain local legal advice and regulator authorization for each market; confirm written gambling-merchant approval with each payment provider. Complete independent RNG/game certification, KYC/AML/sanctions/age controls, responsible-gambling controls, security audit and operational readiness before considering any regulated launch.

## Android (Termux)
Follow `START-HERE-SOMALI.md`. Install Node.js and PostgreSQL in Termux, initialize a local database, configure `.env`, run migrations and `npm run dev`. Open `http://127.0.0.1:3000` in Chrome. Add it to the home screen for an app-like experience.

## Desktop/server
Requirements: Node.js 20+, PostgreSQL 14+.

```bash
cp .env.example .env
# Edit DATABASE_URL and set a random JWT_SECRET (at least 32 chars)
npm install
npm run db:migrate
npm test
npm run check
npm run dev
```

The Docker compose file is optional for desktop/server development; Android Termux uses the PostgreSQL package directly.

## Routes
- `GET /api/health`
- `GET /api/markets` — catalogue counts
- `GET /api/markets/:countryCode` — country status
- `GET /api/markets/:countryCode/payment-methods` — only returns providers when the market and provider are explicitly approved/enabled
- `POST /api/auth/register`, `POST /api/auth/login`
- `GET /api/wallet` — gated wallet read
- `POST /api/wallet/deposit-intent`, `POST /api/wallet/withdrawal` — disabled stubs
- `POST /api/game/bets` — disabled stub
- `GET /api/admin/overview`, `/api/admin/markets`, `/api/admin/payments` — admin/compliance JWT only

## Admin setup
Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` (16+ characters) in `.env`, then run `npm run admin:create`. Protect `.env`, never commit it, and use a password manager. Admin API is read-only in this starter.

## Production gaps
Provider-specific payment adapters and signed webhook verification; independent RNG/game certification; secure KYC/AML and sanctions provider; trusted edge geolocation and anti-spoofing; dual-control admin workflows; ledger posting/reconciliation; payout screening; limits/self-exclusion; fraud monitoring; audit/retention policies; TLS, secrets management, backups, disaster recovery, penetration testing and jurisdiction-specific licence approvals.

## Trusted country verification

Country headers from a phone/browser are not trusted. A production edge proxy must strip any incoming `x-verified-country` and `x-geo-signature` headers, derive the country from its own geo-IP service, then set `x-verified-country` to the ISO alpha-2 code and `x-geo-signature` to the lowercase hex HMAC-SHA256 of that two-letter code using `GEOIP_SHARED_SECRET`. Configure the same high-entropy secret only on the edge and app server. If the secret/signature is absent or invalid, country verification fails closed. This does not replace licensing or location-risk controls.
