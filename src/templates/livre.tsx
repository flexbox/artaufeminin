import React, { ReactElement } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import Text from "../components/text"

interface PropsLivre {
  uid: string
  data: {
    title: {
      text: string
    }
    content: {
      text: string
    }
  }
}

export default function Livre(props: PropsLivre): ReactElement {
  const { data } = props
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
          <div className="article-content mb-20">{data.content.text}</div>
          <p className="mb-20 text-gray-500">
            Vous avez aimé cet article ?{" "}
            <a
              href="https://fr.tipeee.com/art-au-feminin"
              title="Sponsoriser les épisodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devenez mécène sur tipeee m’aide beaucoup.
            </a>
          </p>

          <Author />
        </article>
      </div>
    </Layout>
  )
}
