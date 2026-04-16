import { graphql } from 'gatsby';
import React from 'react';

import BookList, { BookProps } from '../components/book-list';
import Layout from '../components/layout';
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
      {/* En-tête */}
      <section className="m-auto mb-10 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Bibliothèque
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Livres sur les femmes artistes
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-500">
          Une sélection de lectures pour explorer l'histoire des femmes dans l'art — biographies, essais, monographies.
        </p>
      </section>

      <BookList allBooks={allBooks} />
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
      title="Livres sur les femmes artistes — ART au féminin"
      description="Une sélection de livres pour explorer l'histoire des femmes dans l'art — biographies, essais, monographies, critiques littéraires."
    />
  );
};

export default BooksPage;
