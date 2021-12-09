import React from "react"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"
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
        <article className="prose text-gray-500 font-merri">
          <h1 className="text-5xl text-gray-700 mt-0 font-merri">
            {title} | Podcast ART au feminin
          </h1>

          <p className="text-gray-500">
            <em>Saison {pageContext.itunes.season}</em>
            <span className="mx-4">•</span>
            <em>Épisode {pageContext.itunes.episode}</em>
            <span className="mx-4">•</span>
            <em>{duration}</em>
          </p>

          <audio controls src={audioSrc} className="mb-8" />

          <div
            className="my-12"
            dangerouslySetInnerHTML={{ __html: pageContext.itunes.summary }}
          />

          <hr className="separator" />
        </article>
      </LayoutSidebar>
    </Layout>
  )
}
