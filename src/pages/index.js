import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import ArticleCard from "../components/articleCard"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const articles = data.prismic.allBlog_posts.edges
  let articleCounter = 0
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO title="🎙 ART au feminin : Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h1 className="page-head-title">
            {data.site.siteMetadata.description}
          </h1>
        </header>
      )}

      <div className="post-feed">
        {articles.map(({ node }) => {
          articleCounter++
          return (
            <ArticleCard
              key={node._meta.id}
              counter={articleCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>

      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    prismic {
      allBlog_posts {
        edges {
          node {
            image
            title
            _meta {
              id
              uid
            }
          }
        }
        totalCount
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
