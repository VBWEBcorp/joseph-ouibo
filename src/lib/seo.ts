export const siteConfig = {
  name: 'Concept Hygiène',
  shortName: 'Concept Hygiène',
  url: 'https://www.concepthygiene.fr',
  locale: 'fr_FR',
  description:
    'Nettoyage de baraques de chantier, containers WC, locations Airbnb, maisons et sortie de poubelles. Intervention rapide à 100 km autour de Mée-sur-Seine (77).',
  ogImage: 'https://www.concepthygiene.fr/og.png',
  twitterHandle: '@concepthygiene',
  themeColor: '#1c2f5a',
  phone: '07 61 05 57 39',
  phoneE164: '+33761055739',
  email: 'contact@concepthygiene.fr',
  address: {
    street: '[adresse à compléter]',
    city: 'Le Mée-sur-Seine',
    postalCode: '77350',
    country: 'FR',
    region: 'Île-de-France',
  },
  geo: {
    latitude: 48.5394,
    longitude: 2.5963,
  },
  serviceRadiusKm: 100,
  socials: {
    instagram: 'https://www.instagram.com/concepthygiene77etservice/',
  },
  hours: {
    weekdays: '08:00 – 18:00',
    saturday: '09:00 – 13:00 (sur rendez-vous)',
    sunday: 'Urgences uniquement',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
