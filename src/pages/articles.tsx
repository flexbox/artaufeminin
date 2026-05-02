import { graphql, Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import { FeaturedCard } from '../components/featured-card';
import { ArticleList } from '../components/article-list';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface ArticlesPageProps {
  data: {
    allPrismicBlogPost: {
      nodes: any[];
    };
  };
}

const ArticlesPage = ({ data }: ArticlesPageProps) => {
  const articles = data.allPrismicBlogPost.nodes;
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <Layout withInstagram={false}>

      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-10 mt-8 w-11/12 max-w-7xl border-b border-neutral-200 pb-8">
        <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Tous les Articles
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Articles sur les Femmes Artistes
        </h1>
      </section>

      {/* ── DERNIER ARTICLE — grande card featured ────────────────── */}
      {featured && (() => {
        const title = RichText.asText(featured.data.title.richText);
        const description = featured.data.description?.richText
          ? RichText.asText(featured.data.description.richText)
          : undefined;
        return (
          <section className="mx-auto mb-16 w-11/12 max-w-7xl">
            <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-900">
                Dernier Article
              </span>
            </div>
            <FeaturedCard
              href={`/articles/${featured.uid}`}
              imageUrl={featured.data.image.url}
              imageAlt={featured.data.image.alt || title}
              label="Article · À la Une"
              title={title}
              description={description ? description.substring(0, 300) + '…' : undefined}
              imageRight
              cta={
                <Link
                  to={`/articles/${featured.uid}`}
                  className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
                >
                  Lire l'Article →
                </Link>
              }
            />
          </section>
        );
      })()}

      {/* ── TOUS LES ARTICLES ─────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="mx-auto mb-20 w-11/12 max-w-7xl">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-900">
              Tous les Articles
            </span>
          </div>
          <ArticleList allArticles={rest} />
        </section>
      )}

    </Layout>
  );
};

export const query = graphql`
  query allBlogPosts {
    allPrismicBlogPost(sort: { first_publication_date: DESC }) {
      nodes {
        ...PrismicBlogPostFragment
        first_publication_date
      }
    }
  }
`;

export const Head = () => (
  <SEO
    title="Articles sur les Femmes Artistes — ART AU FÉMININ"
    description="Découvrez l'inspiration et la créativité des femmes artistes sur ART AU FÉMININ. Explorez leurs œuvres exceptionnelles, leurs parcours uniques et leurs contributions inestimables à l'Histoire de l'Art."
  />
);

export default ArticlesPage;
