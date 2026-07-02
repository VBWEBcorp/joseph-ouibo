import Image from 'next/image'
import Link from 'next/link'

import { brandLogo } from '@/lib/images'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/seo'

type LogoProps = {
  className?: string
  variant?: 'default' | 'inverted'
  showText?: boolean
  imageSize?: 'sm' | 'md' | 'lg' | 'xl'
}

// Ratio réel du logo BlitzClean (largeur / hauteur) une fois les marges rognées.
const LOGO_RATIO = 1000 / 882

const imageSizeMap = {
  sm: { class: 'h-8 w-auto sm:h-9', px: 36 },
  md: { class: 'h-10 w-auto sm:h-11', px: 44 },
  lg: { class: 'h-12 w-auto sm:h-14', px: 56 },
  xl: { class: 'h-14 w-auto sm:h-16', px: 64 },
}

export function Logo({
  className,
  variant = 'default',
  showText = true,
  imageSize = 'md',
}: LogoProps) {
  const sizes = imageSizeMap[imageSize]
  const isInverted = variant === 'inverted'

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Accueil`}
      className={cn(
        'group inline-flex items-center gap-3 transition-opacity hover:opacity-90',
        className
      )}
    >
      {/* En variante inversée (footer sombre), on garde un fond blanc pour la lisibilité.
          En variante par défaut (header blanc), le logo est posé naturellement, sans badge. */}
      {isInverted ? (
        <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-white/20">
          <Image
            src={brandLogo}
            alt={`Logo ${siteConfig.name}`}
            width={48}
            height={48}
            priority
            className="size-full object-contain"
          />
        </span>
      ) : (
        <Image
          src={brandLogo}
          alt={`Logo ${siteConfig.name}`}
          width={Math.round(sizes.px * LOGO_RATIO)}
          height={sizes.px}
          priority
          className={cn(
            'object-contain transition-transform duration-300 group-hover:scale-[1.03]',
            sizes.class
          )}
        />
      )}

      {showText && (
        <span
          className={cn(
            'leading-none',
            isInverted ? 'text-white' : 'text-foreground'
          )}
        >
          <span className="block font-display text-base font-bold tracking-tight">
            Concept
          </span>
          <span
            className={cn(
              '-mt-0.5 block font-display text-[10px] font-semibold uppercase tracking-[0.22em]',
              isInverted ? 'text-white/70' : 'text-primary'
            )}
          >
            Hygiène
          </span>
        </span>
      )}
    </Link>
  )
}
