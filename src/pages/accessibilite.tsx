import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AccessibilitePage() {
  return (
    <Layout withInstagram={false} withLastPodcast={false}>
      <section className="m-auto mb-12 mt-8 w-3/4 max-w-3xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Accessibilité
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Déclaration d'Accessibilité
        </h1>
        <p className="mt-4 text-xs font-light text-neutral-400">
          Conformément au Référentiel Général d'Amélioration de l'Accessibilité
          (RGAA 4.1). Dernière mise à jour : mai 2025.
        </p>
      </section>

      <div className="m-auto mb-20 w-3/4 max-w-3xl space-y-10">
        <section aria-labelledby="engagement-heading">
          <h2
            id="engagement-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Notre engagement
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              ART AU FÉMININ s'engage à rendre son site accessible conformément
              à l'article 47 de la loi n°2005-102 du 11 février 2005 et au RGAA
              version 4.1. Cette déclaration d'accessibilité s'applique au site{' '}
              <strong className="font-medium text-neutral-800">
                artaufeminin.fr
              </strong>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="conformite-heading">
          <h2
            id="conformite-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            État de conformité
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              Le site{' '}
              <strong className="font-medium text-neutral-800">
                artaufeminin.fr
              </strong>{' '}
              est en{' '}
              <strong className="font-medium text-neutral-800">
                conformité partielle
              </strong>{' '}
              avec le RGAA 4.1. Les non-conformités et les dérogations sont
              listées ci-dessous.
            </p>
          </div>
        </section>

        <section aria-labelledby="mesures-heading">
          <h2
            id="mesures-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Mesures prises pour l'accessibilité
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600">
            <ul className="space-y-2 pl-4">
              {[
                'Langue de la page déclarée en français (lang="fr")',
                "Lien d'évitement « Passer au contenu principal » en début de page",
                'Structure de titres cohérente (h1, h2, h3) sur toutes les pages',
                'Navigation clavier entièrement fonctionnelle avec focus visible',
                "Attributs aria-label descriptifs sur tous les liens et boutons d'action",
                'Alternatives textuelles sur toutes les images',
                "Liens vers des ressources externes indiquant l'ouverture dans un nouvel onglet",
                "Lecteurs d'écran : balises aria-hidden sur les éléments décoratifs",
                'Points de repère ARIA (main, nav, footer) sur toutes les pages',
                'Formulaire newsletter avec label explicite et indication des champs requis',
              ].map((measure) => (
                <li key={measure} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                  <span>{measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="non-conformites-heading">
          <h2
            id="non-conformites-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Non-conformités connues
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              Les éléments suivants ne sont pas encore pleinement conformes au
              RGAA 4.1 :
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Le lecteur audio intégré (composant custom) n'a pas fait l'objet d'un audit d'accessibilité complet.",
                "Certains contenus enrichis issus de Prismic CMS peuvent ne pas inclure d'alternatives textuelles complètes selon les saisies.",
                "La galerie 3D (expérience immersive) n'est pas accessible aux technologies d'assistance.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="technologies-heading">
          <h2
            id="technologies-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Technologies utilisées
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600">
            <ul className="space-y-2 pl-4">
              {[
                'HTML5',
                'CSS (Tailwind CSS)',
                'JavaScript / TypeScript (React, Gatsby)',
                'WAI-ARIA 1.2',
              ].map((tech) => (
                <li key={tech} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="outils-heading">
          <h2
            id="outils-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Outils d'évaluation utilisés
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600">
            <ul className="space-y-2 pl-4">
              {[
                'Vérification manuelle au clavier (navigation sans souris)',
                'Extension navigateur axe DevTools (audit automatique WCAG)',
                "VoiceOver (macOS) pour les tests lecteur d'écran",
              ].map((tool) => (
                <li key={tool} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Contact — Signaler un problème d'accessibilité
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              Si vous rencontrez un obstacle à l'accessibilité sur ce site,
              merci de nous le signaler. Nous ferons notre possible pour vous
              fournir une alternative accessible ou pour corriger le problème
              dans les meilleurs délais.
            </p>
            <p>
              <strong className="font-medium text-neutral-800">
                Par e-mail :
              </strong>{' '}
              <a
                href="mailto:artaufemininlepodcast@gmail.com"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                artaufemininlepodcast@gmail.com
              </a>
            </p>
            <p className="text-xs text-neutral-400">
              Nous nous engageons à répondre à votre demande dans un délai de 2
              semaines ouvrées.
            </p>
          </div>
        </section>

        <section aria-labelledby="voie-recours-heading">
          <h2
            id="voie-recours-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Voie de recours
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              Si vous n'obtenez pas de réponse satisfaisante, vous pouvez
              contacter le Défenseur des droits :
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                <span>
                  Via le formulaire de contact sur{' '}
                  <a
                    href="https://formulaire.defenseurdesdroits.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Formulaire du Défenseur des droits (ouvre un nouvel onglet)"
                    className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
                  >
                    formulaire.defenseurdesdroits.fr
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                <span>
                  Par courrier : Défenseur des droits — Libre réponse 71120 —
                  75342 Paris CEDEX 07
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Déclaration d'Accessibilité — ART AU FÉMININ"
    description="Déclaration d'accessibilité numérique du site ART AU FÉMININ : état de conformité RGAA 4.1, mesures prises, non-conformités connues et contact pour signaler un problème."
    url={`https://www.artaufeminin.fr${location.pathname}`}
    noindex={true}
  />
);
