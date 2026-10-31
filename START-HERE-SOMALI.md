# Worldwide Crash — Ku bilow Android (Termux)

Mashruucan waxaa loo diyaariyey in lagu furo browser-ka Android, laguna maamulo Termux. PC/Docker looma baahna marka local demo la tijaabinayo.

## Waxa ku jira
- Mobile-first dashboard/PWA (`public/`) — waxaad Chrome ka dooran kartaa **Add to Home screen**.
- Node.js + Express API.
- PostgreSQL schema iyo ISO country/territory catalogue; dhammaan suuqyadu waxay ku bilaabmaan `BLOCKED`.
- Admin role iyo endpoint-yo akhris-keliya ah.
- Crash preview demo ah oo aan lahayn bets ama lacag qiimo leh.
- Payment provider interface; wax lacag-bixin dhab ah ma shaqaynayso ilaa provider heshiis iyo oggolaansho la xaqiijiyo.
- Real-money wagering, deposits iyo withdrawals: **OFF**.

## 1. Ku rakib Termux packages
Ka soo dejiso Termux ilo rasmi ah, fur Termux, kadib:

```bash
pkg update && pkg upgrade -y
pkg install nodejs-lts postgresql git unzip nano openssl -y
termux-setup-storage
```

## 2. Fur ZIP-ka
Soo dejiso `worldwide-crash-casino-node-postgres.zip` telefoonkaaga. Kadib Termux:

```bash
cd ~/storage/downloads
unzip worldwide-crash-casino-node-postgres.zip -d $HOME
cd $HOME/worldwide-crash-casino
```

Haddii Android-ku magaca file-ka beddelay, ku qor `ls` si aad u aragto magaca saxda ah.

## 3. Bilaab PostgreSQL gudaha Android
Marka ugu horreysa oo keliya:

```bash
mkdir -p $PREFIX/var/lib/postgresql
initdb $PREFIX/var/lib/postgresql
```

Bilow database-ka:

```bash
pg_ctl -D $PREFIX/var/lib/postgresql -l $PREFIX/var/lib/postgresql/server.log start
```

Samee user iyo database:

```bash
createuser -s casino
createdb -O casino casino
psql -d postgres -c "ALTER USER casino WITH PASSWORD 'GeliPasswordDheerHalkan';"
```

Xusuusnow password-ka aad dooratay; ku qor isla password-ka `.env`.

## 4. Deji app-ka

```bash
cp .env.example .env
nano .env
```

Beddel `DATABASE_URL` iyo `JWT_SECRET`. Tusaale:

```env
DATABASE_URL=postgres://casino:GeliPasswordDheerHalkan@127.0.0.1:5432/casino
JWT_SECRET=ku_dheji_64_hex_char_oo_ka_yimid_openssl
REAL_MONEY_ENABLED=false
```

Si aad u samaysato JWT secret:

```bash
openssl rand -hex 32
```

Ku rakib dependencies, samee database migration, oo tijaabi:

```bash
npm install
npm run db:migrate
npm test
npm run check
npm run dev
```

Kadib Chrome ka fur: **http://127.0.0.1:3000**

## 5. Admin account (ikhtiyaari)
Ku dar `.env`:

```env
ADMIN_EMAIL=adiga@example.com
ADMIN_PASSWORD=ugu_yaraan_16_xaraf_oo_qarsoodi_ah
```

Kadib orod:

```bash
npm run admin:create
```

Admin API-ga waxaa lagu ilaaliyaa JWT iyo role. `GET /api/admin/overview`, `/api/admin/markets`, `/api/admin/payments` ayaa ah endpoints akhris-keliya. UI-ga bilowga ahi waa control-center dashboard; ma laha button lagu shido lacag dhab ah.

## 6. Maalin kasta markaad dib u bilowdo

```bash
pg_ctl -D $PREFIX/var/lib/postgresql -l $PREFIX/var/lib/postgresql/server.log start
cd $HOME/worldwide-crash-casino
npm run dev
```

## Xaaladda sharci iyo lacagta
Tani waa development build, ma aha casino sharci ahaan diyaar u ah lacag dhab ah. Country catalogue-ku waa tixraac ISO, mana caddeeyo in gambling laga oggol yahay. Waddan kasta wuxuu ahaanayaa BLOCKED ilaa sharci-yaqaan maxalli ahi xaqiijiyo oggolaanshaha, ruqsaddu jirto, KYC/AML/age checks iyo responsible-gambling controls la dhammaystiro, ciyaartana si madax-bannaan loo tijaabiyo, payment provider-kuna qoraal ku oggolaado gambling merchant-ka. Ha isku dayin inaad geo-block ama xannibaad sharci ka gudubto.

**Ha gelin lacag dhab ah, ha aqbalin deposits, hana u bandhigin ciyaarta dadka isticmaala inta approvals-kaas iyo security review-ku maqan yihiin.** Android localhost ma aha hosting dadweyne; marka app-ka la tijaabiyo, production deployment wuxuu u baahan yahay server la ilaaliyo, HTTPS, backups, monitoring iyo PostgreSQL la maamulo.

## Trusted country verification

Country headers from a phone/browser are not trusted. A production edge proxy must strip any incoming `x-verified-country` and `x-geo-signature` headers, derive the country from its own geo-IP service, then set `x-verified-country` to the ISO alpha-2 code and `x-geo-signature` to the lowercase hex HMAC-SHA256 of that two-letter code using `GEOIP_SHARED_SECRET`. Configure the same high-entropy secret only on the edge and app server. If the secret/signature is absent or invalid, country verification fails closed. This does not replace licensing or location-risk controls.
