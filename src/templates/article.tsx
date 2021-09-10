import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import CustomRichText from "../components/customRichText"
import { formatHumanDate } from "../utils/date"
import { ArticleProps } from "../components/articleListItem"

interface ArticleTemplateProps {
  data: {
    prismicBlogPost: { ArticleProps }
  }
}

export default function Article(props: ArticleTemplateProps) {
  const doc = props.data.prismicBlogPost.data

  if (!doc) return null

  const title = RichText.asText(doc.title)
  const description = RichText.asText(doc.description)
  const datePublished = formatHumanDate(doc.date)

  const { image } = doc
  const { content } = props.data.prismicBlogPost.data
  console.log("file: article.tsx ~ line 28 ~ Article ~ content", content)

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
              <img className="mx-auto" src={image.url} alt={image.alt} />
              <figcaption className="mt-8">
                {image.alt} {image.copyright && `© ${image.copyright}`}
              </figcaption>
            </figure>
          </div>
        )}

        <div className="post-content-body">
          <div className="mb-20">
            <CustomRichText render={content} />
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
  query ArticleQuery($uid: String) {
    site {
      siteMetadata {
        title
      }
    }
    prismicBlogPost(uid: { eq: $uid }) {
      ...PrismicPostFragment
      data {
        content {
          type
          text
          dimensions {
            width
            height
          }
          spans {
            start
            end
            type
          }
          alt
          copyright
          url
        }
      }
    }
  }
`
