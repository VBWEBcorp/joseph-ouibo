'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'
import { submitContactForm } from '@/lib/contact-form'
import { pageHeroImages } from '@/lib/images'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  hero: {
    eyebrow: 'Contact · Devis gratuit',
    title: 'Parlons de votre besoin de nettoyage',
    description:
      "Appartement, chantier, location courte durée, copropriété : décrivez-nous votre situation. On vous rappelle sous 24h pour fixer un rendez-vous et un devis gratuit sur place.",
    image: pageHeroImages.contact,
  },
  info: {
    phone: siteConfig.phone,
    email: siteConfig.email,
    street: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    city: siteConfig.address.city,
  },
}

export function ContactContent() {
  const { data } = useContent('contact', defaults)
  const hero = data.hero ?? defaults.hero
  const info = data.info ?? defaults.info

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    setStatus('sending')
    setErrorMsg('')
    try {
      await submitContactForm({
        prenom: (fd.get('firstname') as string) || '',
        nom: (fd.get('lastname') as string) || '',
        email: (fd.get('email') as string) || '',
        telephone: (fd.get('phone') as string) || '',
        prestation: (fd.get('prestation') as string) || '',
        message: (fd.get('message') as string) || '',
        source: 'Page contact',
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : "L'envoi a échoué.")
    }
  }

  // Fallback vers siteConfig si les champs sont vides
  const phone = info.phone || siteConfig.phone
  const email = info.email || siteConfig.email
  const street = info.street || siteConfig.address.street
  const postalCode = info.postalCode || siteConfig.address.postalCode
  const city = info.city || siteConfig.address.city

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Contact"
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
                <CardHeader>
                  <CardTitle className="font-display text-lg">Demander un devis</CardTitle>
                </CardHeader>
                <CardContent>
                  {status === 'success' ? (
                    <div className="flex flex-col items-center gap-4 rounded-xl border border-emerald-500/25 bg-emerald-500/5 px-6 py-12 text-center">
                      <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
                        <CheckCircle2 className="size-6" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="font-display text-lg font-semibold text-foreground">Demande bien envoyée&nbsp;!</p>
                        <p className="text-sm text-muted-foreground">
                          Merci, nous avons bien reçu votre demande. On vous rappelle sous 24h pour votre devis gratuit.
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStatus('idle')}
                        className="mt-1"
                      >
                        Envoyer une autre demande
                      </Button>
                    </div>
                  ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstname">Prénom</Label>
                        <Input id="firstname" name="firstname" required placeholder="Jean" autoComplete="given-name" className="h-11 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastname">Nom</Label>
                        <Input id="lastname" name="lastname" placeholder="Dupont" autoComplete="family-name" className="h-11 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="jean@exemple.fr" autoComplete="email" className="h-11 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="06 12 34 56 78" autoComplete="tel" className="h-11 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prestation">Type de prestation</Label>
                      <select
                        id="prestation"
                        name="prestation"
                        defaultValue=""
                        className="h-11 w-full rounded-xl border border-input bg-transparent px-3 text-sm text-foreground transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      >
                        <option value="" disabled>Choisir une prestation…</option>
                        <option value="batiment">Nettoyage de bâtiment (appart, maison, bureau)</option>
                        <option value="exterieur">Lavage extérieur (façade, toiture, terrasse)</option>
                        <option value="chantier">Nettoyage de chantier / fin de chantier</option>
                        <option value="airbnb">Location Airbnb / courte durée</option>
                        <option value="poubelles">Sortie de poubelles / gestion des bacs</option>
                        <option value="travaux">Maçonnerie / peinture</option>
                        <option value="autre">Autre / je ne sais pas</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Votre besoin en quelques mots</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Surface, fréquence, ville, contraintes particulières…"
                        className="w-full rounded-xl border border-input bg-transparent px-3 py-2.5 text-sm leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      />
                    </div>
                    {status === 'error' && (
                      <p className="rounded-lg border border-red-500/25 bg-red-500/5 px-3 py-2 text-sm text-red-600 dark:text-red-400">
                        {errorMsg}
                      </p>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === 'sending'}
                      className="w-full bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/40 disabled:opacity-70"
                    >
                      {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                    </Button>
                  </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.06 }}
              className="space-y-5"
            >
              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Phone className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Téléphone</p>
                      <a href={`tel:${siteConfig.phoneE164}`} className="text-sm text-muted-foreground hover:text-foreground">
                        {phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-foreground">{email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <MapPin className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Zone d'intervention</p>
                      <p className="text-sm text-muted-foreground">
                        Basé à {city} ({postalCode})<br />
                        <span className="text-foreground/80">100 km à la ronde</span> — Île-de-France et alentours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Clock className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Horaires</p>
                      <p className="text-sm text-muted-foreground">
                        Lun – Ven : {siteConfig.hours.weekdays}<br />
                        Sam : {siteConfig.hours.saturday}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-2xl border border-border/80 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <iframe
                  title="Zone d'intervention de BlitzClean"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83817.0!2d2.55!3d48.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5db4bca38a99f%3A0x40b82c3688b3ea0!2sLe%20M%C3%A9e-sur-Seine!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
