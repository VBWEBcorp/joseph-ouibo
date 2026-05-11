import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Nettoyage de bâtiments, lavage de façades, fin de chantier, baraques BTP, locations Airbnb, sortie de poubelles, maçonnerie : toutes les prestations de Concept Hygiène à Mée-sur-Seine et 100 km autour.'

const services = [
  {
    title: 'Nettoyage courant des bâtiments',
    desc: 'Appartements, maisons, bureaux, commerces et centres commerciaux. Entretien régulier ou ponctuel avec matériel professionnel.',
  },
  {
    title: 'Lavage extérieur',
    desc: 'Façades, toitures et terrasses : nettoyage haute pression ou doux pour tous types de surfaces.',
  },
  {
    title: 'Nettoyage de chantier',
    desc: 'Baraques, vestiaires, containers WC et nettoyage de fin de chantier. Intervention rapide en Île-de-France.',
  },
  {
    title: 'Locations Airbnb & courte durée',
    desc: 'Ménage entre deux séjours, gestion du linge et de l\'inventaire pour hôtes et conciergeries.',
  },
  {
    title: 'Sortie de poubelles & gestion des bacs',
    desc: 'Sortie / rentrée des bacs, nettoyage des locaux à poubelles pour copropriétés et particuliers.',
  },
  {
    title: 'Maçonnerie & peinture',
    desc: 'Petits travaux, reprises de peinture et remise en état de logements en complément du nettoyage.',
  },
]

export const metadata: Metadata = {
  title: 'Nos prestations',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Nos prestations', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Prestations', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
