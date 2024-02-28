import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import PressList from '../components/pressList';
import SEO from '../components/seo';
import Text from '../components/text';

interface PressPageProps {
  data: {
    allPrismicPress: {
      nodes: [];
    };
  };
}

const PressLogoList = () => (
  <ul className="m-auto flex justify-center py-2">
    <li>
      <StaticImage
        src="../images/logo-panthere-premiere.png"
        alt="Logo Premier Panthere"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-podtail.png"
        alt="Logo Podtail"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-google-podcast.png"
        alt="Logo Google Podcast"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-cultea.png"
        alt="Logo Cultea"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-francetv.png"
        alt="Logo France Info"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-amylee.png"
        alt="Logo Amylee"
        placeholder="blurred"
      />
    </li>
  </ul>
);

export default function pressPage({ data }: PressPageProps): ReactElement {
  const press = data.allPrismicPress.nodes;
  return (
    <Layout>
      <div className="m-auto max-w-2xl">
        <Text as="h1" variant={'h1'} className="mb-4">
          Presse
        </Text>
        <Text as="p" variant={'p'}>
          Contact presse : artaufemininlepodcast@gmail.com
        </Text>
        <PressLogoList />
        <PressList allPress={press} />
      </div>

      <Text as="h2" variant={'h2'} className="my-8 text-center">
        Logos
      </Text>
      <div className="m-auto text-center">SVG</div>
      <ul className="m-auto flex justify-center space-x-4 py-12">
        <li>
          <StaticImage
            src="../images/logo/logo-black.svg"
            alt="Logo Noir ART au féminin"
            width={200}
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-green.svg"
            alt="Logo Vert ART au féminin"
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-white.svg"
            alt="Logo Blanc ART au féminin"
          />
        </li>
      </ul>
      <div className="m-auto text-center">PNG</div>
      <ul className="m-auto flex justify-center space-x-4 py-12">
        <li>
          <StaticImage
            src="../images/logo/logo-black.png"
            alt="Logo Noir ART au féminin"
            width={200}
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-green.png"
            alt="Logo Vert ART au féminin"
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-white.png"
            alt="Logo Blanc ART au féminin"
          />
        </li>
      </ul>
    </Layout>
  );
}

export const Head = () => {
  return (
    <SEO
      title="Espace Presse"
      description="Le podcast nouvelle génération qui nous raconte l'histoire des femmes artistes d'hier et d'aujoud'hui"
    />
  );
};

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
