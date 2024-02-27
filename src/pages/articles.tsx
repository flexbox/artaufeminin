import { graphql } from 'gatsby';
import React from 'react';

import { ArticleList } from '../components/article-list';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Text from '../components/text';

interface ArticlesPageProps {
  data: {
    allPrismicBlogPost: {
      nodes: []; // it should be something like PrismicBlogPost[] insteead of a simple []
    };
  };
}

const ArticlesPage = ({ data }: ArticlesPageProps) => {
  const articles = data.allPrismicBlogPost.nodes;

  return (
    <Layout withInstagram={false}>
      <Text as="h1" className="w-2/3 m-auto">
        Articles artistes femmes
      </Text>
      <ArticleList allArticles={articles} />
    </Layout>
  );
};

export const query = graphql`
  query allBlogPosts {
    allPrismicBlogPost(sort: { first_publication_date: DESC }) {
      nodes {
        ...PrismicBlogPostFragment
      }
    }
  }
`;

export const Head = () => {
  return (
    <SEO
      title="Parcourez notre collection d'articles sur les artistes féminines à travers l'histoire."
      description="Découvrez l'inspiration et la créativité des femmes artistes sur ART au féminin. Explorez leurs œuvres exceptionnelles, leurs parcours uniques et leurs contributions inestimables à l'art. Plongez dans l'univers captivant des artistes au féminin."
    />
  );
};

export default ArticlesPage;
