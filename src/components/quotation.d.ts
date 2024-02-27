export interface QuotationProps {
  id?: string;
  data: {
    author: string;
    quotation: string;
  };
}

export interface QuotationListProps {
  allQuotation: QuotationProps[];
}
