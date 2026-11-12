import { graphql, Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import { ArticleList, getArticleDate } from '../components/article-list';
import { FeaturedCard } from '../components/featured-card';
import Layout from '../components/layout';
import { Pagination } from '../components/pagination';
import SEO from '../components/seo';
import { truncateWords } from '../utils/date';

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
    <Layout>
      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-10 mt-8 w-page max-w-6xl lg:w-page-lg border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Tous les Articles
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Articles sur les femmes artistes
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Portraits, œuvres, expositions et histoire de l'art : des articles
          pour redécouvrir les femmes artistes, de la Renaissance à aujourd'hui.
          Écrits par Aldjia Boughias.
        </p>
      </section>

      {/* ── DERNIER ARTICLE — featured uniquement page 1 ──────────── */}
      {featured &&
        (() => {
          const title = RichText.asText(featured.data.title.richText);
          const description = featured.data.description?.richText
            ? RichText.asText(featured.data.description.richText)
            : undefined;
          return (
            <section className="mx-auto mb-16 w-page max-w-6xl lg:w-page-lg">
              <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
                  Dernier Article
                </h2>
              </div>
              <FeaturedCard
                href={`/articles/${featured.uid}`}
                image={featured.data.image.gatsbyImageData}
                imageUrl={featured.data.image.url}
                imageAlt={featured.data.image.alt || title}
                label={`À la une · ${getArticleDate(featured)}`}
                title={title}
                description={
                  description ? truncateWords(description, 300) : undefined
                }
                imageRight
                cta={
                  <Link
                    to={`/articles/${featured.uid}`}
                    aria-label={`Lire l'article : ${title}`}
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
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
        <section className="mx-auto mb-10 w-page max-w-6xl lg:w-page-lg">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
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
            gatsbyImageData
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
    ? 'Articles sur les femmes artistes — ART AU FÉMININ'
    : `Articles sur les femmes artistes — Page ${currentPage} — ART AU FÉMININ`;

  const jsonLd = isFirst
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Articles sur les femmes artistes',
        url: 'https://artaufeminin.fr/articles/',
        itemListElement: data.allPrismicBlogPost.nodes.map((node, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `https://artaufeminin.fr/articles/${node.uid}`,
          name: RichText.asText(node.data.title.richText),
        })),
      }
    : undefined;

  return (
    <SEO
      title={title}
      description="Portraits de femmes artistes oubliées par l'Histoire de l'Art — biographies, analyses d'œuvres et récits de parcours de la Renaissance à l'Art contemporain. Écrits par Aldjia Boughias pour ART AU FÉMININ."
      url={`https://artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};

export default ArticlesListTemplate;
