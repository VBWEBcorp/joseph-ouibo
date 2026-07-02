import type { Metadata } from 'next'

import { connectDB } from '@/lib/db'
import { BlogSettings, BlogPost } from '@/models/Blog'
import { visiblePostFilter } from '@/lib/blog-filters'
import { siteConfig } from '@/lib/seo'
import { fallbackBlogPosts, fallbackBlogSettings } from '@/lib/fallback-blog-posts'
import BlogPageContent from './blog-page-content'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  try {
    await connectDB()
    const settings = await BlogSettings.findOne().lean() as any

    const title = settings?.title || 'Blog'
    const description = settings?.description || 'Découvrez nos articles, conseils et actualités.'

    return {
      title,
      description,
      openGraph: {
        type: 'website',
        title,
        description,
        url: `${siteConfig.url}/blog`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        images: settings?.heroImage ? [{ url: settings.heroImage }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: settings?.heroImage ? [settings.heroImage] : [],
      },
      alternates: {
        canonical: '/blog',
      },
    }
  } catch {
    return { title: 'Blog' }
  }
}

const defaultSettings = fallbackBlogSettings

export default async function BlogPage() {
  let settings: any = defaultSettings
  let posts: any[] = []
  let jsonLd = null

  try {
    await connectDB()
    const [settingsDoc, postsDocs] = await Promise.all([
      BlogSettings.findOne().lean(),
      BlogPost.find(visiblePostFilter())
        .sort({ publishedAt: -1, createdAt: -1 })
        .select('title slug excerpt coverImage category tags author publishedAt')
        .limit(50)
        .lean(),
    ])

    if (settingsDoc) {
      // On ne passe que des champs simples au composant client
      // (pas l'ObjectId _id, ni les dates/__v de Mongoose).
      settings = {
        enabled: settingsDoc.enabled ?? defaultSettings.enabled,
        title: settingsDoc.title ?? defaultSettings.title,
        description: settingsDoc.description ?? defaultSettings.description,
        eyebrow: settingsDoc.eyebrow ?? defaultSettings.eyebrow,
        heroImage: settingsDoc.heroImage ?? defaultSettings.heroImage,
        categories: settingsDoc.categories ?? defaultSettings.categories,
      }
    }
    posts = (postsDocs as any[]).map((p) => ({
      ...p,
      _id: String(p._id),
      publishedAt: p.publishedAt ? new Date(p.publishedAt).toISOString() : null,
    }))

    // Si la DB n'a aucun article, on utilise les articles de démonstration
    if (posts.length === 0) {
      posts = fallbackBlogPosts
    }

    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: settings?.title || 'Blog',
      description: settings?.description || 'Nos dernières actualités',
      url: `${siteConfig.url}/blog`,
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: posts.slice(0, 20).map((post, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${siteConfig.url}/blog/${post.slug}`,
          name: post.title,
        })),
      },
    }
  } catch {
    // Fallback gracieux : DB indisponible, on injecte les articles de démo
    posts = fallbackBlogPosts
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPageContent initialSettings={settings as any} initialPosts={posts as any} />
    </>
  )
}
