// Controlling your site’s data in the GraphQL data layer.
// https://www.gatsbyjs.org/docs/node-apis/

const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`✅ Your Gatsby site has been built`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const episodeTemplate = path.resolve(`src/templates/episode.tsx`)
  const result = await graphql(`
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
  result.data.allAnchorEpisode.nodes.forEach((node) => {
    createPage({
      path: `episodes/${node.guid}`,
      component: episodeTemplate,
      context: {
        ...node,
      },
    })
  })

  const articleTemplate = path.resolve(`src/templates/article.tsx`)
  const result2 = await graphql(`
    query {
      allPrismicBlogPost {
        nodes {
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
              text
            }
          }
        }
      }
    }
  `)

  result2.data.allPrismicBlogPost.nodes.forEach((node) => {
    createPage({
      path: `articles/${node.data.title.text}`,
      component: articleTemplate,
      context: {
        ...node,
      },
    })
  })
}
