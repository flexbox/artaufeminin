import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';

import SEO from '../components/seo';
import Text from '../components/text';

interface Props {}

interface LinkButtonProps {
  platform: {
    name: string;
    url: string;
    imageUrl: string;
  };
}

export const allPodcastPlatforms = [
  {
    name: 'Anchor',
    url: 'https://anchor.fm/artaufeminin/',
    imageUrl:
      'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg',
  },
  {
    name: 'Apple podcasts',
    url: 'https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/itunes_podcasts.svg',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/us/show/2157592',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/deezer.svg',
  },
  {
    name: 'Google podcasts',
    url: 'https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NDgzZGY4L3BvZGNhc3QvcnNz',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/google_podcasts.svg',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg',
  },
];

const allSocialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/artaufeminin',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/podcastart',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/facebook.svg',
  },
];

const allMoreLinks = [
  {
    name: 'Site internet',
    url: 'https://artaufeminin.fr',
    imageUrl:
      'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg',
  },
  {
    name: 'Articles',
    url: 'https://artaufeminin.fr/articles',
    imageUrl:
      'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg',
  },
];
const allSponsorPlatforms = [
  {
    name: 'Tipeee',
    url: 'https://fr.tipeee.com/art-au-feminin',
    imageUrl:
      'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-tipeee.svg',
  },
];

function LinkButton({ platform }: LinkButtonProps) {
  return (
    <a href={platform.url} className="">
      <div className=" my-2 flex rounded-lg border-2 border-blue-500 p-2 align-middle text-lg font-bold text-blue-500 hover:border-blue-600 hover:text-blue-600">
        <img
          src={platform.imageUrl}
          alt={`ART au feminin sur ${platform.name}`}
          className="mr-4 h-12 w-12"
        />
        <div className="m-auto min-w-full sm:pl-4">{platform.name}</div>
      </div>
    </a>
  );
}

export default function LinksPage({}: Props): ReactElement {
  return (
    <div className="h-full p-8">
      <div className="m-auto max-w-xl">
        <div className="mb-8 flex justify-center">
          <StaticImage
            className="rounded-full"
            src="../images/logo-podcast-art-au-feminin.png"
            alt={'Logo femmes artistes'}
            width={150}
          />
        </div>
        <p className="mb-8 text-center text-gray-400">@artaufeminin</p>
        <div className="mb-12">
          <Text as="h2" variant={'h2'}>
            Soutenir ART au féminin
          </Text>
          {allSponsorPlatforms.map((platform) => {
            return <LinkButton platform={platform} />;
          })}
        </div>
        <div className="mb-12">
          <Text as="h2" variant={'h2'}>
            Écouter le podcast
          </Text>
          {allPodcastPlatforms.map((platform) => {
            return <LinkButton platform={platform} />;
          })}
        </div>
        <div className="mb-12">
          <Text as="h2" variant={'h2'}>
            Les coulisses de l’émission
          </Text>
          {allSocialLinks.map((platform) => {
            return <LinkButton platform={platform} />;
          })}
        </div>
        <div className="mb-12">
          <Text as="h2" variant={'h2'}>
            ART au féminin le site
          </Text>
          {allMoreLinks.map((platform) => {
            return <LinkButton platform={platform} />;
          })}
        </div>
      </div>
    </div>
  );
}

export const Head = () => {
  return (
    <SEO
      title="Découvrez les sites Web, les organisations et les ressources que nous recommandons pour en savoir plus sur les femmes artistes."
      description="Retrouvez toujours plus de contenu sur ART au feminin,sur Instagram, sur Facebook, sur Spotify, sur Deezer, sur Anchor, sur Google Podcasts, sur Apple Podcasts, sur Tipeee, sur le site internet, sur les articles."
    />
  );
};

export const query = graphql`
  {
    logo: file(absolutePath: { regex: "/logo-podcast-art-au-feminin.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 128, height: 128, layout: FIXED)
      }
    }
  }
`;
