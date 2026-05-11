import type { Metadata } from 'next'

import { connectDB } from '@/lib/db'
import { GallerySettings, GalleryImage } from '@/models/Gallery'
import { siteConfig } from '@/lib/seo'
import { galleryImages, pageHeroImages } from '@/lib/images'
import GalleryContent from './gallery-content'

export const revalidate = 3600

const fallbackImages = [
  {
    _id: 'fb-1',
    title: 'Nettoyage de fin de chantier',
    description: 'Remise en état complète d\'un appartement après travaux.',
    imageUrl: galleryImages[0],
    category: 'Chantier',
  },
  {
    _id: 'fb-2',
    title: 'Bureau professionnel',
    description: 'Entretien hebdomadaire de bureaux à Melun.',
    imageUrl: galleryImages[5],
    category: 'Bureaux',
  },
  {
    _id: 'fb-3',
    title: 'Lavage extérieur',
    description: 'Nettoyage de façade haute pression sur une maison individuelle.',
    imageUrl: 'https://i.ibb.co/MyhSN0Dd/Concept-Hygiene-Nettoyage-exterieur.webp',
    category: 'Lavage extérieur',
  },
  {
    _id: 'fb-4',
    title: 'Sanitaires et salle de bain',
    description: 'Désinfection complète après location courte durée.',
    imageUrl: galleryImages[1],
    category: 'Airbnb',
  },
  {
    _id: 'fb-5',
    title: 'Espaces communs',
    description: 'Nettoyage de parties communes en copropriété.',
    imageUrl: galleryImages[2],
    category: 'Copropriété',
  },
  {
    _id: 'fb-6',
    title: 'Remise en état',
    description: 'Logement remis à neuf entre deux locataires.',
    imageUrl: galleryImages[3],
    category: 'Résidentiel',
  },
  {
    _id: 'fb-7',
    title: 'Détail soigné',
    description: 'Désinfection des points de contact et finitions.',
    imageUrl: galleryImages[4],
    category: 'Résidentiel',
  },
  {
    _id: 'fb-8',
    title: 'Nettoyage professionnel',
    description: 'Intervention sur centre commercial — entretien régulier.',
    imageUrl: 'https://i.ibb.co/RkYYFCc4/Concept-Hygiene-Nettoyage-Pro.webp',
    category: 'Commerce',
  },
]

const defaultSettings = {
  enabled: true,
  title: 'Nos réalisations',
  description:
    'Quelques chantiers récents, particuliers comme professionnels, dans toute l\'Île-de-France. Photos prises directement sur le terrain par Concept Hygiène.',
  eyebrow: 'Réalisations',
  heroImage: pageHeroImages.gallery,
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    await connectDB()
    const settings = (await GallerySettings.findOne().lean()) as any

    const title = settings?.title || defaultSettings.title
    const description = settings?.description || defaultSettings.description

    return {
      title,
      description,
      openGraph: {
        type: 'website',
        title,
        description,
        url: `${siteConfig.url}/gallery`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        images: settings?.heroImage ? [{ url: settings.heroImage }] : [{ url: defaultSettings.heroImage }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: settings?.heroImage ? [settings.heroImage] : [defaultSettings.heroImage],
      },
      alternates: {
        canonical: '/gallery',
      },
    }
  } catch {
    return {
      title: defaultSettings.title,
      description: defaultSettings.description,
      alternates: { canonical: '/gallery' },
    }
  }
}

export default async function GalleryPage() {
  let settings: any = defaultSettings
  let images: any[] = []

  try {
    await connectDB()
    const [settingsDoc, imagesDocs] = await Promise.all([
      GallerySettings.findOne().lean(),
      GalleryImage.find({ active: true })
        .sort({ order: 1 })
        .select('title description imageUrl category')
        .limit(60)
        .lean(),
    ])

    if (settingsDoc) settings = settingsDoc
    images = (imagesDocs as any[]).map((img) => ({
      ...img,
      _id: String(img._id),
    }))
  } catch {
    // Fallback gracieux : on utilise les défauts ci-dessous
  }

  // Si la DB n'a aucune image, on injecte les images de démo (vraies photos client)
  if (images.length === 0) {
    images = fallbackImages
  }

  return <GalleryContent initialSettings={settings as any} initialImages={images as any} />
}
