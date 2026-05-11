import { Phone } from 'lucide-react'

import { siteConfig } from '@/lib/seo'

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phoneE164}`}
      aria-label={`Appeler ${siteConfig.name}`}
      className="group fixed bottom-6 right-6 z-50 flex size-13 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg ring-1 ring-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
    >
      <Phone className="size-5 transition-transform duration-300 group-hover:rotate-12" />
      <span
        className="absolute inset-0 animate-ping rounded-full bg-blue-500/30"
        style={{ animationDuration: '3s' }}
      />
    </a>
  )
}
