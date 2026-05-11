import type { Metadata } from 'next'

import { ComingSoonContent } from './coming-soon-content'

export const metadata: Metadata = {
  title: 'Bientôt disponible',
  description:
    "Cette page dédiée est en cours de rédaction. En attendant, contactez Concept Hygiène directement pour un devis gratuit.",
  robots: { index: false, follow: true },
  alternates: { canonical: '/coming-soon' },
}

export default function ComingSoonPage() {
  return <ComingSoonContent />
}
