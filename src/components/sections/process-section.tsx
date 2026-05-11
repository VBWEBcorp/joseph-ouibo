'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ClipboardCheck, PhoneCall, SprayCan } from 'lucide-react'
import Link from 'next/link'

import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Vous nous appelez',
    desc: "Décrivez-nous votre besoin par téléphone ou via le formulaire. On vous rappelle sous 24h pour caler un rendez-vous.",
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'On vient voir',
    desc: "Joseph se déplace gratuitement pour évaluer la prestation, prendre les mesures et vous remettre un devis détaillé sur place.",
  },
  {
    icon: SprayCan,
    number: '03',
    title: 'On intervient',
    desc: "Une fois le devis validé, on planifie l'intervention. Matériel pro, produits adaptés, et un travail soigné jusqu'au moindre détail.",
  },
]

export function ProcessSection() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Comment ça marche ?"
          title="Trois étapes, zéro mauvaise surprise"
          description="Notre méthode est volontairement simple : vous savez à quoi vous attendre du premier appel à la facture finale."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLast = i === steps.length - 1
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="relative"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-7 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-md)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-primary/8 blur-2xl"
                  />

                  <div className="relative flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground ring-1 ring-primary/20 shadow-md shadow-primary/15">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-4xl font-bold leading-none text-primary/15">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>

                {!isLast && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-full hidden h-6 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 to-transparent md:block md:left-auto md:right-[-15px] md:top-1/2 md:h-px md:w-6 md:bg-gradient-to-r md:-translate-y-1/2 md:translate-x-0"
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="group bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500/50"
            asChild
          >
            <Link href="/contact">
              Démarrer maintenant
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
