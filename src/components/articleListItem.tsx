import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../utils/date"

interface ArticleProps {
  node: {
    uid: string
    data: {
      title: string
      description: string
      date: string
      image: string
    }
  }
}

interface Props {
  allArticles: ArticleProps[]
}

function ArticleItem({ article }) {
  const slug = article.node.uid
  const thumbnail = article.node.data.image.url.text
  const date = formatHumanDate(article.node.data.date)
  const title = RichText.asText(article.node.data.title.text)
  const description = RichText.asText(article.node.data.description.text)
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
        return <ArticleItem article={article} key={article.node.uid} />
      })}
    </>
  )
}
