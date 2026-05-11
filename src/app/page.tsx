import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { GalleryCarousel } from '@/components/sections/gallery-carousel'
import { HeroSection } from '@/components/sections/hero-section'
import { ProcessSection } from '@/components/sections/process-section'
import { SatisfactionBanner } from '@/components/sections/satisfaction-banner'
import { ServicesPreview } from '@/components/sections/services-preview'
import { StorySection } from '@/components/sections/story-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { TrustSection } from '@/components/sections/trust-section'
import { ValuesMarquee } from '@/components/sections/values-marquee'
import {
  localBusinessJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    webPageJsonLd(siteConfig.name, siteConfig.description, '/'),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustSection />
      <ServicesPreview />
      <ProcessSection />
      <SatisfactionBanner />
      <StorySection />
      <GalleryCarousel />
      <TestimonialsSection />
      <CtaSection />
      <ValuesMarquee />
    </>
  )
}
