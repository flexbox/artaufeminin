import { Link } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../utils/date"
import Text from "./text"

interface ArticleProps {
  uid: string
  data: {
    title: {
      raw: RichTextBlock[]
    }
    description: {
      raw: RichTextBlock[]
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

function ArticleItem({ article }: { article: ArticleProps }): ReactElement {
  const slug = article.uid
  const thumbnailUrl = article.data.image.url
  const date = formatHumanDate(article.data.date)
  const title = RichText.asText(article.data.title.raw)
  const description = RichText.asText(article.data.description.raw)
  const descriptionTruncated = truncate(description, {
    length: 190,
  })

  return (
    <>
      <Link to={`/article/${slug}`} className="post-preview hover:no-underline">
        <div className="flex flex-col md:flex-row my-6">
          <div className="flex-1 px-6">
            <Text as="h3Link" className="text-3xl text-blue-500 font-bold mt-0">
              {title}
            </Text>
            <Text as="p">{descriptionTruncated}</Text>
            <Text as="p">Publié {date}</Text>
          </div>
          <div className="flex-shrink-0 px-3">
            <div
              className="bg-cover bg-center w-48 h-48"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            ></div>
          </div>
        </div>
      </Link>
      <hr className="separator mb-12" />
    </>
  )
}

export default function ArticleListItem({
  allArticles,
}: ArticleListItemProps): ReactElement {
  return (
    <>
      {allArticles.map((article) => {
        return <ArticleItem article={article} key={article.uid} />
      })}
    </>
  )
}
