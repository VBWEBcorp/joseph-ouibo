'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  image: string
  breadcrumb: string
}

export function PageHero({ eyebrow, title, description, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-primary"
              >
                <Home className="size-3" aria-hidden />
                <span>Accueil</span>
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3 text-muted-foreground/50" aria-hidden />
              <span aria-current="page" className="font-medium text-foreground/80">
                {breadcrumb}
              </span>
            </li>
          </ol>
        </nav>

        {/* Grande image en haut */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease }}
          className="mt-5 overflow-hidden rounded-3xl shadow-[var(--shadow-md)] ring-1 ring-foreground/5"
        >
          <div className="relative aspect-[16/10] sm:aspect-[2/1]">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              priority
              className="object-cover"
            />
            {/* Accent vert discret en bas de l'image */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
        </motion.div>

        {/* Titre + intro sous l'image (fond clair) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="max-w-3xl pb-14 pt-8 sm:pb-16 sm:pt-10"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
