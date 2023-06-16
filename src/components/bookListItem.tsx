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
      <div className="book-item text-center">
        <Text to="/" className="book-item-link hover:no-underline">
          <h2 className="book-item-title mb-2 font-serif text-2xl font-bold">
            {title}
          </h2>
          <p className="book-item-content text-gray-600">{truncatedContent}</p>
        </Text>
      </div>
      <hr className="separator mb-4 mt-4" />
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
