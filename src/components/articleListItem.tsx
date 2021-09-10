import { Link } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../utils/date"

export interface ArticleProps {
  uid: string
  data: {
    title: RichTextBlock[]
    date: string
    description: RichTextBlock[]
    image: {
      alt: string
      copyright: string
      url: string
    }
    content?: RichTextBlock[]
  }
}

interface Props {
  allArticles: ArticleProps[]
}

interface ArticleItemProps {
  article: ArticleProps
}

function ArticleItem({ article }: ArticleItemProps) {
  const slug = article.uid
  const thumbnail = article.data.image.url
  const date = formatHumanDate(article.data.date)
  const title = RichText.asText(article.data.title)
  const description = RichText.asText(article.data.description)
  const descriptionTruncated = truncate(description, {
    length: 190,
  })

  return (
    <>
      <Link to={`/article/${slug}`} className="post-preview hover:no-underline">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 px-6">
            <h3 className="text-3xl text-blue-500 font-bold mt-0">{title}</h3>
            <p className="text-gray-500">{descriptionTruncated}</p>
            <p className="text-gray-500">
              <em>Publié {date}</em>
            </p>
          </div>
          <div className="flex-shrink-0 px-3">
            <div
              className="bg-cover bg-center w-48 h-48"
              style={{ backgroundImage: `url(${thumbnail})` }}
            ></div>
          </div>
        </div>
      </Link>
      <hr className="separator" />
    </>
  )
}

export default function ArticleListItem({ allArticles }: Props): ReactElement {
  return (
    <>
      {allArticles.map((article) => {
        return <ArticleItem article={article} key={article.uid} />
      })}
    </>
  )
}
