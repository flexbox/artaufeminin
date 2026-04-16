import React, { ReactElement } from 'react';

import { QuotationListProps } from './quotation';
import { Quote } from './quote';

export default function QuotationList({
  allQuotation,
}: QuotationListProps): ReactElement {
  return (
    <div className="m-auto mb-20 w-3/4 columns-1 gap-6 sm:columns-2 lg:columns-3">
      {allQuotation.map((quotation) => (
        <div key={quotation.id} className="mb-6 break-inside-avoid">
          <Quote data={quotation.data} />
        </div>
      ))}
    </div>
  );
}
