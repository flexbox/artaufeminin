// Controlling your site’s data in the GraphQL data layer.
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`✅ Your Gatsby site has been built`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const episodeTemplate = path.resolve(`src/templates/episode.tsx`)
  const podcats = await graphql(`
    query {
      allAnchorEpisode {
        nodes {
          guid
          contentSnippet
          link
          title
          itunes {
            summary
            image
            episode
            season
            duration
          }
          enclosure {
            url
          }
        }
      }
    }
  `)
  podcats.data.allAnchorEpisode.nodes.forEach((node) => {
    createPage({
      path: `podcast/${node.guid}`,
      component: episodeTemplate,
      context: {
        ...node,
      },
    })
  })

  const articleTemplate = path.resolve(`src/templates/article.tsx`)
  const articles = await graphql(`
    query {
      allPrismicBlogPost {
        edges {
          next {
            uid
            data {
              title {
                text
              }
              image {
                url
              }
            }
          }
          previous {
            uid
            data {
              image {
                url
              }
              title {
                text
              }
            }
          }
          node {
            uid
            data {
              date
              title {
                text
              }
              image {
                alt
                copyright
                url
                gatsbyImageData
              }
              description {
                text
              }
              content {
                richText
              }
            }
          }
        }
      }
    }
  `)

  articles.data.allPrismicBlogPost.edges.forEach((edge) => {
    createPage({
      path: `article/${edge.node.uid}`,
      component: articleTemplate,
      context: {
        ...edge,
      },
    })
  })

  const bookTemplate = path.resolve(`src/templates/book.tsx`)
  const books = await graphql(`
    query {
      allPrismicBookReview {
        edges {
          node {
            uid
            data {
              content {
                text
                richText
              }
              title {
                text
              }
            }
          }
        }
      }
    }
  `)

  books.data.allPrismicBookReview.edges.forEach((edge) => {
    createPage({
      path: `livre/${edge.node.uid}`,
      component: bookTemplate,
      context: {
        ...edge,
      },
    })
  })
}
