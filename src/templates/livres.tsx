import React from "react"
import { graphql } from "gatsby"

const LivresTemplate = ({ data }) => {
  // Access the necessary data from the GraphQL query result
  const { allSitePage, allAnchorEpisode } = data

  // Rest of your component code...

  return <div>{/* Render your component content */}</div>
}

export const query = graphql`
  query LivresTemplateQuery {
    allSitePage {
      nodes {
        path
      }
    }
    allAnchorEpisode {
      nodes {
        pubDate
      }
    }
  }
`

export default LivresTemplate
