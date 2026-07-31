export const siteConfig = {
  name: 'BlitzClean 77',
  shortName: 'BlitzClean 77',
  url: 'https://www.blitzclean77.fr',
  locale: 'fr_FR',
  description:
    'Nettoyage de baraques de chantier, containers WC, locations Airbnb, maisons et sortie de poubelles. Intervention rapide à 100 km autour de Mée-sur-Seine (77).',
  ogImage: 'https://www.blitzclean77.fr/og.png',
  twitterHandle: '@blitzclean77',
  themeColor: '#059669',
  phone: '07 61 05 57 39',
  phoneE164: '+33761055739',
  email: 'blitzclean77@gmail.com',
  address: {
    street: '34 Square des Sorbiers',
    city: 'Le Mée-sur-Seine',
    postalCode: '77350',
    country: 'FR',
    region: 'Île-de-France',
  },
  // Données légales officielles (extrait Kbis — Greffe du Tribunal de Commerce de Melun)
  legal: {
    companyName: 'Blitzclean77 et services',
    tradeName: 'Blitzclean77',
    legalForm: 'SASU (Société par actions simplifiée à associé unique)',
    capital: '1,00 €',
    siren: '107 280 760',
    rcs: 'Melun B 107 280 760',
    euid: 'FR7702.107280760',
    vat: 'FR 75 107 280 760',
    gestionNumber: '2026 B 01922',
    registrationDate: '28 juillet 2026',
    director: 'Joseph Peston-Comminges',
    court: 'Melun',
  },
  geo: {
    latitude: 48.5394,
    longitude: 2.5963,
  },
  serviceRadiusKm: 100,
  socials: {
    instagram: 'https://www.instagram.com/blitzclean77/',
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
