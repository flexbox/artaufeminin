import { graphql, Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import { ArticleList } from '../components/article-list';
import { FeaturedCard } from '../components/featured-card';
import Layout from '../components/layout';
import { Pagination } from '../components/pagination';
import SEO from '../components/seo';

interface ArticlesListProps {
  data: {
    allPrismicBlogPost: {
      nodes: any[];
    };
  };
  pageContext: {
    currentPage: number;
    numPages: number;
    skip: number;
    limit: number;
  };
  location: { pathname: string };
}

const ArticlesListTemplate = ({ data, pageContext }: ArticlesListProps) => {
  const articles = data.allPrismicBlogPost.nodes;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const featured = isFirst ? articles[0] : null;
  const rest = isFirst ? articles.slice(1) : articles;

  return (
    <Layout withInstagram={false}>
      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-10 mt-8 w-11/12 max-w-7xl border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Tous les Articles
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Articles sur les Femmes Artistes
        </h1>
      </section>

      {/* ── DERNIER ARTICLE — featured uniquement page 1 ──────────── */}
      {featured &&
        (() => {
          const title = RichText.asText(featured.data.title.richText);
          const description = featured.data.description?.richText
            ? RichText.asText(featured.data.description.richText)
            : undefined;
          return (
            <section className="mx-auto mb-16 w-11/12 max-w-7xl">
              <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
                  Dernier Article
                </h2>
              </div>
              <FeaturedCard
                href={`/articles/${featured.uid}`}
                imageUrl={featured.data.image.url}
                imageAlt={featured.data.image.alt || title}
                label="Article · À la Une"
                title={title}
                description={
                  description ? description.substring(0, 300) + '…' : undefined
                }
                imageRight
                cta={
                  <Link
                    to={`/articles/${featured.uid}`}
                    aria-label={`Lire l'article : ${title}`}
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
                  >
                    Lire l'Article <span aria-hidden="true">→</span>
                  </Link>
                }
              />
            </section>
          );
        })()}

      {/* ── GRILLE D'ARTICLES ─────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="mx-auto mb-10 w-11/12 max-w-7xl">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
              {isFirst ? 'Tous les Articles' : `Page ${currentPage}`}
            </h2>
          </div>
          <ArticleList allArticles={rest} />
        </section>
      )}

      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        basePath="/articles"
      />
    </Layout>
  );
};

export const query = graphql`
  query ArticlesListQuery($skip: Int!, $limit: Int!) {
    allPrismicBlogPost(
      sort: { first_publication_date: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        uid
        first_publication_date
        data {
          date
          title {
            richText
          }
          description {
            richText
          }
          image {
            alt
            url
          }
        }
      }
    }
  }
`;

export const Head = ({
  data,
  pageContext,
  location,
}: {
  data: { allPrismicBlogPost: { nodes: any[] } };
  pageContext: { currentPage: number; numPages: number };
  location: { pathname: string };
}) => {
  const { currentPage } = pageContext;
  const isFirst = currentPage === 1;
  const title = isFirst
    ? 'Articles sur les Femmes Artistes — ART AU FÉMININ'
    : `Articles sur les Femmes Artistes — Page ${currentPage} — ART AU FÉMININ`;

  const jsonLd = isFirst
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Articles sur les Femmes Artistes',
        url: 'https://www.artaufeminin.fr/articles/',
        itemListElement: data.allPrismicBlogPost.nodes.map((node, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `https://www.artaufeminin.fr/articles/${node.uid}`,
          name: RichText.asText(node.data.title.richText),
        })),
      }
    : undefined;

  return (
    <SEO
      title={title}
      description="Découvrez l'inspiration et la créativité des femmes artistes sur ART AU FÉMININ. Explorez leurs œuvres exceptionnelles, leurs parcours uniques et leurs contributions inestimables à l'Histoire de l'Art."
      url={`https://www.artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};

export default ArticlesListTemplate;
