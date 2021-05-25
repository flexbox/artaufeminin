// Controlling your site’s data in the GraphQL data layer.
// https://www.gatsbyjs.org/docs/node-apis/

const path = require("path")

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
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
      allPrismicBlogPost {
        nodes {
          uid
          id
        }
      }
    }
  `)

  const episodeTemplate = path.resolve(`src/templates/episode.tsx`)
  pages.data.allAnchorEpisode.nodes.forEach((node) => {
    createPage({
      path: `episodes/${node.guid}`,
      component: episodeTemplate,
      context: {
        ...node,
      },
    })
  })

  const articleTemplate = path.resolve(`src/templates/article.tsx`)
  pages.data.allPrismicPage.nodes.forEach((node) => {
    createPage({
      path: `/${node.uid}`,
      component: articleTemplate,
      context: {
        id: node.id,
      },
    })
  })
}

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`✅ Your Gatsby site has been built`)
}
