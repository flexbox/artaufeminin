import { Link } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../utils/date"
import Text from "./text"

interface QuotationProps {
  id: string
  data: {
    author: string
    quotation: string
  }
}

interface QuotationListItemProps {
  allQuotation: QuotationProps[]
}

function ArticleItem({
  quotation,
}: {
  quotation: QuotationProps
}): ReactElement {
  const id = quotation.id
  const author = quotation.data.author
  const quote = quotation.data.quotation

  return (
    <>
      <div className="my-6 flex flex-col md:flex-row ">
        <div className="flex-1">
          <Text as="h3Link">{author}</Text>
          <Text as="p">{quote}</Text>
        </div>
        <div className="img-parent flex-shrink-0 px-3 "></div>
      </div>
      <hr className="separator mb-12" />
    </>
  )
}

export default function QuotationListItem({
  allQuotation,
}: QuotationListItemProps): ReactElement {
  return (
    <>
      {allQuotation.map((quotation) => {
        return <ArticleItem quotation={quotation} key={quotation.id} />
      })}
    </>
  )
}
