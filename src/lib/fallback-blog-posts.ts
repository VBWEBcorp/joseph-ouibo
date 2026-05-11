/**
 * Articles de blog en dur, utilisés tant que la base de données
 * MongoDB n'est pas connectée. Permet de présenter au client
 * un aperçu fonctionnel de la rubrique conseils.
 *
 * Tous les visuels sont les vraies photos Concept Hygiène.
 */

export type FallbackPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  content: string
  metaDescription?: string
}

export const fallbackBlogPosts: FallbackPost[] = [
  {
    _id: 'fbp-1',
    title: "5 erreurs à éviter lors d'un nettoyage de fin de chantier",
    slug: 'erreurs-nettoyage-fin-de-chantier',
    excerpt:
      "Le nettoyage de fin de chantier est une étape souvent sous-estimée. Voici les pièges les plus fréquents et comment les éviter pour livrer un logement irréprochable.",
    coverImage: 'https://i.ibb.co/RkYYFCc4/Concept-Hygiene-Nettoyage-Pro.webp',
    category: 'Chantier',
    tags: ['fin de chantier', 'BTP', 'remise en état'],
    author: 'Joseph — Concept Hygiène',
    publishedAt: '2026-04-12T09:00:00.000Z',
    metaDescription:
      "Les 5 erreurs à éviter pour réussir un nettoyage de fin de chantier : poussières fines, traces de plâtre, joints, vitrerie. Conseils d'un pro à 100 km de Mée-sur-Seine.",
    content: `
      <p>Le nettoyage de fin de chantier est l'étape qui transforme une livraison correcte en une livraison <strong>impeccable</strong>. Et pourtant, c'est souvent celle que l'on bâcle, faute de temps ou de matériel adapté.</p>
      <h2>1. Sous-estimer la poussière fine</h2>
      <p>La poussière de plâtre s'incruste partout : rails de fenêtres, gonds de portes, prises électriques, intérieur des placards. Un simple coup d'aspirateur ne suffit pas. Il faut d'abord aspirer du haut vers le bas, puis dépoussiérer toutes les surfaces avec un chiffon microfibre légèrement humide.</p>
      <h2>2. Oublier les joints et les sanitaires</h2>
      <p>Les joints de carrelage et de douche sont les premiers points qu'un nouveau locataire ou propriétaire va inspecter. Un brossage spécifique avec un produit adapté au calcaire est indispensable.</p>
      <h2>3. Négliger la vitrerie</h2>
      <p>Une vitre pleine de traces, et tout le travail paraît bâclé. On utilise toujours une raclette professionnelle plutôt qu'un chiffon, surtout sur les grandes surfaces vitrées.</p>
      <h2>4. Utiliser les mauvais produits</h2>
      <p>Tous les supports n'aiment pas les mêmes produits. Le parquet stratifié déteste l'eau, l'inox marque avec l'acide, le marbre se détériore au vinaigre. Mieux vaut faire appel à un professionnel équipé.</p>
      <h2>5. Ne pas prévoir de seconde passe</h2>
      <p>La poussière retombe toujours dans les heures qui suivent. Une seconde passe la veille de la livraison fait toute la différence sur le rendu final.</p>
      <p><em>Concept Hygiène intervient sur tous types de chantiers à 100 km autour de Mée-sur-Seine. Contactez-nous pour un devis gratuit.</em></p>
    `,
  },
  {
    _id: 'fbp-2',
    title: 'Comment optimiser le ménage entre deux locations Airbnb',
    slug: 'optimiser-menage-airbnb',
    excerpt:
      "Check-out à 11h, check-in à 15h : 4 heures pour tout faire. Voici la méthode que nous appliquons sur les locations courte durée pour ne jamais rater un horaire.",
    coverImage: 'https://i.ibb.co/sSZLQh6/Whats-App-Image-2025-07-23-at-14-02-41.avif',
    category: 'Airbnb',
    tags: ['airbnb', 'conciergerie', 'location courte durée'],
    author: 'Joseph — Concept Hygiène',
    publishedAt: '2026-04-04T09:00:00.000Z',
    metaDescription:
      "Méthode complète pour le ménage entre deux locations Airbnb : ordre des tâches, gestion du linge, vérification de l'inventaire, photos avant/après.",
    content: `
      <p>Une location courte durée demande une rigueur quasi-militaire. Le moindre détail oublié peut générer un avis 4 étoiles au lieu de 5, et faire chuter votre référencement Airbnb.</p>
      <h2>L'ordre des tâches compte</h2>
      <p>On commence toujours par le linge : on dépouille les lits et on lance la machine immédiatement. Pendant qu'elle tourne, on aère, on jette les poubelles, on vide le frigo.</p>
      <h2>La règle du haut vers le bas</h2>
      <p>On nettoie d'abord les surfaces hautes (étagères, plans de travail), puis les surfaces basses, et on termine par les sols. Ça évite de salir ce qu'on vient de faire.</p>
      <h2>Vérification d'inventaire systématique</h2>
      <p>Vaisselle, linge, télécommandes, accessoires : on coche une liste à chaque passage. Toute disparition est signalée à l'hôte avec une photo.</p>
      <h2>Photos avant / après</h2>
      <p>Pour se protéger en cas de litige avec un voyageur, on prend toujours quelques photos une fois le logement remis en état.</p>
      <p><em>Concept Hygiène travaille avec plusieurs hôtes et conciergeries dans le 77, le 91 et le 75. Devis sur demande.</em></p>
    `,
  },
  {
    _id: 'fbp-3',
    title: "Lavage de façade : haute pression ou nettoyage doux ?",
    slug: 'lavage-facade-haute-pression-ou-doux',
    excerpt:
      "Toutes les façades ne supportent pas la haute pression. Voici comment choisir la bonne méthode selon votre support et éviter les mauvaises surprises.",
    coverImage: 'https://i.ibb.co/MyhSN0Dd/Concept-Hygiene-Nettoyage-exterieur.webp',
    category: 'Lavage extérieur',
    tags: ['façade', 'haute pression', 'démoussage'],
    author: 'Joseph — Concept Hygiène',
    publishedAt: '2026-03-22T09:00:00.000Z',
    metaDescription:
      "Lavage de façade : quand utiliser la haute pression et quand préférer un nettoyage doux ? Conseils selon le support (crépi, pierre, brique, enduit).",
    content: `
      <p>Une façade encrassée donne une impression d'abandon. Mais un mauvais nettoyage peut aussi l'abîmer durablement. Voici comment choisir.</p>
      <h2>La haute pression</h2>
      <p>Adaptée aux supports résistants : béton lisse, pierre dure, dalles extérieures. Permet d'enlever rapidement mousses, lichens et traces noires. À éviter sur les enduits friables et les vieux crépis.</p>
      <h2>Le nettoyage doux (basse pression + produit)</h2>
      <p>Pulvérisation d'un produit anti-mousse, temps de pose, puis rinçage à basse pression. Idéal pour les façades en crépi, les enduits décoratifs, les joints anciens.</p>
      <h2>Et le démoussage de toiture ?</h2>
      <p>Toujours en nettoyage doux + traitement préventif. La haute pression sur des tuiles décolle les sous-couches et peut causer des infiltrations.</p>
      <p><em>Concept Hygiène est qualifiée Qualibat 2018 pour les travaux de lavage extérieur. Devis gratuit sur place.</em></p>
    `,
  },
  {
    _id: 'fbp-4',
    title: "Containers WC de chantier : à quelle fréquence faut-il les nettoyer ?",
    slug: 'frequence-nettoyage-wc-chantier',
    excerpt:
      "Trop espacé, l'entretien devient un cauchemar. Trop rapproché, on paie pour rien. Voici les bonnes pratiques pour un sanitaire chantier toujours présentable.",
    coverImage: 'https://i.ibb.co/PZhhQQ4x/Whats-App-Image-2025-07-23-at-14-02-40-2.avif',
    category: 'Chantier',
    tags: ['WC chantier', 'sanitaires', 'BTP'],
    author: 'Joseph — Concept Hygiène',
    publishedAt: '2026-03-10T09:00:00.000Z',
    metaDescription:
      "À quelle fréquence faire nettoyer ses containers WC de chantier ? Recommandations selon la taille du chantier et le nombre de compagnons.",
    content: `
      <p>Sur un chantier, les sanitaires mobiles sont l'un des premiers indicateurs du sérieux d'une entreprise. Bien entretenus, ils participent au moral des équipes. Négligés, ils deviennent un point de friction permanent.</p>
      <h2>Petit chantier (1 à 5 compagnons)</h2>
      <p>Une vidange et un nettoyage complet par semaine suffisent généralement. On peut espacer si l'utilisation est ponctuelle.</p>
      <h2>Chantier moyen (5 à 15 compagnons)</h2>
      <p>Deux passages par semaine sont recommandés, avec vidange, désinfection et réapprovisionnement (papier, savon).</p>
      <h2>Gros chantier (15+ compagnons)</h2>
      <p>Trois passages par semaine au minimum. Un suivi photo après chaque intervention permet de garantir la qualité.</p>
      <p><em>Concept Hygiène intervient sur les chantiers d'Île-de-France pour l'entretien des bases-vie et sanitaires mobiles.</em></p>
    `,
  },
  {
    _id: 'fbp-5',
    title: "Sortie de poubelles en copropriété : ce que dit la loi",
    slug: 'sortie-poubelles-coproprietes-loi',
    excerpt:
      "Qui doit sortir les bacs ? Que risque le syndic en cas de manquement ? Petit tour d'horizon des obligations légales et des bonnes pratiques.",
    coverImage: 'https://i.ibb.co/ksYYPLZ6/Whats-App-Image-2025-07-23-at-14-02-40-4.avif',
    category: 'Copropriété',
    tags: ['poubelles', 'copropriété', 'syndic'],
    author: 'Joseph — Concept Hygiène',
    publishedAt: '2026-02-24T09:00:00.000Z',
    metaDescription:
      "Sortie de poubelles en copropriété : obligations du syndic, du gardien et du prestataire. Bonnes pratiques pour éviter les sanctions municipales.",
    content: `
      <p>Sortir et rentrer les bacs aux jours de collecte est une obligation à la charge de la copropriété. Mais qui s'en occupe concrètement ?</p>
      <h2>Sans gardien</h2>
      <p>La copropriété peut désigner un prestataire externe. Le coût est mutualisé entre les copropriétaires via les charges courantes.</p>
      <h2>Avec gardien</h2>
      <p>La tâche est généralement incluse dans la fiche de poste du gardien. En cas d'absence (congé, arrêt), il faut prévoir un remplaçant ou un prestataire d'appoint.</p>
      <h2>Sanctions en cas de manquement</h2>
      <p>Selon les communes, des amendes peuvent être appliquées si les bacs restent sur la voie publique en dehors des plages autorisées (souvent 50 à 150 €).</p>
      <p><em>Concept Hygiène propose un service de sortie / rentrée des bacs pour copropriétés et particuliers, avec nettoyage du local poubelles inclus.</em></p>
    `,
  },
  {
    _id: 'fbp-6',
    title: "Déménagement : faut-il un état des lieux nettoyé ou non ?",
    slug: 'etat-des-lieux-demenagement-nettoyage',
    excerpt:
      "L'article 1730 du Code civil impose au locataire de rendre un logement \"en bon état\". Voici ce que cela signifie en pratique pour le ménage.",
    coverImage: 'https://i.ibb.co/wh6tfrtk/Concept-Hygiene-Nettoyage-bureau.webp',
    category: 'Résidentiel',
    tags: ['déménagement', 'état des lieux', 'location'],
    author: 'Joseph — Concept Hygiène',
    publishedAt: '2026-02-08T09:00:00.000Z',
    metaDescription:
      "Faut-il rendre un logement parfaitement nettoyé à l'état des lieux ? Ce que dit la loi et ce qu'attendent vraiment les bailleurs.",
    content: `
      <p>L'état des lieux de sortie est un moment souvent stressant. Le ménage en est l'un des points les plus discutés.</p>
      <h2>Ce que dit la loi</h2>
      <p>L'article 1730 du Code civil oblige le locataire à rendre le logement dans l'état dans lequel il l'a reçu, à l'exception de l'usure normale. Si l'état des lieux d'entrée mentionnait un logement propre, il doit être rendu propre.</p>
      <h2>Ce qui peut être retenu sur la caution</h2>
      <p>Si le logement est rendu sale, le bailleur peut faire intervenir une entreprise de nettoyage et déduire le coût de la caution, sur facture justificative.</p>
      <h2>Notre recommandation</h2>
      <p>Faire réaliser un nettoyage professionnel coûte généralement entre 150 et 400 € selon la surface, et évite tout litige sur la caution. C'est presque toujours rentable.</p>
      <p><em>Concept Hygiène prend en charge les nettoyages d'état des lieux à Mée-sur-Seine et dans toute l'Île-de-France.</em></p>
    `,
  },
]

export const fallbackBlogSettings = {
  enabled: true,
  title: 'Conseils & actualités',
  description:
    "Des articles pratiques pour bien préparer un chantier, optimiser un ménage Airbnb, choisir une méthode de lavage de façade ou comprendre vos obligations en copropriété.",
  eyebrow: 'Conseils Concept Hygiène',
  heroImage: 'https://i.ibb.co/hR0rMFZq/Concept-Hygiene-Nettoyage-professionnel.webp',
  categories: ['Chantier', 'Airbnb', 'Lavage extérieur', 'Copropriété', 'Résidentiel'],
}

export function findFallbackPostBySlug(slug: string): FallbackPost | undefined {
  return fallbackBlogPosts.find((p) => p.slug === slug)
}
