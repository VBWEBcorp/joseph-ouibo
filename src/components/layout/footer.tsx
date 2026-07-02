import { ArrowUpRight, Award, Instagram } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/components/layout/logo'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Prestations', to: '/services' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
  { label: 'CGU', to: '/conditions-generales' },
  { label: 'Cookies', to: '/politique-cookies' },
]

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top: brand + nav columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="inverted" />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Entreprise de nettoyage qualifiée Qualibat 2018. Bâtiments, chantiers BTP, locations Airbnb et copropriétés à 100 km autour de Mée-sur-Seine.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                <Award className="size-3" aria-hidden />
                Qualibat 2018
              </span>
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Instagram className="size-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="group inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Légal">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Légal
            </h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="group inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="font-semibold text-white transition-colors hover:text-emerald-300"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li className="text-zinc-500">
                {siteConfig.address.city}
                <br />
                {siteConfig.address.postalCode} — {siteConfig.address.region}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name} — SIRET à compléter
          </p>
          <p className="text-xs text-zinc-500">
            Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
