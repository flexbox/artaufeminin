import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface FaqPageProps {
  data: {
    allPrismicFaq: {
      nodes: [
        {
          data: {
            question: string
            answer: RichTextBlock[]
          }
        }
      ]
    }
  }
}

function QuestionItem({ question }): ReactElement {
  return (
    <>
      <h2>{question.data.question.text}</h2>
      <div>{RichText.render(question.data.answer.raw)}</div>
      <hr className="separator" />
    </>
  )
}

export default function FaqPage({ data }: FaqPageProps): ReactElement {
  const questions = data.allPrismicFaq.nodes

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
          {questions.map((question, index) => {
            return <QuestionItem key={index} question={question} />
          })}
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPrismicFaq {
      nodes {
        data {
          question {
            text
          }
          answer {
            raw
          }
        }
      }
    }
  }
`
