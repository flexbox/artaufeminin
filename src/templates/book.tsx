import { RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"

import Author from "../components/author"
import { CustomRichText } from "../components/custom-rich-text"
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

function Head({
  title,
  metaDescription,
}: {
  title: string
  metaDescription: string
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="google-site-verification"
        content="_I5e7rtsxD_MXi3RnD2AsbiQopSHnXHQ_eEAKQYuLPk"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </>
  )
}

export default function Book(props: BookProps): ReactElement {
  const { data } = props.pageContext.node

  const seoTitle = data.title.text
  const seoDescription = data.content.text
  const richText = data.content.richText

  return (
    <Layout>
      <Head title={seoTitle} metaDescription={seoDescription} />

      <div className="m-auto max-w-3xl">
        <header>
          <Text as="h1" variant={"h1"} className="my-24">
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
