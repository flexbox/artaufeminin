import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function FaqPage({ data }): ReactElement {
  const siteTitle = data.site.siteMetadata.title
  const questions = data.prismic.allFaqs.edges
  console.log("defaultfunctionFaqPage -> questions", questions)

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Questions fréquentes"
        description="Conseils et réponses sur le podcast."
      />
      <article className="post-content no-image">
        <div className="post-content-header">
          <h1 className="post-content-title">Questions fréquentes</h1>
        </div>
        <div className="post-content-body">
          {questions.map(question => {
            console.log("defaultfunctionFaqPage -> question", question)
            return (
              <>
                <h2>{RichText.asText(question.node.question)}</h2>
                <div>{RichText.render(question.node.answer)}</div>
                <hr />
              </>
            )
          })}
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    prismic {
      allFaqs {
        edges {
          node {
            question
            answer
          }
        }
      }
    }
  }
`
