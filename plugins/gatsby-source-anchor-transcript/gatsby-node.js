'use strict'

const Parser = require('rss-parser')

// Explicitly define the AnchorEpisode type so transcriptUrl is always
// present in the GraphQL schema, even when null for all episodes.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type AnchorEpisode implements Node {
      transcriptUrl: String
    }
  `)
}

exports.sourceNodes = async (
  { actions, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { rss } = configOptions

  if (typeof rss !== 'string' || !rss.startsWith('http')) {
    throw new Error('[gatsby-source-anchor-transcript] rss must be a valid URL')
  }

  console.time('\nAnchor podcast fetched in')

  // Parse podcast:transcript custom field from the RSS
  const parser = new Parser({
    customFields: {
      item: [
        ['podcast:transcript', 'transcript'],
        ['psc:chapters', 'chapters'],
      ],
    },
  })

  const feed = await parser.parseURL(rss)

  if (!feed || !feed.title) {
    throw new Error(
      '[gatsby-source-anchor-transcript] Could not fetch data from RSS feed'
    )
  }

  const getEpisodeId = (guid) => `anchor-episode-${guid}`

  for (const item of feed.items) {
    // Normalize transcript field — rss-parser returns either a string (url)
    // or an object with $ attributes depending on the XML structure
    let transcriptUrl = null
    if (item.transcript) {
      if (typeof item.transcript === 'string') {
        transcriptUrl = item.transcript
      } else if (item.transcript.$ && item.transcript.$.url) {
        transcriptUrl = item.transcript.$.url
      }
    }

    const node = {
      ...item,
      transcriptUrl,
      // Remove raw transcript field — we expose transcriptUrl instead
      transcript: undefined,
      id: getEpisodeId(item.guid),
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

  console.timeEnd('\nAnchor podcast fetched in')
}
