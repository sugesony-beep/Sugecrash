# Production gates — all required before enabling real money

- [ ] Written legal opinion for the operator's place of establishment and every player jurisdiction.
- [ ] Gambling licence(s), local entity/representative requirements and regulator approvals verified.
- [ ] Country allowlist reviewed and signed off; prohibited/restricted territories blocked at the edge and application layers.
- [ ] Independent age, identity, sanctions and AML controls; enhanced due diligence and suspicious-activity workflows where required.
- [ ] Payment provider contract explicitly permits gambling; provider country/currency/payment-method coverage confirmed.
- [ ] Signed webhook verification, idempotency, reconciliation, refunds, chargeback handling and payout controls tested.
- [ ] Wallet ledger concurrency, double-entry/reconciliation, withdrawal review and immutable audit tested.
- [ ] Independent RNG/game math certification and security penetration test completed.
- [ ] Provably-fair specification published and independently verified; seed encryption, rotation and access controls reviewed.
- [ ] Responsible-gambling tools: self-exclusion, cooling-off, deposit/loss/time limits, reality checks and support escalation.
- [ ] Privacy, retention, data-subject rights, breach response, PCI scope and data residency reviewed.
- [ ] Disaster recovery, backups, monitoring, fraud operations and regulator reporting operational.
- [ ] Written approval to change the global kill switch, with change-control and rollback procedure.

## Kill switch
Keep `REAL_MONEY_ENABLED=false` until every applicable gate is complete. Do not set `market_rules.real_money_enabled=true` unless that market has `permitted=true`, a non-empty `license_reference`, and `legal_reviewed_at` set. The schema enforces these minimum fields but cannot validate the authenticity or scope of a licence.
- [ ] KYC-verified and minimum-age checks enforced server-side on every regulated route; active self-exclusion blocks access.
- [ ] Responsible-play limits enforced transactionally before any deposit or wager is accepted.
