const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`✅ Your Gatsby site has been built`)
}

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
      path: `episodes/${node.guid}`,
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

  // Add the following code to include allPrismicBook

  const bookTemplate = path.resolve(`src/templates/livres.tsx`)
  const books = await graphql(`
    query {
      allPrismicBookReview {
        edges {
          node {
            uid
            data {
              title {
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

  books.data.allPrismicBookReview.edges.forEach((edge) => {
    createPage({
      path: `book/${edge.node.uid}`,
      component: bookTemplate,
      context: {
        ...edge,
      },
    })
  })
}
