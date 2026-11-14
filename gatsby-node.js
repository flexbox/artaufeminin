// Controlling your site's data in the GraphQL data layer.
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require(`path`);

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`✅ Your Gatsby site has been built`);
};

const FIRST_PAGE_LIMIT = 10;
const OTHER_PAGES_LIMIT = 12;

function buildPaginatedPages(total) {
  const remaining = Math.max(0, total - FIRST_PAGE_LIMIT);
  const numPages = 1 + Math.ceil(remaining / OTHER_PAGES_LIMIT);
  return Array.from({ length: numPages }).map((_, i) => ({
    currentPage: i + 1,
    numPages,
    limit: i === 0 ? FIRST_PAGE_LIMIT : OTHER_PAGES_LIMIT,
    skip: i === 0 ? 0 : FIRST_PAGE_LIMIT + (i - 1) * OTHER_PAGES_LIMIT,
  }));
}

// Create blog pages dynamically
// Les descriptions Anchor contiennent encore un lien « Soutenir ART au féminin »
// vers Tipeee : on retire ces paragraphes (HTML) ou ces lignes (texte brut).
// Spotify for Creators supprime parfois les retours à la ligne des
// descriptions (« …à Lille.Au programme :• Le métier… »). On remet des
// coupures là où le texte est visiblement collé, sans toucher aux balises.
const PARAGRAPH = '</p><p>';
const LINE = '<br>';
const SECTION_STARTS = [
  'Au programme',
  'Chapitres',
  'Merci',
  'Si cet épisode',
  'Sources',
  'Références',
];
const restoreLineBreaks = (html) =>
  html
    ? html
        .split(/(<[^>]+>)/)
        .map((part) =>
          part.startsWith('<')
            ? part
            : part
                // « ?Pour », « Lille.Au » : fin de phrase collée à la suivante
                // (espace avant « ? » / « ! » en français)
                .replace(
                  /(?<=[a-zà-ÿ0-9)»] ?)([.?!…])(?=[A-ZÀ-Ý«])/g,
                  `$1${PARAGRAPH}`
                )
                // début de section collé au mot précédent
                .replace(
                  new RegExp(
                    `(?<=[a-zà-ÿ])(?=(${SECTION_STARTS.join('|')})(?![a-zà-ÿ]))`,
                    'g'
                  ),
                  PARAGRAPH
                )
                // puces « • » collées
                .replace(/(?<=\S)\s*•\s*/g, `${LINE}• `)
                // liens « 🔗 » : un par ligne
                .replace(/(?<=\S)\s*🔗\s*/gu, `${LINE}🔗 `)
                // horaires de chapitre collés : « FÉMININ04:50 »
                .replace(/(?<=[A-Za-zÀ-ÿ.])(?=\d{1,2}:\d{2}\b)/g, LINE)
        )
        .join('')
    : html;

const removeTipeee = (input) =>
  input
    ? input
        .replace(/<p>(?:(?!<\/p>)[\s\S])*tipeee(?:(?!<\/p>)[\s\S])*<\/p>/gi, '')
        .replace(/^.*tipeee.*$\n?/gim, '')
    : input;

// ── Transcriptions d'épisodes ────────────────────────────────────────────────
// Un fichier par épisode : content/transcripts/<slug>.md
//   ---
//   statut: publié        (ou « brouillon » : visible seulement avec
//                           TRANSCRIPTS_DRAFTS=1, pour relire en local)
//   type: script          (facultatif : texte écrit pour l'enregistrement,
//   ---                     sinon « transcription »)
//   ## 04:50 — Titre de chapitre
//   **Nom de la personne** : texte…
// Syntaxe acceptée : intertitres « ## », paragraphes séparés par une ligne
// vide, **gras** et *italique*.
const fs = require('fs');

const TRANSCRIPTS_DIR = path.join(__dirname, 'content', 'transcripts');

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const inlineMarkdown = (text) =>
  escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

function readTranscript(slug) {
  const file = path.join(TRANSCRIPTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, 'utf-8');
  const frontMatter = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const status = frontMatter?.[1].match(/statut:\s*(\S+)/)?.[1] ?? 'brouillon';
  // « script » : texte écrit pour l'enregistrement ; sinon transcription
  const kind = frontMatter?.[1].match(/type:\s*(\S+)/)?.[1] ?? 'transcription';
  if (status !== 'publié' && process.env.TRANSCRIPTS_DRAFTS !== '1')
    return null;

  const body = frontMatter ? raw.slice(frontMatter[0].length) : raw;
  const blocks = body
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  const html = blocks
    .map((block) => {
      const heading = block.match(/^##\s+(.+)$/);
      if (heading) {
        const [, time, title] = heading[1].match(
          /^(\d{1,2}:\d{2}(?::\d{2})?)\s*[—-]\s*(.+)$/
        ) || [null, null, heading[1]];
        return `<h3>${time ? `<span class="transcript-time">${time}</span> ` : ''}${inlineMarkdown(title)}</h3>`;
      }
      return `<p>${inlineMarkdown(block.replace(/\n/g, ' '))}</p>`;
    })
    .join('\n');

  const text = blocks
    .map((b) => b.replace(/^##\s+/, '').replace(/\*\*|\*/g, ''))
    .join('\n\n');

  return {
    kind,
    html,
    text,
    readingMinutes: Math.max(1, Math.round(text.split(/\s+/).length / 230)),
  };
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // ── ARTICLES LIST (paginée) ──────────────────────────────────────
  const articlesListTemplate = path.resolve(`src/templates/articles-list.tsx`);
  const articlesCount = await graphql(`
    query {
      allPrismicBlogPost {
        totalCount
      }
    }
  `);
  buildPaginatedPages(articlesCount.data.allPrismicBlogPost.totalCount).forEach(
    ({ currentPage, numPages, limit, skip }) => {
      createPage({
        path: currentPage === 1 ? `/articles/` : `/articles/${currentPage}/`,
        component: articlesListTemplate,
        context: { limit, skip, currentPage, numPages },
      });
    }
  );

  // ── PODCASTS LIST (paginée) ──────────────────────────────────────
  const podcastsListTemplate = path.resolve(`src/templates/podcasts-list.tsx`);
  const podcastsCount = await graphql(`
    query {
      allAnchorEpisode {
        totalCount
      }
    }
  `);
  buildPaginatedPages(podcastsCount.data.allAnchorEpisode.totalCount).forEach(
    ({ currentPage, numPages, limit, skip }) => {
      createPage({
        path: currentPage === 1 ? `/podcasts/` : `/podcasts/${currentPage}/`,
        component: podcastsListTemplate,
        context: { limit, skip, currentPage, numPages },
      });
    }
  );

  const episodeTemplate = path.resolve(`src/templates/episode.tsx`);
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
  `);
  podcats.data.allAnchorEpisode.nodes.forEach((node) => {
    const slug = slugify(node.title);
    const newPath = `podcasts/${slug}/`;
    const oldPath = `podcasts/${node.guid}/`;

    // Redirect ancienne URL UUID → nouvelle URL slug (301)
    createRedirect({
      fromPath: `/${oldPath}`,
      toPath: `/${newPath}`,
      isPermanent: true,
    });

    // Redirect encore plus ancienne URL /podcast/ → nouvelle URL slug (301)
    createRedirect({
      fromPath: `/podcast/${node.guid}`,
      toPath: `/${newPath}`,
      isPermanent: true,
    });

    createPage({
      path: newPath,
      component: episodeTemplate,
      context: {
        ...node,
        itunes: {
          ...node.itunes,
          summary: restoreLineBreaks(removeTipeee(node.itunes.summary)),
        },
        contentSnippet: removeTipeee(node.contentSnippet),
        slug,
        transcript: readTranscript(slug),
      },
    });
  });

  const articleTemplate = path.resolve(`src/templates/article.tsx`);
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
                gatsbyImageData
              }
            }
          }
          previous {
            uid
            data {
              image {
                url
                gatsbyImageData
              }
              title {
                text
              }
            }
          }
          node {
            uid
            last_publication_date
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
  `);

  articles.data.allPrismicBlogPost.edges.forEach((edge) => {
    // Redirect old url to new url needs to be before `createPage`
    createRedirect({
      fromPath: `/article/${edge.node.uid}`,
      toPath: `/articles/${edge.node.uid}`,
      isPermanent: true,
    });

    createPage({
      path: `articles/${edge.node.uid}`,
      component: articleTemplate,
      context: {
        ...edge,
      },
    });
  });

  const bookTemplate = path.resolve(`src/templates/book.tsx`);
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
              description {
                text
              }
              title {
                text
              }
            }
          }
        }
      }
    }
  `);

  books.data.allPrismicBookReview.edges.forEach((edge) => {
    // Redirect old url to new url needs to be before `createPage`
    createRedirect({
      fromPath: `/livre/${edge.node.uid}`,
      toPath: `/livres/${edge.node.uid}`,
      isPermanent: true,
    });

    createPage({
      path: `livres/${edge.node.uid}`,
      component: bookTemplate,
      context: {
        ...edge,
      },
    });
  });
};
