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
      <section className="m-auto mb-10 mt-8 w-3/4 border-b border-neutral-200 pb-8">
        <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Tous les Articles
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Articles sur les Femmes Artistes
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
      title="Articles sur les Femmes Artistes — ART AU FÉMININ"
      description="Découvrez l'inspiration et la créativité des femmes artistes sur ART AU FÉMININ. Explorez leurs œuvres exceptionnelles, leurs parcours uniques et leurs contributions inestimables à l'Histoire de l'Art."
    />
  );
};

export default ArticlesPage;
