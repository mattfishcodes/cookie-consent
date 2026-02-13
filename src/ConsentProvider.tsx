'use client'

import { initConsent } from './init'
import { useEffect } from 'react'

export default function ConsentProvider({
  gtmId,
  domain,
}: {
  gtmId: string | undefined
  domain: string | undefined
}) {
  useEffect(() => {
    if (gtmId === undefined) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('No Google tag ID specified!')
      }
      return
    }
    initConsent({ gtmId, domain })
  }, [])

  return null
}
