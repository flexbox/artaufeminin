import React, { ReactElement } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import CustomRichText from "../components/customRichText"
import { formatHumanDate } from "../utils/date"
import { RichTextBlock } from "prismic-reactjs"
import Text from "../components/text"

interface PropsArticle {
  pageContext: {
    next: {
      uid: string
    }
    previous: {
      uid: string | null
    }
    node: {
      uid: string
      data: {
        title: {
          text: string
        }
        description: {
          text: string
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
  }
}

export default function Article(props: PropsArticle): ReactElement {
  const { data } = props.pageContext.node

  const datePublished = formatHumanDate(data.date)
  const imageHero = data.image
  const seoTitle = data.title.text
  const seoDescription = data.description.text
  const nextUid = props.pageContext.next.uid
  const previousUid = props.pageContext.previous.uid

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />

      <h1>Next {nextUid}</h1>
      <h1>Prev {previousUid}</h1>
      <div className="max-w-3xl justify-center m-auto">
        <header>
          <Text as="h1" className="mb-12 text-center">
            {seoTitle}
          </Text>
          <div className="prose prose-xl">
            <p>{seoDescription}</p>
          </div>
        </header>

        <article className="prose prose-lg prose-blue">
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

          <div className="mb-20 article-content">
            <CustomRichText render={data.content.raw} />
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
        </article>
      </div>

      <div className="justify-center m-auto w-full sm:w-1/3">
        <Author />
      </div>
    </Layout>
  )
}
