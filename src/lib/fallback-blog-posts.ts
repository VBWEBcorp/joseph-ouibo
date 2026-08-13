/**
 * Articles de blog en dur, utilisés tant que la base de données
 * MongoDB n'est pas connectée. Permet de présenter au client
 * un aperçu fonctionnel de la rubrique conseils.
 *
 * Tous les visuels sont les vraies photos BlitzClean.
 */

export type FallbackPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  content: string
  metaDescription?: string
}

// Articles de demonstration du template : vides sur ce site, le blog est
// alimente par MongoDB (back-office et webhook PHARE). Un tableau vide fait
// simplement une liste sans article, et un slug inconnu repond 404.
export const fallbackBlogPosts: FallbackPost[] = []

export const fallbackBlogSettings = {
  enabled: true,
  title: 'Conseils & actualités',
  description:
    "Des articles pratiques pour bien préparer un chantier, optimiser un ménage Airbnb, choisir une méthode de lavage de façade ou comprendre vos obligations en copropriété.",
  eyebrow: 'Conseils BlitzClean',
  heroImage: 'https://i.ibb.co/hR0rMFZq/Concept-Hygiene-Nettoyage-professionnel.webp',
  categories: ['Chantier', 'Airbnb', 'Lavage extérieur', 'Copropriété', 'Résidentiel'],
}

export function findFallbackPostBySlug(slug: string): FallbackPost | undefined {
  return fallbackBlogPosts.find((p) => p.slug === slug)
}
