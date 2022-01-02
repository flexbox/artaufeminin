import React, { ReactElement } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import CustomRichText from "../components/customRichText"
import { formatHumanDate } from "../utils/date"
import { RichTextBlock } from "prismic-reactjs"
import Text from "../components/text"
import { Link } from "gatsby"

interface PropsArticle {
  pageContext: {
    next: {
      uid: string
      data: {
        title: {
          text: string
        }
        image: {
          url: string
        }
      }
    }
    previous: {
      uid: string
      data: {
        image: {
          url: string
        }
        title: {
          text: string
        }
      }
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
          richText: RichTextBlock[]
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

interface NextPrevProps {
  uid: string
  imgUrl: string
  title: string
}

const OtherArticleLink = ({ uid, imgUrl, title }: NextPrevProps) => {
  return (
    <Link
      to={`/article/${uid}`}
      className="text-blue-500 hover:underline flex mb-8"
    >
      <section className="flex flex-row text-left items-center">
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="w-24 h-24 sm:w-32 sm:h-32 bg-cover bg-center bg-no-repeat"
        />
        <div className="p-4">{title}</div>
      </section>
    </Link>
  )
}

export default function Article(props: PropsArticle): ReactElement {
  const { data } = props.pageContext.node

  const datePublished = formatHumanDate(data.date)
  const imageHero = data.image
  const seoTitle = data.title.text
  const seoDescription = data.description.text
  const next = props.pageContext.next
  const previous = props.pageContext.previous
  const nextUid = props.pageContext.next?.uid
  const nextImgUrl = props.pageContext.next?.data.image.url
  const nextTitle = props.pageContext.next?.data.title.text
  const previousImgUrl = props.pageContext.previous?.data.image.url
  const previousTitle = props.pageContext.previous?.data.title.text
  const previousUid = props.pageContext.previous?.uid

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />

      <div className="max-w-3xl m-auto">
        <header>
          <Text as="h1" className="my-24">
            {seoTitle}
          </Text>
          <div className="prose prose-xl">
            <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-700 first-letter:mt-2 first-letter:mr-3 first-letter:float-left font-merri">
              {seoDescription}
            </p>
          </div>
        </header>

        <article className="prose prose-xl prose-blue">
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
            <CustomRichText render={data.content.richText} />
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

          <Author />
        </article>

        <Text as="h2" className="mb-12">
          Autres articles
        </Text>
        <hr className="separator" />
        {previous !== null && (
          <OtherArticleLink
            uid={previousUid}
            imgUrl={previousImgUrl}
            title={previousTitle}
          />
        )}
        {next !== null && (
          <OtherArticleLink
            uid={nextUid}
            imgUrl={nextImgUrl}
            title={nextTitle}
          />
        )}
      </div>
    </Layout>
  )
}
