import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import LayoutSidebar from '../components/layoutSidebar';
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
      <LayoutSidebar withPodcast={false}>
        <QuotationList allQuotation={quotations} />
      </LayoutSidebar>
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
      title="Découvrez les citations inspirantes des femmes artistes célèbres."
      description="Découvrez l'inspiration à travers les mots des femmes artistes sur ART au féminin. Explorez notre collection de citations qui capturent la créativité, la passion et la perspective unique des artistes au féminin. Plongez dans l'essence de l'art au féminin à travers ces paroles inspirantes"
    />
  );
};

export default QuotationPage;
