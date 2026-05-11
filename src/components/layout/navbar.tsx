'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Logo } from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/seo'

interface NavLink {
  to: string
  label: string
}

const navLinks: NavLink[] = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Prestations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/gallery', label: 'Réalisations' },
  { to: '/blog', label: 'Conseils' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition-shadow duration-300 dark:bg-zinc-950/95 supports-[backdrop-filter]:dark:bg-zinc-950/80',
        scrolled
          ? 'border-border/80 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.12)]'
          : 'border-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo (gauche) */}
        <Logo showText={false} imageSize="lg" />

        {/* Navigation (centre/droite) */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((l) => {
            const isActive =
              l.to === '/' ? pathname === '/' : pathname?.startsWith(l.to)
            return (
              <Link
                key={l.to}
                href={l.to}
                className={cn(
                  'relative whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 rounded-md',
                  isActive
                    ? 'text-primary'
                    : 'text-foreground/75 hover:text-primary'
                )}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-[22px] left-3 right-3 h-[3px] rounded-t-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    aria-hidden
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Actions (droite) */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Téléphone visible sur tablette+ */}
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted md:inline-flex"
          >
            <Phone className="size-4 text-primary" aria-hidden />
            <span>{siteConfig.phone}</span>
          </a>

          <Button
            size="default"
            className="hidden whitespace-nowrap bg-blue-500 text-white shadow-sm shadow-blue-500/20 hover:bg-blue-600 focus-visible:ring-blue-500/50 sm:inline-flex"
            asChild
          >
            <Link href="/contact">Devis gratuit</Link>
          </Button>

          {/* Bouton mobile */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/60 bg-white dark:bg-zinc-950 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
                {navLinks.map((l) => {
                  const isActive =
                    l.to === '/' ? pathname === '/' : pathname?.startsWith(l.to)
                  return (
                    <Link
                      key={l.to}
                      href={l.to}
                      className={cn(
                        'rounded-lg px-3 py-3 text-[15px] font-medium transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground/80 hover:bg-muted'
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-4 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="size-4 text-primary" aria-hidden />
                  {siteConfig.phone}
                </a>
                <Button
                  className="flex-1 bg-blue-500 text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Devis gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
