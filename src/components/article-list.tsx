import { Link } from "gatsby"
import truncate from "lodash/truncate"
import { RichText, RichTextBlock } from "prismic-reactjs"
import React from "react"

import { formatHumanDate } from "../utils/date"
import Text from "./text"

interface ArticleProps {
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

interface ArticleListItemProps {
  allArticles: ArticleProps[]
}

function ArticleItem({ article }: { article: ArticleProps }) {
  const slug = article.uid
  const thumbnailUrl = article.data.image.url
  const date = formatHumanDate(article.data.date)
  const title = RichText.asText(article.data.title.richText)
  const description = RichText.asText(article.data.description.richText)
  const descriptionTruncated = truncate(description, {
    length: 190,
  })

  return (
    <>
      <Link
        to={`/article/${slug}`}
        className="article-preview hover:no-underline"
      >
        <div className="my-6 flex flex-col md:flex-row ">
          <div className="flex-1">
            <Text as="h3Link">{title}</Text>
            <Text as="p">{descriptionTruncated}</Text>
            <Text as="p" className="italic text-gray-400">
              Publié {date}
            </Text>
          </div>
          <div className="img-parent flex-shrink-0 px-3 ">
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

export function ArticleList({ allArticles }: ArticleListItemProps) {
  return (
    <>
      {allArticles.map((article) => {
        return <ArticleItem article={article} key={article.uid} />
      })}
    </>
  )
}
