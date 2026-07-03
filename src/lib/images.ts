/**
 * Banque d'images réelles fournies par le client.
 * Hébergées sur i.ibb.co (autorisé dans next.config.ts).
 */

// Nouveau logo BlitzClean 77 (marges rognées, servi en local)
export const brandLogo = '/blitzclean-logo.png'

// Nouvelles photos de réalisation (agence de voyage nettoyée) — remplacent la voiture + la photo machine
const NEW1 = 'https://i.ibb.co/rGXkM9xD/07e063d9-02fd-4dd4-b8c2-bf207fcd896a-1-all-5907.jpg'
const NEW2 = 'https://i.ibb.co/gLCGV5MX/07e063d9-02fd-4dd4-b8c2-bf207fcd896a-1-all-5909.jpg'
const NEW3 = 'https://i.ibb.co/ccZg777r/07e063d9-02fd-4dd4-b8c2-bf207fcd896a-1-all-5901.jpg'

export const heroImages = [
  NEW2,
  NEW1,
  'https://i.ibb.co/RkYYFCc4/Concept-Hygiene-Nettoyage-Pro.webp',
] as const

export const galleryImages = [
  // Bureaux & commerces
  NEW1,
  NEW2,
  NEW3,
  'https://i.ibb.co/wh6tfrtk/Concept-Hygiene-Nettoyage-bureau.webp',
  // Résidentiel / Airbnb
  'https://i.ibb.co/sSZLQh6/Whats-App-Image-2025-07-23-at-14-02-41.avif',
  'https://i.ibb.co/ksYYPLZ6/Whats-App-Image-2025-07-23-at-14-02-40-4.avif',
  'https://i.ibb.co/PZhhQQ4x/Whats-App-Image-2025-07-23-at-14-02-40-2.avif',
  'https://i.ibb.co/WNmn6L7t/Whats-App-Image-2025-07-23-at-14-02-40-3.avif',
] as const

export const storyImage = NEW2

export const aboutImages = [
  NEW2,
  NEW1,
  'https://i.ibb.co/RkYYFCc4/Concept-Hygiene-Nettoyage-Pro.webp',
  'https://i.ibb.co/hR0rMFZq/Concept-Hygiene-Nettoyage-professionnel.webp',
] as const

export const ctaCol1Images = [
  NEW1,
  'https://i.ibb.co/ksYYPLZ6/Whats-App-Image-2025-07-23-at-14-02-40-4.avif',
  'https://i.ibb.co/PZhhQQ4x/Whats-App-Image-2025-07-23-at-14-02-40-2.avif',
  'https://i.ibb.co/wh6tfrtk/Concept-Hygiene-Nettoyage-bureau.webp',
]

export const ctaCol2Images = [
  NEW3,
  'https://i.ibb.co/sSZLQh6/Whats-App-Image-2025-07-23-at-14-02-41.avif',
  'https://i.ibb.co/WNmn6L7t/Whats-App-Image-2025-07-23-at-14-02-40-3.avif',
  'https://i.ibb.co/RkYYFCc4/Concept-Hygiene-Nettoyage-Pro.webp',
]

export const pageHeroImages = {
  services: 'https://i.ibb.co/RkYYFCc4/Concept-Hygiene-Nettoyage-Pro.webp',
  about: NEW2,
  contact: NEW3,
  gallery: NEW1,
} as const
