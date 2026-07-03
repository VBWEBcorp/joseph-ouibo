'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  HardHat,
  Hammer,
  KeyRound,
  SprayCan,
  Trash2,
} from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'
import { pageHeroImages } from '@/lib/images'

const ease = [0.22, 1, 0.36, 1] as const
const defaultIcons = [Building2, SprayCan, HardHat, KeyRound, Trash2, Hammer]

const defaults = {
  hero: {
    eyebrow: 'Nos prestations',
    title: 'Du nettoyage courant à la fin de chantier',
    description:
      'Une offre complète pour les particuliers, les copropriétés, les entreprises et les professionnels du BTP, sur Mée-sur-Seine et dans un rayon de 100 km.',
    image: pageHeroImages.services,
  },
  services: [
    {
      title: 'Nettoyage courant des bâtiments',
      description:
        "Appartements, maisons, immeubles, bureaux, commerces et centres commerciaux. Entretien régulier ou prestation ponctuelle, avec produits et matériel professionnels.",
      bullets: [
        'Dépoussiérage, lavage des sols, désinfection',
        'Sanitaires, vitrerie, parties communes',
        'Contrats d\'entretien hebdomadaires ou mensuels',
      ],
    },
    {
      title: 'Lavage extérieur',
      description:
        "Façades, toitures et terrasses : nettoyage haute pression ou nettoyage doux selon le support, élimination des mousses, lichens et traces noires.",
      bullets: [
        'Façades de maisons et d\'immeubles',
        'Toitures (tuiles, ardoises, fibrociment)',
        'Terrasses, parkings, allées extérieures',
      ],
    },
    {
      title: 'Nettoyage de chantier',
      description:
        "Baraques, vestiaires, réfectoires, containers WC et nettoyage de fin de chantier. Intervention rapide, équipement complet, respect des normes d\'hygiène.",
      bullets: [
        'Bungalows et bases-vie de chantier',
        'Containers et sanitaires mobiles',
        'Nettoyage fin de chantier (avant livraison)',
      ],
    },
    {
      title: 'Locations Airbnb & courte durée',
      description:
        "Ménage entre deux séjours pour hôtes et conciergeries. Linge, inventaire, photos de retour : on s\'adapte à vos process.",
      bullets: [
        'Check-out / check-in synchronisés',
        'Gestion du linge (en option)',
        'Photo et signalement des éventuels dégâts',
      ],
    },
    {
      title: 'Sortie de poubelles & gestion des bacs',
      description:
        "Sortie et rentrée des bacs aux jours de collecte, désinfection des locaux à poubelles. Idéal pour copropriétés, syndics et propriétaires absents.",
      bullets: [
        'Sortie / rentrée des bacs (toutes fréquences)',
        'Nettoyage et désinfection des locaux',
        'Forfait mensuel à partir de quelques euros par bac',
      ],
    },
    {
      title: 'Maçonnerie & peinture',
      description:
        "Petits travaux de maçonnerie et reprises de peinture en complément du nettoyage : remise en état d\'un logement, après chantier ou changement de locataire.",
      bullets: [
        'Reprises de peinture intérieure',
        'Petits travaux de maçonnerie',
        'Remise en état de logements',
      ],
    },
  ],
}

export function ServicesContent() {
  const { data } = useContent('services', defaults)
  const hero = data.hero ?? defaults.hero
  const services = data.services ?? defaults.services

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Prestations"
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s: any, i: number) => {
              const Icon = defaultIcons[i] ?? Building2
              return (
                <motion.div
                  key={s.title || i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, ease, delay: i * 0.04 }}
                >
                  <Card className="flex h-full flex-col rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                    <CardHeader className="flex-1">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <CardTitle className="font-display text-base">{s.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {s.description}
                      </CardDescription>
                      {s.bullets && s.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b: string, j: number) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-[13px] leading-relaxed text-muted-foreground"
                            >
                              <span
                                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                                aria-hidden
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
