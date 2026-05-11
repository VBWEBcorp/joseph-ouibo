'use client'

import { motion } from 'framer-motion'
import { Award, MapPin, ShieldCheck, Truck } from 'lucide-react'
import Image from 'next/image'

import { galleryImages } from '@/lib/images'

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  {
    icon: Award,
    title: 'Qualibat 2018',
    desc: 'Entreprise qualifiée Qualibat, gage de sérieux et de respect des règles de l\'art.',
  },
  {
    icon: MapPin,
    title: '100 km à la ronde',
    desc: 'Mée-sur-Seine, Melun, Évry, Fontainebleau, Corbeil, Sénart, jusqu\'à Paris.',
  },
  {
    icon: Truck,
    title: 'Devis sur place gratuit',
    desc: 'On se déplace, on évalue, on chiffre. Pas de surprise une fois sur le chantier.',
  },
  {
    icon: ShieldCheck,
    title: 'Sans engagement',
    desc: 'Ponctuel ou contrat d\'entretien : vous choisissez. On s\'adapte à vos besoins.',
  },
]

const carouselImages = [
  ...galleryImages,
  'https://i.ibb.co/RkYYFCc4/Concept-Hygiene-Nettoyage-Pro.webp',
  'https://i.ibb.co/MyhSN0Dd/Concept-Hygiene-Nettoyage-exterieur.webp',
  'https://i.ibb.co/8nqwcx6H/Concept-Hygiene-Nettoyage-bureaux.webp',
  'https://i.ibb.co/hR0rMFZq/Concept-Hygiene-Nettoyage-professionnel.webp',
]

function ImageMarquee() {
  // On duplique une fois pour la boucle infinie sans saut
  const items = [...carouselImages, ...carouselImages]

  return (
    <div className="group relative mt-12 overflow-hidden">
      {/* Fades latéraux pour fondu doux */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/40 to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted/40 to-transparent sm:w-28" />

      <div className="flex w-max gap-4 animate-marquee-left group-hover:[animation-play-state:paused]">
        {items.map((src, i) => (
          <figure
            key={`${src}-${i}`}
            className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 sm:h-52 sm:w-72"
          >
            <Image
              src={src}
              alt="Réalisation Concept Hygiène"
              fill
              sizes="(min-width:640px) 288px, 256px"
              loading="lazy"
              className="object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

export function TrustSection() {
  return (
    <section className="border-b border-border/60 bg-muted/15">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.05 }}
                className="flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <ImageMarquee />
      </div>
    </section>
  )
}
