import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../../utils/date"

interface Props {}

function ArticleItem({ article }) {
  const slug = article.node._meta.uid
  const thumbnail = article.node.image.url
  console.log(
    "file: lastArticles.tsx ~ line 11 ~ ArticleItem ~ article.node.image",
    article.node.image
  )

  const date = formatHumanDate(article.node.date)
  const title = RichText.asText(article.node.title)
  const description = RichText.asText(article.node.description)

  const descriptionTruncated = truncate(description, {
    length: 190,
  })

  return (
    <>
      <div className="flex">
        <div className="flex-1 px-6">
          <Link
            to={`/article/${slug}`}
            className="post-preview hover:no-underline"
          >
            <h3 className="text-3xl text-blue-500 font-bold mt-0">{title}</h3>
            <p className="text-gray-500 ">{descriptionTruncated}</p>
          </Link>
          <p className="text-gray-500">
            <em>Publié {date}</em>
          </p>
        </div>
        <div className="flex-none">
          <div
            className="bg-cover bg-center w-48 h-48"
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        </div>
      </div>
      <hr className="separator" />
    </>
  )
}

export default function LastArticles({ allArticles }: Props): ReactElement {
  return (
    <>
      <div className="max-w-6xl mb-64">
        <h2 className="text-4xl">Articles récents</h2>
        <hr className="separator mt-16" />
        {allArticles.map((article) => {
          return <ArticleItem article={article} />
        })}
        <Link to={"/articles"} className="button">
          Lire tous les articles
        </Link>
      </div>
    </>
  )
}
