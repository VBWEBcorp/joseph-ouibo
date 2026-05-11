import type { Metadata } from 'next'

import { ContactContent } from './contact-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Contactez Concept Hygiène : nettoyage à Mée-sur-Seine et 100 km à la ronde. Tél. 07 61 05 57 39, devis gratuit sous 24h, intervention partout en Île-de-France."

export const metadata: Metadata = {
  title: 'Contact & devis gratuit',
  description,
  alternates: { canonical: '/contact' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Contact', description, '/contact'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  )
}
