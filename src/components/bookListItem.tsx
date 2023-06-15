import { Link } from "gatsby"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import Text from "./text"

interface BookProps {
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

function BookItem({ book }: { book: BookProps }): ReactElement {
  const slug = book.uid
  const title = book.data.title.text
  const content = book.data.content.text
  const contentTruncated = truncate(content, {
    length: 190,
  })

  return (
    <>
      <Link to={`/book/${slug}`} className="book-preview hover:no-underline">
        <div className="my-6">
          <Text as="h3Link">{title}</Text>
          <Text as="p">{contentTruncated}</Text>
        </div>
      </Link>
      <hr className="separator mb-12" />
    </>
  )
}

export default function BookList({
  allBooks,
}: BookListItemProps): ReactElement {
  return (
    <>
      {allBooks.map((book) => {
        return <BookItem book={book} key={book.uid} />
      })}
    </>
  )
}
