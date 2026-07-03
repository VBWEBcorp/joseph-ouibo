'use client'

import { ArrowRight, Clock, Phone } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'

function ComingSoonInner() {
  const params = useSearchParams()
  const requested = params.get('p')

  return (
    <main className="relative isolate flex min-h-[calc(100dvh-80px)] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background"
      />

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          <Clock className="size-3" aria-hidden />
          En cours de rédaction
        </span>

        <h1 className="mt-6 font-display text-balance text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
          Cette page arrive bientôt
        </h1>

        {requested && (
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nous préparons une page dédiée pour&nbsp;:
            <span className="mt-2 block font-semibold text-foreground">
              « {requested} »
            </span>
          </p>
        )}

        <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
          En attendant, Concept Hygiène intervient déjà sur cette zone et pour cette prestation.
          Appelez-nous ou demandez un devis en ligne&nbsp;: réponse sous 24h.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="group bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/40"
            asChild
          >
            <Link href="/contact">
              Demander un devis
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`tel:${siteConfig.phoneE164}`}>
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
          </Button>
        </div>

        <div className="mt-12 text-sm">
          <Link
            href="/services"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            ← Voir toutes nos prestations
          </Link>
        </div>
      </div>
    </main>
  )
}

export function ComingSoonContent() {
  return (
    <Suspense fallback={null}>
      <ComingSoonInner />
    </Suspense>
  )
}
