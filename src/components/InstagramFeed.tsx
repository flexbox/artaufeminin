import React from "react"
import { graphql } from "gatsby"

export default function InstagramFeed() {
  const questions = feed.allInstagramPost.nodes
  return (
    <>
      {feed.map(() => {
        return <div>test</div>
      })}
    </>
  )
}
export const feed = graphql`
  query {
    allInstaNode {
      nodes {
        preview
      }
    }
  }
`
