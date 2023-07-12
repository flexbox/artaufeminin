import React, { ReactElement } from "react"
import { Link } from "gatsby"
import truncate from "lodash/truncate"
import Text from "./text"

interface BookProps {
  title: string
  content: string
  uid: string
}

interface BookListItemProps {
  allBooks: BookProps[]
}

function BookItem({ book }: { book: BookProps }): ReactElement {
  const { title, content } = book
  const truncatedContent = truncate(content, {
    length: 190,
  })
  const slug = book.uid

  return (
    <>
      <div className="book-item">
        <Link
          to={`/livre/${slug}`}
          className="book-item-link hover:no-underline"
        >
          <Text as="h3Link">{title}</Text>
          <p className="book-item-content text-gray-600">{truncatedContent}</p>
        </Link>
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
