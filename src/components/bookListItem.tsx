import React, { ReactElement } from "react"
import { Link } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../utils/date"
import Text from "./text"

interface BookProps {
  title: string
  content: string
}

interface BookListItemProps {
  allBooks: BookProps[]
}

function BookItem({ book }: { book: BookProps }): ReactElement {
  const { title, content } = book
  const truncatedContent = truncate(content, {
    length: 190,
  })

  return (
    <>
      <div className="book-item">
        <Text to="/" className="book-item-link hover:no-underline">
          <Text as="h3" className="book-item-title">
            {title}
          </Text>
          <Text as="p" className="book-item-content">
            {truncatedContent}
          </Text>
        </Text>
      </div>
      <hr className="separator mb-12" />
    </>
  )
}

export default function BookList({
  allBooks,
}: BookListItemProps): ReactElement {
  return (
    <>
      {allBooks.map((book, index) => (
        <BookItem book={book} key={index} />
      ))}
    </>
  )
}
