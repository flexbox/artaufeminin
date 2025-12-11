import { Link, graphql } from 'gatsby';

import React from 'react';

import Button from '../components/button';
import { Hero } from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Text from '../components/text';
import { ArticlesHero } from '../components/articlesHero';

const IndexPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes;
  const allArticles = data.allPrismicBlogPost.nodes;

  return (
    <Layout withInstagram={true}>
      <Text
        as="h1"
        variant="h3"
        className="m-auto my-6 w-3/4 text-3xl md:text-4xl font-bold text-black"
      >
        Podcasts sur les femmes artistes et l'histoire de l'art
      </Text>

      <Hero allEpisodes={allEpisodes} />
      <div className="m-auto w-3/4">
        <hr className="separator m-auto my-4" />
      </div>
      <Text
        as="h1"
        variant="h3"
        className="m-auto my-6 w-3/4 text-3xl md:text-4xl font-bold text-black"
      >
        Articles sur les femmes artistes
      </Text>

      <ArticlesHero allArticles={allArticles} />
      <section className="m-auto my-16 w-11/12 max-w-3xl text-center">
        <Text
          as="h3"
          variant="h2"
          className="mb-3 text-2xl md:text-3xl font-bold text-black"
        >
          Soutenez ART au féminin en lui laissant une évaluation
        </Text>

        <Text
          as="p"
          variant="p"
          className="mb-6 text-gray-700 text-sm md:text-base"
        >
          Si vous aimez l’émission, la meilleure façon de la soutenir est de
          patager autour de vous et de lui laisser une évaluation sur Apple
          Podcast.
        </Text>

        <Button
          as="a"
          href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
          variant="outline"
          size="s"
          className="mx-auto"
        >
          Cliquez ici pour 5 ⭐ sur Apple Podcast
        </Button>
      </section>
    </Layout>
  );
};

export const indexPageQuery = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allAnchorEpisode(limit: 3) {
      nodes {
        ...AnchorEpisodeFragment
      }
    }
    allPrismicBlogPost(limit: 3, sort: { first_publication_date: DESC }) {
      nodes {
        ...PrismicBlogPostFragment
      }
    }
  }

  fragment PrismicBlogPostFragment on PrismicBlogPost {
    uid
    data {
      date
      title {
        richText
      }
      description {
        richText
      }
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
  }

  fragment AnchorEpisodeFragment on AnchorEpisode {
    id
    guid
    link
    title
    itunes {
      summary
      image
      episode
      season
      duration
    }
    enclosure {
      url
    }
  }
`;
export const Head = () => {
  return (
    <SEO
      title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia"
      description="Bienvenue sur ART au féminin, votre porte d'entrée dans le monde captivant des femmes artistes qui ont laissé leur empreinte dans l'histoire de l'art. Explorez notre riche collection d'œuvres, de biographies inspirantes et d'analyses approfondies dédiées à ces artistes visionnaires. Plongez dans un voyage artistique à travers les époques et les continents, découvrez leurs réalisations extraordinaires, et laissez-vous inspirer par la créativité intemporelle des femmes artistes. ART au féminin célèbre la contribution inestimable des femmes à l'art, une exploration artistique comme aucune autre."
    />
  );
};

export default IndexPage;
