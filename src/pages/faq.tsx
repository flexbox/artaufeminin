import { graphql } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"

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
        },
      ]
    }
  }
}

function QuestionItem({ question }): ReactElement {
  return (
    <>
      <h2>{question.data.question.text}</h2>
      <div>{RichText.render(question.data.answer.richText)}</div>
      <hr className="separator" />
    </>
  )
}

export default function FaqPage({ data }: FaqPageProps): ReactElement {
  const questions = data.allPrismicFaq.nodes

  return (
    <Layout>
      <article className="prose m-auto">
        <div>
          <h1>Questions fréquentes</h1>
        </div>
        <div>
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
            richText
          }
        }
      }
    }
  }
`

export const Head = () => {
  return (
    <SEO
      title="Trouvez des réponses à vos questions les plus fréquentes sur le podcast ART au féminin."
      description="Conseils et réponses sur le podcast."
    />
  )
}
