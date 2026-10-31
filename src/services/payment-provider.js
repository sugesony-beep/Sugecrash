/**
 * Provider adapter contract. Implement only after the provider confirms in writing
 * that it supports licensed gambling merchants in the target country.
 * Never store card/bank credentials or provider secrets in this repository.
 */
class PaymentProvider {
  constructor(config) { this.config = config; }
  async createDepositIntent(_input) { throw new Error('PAYMENT_PROVIDER_NOT_CONFIGURED'); }
  async createWithdrawal(_input) { throw new Error('PAYMENT_PROVIDER_NOT_CONFIGURED'); }
  verifyWebhook(_rawBody, _signature) { throw new Error('WEBHOOK_VERIFICATION_NOT_CONFIGURED'); }
}
module.exports = { PaymentProvider };
