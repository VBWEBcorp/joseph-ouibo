'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

const segments = [
  {
    label: 'Professionnels',
    description: 'Bureaux, commerces, copropriétés et fins de chantier.',
    // Photo de réalisation en milieu professionnel (agence nettoyée)
    image: 'https://i.ibb.co/rGXkM9xD/07e063d9-02fd-4dd4-b8c2-bf207fcd896a-1-all-5907.jpg',
    href: '/services',
  },
  {
    label: 'Particuliers',
    description: 'Maisons, appartements, locations Airbnb et remises en état.',
    // Photo de réalisation chez un particulier (salle de bain)
    image: 'https://i.ibb.co/sSZLQh6/Whats-App-Image-2025-07-23-at-14-02-41.avif',
    href: '/services',
  },
]

export function AudienceSplit() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Nos clients
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Professionnels &amp; particuliers
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Une approche personnalisée pour chaque besoin, du chantier au logement.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {segments.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
            >
              <Link
                href={s.href}
                className="group relative block overflow-hidden rounded-3xl shadow-[var(--shadow-md)] ring-1 ring-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-[4/5] sm:aspect-[4/3]">
                  <Image
                    src={s.image}
                    alt={`Nettoyage pour ${s.label.toLowerCase()}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Voile pour la lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  {/* Teinte verte au survol */}
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {s.label}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-pretty text-sm text-white/85">
                    {s.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Découvrir nos prestations
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
