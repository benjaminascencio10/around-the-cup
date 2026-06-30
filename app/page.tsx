'use client'

import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { Shop } from '@/components/site/shop'
import { Social } from '@/components/site/social'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Shop />
        <Social />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
