import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface FaqPageProps {
  data: {
    allFaqs: {
      edges: [
        {
          node: {
            question: RichTextBlock[]
            answer: RichTextBlock[]
          }
        }
      ]
    }
  }
}

export default function FaqPage({ data }: FaqPageProps): ReactElement {
  const questions = data.allFaqs.edges

  return (
    <Layout>
      <SEO
        title="Questions fréquentes"
        description="Conseils et réponses sur le podcast."
      />
      <article className="post-content no-image">
        <div className="post-content-header">
          <h1 className="post-content-title">Questions fréquentes</h1>
        </div>
        <div className="post-content-body">
          {questions.map((question) => {
            return (
              <>
                <h2>{RichText.asText(question.node.question)}</h2>
                <div>{RichText.render(question.node.answer)}</div>
                <hr className="separator" />
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
    allFaqs {
      edges {
        node {
          question
          answer
        }
      }
    }
  }
`
