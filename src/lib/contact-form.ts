// Endpoint Formspree du client (Joseph / BlitzClean).
// Les notifications arrivent sur l'adresse configurée dans son compte Formspree.
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrewvwlv'

// Correspondance code → libellé lisible, pour que le type de prestation
// s'affiche en clair dans l'email (et pas "batiment", "airbnb", etc.).
export const PRESTATION_LABELS: Record<string, string> = {
  batiment: 'Nettoyage de bâtiment (appart, maison, bureau)',
  exterieur: 'Lavage extérieur (façade, toiture, terrasse)',
  chantier: 'Nettoyage de chantier / fin de chantier',
  airbnb: 'Location Airbnb / courte durée',
  poubelles: 'Sortie de poubelles / gestion des bacs',
  travaux: 'Maçonnerie / peinture',
  autre: 'Autre / à définir',
}

export type ContactPayload = {
  prenom?: string
  nom?: string
  nomComplet?: string
  email?: string
  telephone?: string
  prestation?: string
  message?: string
  source?: string
}

/**
 * Envoie la demande à Formspree en JSON.
 * Les clés sont volontairement en français : Formspree les utilise comme
 * libellés dans l'email reçu par le client, tout est donc lisible pour lui.
 */
export async function submitContactForm(payload: ContactPayload) {
  const prestationLabel = payload.prestation
    ? PRESTATION_LABELS[payload.prestation] ?? payload.prestation
    : ''

  const displayName =
    payload.nomComplet?.trim() ||
    [payload.prenom, payload.nom].filter(Boolean).join(' ').trim()

  // Champs visibles dans l'email (libellés en français).
  const body: Record<string, string> = {}
  if (payload.prenom) body['Prénom'] = payload.prenom
  if (payload.nom) body['Nom'] = payload.nom
  if (payload.nomComplet) body['Nom'] = payload.nomComplet
  if (payload.email) body['Email'] = payload.email
  if (payload.telephone) body['Téléphone'] = payload.telephone
  if (prestationLabel) body['Type de prestation'] = prestationLabel
  if (payload.message) body['Message'] = payload.message
  if (payload.source) body['Formulaire'] = payload.source

  // Champs spéciaux Formspree (commencent par "_", non affichés dans le corps).
  body._subject = displayName
    ? `Nouvelle demande de devis — ${displayName}`
    : 'Nouvelle demande de devis'
  if (payload.email) body._replyto = payload.email // répondre = répondre au client

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    let message = "L'envoi a échoué. Réessayez ou contactez-nous par téléphone."
    try {
      const data = await res.json()
      if (Array.isArray(data?.errors) && data.errors.length > 0) {
        message = data.errors.map((e: { message: string }) => e.message).join(' ')
      }
    } catch {
      /* réponse non-JSON : on garde le message par défaut */
    }
    throw new Error(message)
  }

  return res.json()
}
