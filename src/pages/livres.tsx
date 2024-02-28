import { graphql } from 'gatsby';
import React from 'react';

import BookList, { BookProps } from '../components/book-list';
import Layout from '../components/layout';
import LayoutSidebar from '../components/layoutSidebar';
import SEO from '../components/seo';

interface BooksPageProps {
  data: {
    allPrismicBookReview: {
      nodes: BookProps[];
    };
  };
}

const BooksPage = ({ data }: BooksPageProps) => {
  const allBooks = data.allPrismicBookReview.nodes;

  return (
    <Layout withInstagram={false}>
      <LayoutSidebar withPodcast={false}>
        <BookList allBooks={allBooks} />
      </LayoutSidebar>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPrismicBookReview {
      nodes {
        uid
        data {
          title {
            text
          }
          content {
            text
          }
        }
      }
    }
  }
`;

export const Head = () => {
  return (
    <SEO
      title="Parcourez notre collection de livres sur les femmes artistes et leur contribution à l'art."
      description="Découvrez des critiques littéraires exceptionnelles sur notre site ART au féminin. Plongez dans l'univers captivant des livres écrits par des femmes, où la créativité et la voix féminine sont mises en lumière"
    />
  );
};

export default BooksPage;
