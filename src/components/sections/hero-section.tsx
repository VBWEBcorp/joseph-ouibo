'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Award, Check, Phone, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useContent } from '@/hooks/use-content'
import { heroImages } from '@/lib/images'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const
const INTERVAL = 6000

const defaults = {
  eyebrow: 'Entreprise de nettoyage · 77 & alentours',
  title: 'Un nettoyage pro, du chantier au logement',
  description:
    'Baraques de chantier, containers WC, locations Airbnb, maisons et sortie de poubelles. Intervention rapide à 100 km autour de Mée-sur-Seine.',
  button1: 'Demander un devis gratuit',
  button2: 'Voir nos prestations',
  images: [...heroImages],
  bullets: [
    'Devis gratuit sur place sous 24h',
    'Qualibat 2018 — entreprise qualifiée',
    'Particuliers, BTP, copropriétés et Airbnb',
  ],
}

export function HeroSection() {
  const { data } = useContent('home', { hero: defaults })
  const hero = { ...defaults, ...(data.hero ?? {}) }
  const images = hero.images ?? defaults.images
  const bullets = hero.bullets ?? defaults.bullets
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      {/* Background images slider */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt=""
              fill
              sizes="100vw"
              priority={current === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Voile global */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.05_260/0.72)]" />
        {/* Renfort gauche pour la lisibilité du texte */}
        <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10 lg:right-1/3" />
        {/* Léger gradient bas */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:px-8 lg:py-10 xl:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-14">
          {/* Colonne gauche : pitch */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="text-white"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-300/30 bg-blue-500/20 px-2.5 py-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200 backdrop-blur-sm">
                <Award className="size-3" aria-hidden />
                Qualibat 2018
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                <Sparkles className="size-3" aria-hidden />
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-5 font-display text-balance text-3xl leading-[1.07] tracking-[-0.03em] sm:text-4xl lg:text-[44px] xl:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base lg:text-[15px] xl:text-base">
              {hero.description}
            </p>

            <ul className="mt-5 space-y-2">
              {bullets.map((b: string) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-white/85"
                >
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-500/95 text-white">
                    <Check className="size-2.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Button
                className="group h-11 bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 focus-visible:ring-blue-500/50"
                asChild
              >
                <Link href="/contact">
                  {hero.button1}
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-11 border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                asChild
              >
                <a href={`tel:${siteConfig.phoneE164}`}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Colonne droite : carte formulaire devis */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-5 shadow-[0_30px_70px_-20px_rgba(15,23,42,0.45)] ring-1 ring-foreground/5 sm:p-6 dark:bg-zinc-900">
              {/* Header carte */}
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-600 ring-1 ring-blue-500/20 dark:text-blue-400">
                  <Sparkles className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-[15px] font-bold leading-tight text-foreground">
                    Devis gratuit en 2 min
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Réponse sous 24h, sans engagement.
                  </p>
                </div>
              </div>

              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label htmlFor="hero-name" className="text-[11px] font-semibold">
                      Prénom & nom
                    </Label>
                    <Input
                      id="hero-name"
                      name="name"
                      placeholder="Jean Dupont"
                      autoComplete="name"
                      className="h-9 rounded-lg text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="hero-phone" className="text-[11px] font-semibold">
                      Téléphone
                    </Label>
                    <Input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      autoComplete="tel"
                      className="h-9 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="hero-email" className="text-[11px] font-semibold">
                    Email
                  </Label>
                  <Input
                    id="hero-email"
                    name="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    autoComplete="email"
                    className="h-9 rounded-lg text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="hero-prestation" className="text-[11px] font-semibold">
                    Type de prestation
                  </Label>
                  <select
                    id="hero-prestation"
                    name="prestation"
                    defaultValue=""
                    className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-foreground transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                  >
                    <option value="" disabled>
                      Choisir une prestation…
                    </option>
                    <option value="batiment">Nettoyage de bâtiment</option>
                    <option value="exterieur">Lavage extérieur</option>
                    <option value="chantier">Nettoyage de chantier</option>
                    <option value="airbnb">Location Airbnb</option>
                    <option value="poubelles">Sortie de poubelles</option>
                    <option value="travaux">Maçonnerie / peinture</option>
                    <option value="autre">Autre / à définir</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="group mt-1 h-11 w-full bg-blue-500 text-white shadow-md shadow-blue-500/25 hover:bg-blue-600 focus-visible:ring-blue-500/50"
                >
                  Recevoir mon devis
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Button>

                <p className="text-center text-[10px] text-muted-foreground">
                  Vos informations restent confidentielles. Aucun spam.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Pagination images discrète */}
        <div className="mt-8 flex justify-center gap-1.5 lg:mt-6">
          {images.map((_: string, i: number) => (
            <button
              key={i}
              type="button"
              aria-label={`Image ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-white' : 'w-4 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
