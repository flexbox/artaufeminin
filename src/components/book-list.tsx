import { Link } from "gatsby"
import truncate from "lodash/truncate"
import React, { ReactElement } from "react"

import Text from "./text"

export interface BookProps {
  uid: string
  data: {
    title: {
      text: string
    }
    content: {
      text: string
    }
  }
}

interface BookListItemProps {
  allBooks: BookProps[]
}

function BookItem({ book }: { book: BookProps }) {
  const slug = book.uid
  const title = book.data.title.text
  const content = book.data.content.text
  const truncatedContent = truncate(content, {
    length: 190,
  })

  return (
    <>
      <div className="book-item">
        <Link
          to={`/livres/${slug}`}
          className="book-item-link hover:no-underline"
        >
          <Text as="h3" variant={"h3Link"}>
            {title}
          </Text>
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
