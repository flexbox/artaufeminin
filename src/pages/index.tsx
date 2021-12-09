import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import EpisodeItem from "../components/episodeItem"
import ArticleList from "../components/articleListItem"
import Button from "../components/button"
import { StaticImage } from "gatsby-plugin-image"
import Text from "../components/text"

const IndexPage = ({ data }) => {
  const siteDescription = data.site.siteMetadata.description
  const logoUrl = data.logo.childImageSharp.gatsbyImageData
  const allEpisodes = data.allAnchorEpisode.nodes
  const allArticles = data.allPrismicBlogPost.nodes

  return (
    <Layout>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia |" />

      <div style={{ maxWidth: "80em", margin: "0 auto" }}>
        <Hero
          heroTitle={siteDescription}
          imageUrl="../images/logo-podcast-art-au-feminin.png/"
          imageAlt={"Logo podcast ART au feminin"}
        >
          <div className="flex flex-col sm:flex-row mt-12">
            <div className="flex-initial px-4 pl-0 mb-6">
              <Link to={"/links"}>
                <Button variant="solid" size="m">
                  Écouter et s’abonner
                </Button>
              </Link>
            </div>
            <div className=" flex-initial">
              <Button
                variant="outline"
                as="icon"
                size="m"
                href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
              />
            </div>
          </div>
        </Hero>

        <div className="max-w-6xl mb-16 md:mb-64 md:w-2/3 w-full">
          <Text as="h2">Épisodes récents</Text>
          <hr className="separator mt-16 mb-12" />
          {allEpisodes.map((episode) => {
            return (
              <EpisodeItem
                key={episode.id}
                episode={episode}
                isSummaryTruncate={true}
              />
            )
          })}
          <Link to={"/podcast"}>
            <Button variant="outline" size="s">
              Voir tous les épisodes
            </Button>
          </Link>
        </div>

        <div className="max-w-6xl mb-16 md:mb-64 md:w-2/3 w-full">
          <Text as="h2">Articles récents</Text>
          <hr className="separator mt-16 " />
          <ArticleList allArticles={allArticles} />
          <Link to={"/articles"}>
            <Button variant="outline" size="s">
              Lire tous les articles
            </Button>
          </Link>
        </div>

        <div className="max-w-6xl">
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
            alt={"5 étoiles pour ART au feminin sur Apple podcast"}
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

const indexQuery = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    logo: file(absolutePath: { regex: "/logo-podcast-art-au-feminin.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 500, height: 500, layout: FIXED)
      }
    }
    reviews: file(absolutePath: { regex: "/reviews.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 990, height: 600, layout: FIXED)
      }
    }
    allAnchorEpisode(limit: 3) {
      nodes {
        ...AnchorEpisodeFragment
      }
    }
    allPrismicBlogPost(
      limit: 3
      sort: { fields: first_publication_date, order: DESC }
    ) {
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
        raw
      }
      description {
        raw
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

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <IndexPage location={props.location} data={data} {...props} />
    )}
  />
)
