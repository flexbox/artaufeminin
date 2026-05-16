// Controlling your site’s data in the GraphQL data layer.
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`✅ Your Gatsby site has been built`)
}

const FIRST_PAGE_LIMIT = 10
const OTHER_PAGES_LIMIT = 12

function buildPaginatedPages(total) {
  const remaining = Math.max(0, total - FIRST_PAGE_LIMIT)
  const numPages = 1 + Math.ceil(remaining / OTHER_PAGES_LIMIT)
  return Array.from({ length: numPages }).map((_, i) => ({
    currentPage: i + 1,
    numPages,
    limit: i === 0 ? FIRST_PAGE_LIMIT : OTHER_PAGES_LIMIT,
    skip: i === 0 ? 0 : FIRST_PAGE_LIMIT + (i - 1) * OTHER_PAGES_LIMIT,
  }))
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // ── ARTICLES LIST (paginée) ──────────────────────────────────────
  const articlesListTemplate = path.resolve(`src/templates/articles-list.tsx`)
  const articlesCount = await graphql(`
    query { allPrismicBlogPost { totalCount } }
  `)
  buildPaginatedPages(articlesCount.data.allPrismicBlogPost.totalCount).forEach(
    ({ currentPage, numPages, limit, skip }) => {
      createPage({
        path: currentPage === 1 ? `/articles/` : `/articles/${currentPage}/`,
        component: articlesListTemplate,
        context: { limit, skip, currentPage, numPages },
      })
    }
  )

  // ── PODCASTS LIST (paginée) ──────────────────────────────────────
  const podcastsListTemplate = path.resolve(`src/templates/podcasts-list.tsx`)
  const podcastsCount = await graphql(`
    query { allAnchorEpisode { totalCount } }
  `)
  buildPaginatedPages(podcastsCount.data.allAnchorEpisode.totalCount).forEach(
    ({ currentPage, numPages, limit, skip }) => {
      createPage({
        path: currentPage === 1 ? `/podcasts/` : `/podcasts/${currentPage}/`,
        component: podcastsListTemplate,
        context: { limit, skip, currentPage, numPages },
      })
    }
  )

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
    // Redirect old url to new url needs to be before `createPage`
    createRedirect({
      fromPath: `/podcast/${node.guid}`,
      toPath: `/podcasts/${node.guid}`,
      isPermanent: true,
    })

    createPage({
      path: `podcasts/${node.guid}`,
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
    // Redirect old url to new url needs to be before `createPage`
    createRedirect({
      fromPath: `/article/${edge.node.uid}`,
      toPath: `/articles/${edge.node.uid}`,
      isPermanent: true,
    })

    createPage({
      path: `articles/${edge.node.uid}`,
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
    // Redirect old url to new url needs to be before `createPage`
    createRedirect({
      fromPath: `/livre/${edge.node.uid}`,
      toPath: `/livres/${edge.node.uid}`,
      isPermanent: true,
    })

    createPage({
      path: `livres/${edge.node.uid}`,
      component: bookTemplate,
      context: {
        ...edge,
      },
    })
  })
}
