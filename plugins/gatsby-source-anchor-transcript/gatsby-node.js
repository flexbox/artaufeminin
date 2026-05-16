'use strict'

const Parser = require('rss-parser')

exports.sourceNodes = async (
  { actions, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { rss } = configOptions

  if (typeof rss !== 'string' || !rss.startsWith('http')) {
    throw new Error('[gatsby-source-anchor-transcript] rss must be a valid URL')
  }

  const parser = new Parser()
  const feed = await parser.parseURL(rss)

  if (!feed || !feed.title) {
    throw new Error(
      '[gatsby-source-anchor-transcript] Could not fetch data from RSS feed'
    )
  }

  for (const item of feed.items) {
    const node = {
      ...item,
      id: `anchor-episode-${item.guid}`,
      parent: null,
      children: [],
      internal: {
        type: 'AnchorEpisode',
        mediaType: 'text/html',
        content: JSON.stringify(item),
        contentDigest: createContentDigest(JSON.stringify(item)),
      },
    }

    createNode(node)
  }
}
