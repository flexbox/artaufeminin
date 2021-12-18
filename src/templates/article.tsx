import React, { ReactElement } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import CustomRichText from "../components/customRichText"
import { formatHumanDate } from "../utils/date"
import { RichTextBlock } from "prismic-reactjs"

interface PropsArticle {
  pageContext
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
  const datePublished = formatHumanDate(props.pageContext.data.date)
  const imageHero = props.pageContext.data.image

  return (
    <Layout>
      <SEO
        title={props.pageContext.data.title.text}
        description={props.pageContext.data.description.text}
      />

      <div className="max-w-3xl justify-center m-auto">
        <article className="prose prose-lg prose-blue font-merri">
          <header>
            <h1>{props.pageContext.data.title.text}</h1>
          </header>

          <div>{props.pageContext.data.description.text}</div>

          {imageHero && (
            <div className="m-auto text-center mb-10 -mx-96 article-content">
              <figure>
                <img src={imageHero.url} alt={imageHero.alt} />
                <figcaption className="mt-8">
                  {imageHero.alt}{" "}
                  {imageHero.copyright && `© ${imageHero.copyright}`}
                </figcaption>
              </figure>
            </div>
          )}

          <div>
            <div className="mb-20 article-content">
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
      </div>

      <div className="justify-center m-auto w-full sm:w-1/3">
        <Author />
      </div>
    </Layout>
  )
}
