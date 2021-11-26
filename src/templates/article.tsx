import React, { ReactElement } from "react"

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

export default function Article(props: PropsArticle): ReactElement {
  // if (!doc) return null
  const datePublished = formatHumanDate(props.pageContext.data.date)

  const image = props.pageContext.data.image.url

  return (
    <Layout>
      <SEO
        title={props.pageContext.data.title.text}
        description={props.pageContext.data.description.text}
      />

      <article className="prose justify-center m-auto">
        <header>
          <h1>{props.pageContext.data.title.text}</h1>
        </header>

        <div>{props.pageContext.data.description.text}</div>

        {image && (
          <div className="text-center mb-10">
            <figure>
              <img
                className="mx-auto"
                src={props.pageContext.data.image.url}
                alt={props.pageContext.data.image.alt}
              />
              <figcaption className="mt-8">
                {props.pageContext.data.image.alt}{" "}
                {props.pageContext.data.image.copyright &&
                  `© ${props.pageContext.data.image.copyright}`}
              </figcaption>
            </figure>
          </div>
        )}

        <div>
          <div className="mb-20">
            <CustomRichText render={props.pageContext.data.content.raw} />
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
      </article>
      <div className="justify-center m-auto w-1/3">
        <Author />
      </div>
    </Layout>
  )
}
