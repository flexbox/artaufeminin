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
  const byUid = new Map<string, BookProps>();
  for (const book of data.allPrismicBookReview.nodes) {
    if (!book.uid) continue;
    const existing = byUid.get(book.uid);
    const isRicher =
      !existing ||
      (!existing.data.description?.text && book.data.description?.text) ||
      (!existing.data.title?.text && book.data.title?.text);
    if (isRicher) {
      byUid.set(book.uid, book);
    }
  }
  const allBooks = Array.from(byUid.values());

  return (
    <Layout withInstagram={false}>
      <section className="m-auto mb-10 mt-8 w-3/4 border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Bibliothèque
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Livres sur les Femmes Artistes
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
          Une sélection de chroniques pour explorer l'Histoire des femmes dans
          l'Art — biographies, essais, monographies.
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
          description {
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

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Livres sur les Femmes Artistes — ART AU FÉMININ"
    description="Chroniques et sélections de livres sur les femmes artistes : biographies, essais, monographies — de l'Antiquité à l'Art contemporain. Recommandés par Aldjia Boughias pour ART AU FÉMININ."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);

export default BooksPage;
