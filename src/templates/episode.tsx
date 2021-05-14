import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"
import SubscribeInstagram from "../components/subscribeInstagram"
import { dutationToString } from "../utils/dutationToString"

export default function Episode({ pageContext }) {
  const title = pageContext.title
  const description = pageContext.contentSnippet.substring(0, 155)

  const duration = dutationToString(pageContext.itunes.duration)
  const audioSrc = pageContext.enclosure.url

  return (
    <Layout>
      <SEO title={title} description={description} />

      <div style={{ maxWidth: "80em", margin: "0 auto" }}>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-4">
            <Subscribe />
            <SubscribeInstagram />
          </div>

          <div className="col-span-8">
            <audio controls src={audioSrc} className="mb-8"></audio>
            <h1 className="text-5xl text-gray-700 font-bold mt-0">{title}</h1>

            <div
              className="my-12"
              dangerouslySetInnerHTML={{ __html: pageContext.itunes.summary }}
            />

            <p className="text-gray-500">
              <em>Saison {pageContext.itunes.season}</em>
              <span className="mx-4">•</span>
              <em>Épisode {pageContext.itunes.episode}</em>
              <span className="mx-4">•</span>
              <em>{duration}</em>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
