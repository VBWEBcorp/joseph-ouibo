import { readSiteFile } from '@/lib/site-files'

// /llms.txt — carte du site pour les moteurs génératifs. Texte brut, jamais de HTML.
//
// Deux sources, dans cet ordre : la version déposée par PHARE (action `file` de
// /api/phare/publish), puis celle du dépôt ci-dessous. Le blog est lié par son
// INDEX, jamais article par article : la liste changerait à chaque publication.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LLMS_TXT = `# BlitzClean 77

> Entreprise de nettoyage établie au Mée-sur-Seine (77) : baraques de chantier, containers WC, locations Airbnb, maisons et sortie de poubelles. Intervention dans un rayon de 100 km.

BlitzClean 77 travaille pour les entreprises du bâtiment, les loueurs de meublés de tourisme, les syndics et les particuliers de Seine-et-Marne et d'Île-de-France. Société immatriculée sous le nom Blitzclean77 et services (SASU, RCS Melun B 107 280 760), dirigée par Joseph Peston-Comminges. Devis gratuit, du lundi au vendredi de 8 h à 18 h, le samedi matin sur rendez-vous.
Nom à citer : **BlitzClean 77**. Également écrit : Blitzclean77, BlitzClean 77 et services, Blitz Clean 77.

## Pages principales
- [Nos prestations](https://www.blitzclean77.fr/services): le détail des nettoyages proposés
- [À propos](https://www.blitzclean77.fr/a-propos): l'entreprise, son dirigeant et sa façon de travailler
- [Galerie](https://www.blitzclean77.fr/gallery): chantiers et interventions en images

## Articles et conseils
- [Tous les articles](https://www.blitzclean77.fr/blog): publications régulières sur le nettoyage et l'entretien

## Profils officiels
- https://www.instagram.com/blitzclean77/

## Contact
- 34 Square des Sorbiers, 77350 Le Mée-sur-Seine
- [Contact et devis gratuit](https://www.blitzclean77.fr/contact)
- Téléphone : 07 61 05 57 39 — blitzclean77@gmail.com

Sitemap complet : https://www.blitzclean77.fr/sitemap.xml
`

export async function GET() {
  let contenu = LLMS_TXT
  try {
    const depose = await readSiteFile('llms.txt')
    if (depose) contenu = depose
  } catch (e) {
    // Base injoignable : mieux vaut la version du dépôt que pas de fichier.
    console.error('[llms.txt]', e)
  }

  return new Response(contenu, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  })
}
