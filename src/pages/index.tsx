import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import EpisodeItem from "../components/episodeItem"
import ArticleList from "../components/articleListItem"
import Button from "../components/button"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const siteDescription = data.site.siteMetadata.description
  const logoUrl = data.logo.childImageSharp.fixed
  const allEpisodes = data.allAnchorEpisode.nodes
  const allArticles = data.allPrismicBlogPost.nodes

  return (
    <Layout>
      <SEO title="🎙 Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

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
            <div className="flex-initial sm:px-4">
              <Button
                variant="outline"
                as="icon"
                size="m"
                href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
              />
            </div>
          </div>
        </Hero>

        <div className="max-w-6xl mb-64">
          <h2 className="text-4xl">Épisodes récents</h2>
          <hr className="separator mt-16" />
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

        <div className="max-w-6xl mb-64">
          <h2 className="text-4xl">Articles récents</h2>
          <hr className="separator mt-16" />
          <ArticleList allArticles={allArticles} />
          <Link to={"/articles"}>
            <Button variant="outline" size="s">
              Lire tous les articles
            </Button>
          </Link>
        </div>

        <div className="max-w-6xl">
          <h2 className="text-4xl">Ce que les auditeurs en disent</h2>
          <p>
            ⭐ Moyenne de 5/5 étoiles sur{" "}
            <a
              href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152#see-all/reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Podcast
            </a>
            .
          </p>
          <StaticImage
            src="../images/reviews.png"
            alt={"5 étoiles pour ART au feminin sur Apple podcast"}
          />
          <h2 className="text-4xl">Laissez moi une évaluation</h2>
          <p>
            Si vous aimez l’émission, la meilleure façon de la soutenir est de
            me laisser une évaluation sur Apple Podcast.
          </p>

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
  query {
    site {
      siteMetadata {
        description
      }
    }
    logo: file(absolutePath: { regex: "/logo-podcast-art-au-feminin.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    reviews: file(absolutePath: { regex: "/reviews.png/" }) {
      childImageSharp {
        fixed(width: 990, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allAnchorEpisode(limit: 3) {
      nodes {
        ...AnchorEpisodeFragment
      }
    }

    allPrismicBlogPost(limit: 3) {
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
