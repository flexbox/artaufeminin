import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function MentionsLegalesPage() {
  return (
    <Layout withInstagram={false} withLastPodcast={false}>
      <section className="m-auto mb-12 mt-8 w-3/4 max-w-3xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Légal
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Mentions Légales
        </h1>
        <p className="mt-4 text-xs font-light text-neutral-400">
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l'économie numérique (LCEN).
        </p>
      </section>

      <div className="m-auto mb-20 w-3/4 max-w-3xl space-y-10">
        <section aria-labelledby="editeur-heading">
          <h2
            id="editeur-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Éditeur du site
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-2">
            <p>
              <strong className="font-medium text-neutral-800">Nom :</strong>{' '}
              Aldjia Boughias
            </p>
            <p>
              <strong className="font-medium text-neutral-800">
                Qualité :
              </strong>{' '}
              Particulier — créatrice du podcast et du site ART AU FÉMININ
            </p>
            <p>
              <strong className="font-medium text-neutral-800">
                Contact :
              </strong>{' '}
              <a
                href="mailto:artaufemininlepodcast@gmail.com"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                artaufemininlepodcast@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section aria-labelledby="hebergeur-heading">
          <h2
            id="hebergeur-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Hébergeur
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-2">
            <p>
              <strong className="font-medium text-neutral-800">
                Société :
              </strong>{' '}
              Netlify, Inc.
            </p>
            <p>
              <strong className="font-medium text-neutral-800">
                Adresse :
              </strong>{' '}
              44 Montgomery Street, Suite 300, San Francisco, California 94104,
              États-Unis
            </p>
            <p>
              <strong className="font-medium text-neutral-800">Site :</strong>{' '}
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site de Netlify (ouvre un nouvel onglet)"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                www.netlify.com
              </a>
            </p>
          </div>
        </section>

        <section aria-labelledby="propriete-heading">
          <h2
            id="propriete-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Propriété intellectuelle
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              Les textes, podcasts, logos et graphismes créés pour ce site sont
              la propriété d'Aldjia Boughias, sauf mention contraire explicite.
            </p>
            <p>
              Les images reproduites sur ce site (œuvres d'art, photographies
              d'artistes, visuels d'expositions) sont la propriété de leurs
              auteurs et ayants droit respectifs. Elles sont utilisées à des
              fins d'illustration culturelle et éducative, avec indication de
              leur source lorsque celle-ci est connue. Si vous êtes titulaire de
              droits sur une image et souhaitez qu'elle soit retirée ou créditée
              différemment, contactez-nous à{' '}
              <a
                href="mailto:artaufemininlepodcast@gmail.com"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                artaufemininlepodcast@gmail.com
              </a>
              .
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou
              adaptation des contenus propres à ce site, quel que soit le moyen
              ou le procédé utilisé, est interdite sans autorisation préalable
              écrite.
            </p>
            <p>
              Toute exploitation non autorisée sera considérée comme
              constitutive d'une contrefaçon et poursuivie conformément aux
              dispositions des articles L.335-2 et suivants du Code de Propriété
              Intellectuelle.
            </p>
          </div>
        </section>

        <section aria-labelledby="responsabilite-heading">
          <h2
            id="responsabilite-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Limitation de responsabilité
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              L'éditeur s'efforce de fournir sur ce site des informations aussi
              précises que possible. Toutefois, il ne pourra être tenu
              responsable des omissions, inexactitudes et carences dans la mise
              à jour, qu'elles soient de son fait ou du fait des tiers
              partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Les informations présentes sur ce site sont non contractuelles et
              peuvent être modifiées à tout moment. L'accès au site peut être
              interrompu à tout moment sans préavis.
            </p>
          </div>
        </section>

        <section aria-labelledby="cookies-heading">
          <h2
            id="cookies-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Cookies
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600 space-y-3">
            <p>
              Ce site ne dépose pas de cookies de pistage ou de publicité. Le
              service de newsletter (MailerLite) peut utiliser des cookies
              fonctionnels lors de la confirmation d'inscription. Aucun outil
              d'analyse comportementale tiers n'est activé sur ce site.
            </p>
            <p>
              Pour en savoir plus sur la gestion de vos données personnelles,
              consultez notre{' '}
              <Link
                to="/politique-confidentialite"
                className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="droit-applicable-heading">
          <h2
            id="droit-applicable-heading"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Droit applicable
          </h2>
          <div className="border border-neutral-200 p-6 text-sm font-light leading-relaxed text-neutral-600">
            <p>
              Les présentes mentions légales sont soumises au droit français. En
              cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Mentions Légales — ART AU FÉMININ"
    description="Mentions légales du site ART AU FÉMININ : éditeur, hébergeur, propriété intellectuelle et informations réglementaires."
    url={`https://www.artaufeminin.fr${location.pathname}`}
    noindex={true}
  />
);
