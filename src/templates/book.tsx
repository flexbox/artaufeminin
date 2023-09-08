import { RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"

import Author from "../components/author"
import CustomRichText from "../components/customRichText"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/text"
import Tipee from "../components/tipee"

interface BookProps {
  pageContext: {
    node: {
      uid: string
      data: {
        title: {
          text: string
        }
        content: {
          text: string
          richText: RichTextBlock[]
        }
      }
    }
  }
}

export default function Book(props: BookProps): ReactElement {
  const { data } = props.pageContext.node

  const seoTitle = data.title.text
  const seoDescription = data.content.text
  const richText = data.content.richText

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />

      <div className="m-auto max-w-3xl">
        <header>
          <Text as="h1" className="my-24">
            {seoTitle}
          </Text>
        </header>

        <article className="prose prose-xl prose-blue">
          <div className="article-content mb-20">
            <CustomRichText render={richText} />
          </div>
          <Tipee />
          <Author />
        </article>
      </div>
    </Layout>
  )
}
