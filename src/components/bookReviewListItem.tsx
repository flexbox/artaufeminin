import { Link } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../utils/date"
import Text from "./text"

interface BookReviewProps {
  uid: string
  data: {
    title: {
      richText: RichTextBlock[]
    }
    description: {
      richText: RichTextBlock[]
    }
    date: string
    image: {
      url: string
    }
  }
}

interface BookReviewListItemProps {
  allBookReviews: BookReviewProps[]
}

function BookReviewItem({
  bookReview,
}: {
  bookReview: BookReviewProps
}): ReactElement {
  const slug = bookReview.uid
  const thumbnailUrl = bookReview.data.image.url
  const date = formatHumanDate(bookReview.data.date)
  const title = RichText.asText(bookReview.data.title.richText)
  const description = RichText.asText(bookReview.data.description.richText)
  const descriptionTruncated = truncate(description, {
    length: 190,
  })

  return (
    <>
      <Link
        to={`/book-review/${slug}`}
        className="book-review-preview hover:no-underline"
      >
        <div className="my-6 flex flex-col md:flex-row">
          <div className="flex-1">
            <Text as="h3Link">{title}</Text>
            <Text as="p">{descriptionTruncated}</Text>
            <Text as="p" className="italic text-gray-400">
              Publié {date}
            </Text>
          </div>
          <div className="img-parent flex-shrink-0 px-3">
            <div
              className="img bg-cover bg-center duration-300 ease-in-out"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            ></div>
          </div>
        </div>
      </Link>
      <hr className="separator mb-12" />
    </>
  )
}

export default function BookReviewList({
  allBookReviews,
}: BookReviewListItemProps): ReactElement {
  return (
    <>
      {allBookReviews.map((bookReview) => {
        return <BookReviewItem bookReview={bookReview} key={bookReview.uid} />
      })}
    </>
  )
}
