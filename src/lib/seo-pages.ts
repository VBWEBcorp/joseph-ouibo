/**
 * Liste idéale de pages SEO local (service + ville).
 * Ces pages ne sont pas générées : elles pointent vers /coming-soon
 * pour signaler la roadmap SEO sans encombrer le site.
 */

export const seoCities = [
  'Le Mée-sur-Seine',
  'Melun',
  'Fontainebleau',
  'Évry-Courcouronnes',
  'Corbeil-Essonnes',
  'Sénart',
  'Brie-Comte-Robert',
  'Savigny-le-Temple',
  'Combs-la-Ville',
  'Vert-Saint-Denis',
  'Dammarie-lès-Lys',
  'Paris',
] as const

export const seoServices = [
  { slug: 'nettoyage-batiment', label: 'Nettoyage de bâtiment' },
  { slug: 'nettoyage-bureau', label: 'Nettoyage de bureau' },
  { slug: 'nettoyage-fin-de-chantier', label: 'Nettoyage fin de chantier' },
  { slug: 'nettoyage-baraque-chantier', label: 'Nettoyage de baraque de chantier' },
  { slug: 'nettoyage-airbnb', label: 'Nettoyage Airbnb' },
  { slug: 'lavage-facade', label: 'Lavage de façade' },
  { slug: 'demoussage-toiture', label: 'Démoussage de toiture' },
  { slug: 'sortie-poubelles', label: 'Sortie de poubelles' },
] as const

export type SeoCity = (typeof seoCities)[number]
export type SeoService = (typeof seoServices)[number]

/** Construit le slug "service-ville" à partir d'un service et d'une ville */
export function seoSlug(service: SeoService, city: SeoCity) {
  const citySlug = city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return `${service.slug}-${citySlug}`
}
