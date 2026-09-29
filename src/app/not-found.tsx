import { ArrowRight, Home, Phone } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'

/**
 * Page 404.
 *
 * Clin d'œil au métier : une entreprise de nettoyage qui a fait le ménage
 * un peu trop à fond. Ça désamorce l'erreur sans faire perdre le visiteur.
 */

const sorties = [
  { to: '/services', label: 'Prestations' },
  { to: '/gallery', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/blog', label: 'Conseils' },
]

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center px-5 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Erreur 404
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          On a fait le ménage
          <span className="block text-primary">un peu trop à fond</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-pretty text-[17px] leading-relaxed text-muted-foreground">
          Cette page n&apos;existe pas, ou plus. Promis, c&apos;est la seule chose
          qu&apos;on ait fait disparaître sans qu&apos;on nous le demande.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home aria-hidden />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${siteConfig.phoneE164}`}>
              <Phone aria-hidden />
              Demander un devis
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {sorties.map((s) => (
            <Link
              key={s.to}
              href={s.to}
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label}
              <ArrowRight
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
