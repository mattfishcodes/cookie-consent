import { consentKey } from './gtm'
import { createBanner } from './shadow-ui'
import { getStoredConsent, saveAndApply } from './state'

export default function exposePublicAPI(domain: string | undefined) {
  // @ts-expect-error
  window.cookieConsent = {
    getState() {
      return getStoredConsent(consentKey)
    },
    acceptAnalytics() {
      saveAndApply({ analytics: true, marketing: false }, consentKey, domain)
    },
    rejectAll() {
      saveAndApply({ analytics: false, marketing: false }, consentKey, domain)
    },
    open() {
      createBanner()
    },
  }
}
