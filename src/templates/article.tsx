import React, { ReactElement } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import CustomRichText from "../components/customRichText"
import { formatHumanDate } from "../utils/date"
import { RichText, RichTextBlock } from "prismic-reactjs"

interface PropsArticle {
  data: {
    title: {
      raw: RichTextBlock[]
    }
    description: {
      raw: RichTextBlock[]
    }
    content: {
      text: string
      raw: RichTextBlock[]
      html: string
    }
    date: string
    image: {
      url: string
      alt: string
      copyright: string
      gatsbyImageData
    }
  }
}

export default function Article({
  props,
}: {
  props: PropsArticle
}): ReactElement {
  console.log(props)
  // if (!doc) return null
  const datePublished = formatHumanDate(props.data.date)
  const title = RichText.asText(props.data.title.raw)
  const description = RichText.asText(props.data.description.raw)

  const image = props.data.image.url

  return (
    <Layout>
      <SEO title={title} description={description} />

      <article className="post-content">
        <header className="post-content-header">
          <h1 className="post-content-title">{title}</h1>
        </header>

        <div className="post-content-excerpt">{description}</div>

        {image && (
          <div className="text-center mb-10">
            <figure className="post-content-figure">
              <img
                className="mx-auto"
                src={props.data.image.url}
                alt={props.data.image.alt}
              />
              <figcaption className="mt-8">
                {props.data.image.alt}{" "}
                {props.data.image.copyright &&
                  `© ${props.data.image.copyright}`}
              </figcaption>
            </figure>
          </div>
        )}

        <div className="post-content-body">
          <div className="mb-20">
            {props.data.content.html}
            <CustomRichText render={props.data.content.raw} />
          </div>

          <p className="text-gray-500 mb-20">
            Vous avez aimé cet article ?{" "}
            <a
              href="https://fr.tipeee.com/art-au-feminin"
              title="Sponsoriser les épisodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devenez mécène sur tipeee m’aide beaucoup.
            </a>
            <br />
            <em>Publié {datePublished}</em>
          </p>
        </div>

        <Author />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicBlogPost {
      nodes {
        uid
        data {
          date
          title {
            text
          }
          description {
            text
          }
          content {
            text
            raw
            html
          }
          image {
            alt
            copyright
            url
            gatsbyImageData
          }
        }
      }
    }
  }
`
