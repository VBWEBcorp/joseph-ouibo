import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { connectDB } from '@/lib/db'
import { BlogPost } from '@/models/Blog'
import { visiblePostFilter } from '@/lib/blog-filters'
import { siteConfig } from '@/lib/seo'
import { findFallbackPostBySlug, fallbackBlogPosts } from '@/lib/fallback-blog-posts'
import BlogPostContent from './blog-post-content'

type Params = Promise<{ slug: string }>

// Revalidate every 60 minutes, new articles will be picked up automatically
export const revalidate = 3600

// Pre-render all published blog posts at build time
export async function generateStaticParams() {
  const fallbackParams = fallbackBlogPosts.map((p) => ({ slug: p.slug }))
  try {
    await connectDB()
    const posts = await BlogPost.find(visiblePostFilter()).select('slug').lean()
    const dbParams = posts.map((post) => ({ slug: (post as any).slug }))
    // On combine DB + fallback (utile pour la démo sans DB)
    const seen = new Set<string>()
    return [...dbParams, ...fallbackParams].filter((p) => {
      if (seen.has(p.slug)) return false
      seen.add(p.slug)
      return true
    })
  } catch {
    return fallbackParams
  }
}

// Generate SEO metadata server-side, visible to Google on first crawl
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params

  try {
    await connectDB()
    let post: any = await BlogPost.findOne({ slug, ...visiblePostFilter() }).lean()

    // Fallback : si pas en base, on regarde dans les articles de démo
    if (!post) {
      const fb = findFallbackPostBySlug(slug)
      if (fb) {
        post = {
          ...fb,
          publishedAt: new Date(fb.publishedAt),
          updatedAt: new Date(fb.publishedAt),
        }
      }
    }

    if (!post) return {}

    const title = post.metaTitle || post.title
    const description = (post.metaDescription || post.excerpt || '').substring(0, 160)
    const url = `${siteConfig.url}/blog/${post.slug}`

    return {
      title,
      description,
      authors: post.author ? [{ name: post.author }] : [],
      openGraph: {
        type: 'article',
        title,
        description,
        url,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        images: post.coverImage ? [{ url: post.coverImage, width: 1200, height: 630, alt: title }] : [],
        publishedTime: post.publishedAt?.toISOString(),
        modifiedTime: post.updatedAt?.toISOString(),
        authors: post.author ? [post.author] : [],
        tags: post.tags || [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: post.coverImage ? [post.coverImage] : [],
      },
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params

  let post: any = null
  try {
    await connectDB()
    post = await BlogPost.findOne({ slug, ...visiblePostFilter() }).lean()
  } catch {
    // DB indisponible — on continue avec le fallback ci-dessous
  }

  // Fallback : si pas en base (ou DB KO), on cherche dans les articles de démo
  if (!post) {
    const fb = findFallbackPostBySlug(slug)
    if (fb) {
      post = {
        ...fb,
        publishedAt: new Date(fb.publishedAt),
        updatedAt: new Date(fb.publishedAt),
        published: true,
      }
    }
  }

  if (!post) notFound()

  // JSON-LD pour le référencement
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: post.coverImage || undefined,
    datePublished: post.publishedAt instanceof Date
      ? post.publishedAt.toISOString()
      : post.publishedAt,
    dateModified: post.updatedAt instanceof Date
      ? post.updatedAt.toISOString()
      : post.updatedAt,
    author: post.author ? { '@type': 'Person', name: post.author } : undefined,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  }

  // On sérialise un post propre à passer au client component
  const initialPost = {
    _id: String(post._id ?? post.slug),
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? '',
    content: post.content ?? '',
    coverImage: post.coverImage ?? '',
    category: post.category ?? '',
    tags: post.tags ?? [],
    author: post.author ?? '',
    published: true,
    publishedAt:
      post.publishedAt instanceof Date
        ? post.publishedAt.toISOString()
        : post.publishedAt,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent slug={slug} initialPost={initialPost} />
    </>
  )
}
