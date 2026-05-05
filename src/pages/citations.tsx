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
      <section className="m-auto mb-12 mt-8 w-3/4 border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Inspiration
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Citations de Femmes Artistes
        </h1>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
          Des paroles qui traversent le temps — ce que les femmes artistes ont dit de l'Art, de la création et de leur vie.
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
      title="Citations de Femmes Artistes — ART AU FÉMININ"
      description="Des paroles inspirantes qui traversent le temps — ce que les femmes artistes ont dit de l'Art, de la création et de leur vie."
    />
  );
};

export default QuotationPage;
