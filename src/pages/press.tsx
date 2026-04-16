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

const mediaLogos = [
  { src: '../images/logo-panthere-premiere.png', alt: 'Panthère Première' },
  { src: '../images/logo-podtail.png', alt: 'Podtail' },
  { src: '../images/logo-cultea.png', alt: 'Cultea' },
  { src: '../images/logo-francetv.png', alt: 'France Info' },
  { src: '../images/logo-amylee.png', alt: 'Amylee' },
];

export default function PressPage({ data }: PressPageProps): ReactElement {
  const press = data.allPrismicPress.nodes;

  return (
    <Layout withInstagram={false}>

      {/* En-tête */}
      <section className="m-auto mb-12 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Médias
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Espace presse
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-500">
          ART au féminin dans les médias. Pour toute demande presse ou partenariat,
          contactez-nous par email.
        </p>
        <a
          href="mailto:artaufemininlepodcast@gmail.com"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clay-500 transition-colors hover:text-clay-700"
        >
          artaufemininlepodcast@gmail.com →
        </a>
      </section>

      {/* Logos médias */}
      <section className="m-auto mb-16 w-3/4">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Ils en parlent
        </p>
        <div className="flex flex-wrap items-center justify-start gap-8 rounded-sm border border-clay-200 bg-cream-50 p-8">
          <StaticImage src="../images/logo-panthere-premiere.png" alt="Panthère Première" placeholder="blurred" height={40} />
          <StaticImage src="../images/logo-podtail.png" alt="Podtail" placeholder="blurred" height={40} />
          <StaticImage src="../images/logo-cultea.png" alt="Cultea" placeholder="blurred" height={40} />
          <StaticImage src="../images/logo-francetv.png" alt="France Info" placeholder="blurred" height={40} />
          <StaticImage src="../images/logo-amylee.png" alt="Amylee" placeholder="blurred" height={40} />
        </div>
      </section>

      {/* Articles de presse */}
      {press.length > 0 && (
        <section className="m-auto mb-16 w-3/4">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-clay-500">
            Articles &amp; mentions
          </p>
          <PressList allPress={press} />
        </section>
      )}

      {/* Kit presse — logos téléchargeables */}
      <section className="m-auto mb-20 w-3/4">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Kit presse — logos
        </p>
        <div className="rounded-sm border border-clay-200 bg-cream-50 p-8">
          <p className="mb-6 text-sm leading-relaxed text-stone-500">
            Formats SVG et PNG disponibles ci-dessous pour toute utilisation presse.
          </p>

          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold text-stone-400 uppercase tracking-widest">SVG</p>
            <div className="flex flex-wrap items-center gap-8">
              <StaticImage src="../images/logo/logo-black.svg" alt="Logo Noir ART au féminin" width={160} />
              <div className="rounded-sm bg-stone-800 p-4">
                <StaticImage src="../images/logo/logo-white.svg" alt="Logo Blanc ART au féminin" width={160} />
              </div>
              <div className="rounded-sm bg-sage-500 p-4">
                <StaticImage src="../images/logo/logo-green.svg" alt="Logo Vert ART au féminin" width={160} />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold text-stone-400 uppercase tracking-widest">PNG</p>
            <div className="flex flex-wrap items-center gap-8">
              <StaticImage src="../images/logo/logo-black.png" alt="Logo Noir ART au féminin" width={160} />
              <div className="rounded-sm bg-stone-800 p-4">
                <StaticImage src="../images/logo/logo-white.png" alt="Logo Blanc ART au féminin" width={160} />
              </div>
              <div className="rounded-sm bg-sage-500 p-4">
                <StaticImage src="../images/logo/logo-green.png" alt="Logo Vert ART au féminin" width={160} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export const Head = () => (
  <SEO
    title="Espace presse — ART au féminin"
    description="ART au féminin dans les médias. Kit presse, logos et contact pour toute demande de partenariat ou couverture presse."
  />
);

export const pressQuery = graphql`
  query allPress {
    allPrismicPress {
      nodes {
        data {
          description { text }
          sitename { text }
          url { url }
        }
      }
    }
  }
`;
