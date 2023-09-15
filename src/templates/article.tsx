import { Link } from "gatsby"
import { RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"

import Author from "../components/author"
import { CustomRichText } from "../components/custom-rich-text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/text"
import Tipee from "../components/tipee"
import { formatHumanDate } from "../utils/date"

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
          gatsbyImageData: any
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
      className="mb-8 flex text-blue-500 hover:underline"
    >
      <section className="flex flex-row items-center text-left">
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="h-24 w-24 bg-cover bg-center bg-no-repeat sm:h-32 sm:w-32"
        />
        <div className="p-4">{title}</div>
      </section>
    </Link>
  )
}

export default function Article(props: PropsArticle): ReactElement {
  const { data } = props.pageContext.node

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

      <div className="m-auto max-w-3xl">
        <header>
          <Text as="h1" variant={"h1"} className="my-24">
            {seoTitle}
          </Text>
          <div className="prose prose-xl">
            <p className="font-merri first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-700 first-line:uppercase first-line:tracking-widest">
              {seoDescription}
            </p>
          </div>
        </header>

        <article className="prose prose-xl prose-blue">
          {imageHero && (
            <div className="article-content m-auto -mx-96 mb-10 text-center">
              <figure>
                <img src={imageHero.url} alt={imageHero.alt} />
                <figcaption className="mt-8">
                  {imageHero.alt}{" "}
                  {imageHero.copyright && `© ${imageHero.copyright}`}
                </figcaption>
              </figure>
            </div>
          )}

          <div className="article-content mb-20">
            <CustomRichText render={data.content.richText} />
          </div>
          <Tipee />
          <Author />
        </article>

        <Text as="h2" variant={"h2"} className="mb-12">
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
