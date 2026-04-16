import { graphql } from 'gatsby';
import React from 'react';

import { ArticleList } from '../components/article-list';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface ArticlesPageProps {
  data: {
    allPrismicBlogPost: {
      nodes: [];
    };
  };
}

const ArticlesPage = ({ data }: ArticlesPageProps) => {
  const articles = data.allPrismicBlogPost.nodes;

  return (
    <Layout withInstagram={false}>
      {/* En-tête */}
      <section className="m-auto mb-10 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Tous les articles
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Articles sur les femmes artistes
        </h1>
      </section>

      <ArticleList allArticles={articles} />
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

export const Head = () => {
  return (
    <SEO
      title="Articles sur les femmes artistes — ART au féminin"
      description="Découvrez l'inspiration et la créativité des femmes artistes sur ART au féminin. Explorez leurs œuvres exceptionnelles, leurs parcours uniques et leurs contributions inestimables à l'histoire de l'art."
    />
  );
};

export default ArticlesPage;
