import React, { ReactElement } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import Text from "../components/text"
import { RichTextBlock } from "prismic-reactjs"
import CustomRichText from "../components/customRichText"
import Tipee from "../components/tipee"

interface PropsBook {
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

export default function Book(props: PropsBook): ReactElement {
  const { data } = props.pageContext.node
  const seoTitle = data.title.text
  const seoDescription = data.content.text

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />

      <div className="m-auto max-w-3xl">
        <header>
          <Text as="h1" className="my-24">
            {seoTitle}
          </Text>
          <div className="prose prose-xl">
            <p className="font-merri first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-700 first-line:uppercase first-line:tracking-widest">
              {seoDescription}
            </p>
          </div>
        </header>

        <article className="prose prose-xl prose-blue">
          <div className="article-content mb-20">
            <CustomRichText render={data.content.richText} />
          </div>
          <Tipee />
          <Author />
        </article>
      </div>
    </Layout>
  )
}
