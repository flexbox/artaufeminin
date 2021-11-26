import React from "react"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"
import Text from "../components/text"
import { dutationToString } from "../utils/dutationToString"

export default function Episode({ pageContext }) {
  const title = pageContext.title
  const description = pageContext.contentSnippet.substring(0, 155)
  const duration = dutationToString(pageContext.itunes.duration)
  const audioSrc = pageContext.enclosure.url

  return (
    <Layout>
      <SEO title={title} description={description} />

      <LayoutSidebar>
        <Text as="h2episode">{title}</Text>

        <Text as="pEpisode">
          <em>Saison {pageContext.itunes.season}</em>
          <span className="mx-4">•</span>
          <em>Épisode {pageContext.itunes.episode}</em>
          <span className="mx-4">•</span>
          <em>{duration}</em>
        </Text>

        <audio controls src={audioSrc} className="mb-8" />

        <Text as="pEpisode">
          <div
            className="my-12"
            dangerouslySetInnerHTML={{ __html: pageContext.itunes.summary }}
          />
        </Text>

        <hr className="separator" />
      </LayoutSidebar>
    </Layout>
  )
}
