import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import { QuotationProps } from '../components/quotation';
import QuotationList from '../components/quotationList';
import SEO from '../components/seo';

const QuotationPage = ({
  data,
}: {
  data: { allPrismicQuotation: { nodes: QuotationProps[] } };
}) => {
  const quotations = data.allPrismicQuotation.nodes;

  return (
    <Layout withInstagram={false}>
      {/* En-tête */}
      <section className="m-auto mb-12 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Inspiration
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Citations de femmes artistes
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-500">
          Des paroles qui traversent le temps — ce que les femmes artistes ont dit de l'art, de la création et de leur vie.
        </p>
      </section>

      <QuotationList allQuotation={quotations} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allPrismicQuotation(sort: { last_publication_date: DESC }) {
      nodes {
        id
        data {
          author
          quotation
        }
      }
    }
  }
`;

export const Head = () => {
  return (
    <SEO
      title="Citations de femmes artistes — ART au féminin"
      description="Des paroles inspirantes qui traversent le temps — ce que les femmes artistes ont dit de l'art, de la création et de leur vie."
    />
  );
};

export default QuotationPage;
