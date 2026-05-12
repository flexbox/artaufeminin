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
      <section className="m-auto mb-10 mt-8 w-3/4 border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Bibliothèque
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Livres sur les Femmes Artistes
        </h1>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
          Une sélection de chroniques pour explorer l'Histoire des femmes dans l'Art — biographies, essais, monographies.
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
          title { text }
          content { text }
        }
      }
    }
  }
`;

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Livres sur les Femmes Artistes — ART AU FÉMININ"
    description="Une sélection de chroniques pour explorer l'Histoire des femmes dans l'Art — biographies, essais, monographies de femmes artistes de l'Antiquité à nos jours."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);

export default BooksPage;
