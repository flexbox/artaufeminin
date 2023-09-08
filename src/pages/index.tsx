import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import ArticleList from "../components/articleListItem"
import Button from "../components/button"
import EpisodeItem from "../components/episodeItem"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/text"

const IndexPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes
  const allArticles = data.allPrismicBlogPost.nodes

  return (
    <Layout withInstagram={true}>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia |" />

      <div style={{ maxWidth: "80em", margin: "0 auto" }}>
        <div className="mb-16 mt-16 w-full max-w-6xl md:mb-64 md:w-2/3">
          <Text as="h2">Podcasts récents sur les artistes femmes</Text>
          <hr className="separator mb-12 mt-16" />
          {allEpisodes.map((episode) => {
            return (
              <EpisodeItem
                key={episode.id}
                episode={episode}
                isSummaryTruncate={true}
              />
            )
          })}
          <Link to={"/podcasts"}>
            <Button variant="outline" size="s">
              Écouter tous les épisodes
            </Button>
          </Link>
        </div>

        <div className="mb-16 w-full max-w-6xl md:mb-64 md:w-2/3">
          <Text as="h2">Articles récents</Text>
          <hr className="separator mt-16 " />
          <ArticleList allArticles={allArticles} />
          <Link to={"/articles"}>
            <Button variant="outline" size="s">
              Lire tous les articles
            </Button>
          </Link>
        </div>

        <div className="mb-12 max-w-6xl">
          <Text as="h2">Ce que les auditeurs en disent</Text>
          <Text as="p">
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
          <Text as="h2">Laissez moi une évaluation</Text>
          <Text as="p">
            Si vous aimez l’émission, la meilleure façon de la soutenir est de
            me laisser une évaluation sur Apple Podcast.
          </Text>

          <Button
            variant="outline"
            size="l"
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

export default IndexPage
