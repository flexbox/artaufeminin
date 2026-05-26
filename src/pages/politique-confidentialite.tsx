import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function PolitiqueConfidentialitePage() {
  return (
    <Layout withInstagram={false} withLastPodcast={false}>
      <section className="m-auto mb-12 mt-8 w-3/4 max-w-3xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Légal
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Politique de Confidentialité
        </h1>
        <p className="mt-4 text-xs font-light text-neutral-400">
          Dernière mise à jour : mai 2025. Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).
        </p>
      </section>

      <div className="m-auto mb-20 w-3/4 max-w-3xl space-y-10">

        <section aria-labelledby="responsable-heading">
          <h2 id="responsable-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Responsable du traitement
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-2">
            <p><strong className="font-medium text-neutral-800">Nom :</strong> Aldjia Boughias</p>
            <p>
              <strong className="font-medium text-neutral-800">Contact :</strong>{' '}
              <a
                href="mailto:artaufemininlepodcast@gmail.com"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                artaufemininlepodcast@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section aria-labelledby="donnees-heading">
          <h2 id="donnees-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Données collectées
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              Ce site collecte uniquement l'adresse e-mail des personnes qui s'inscrivent à la newsletter ART AU FÉMININ.
              Aucune autre donnée personnelle (nom, prénom, adresse postale, données de navigation) n'est collectée
              ni conservée par l'éditeur du site.
            </p>
            <p>
              Le site ne dispose pas de compte utilisateur, de formulaire de contact enregistré, ni d'outil de suivi comportemental.
            </p>
          </div>
        </section>

        <section aria-labelledby="finalite-heading">
          <h2 id="finalite-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Finalité et base légale du traitement
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              <strong className="font-medium text-neutral-800">Finalité :</strong> envoi de la newsletter ART AU FÉMININ
              (nouveaux épisodes, articles, actualités du podcast).
            </p>
            <p>
              <strong className="font-medium text-neutral-800">Base légale :</strong> consentement explicite de la personne
              concernée (article 6.1.a du RGPD). Vous pouvez retirer votre consentement à tout moment en vous désinscrivant
              via le lien présent dans chaque e-mail.
            </p>
          </div>
        </section>

        <section aria-labelledby="sous-traitant-heading">
          <h2 id="sous-traitant-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Sous-traitant — MailerLite
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              La gestion des abonnements et l'envoi des e-mails sont assurés par <strong className="font-medium text-neutral-800">MailerLite</strong>
              {' '}(UAB "MailerLite", Paupio g. 46, Vilnius, LT-11341, Lituanie). MailerLite agit en tant que sous-traitant
              conformément à un accord de traitement des données (DPA) et est certifié conforme au RGPD.
            </p>
            <p>
              Vos données ne sont utilisées que pour l'envoi de la newsletter et ne sont jamais revendues à des tiers.
            </p>
          </div>
        </section>

        <section aria-labelledby="conservation-heading">
          <h2 id="conservation-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Durée de conservation
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600">
            <p>
              Votre adresse e-mail est conservée tant que vous êtes abonné(e) à la newsletter. En cas de désinscription,
              vos données sont supprimées dans les 30 jours suivant la demande.
            </p>
          </div>
        </section>

        <section aria-labelledby="droits-heading">
          <h2 id="droits-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Vos droits
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="space-y-2 pl-4">
              {[
                { droit: "Droit d'accès", desc: 'obtenir une copie des données vous concernant.' },
                { droit: 'Droit de rectification', desc: 'faire corriger vos données si elles sont inexactes.' },
                { droit: "Droit à l'effacement", desc: 'demander la suppression de vos données.' },
                { droit: "Droit d'opposition", desc: 'vous opposer au traitement de vos données.' },
                { droit: 'Droit à la portabilité', desc: 'recevoir vos données dans un format structuré.' },
                { droit: 'Droit de retrait du consentement', desc: 'en vous désinscrivant à tout moment via le lien en bas de chaque e-mail.' },
              ].map(({ droit, desc }) => (
                <li key={droit} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                  <span>
                    <strong className="font-medium text-neutral-800">{droit} :</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              Pour exercer vos droits, contactez-nous à{' '}
              <a
                href="mailto:artaufemininlepodcast@gmail.com"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                artaufemininlepodcast@gmail.com
              </a>. Vous disposez également du droit d'introduire une réclamation auprès de la{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site de la CNIL (ouvre un nouvel onglet)"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                CNIL
              </a>
              {' '}(Commission Nationale de l'Informatique et des Libertés).
            </p>
          </div>
        </section>

        <section aria-labelledby="securite-heading">
          <h2 id="securite-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Sécurité
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600">
            <p>
              Ce site est servi exclusivement en HTTPS. Les données transmises via le formulaire d'inscription sont
              chiffrées en transit. La sécurité des données est assurée par Netlify (hébergeur) et MailerLite (gestionnaire de la liste).
            </p>
          </div>
        </section>

        <section aria-labelledby="modifications-heading">
          <h2 id="modifications-heading" className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Modifications de cette politique
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600">
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour
              est indiquée en haut de cette page. En cas de modification substantielle, les abonnés à la newsletter seront informés par e-mail.
            </p>
          </div>
        </section>

        <div className="border-t border-neutral-200 pt-6">
          <p className="text-xs font-light text-neutral-400">
            Voir aussi nos{' '}
            <Link
              to="/mentions-legales"
              className="text-neutral-600 underline underline-offset-2 hover:text-neutral-900"
            >
              Mentions légales
            </Link>
            {' '}et notre{' '}
            <Link
              to="/accessibilite"
              className="text-neutral-600 underline underline-offset-2 hover:text-neutral-900"
            >
              Déclaration d'accessibilité
            </Link>.
          </p>
        </div>

      </div>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Politique de Confidentialité — ART AU FÉMININ"
    description="Politique de confidentialité du site ART AU FÉMININ : données collectées, utilisation de MailerLite pour la newsletter, vos droits RGPD et comment nous contacter."
    url={`https://www.artaufeminin.fr${location.pathname}`}
    noindex={true}
  />
);
