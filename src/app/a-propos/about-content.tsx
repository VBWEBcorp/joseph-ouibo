'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, HeartHandshake, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'
import { aboutImages, pageHeroImages } from '@/lib/images'

const ease = [0.22, 1, 0.36, 1] as const
const defaultIcons = [HeartHandshake, ShieldCheck, Award]

const defaults = {
  hero: {
    eyebrow: 'À propos',
    title: 'BlitzClean, le nettoyage par un vrai pro',
    description:
      "Une entreprise familiale du Mée-sur-Seine, qualifiée Qualibat depuis 2018, qui intervient pour les particuliers, les copropriétés, les entreprises et les chantiers du BTP dans toute l'Île-de-France.",
    image: pageHeroImages.about,
  },
  values: [
    {
      title: 'Proximité',
      description:
        "Un interlocuteur unique du devis à la facture. Pas de plateforme, pas de sous-traitance opaque : c'est Joseph qui vient voir, et Joseph qui suit le chantier.",
    },
    {
      title: 'Sérieux',
      description:
        "Devis détaillé sur place, prix tenu, délais respectés. BlitzClean est qualifiée Qualibat 2018, gage de respect des règles de l'art.",
    },
    {
      title: 'Polyvalence',
      description:
        "Nettoyage courant, lavage extérieur, fin de chantier, Airbnb, sortie de poubelles, petits travaux : un seul prestataire pour tous vos besoins.",
    },
  ],
  gallery: [...aboutImages],
}

function ValuesTimeline({ values }: { values: any[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative mx-auto mt-14 max-w-4xl">
      {/* Vertical line (background) */}
      <div
        aria-hidden
        className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
      />
      {/* Vertical line (animated fill) */}
      <motion.div
        aria-hidden
        style={{ height: lineHeight }}
        className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-primary md:left-1/2 md:-translate-x-1/2"
      />

      <ul className="space-y-12 md:space-y-16">
        {values.map((v: any, i: number) => {
          const Icon = defaultIcons[i] ?? HeartHandshake
          const isRight = i % 2 === 1
          return (
            <li key={v.title || i} className="relative">
              {/* Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease, delay: 0.15 }}
                className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
              >
                <span className="relative flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background shadow-[0_0_0_4px_var(--background)]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                  <Icon className="relative size-4 text-primary" aria-hidden />
                </span>
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? 20 : -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: 0.1 }}
                className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  isRight ? 'md:ml-[calc(50%+2.5rem)]' : 'md:mr-[calc(50%+2.5rem)]'
                }`}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  {/* Soft gradient wash on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[11px] font-bold tracking-[0.2em] text-primary">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.01em] text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function AboutContent() {
  const { data } = useContent('about', defaults)
  const hero = data.hero ?? defaults.hero
  const values = data.values ?? defaults.values
  const gallery = data.gallery ?? defaults.gallery

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="À propos"
      />

      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="Notre histoire"
            title="Du chantier au logement, un seul interlocuteur"
            description="Joseph a fondé BlitzClean pour répondre à un constat simple : trouver un nettoyage à la fois sérieux, polyvalent et joignable est devenu compliqué. L'entreprise est qualifiée Qualibat depuis 2018 et intervient aussi bien sur les bâtiments que sur les chantiers BTP."
          />
          <ValuesTimeline values={values} />
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle eyebrow="En images" title="Notre quotidien sur le terrain" />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {gallery.map((src: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Réalisation BlitzClean"
                  fill
                  sizes="(min-width:768px) 25vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
