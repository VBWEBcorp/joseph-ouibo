import type { Metadata } from 'next'

import { siteConfig } from '@/lib/seo'
import { pageHeroImages } from '@/lib/images'
import GalleryContent from './gallery-content'

export const revalidate = 3600

const fallbackImages = [
  {
    _id: 'fb-1',
    title: 'Nettoyage de bureaux',
    description: "Entretien complet des bureaux d'une agence.",
    imageUrl: 'https://i.ibb.co/rGXkM9xD/07e063d9-02fd-4dd4-b8c2-bf207fcd896a-1-all-5907.jpg',
    category: 'Bureaux',
  },
  {
    _id: 'fb-2',
    title: 'Agence commerciale',
    description: "Sols et mobilier d'une agence remis à neuf.",
    imageUrl: 'https://i.ibb.co/gLCGV5MX/07e063d9-02fd-4dd4-b8c2-bf207fcd896a-1-all-5909.jpg',
    category: 'Bureaux',
  },
  {
    _id: 'fb-3',
    title: 'Vitrines & devanture',
    description: "Nettoyage de la devanture et des vitrines d'un commerce.",
    imageUrl: 'https://i.ibb.co/ccZg777r/07e063d9-02fd-4dd4-b8c2-bf207fcd896a-1-all-5901.jpg',
    category: 'Commerce',
  },
  {
    _id: 'fb-4',
    title: 'Bureau professionnel',
    description: 'Entretien hebdomadaire de bureaux à Melun.',
    imageUrl: 'https://i.ibb.co/wh6tfrtk/Concept-Hygiene-Nettoyage-bureau.webp',
    category: 'Bureaux',
  },
  {
    _id: 'fb-5',
    title: 'Sanitaires et salle de bain',
    description: 'Désinfection complète après location courte durée.',
    imageUrl: 'https://i.ibb.co/sSZLQh6/Whats-App-Image-2025-07-23-at-14-02-41.avif',
    category: 'Airbnb',
  },
  {
    _id: 'fb-6',
    title: 'Salle de bain remise à neuf',
    description: 'Nettoyage complet des sanitaires et de la robinetterie.',
    imageUrl: 'https://i.ibb.co/ksYYPLZ6/Whats-App-Image-2025-07-23-at-14-02-40-4.avif',
    category: 'Résidentiel',
  },
  {
    _id: 'fb-7',
    title: 'Finitions soignées',
    description: 'Nettoyage détaillé des points de contact et surfaces.',
    imageUrl: 'https://i.ibb.co/PZhhQQ4x/Whats-App-Image-2025-07-23-at-14-02-40-2.avif',
    category: 'Résidentiel',
  },
  {
    _id: 'fb-8',
    title: 'Remise en état',
    description: 'Logement remis à neuf entre deux locataires.',
    imageUrl: 'https://i.ibb.co/WNmn6L7t/Whats-App-Image-2025-07-23-at-14-02-40-3.avif',
    category: 'Résidentiel',
  },
]

const defaultSettings = {
  enabled: true,
  title: 'Nos réalisations',
  description:
    'Nos réalisations récentes, particuliers comme professionnels, dans toute l\'Île-de-France. Photos prises directement sur le terrain par Concept Hygiène.',
  eyebrow: 'Réalisations',
  heroImage: pageHeroImages.gallery,
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: defaultSettings.title,
    description: defaultSettings.description,
    openGraph: {
      type: 'website',
      title: defaultSettings.title,
      description: defaultSettings.description,
      url: `${siteConfig.url}/gallery`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: defaultSettings.heroImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultSettings.title,
      description: defaultSettings.description,
      images: [defaultSettings.heroImage],
    },
    alternates: {
      canonical: '/gallery',
    },
  }
}

export default function GalleryPage() {
  // Galerie figée sur les photos BlitzClean intégrées : on n'utilise pas la base
  // (celle-ci contient les données d'un autre projet).
  return (
    <GalleryContent
      initialSettings={defaultSettings as any}
      initialImages={fallbackImages as any}
    />
  )
}
