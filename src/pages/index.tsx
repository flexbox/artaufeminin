import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { ArticleList } from "../components/article-list"
import Button from "../components/button"
import EpisodeItem from "../components/episodeItem"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/text"

const IndexPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes
  const allArticles = data.allPrismicBlogPost.nodes
  const img1 = allEpisodes[0].itunes.image

  return (
    <Layout withInstagram={true}>
      <Text as="h1" variant="h1" className="w-3/4 m-auto my-4">
        Podcasts récents sur les artistes femmes
      </Text>
      <Hero allEpisodes={allEpisodes} />
      <div style={{ maxWidth: "80em", margin: "0 auto" }}>
        <div className="mb-16 w-full max-w-6xl md:mb-64 md:w-2/3">
          <Text as="h2" variant={"h2"}>
            Articles récents
          </Text>
          <hr className="separator mt-16 " />
          <ArticleList allArticles={allArticles} isRow />
          <Link to={"/articles"}>
            <Button variant="outline" size="s">
              Lire tous les articles
            </Button>
          </Link>
        </div>

        <div className="mb-12 max-w-6xl">
          <Text as="h2" variant={"h2"}>
            Ce que les auditeurs en disent
          </Text>
          <Text as="p" variant={"p"}>
            ⭐ Moyenne de 5/5 étoiles sur{" "}
            <a
              href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152#see-all/reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Podcast
            </a>
            .
          </Text>
          <StaticImage
            src="../images/reviews.png"
            alt="5 étoiles pour ART au feminin sur Apple podcast"
            className="mb-6"
          />
          <Text as="h2" variant={"h2"}>
            Laissez moi une évaluation
          </Text>
          <Text as="p" variant={"p"}>
            Si vous aimez l’émission, la meilleure façon de la soutenir est de
            me laisser une évaluation sur Apple Podcast.
          </Text>

          <Button
            variant="outline"
            size="s"
            as="a"
            href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
          >
            Cliquez ici pour 5 ⭐ sur Apple Podcast
          </Button>
        </div>
      </div>
    </Layout>
  )
}

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
`
export const Head = () => {
  return (
    <SEO
      title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia"
      description="Bienvenue sur 'Art au Féminin', votre porte d'entrée dans le monde captivant des femmes artistes qui ont laissé leur empreinte dans l'histoire de l'art. Explorez notre riche collection d'œuvres, de biographies inspirantes et d'analyses approfondies dédiées à ces artistes visionnaires. Plongez dans un voyage artistique à travers les époques et les continents, découvrez leurs réalisations extraordinaires, et laissez-vous inspirer par la créativité intemporelle des femmes artistes. 'Art au Féminin' célèbre la contribution inestimable des femmes à l'art, une exploration artistique comme aucune autre."
    />
  )
}

export default IndexPage
