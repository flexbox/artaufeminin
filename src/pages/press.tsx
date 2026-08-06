import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import PressList from '../components/pressList';
import SEO from '../components/seo';

interface PressPageProps {
  data: {
    allPrismicPress: {
      nodes: [];
    };
  };
}

export default function PressPage({ data }: PressPageProps): ReactElement {
  const press = data.allPrismicPress.nodes;

  return (
    <Layout withInstagram={false}>
      <section className="m-auto mb-12 mt-8 w-3/4 border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Médias
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Espace Presse
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
          ART AU FÉMININ dans les médias. Pour toute demande presse ou
          partenariat, contactez-nous par email.
        </p>
        <a
          href="mailto:bonjour@artaufeminin.fr"
          className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
        >
          bonjour@artaufeminin.fr <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="m-auto mb-16 w-3/4">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Ils en Parlent
        </h2>
        <div className="flex flex-wrap items-center justify-start gap-8 border border-neutral-200 bg-neutral-50 p-8">
          <StaticImage
            src="../images/logo-panthere-premiere.png"
            alt="Panthère Première"
            placeholder="blurred"
            height={40}
          />
          <StaticImage
            src="../images/logo-podtail.png"
            alt="Podtail"
            placeholder="blurred"
            height={40}
          />
          <StaticImage
            src="../images/logo-cultea.png"
            alt="Cultea"
            placeholder="blurred"
            height={40}
          />
          <StaticImage
            src="../images/logo-francetv.png"
            alt="France Info"
            placeholder="blurred"
            height={40}
          />
          <StaticImage
            src="../images/logo-amylee.png"
            alt="Amylee"
            placeholder="blurred"
            height={40}
          />
        </div>
      </section>

      {press.length > 0 && (
        <section className="m-auto mb-16 w-3/4">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Articles &amp; Mentions
          </h2>
          <PressList allPress={press} />
        </section>
      )}

      <section className="m-auto mb-20 w-3/4">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Kit Presse — Logos
        </h2>
        <div className="border border-neutral-200 p-8">
          <p className="mb-6 text-sm leading-relaxed text-neutral-600">
            Formats SVG et PNG disponibles ci-dessous pour toute utilisation
            presse.
          </p>

          <div className="mb-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              SVG
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <StaticImage
                src="../images/logo/logo-black.svg"
                alt="Logo Noir ART AU FÉMININ"
                width={160}
              />
              <div className="bg-neutral-900 p-4">
                <StaticImage
                  src="../images/logo/logo-white.svg"
                  alt="Logo Blanc ART AU FÉMININ"
                  width={160}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              PNG
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <StaticImage
                src="../images/logo/logo-black.png"
                alt="Logo Noir ART AU FÉMININ"
                width={160}
              />
              <div className="bg-neutral-900 p-4">
                <StaticImage
                  src="../images/logo/logo-white.png"
                  alt="Logo Blanc ART AU FÉMININ"
                  width={160}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Espace Presse — ART AU FÉMININ"
    description="ART AU FÉMININ dans les médias. Kit presse, logos et contact pour toute demande de partenariat ou couverture presse."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);

export const pressQuery = graphql`
  query allPress {
    allPrismicPress {
      nodes {
        data {
          description {
            text
          }
          sitename {
            text
          }
          url {
            url
          }
        }
      }
    }
  }
`;
