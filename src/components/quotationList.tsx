import React, { ReactElement } from 'react';

import { QuotationListProps } from './quotation';
import { Quote } from './quote';

export default function QuotationList({
  allQuotation,
}: QuotationListProps): ReactElement {
  return (
    <>
      {allQuotation.map((quotation) => {
        return <Quote data={quotation.data} key={quotation.id} />;
      })}
    </>
  );
}
