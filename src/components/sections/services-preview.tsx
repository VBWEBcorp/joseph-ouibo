'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, HardHat, KeyRound, SprayCan } from 'lucide-react'
import Link from 'next/link'

import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'

const defaultServices = [
  {
    title: 'Nettoyage de bâtiments',
    desc: "Appartements, maisons, bureaux, commerces, centres commerciaux : entretien courant ou remise en état complète, en ponctuel ou sous contrat.",
  },
  {
    title: 'Lavage extérieur',
    desc: "Façades, toitures, terrasses : haute pression ou nettoyage doux pour redonner de l'éclat à vos surfaces extérieures.",
  },
  {
    title: 'Nettoyage de chantier',
    desc: "Baraques, vestiaires, containers WC, fin de chantier : un seul interlocuteur, devis transparent et intervention rapide partout en Île-de-France.",
  },
  {
    title: 'Locations Airbnb & courte durée',
    desc: "Ménage entre deux séjours, gestion du linge, contrôle de l'inventaire. On respecte vos check-out serrés et vos exigences de propreté.",
  },
]

const defaultIcons = [Building2, SprayCan, HardHat, KeyRound]

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesPreview() {
  const { data } = useContent('services', {
    hero: { eyebrow: 'Nos services' },
    services: defaultServices,
  })

  const services = (data.services ?? defaultServices).slice(0, 4)

  return (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Nos prestations"
          title="Une expertise du chantier au logement"
          description="BTP, particuliers, locations courte durée : un seul interlocuteur pour tous vos besoins de nettoyage, partout dans un rayon de 100 km autour de Mée-sur-Seine."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
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
                <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="font-display text-base">{s.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{s.desc || s.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="group" asChild>
            <Link href="/services">
              Voir toutes les prestations
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
