import { Check } from 'lucide-react'

const promises = [
  'Devis gratuit sur place',
  'Satisfaction garantie',
  'Intervention sous 24h',
  'Sans engagement',
  'Qualibat 2018',
  'Matériel professionnel',
  '100 km à la ronde',
  'Interlocuteur unique',
]

function PromisesTrack() {
  // Doublé pour une boucle infinie sans saut
  const items = [...promises, ...promises]

  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 animate-marquee-left">
      {items.map((p, i) => (
        <span
          key={`${p}-${i}`}
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/55"
        >
          <Check className="size-3.5 text-blue-500" aria-hidden strokeWidth={3} />
          {p}
        </span>
      ))}
    </div>
  )
}

export function SatisfactionBanner() {
  return (
    <section
      aria-label="Nos engagements"
      className="group relative overflow-hidden border-y border-border/60 bg-background py-4"
    >
      {/* Fades latéraux pour un fondu doux */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

      <div className="flex group-hover:[animation-play-state:paused] [&>*]:group-hover:[animation-play-state:paused]">
        <PromisesTrack />
        <PromisesTrack />
      </div>
    </section>
  )
}
