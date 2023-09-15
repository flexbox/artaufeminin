import { is } from "date-fns/locale"
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
  isRow?: boolean
}

function ArticleItem({
  article,
  isRow = false,
}: {
  article: ArticleProps
  isRow?: boolean
}) {
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
      {isRow ? (
        <Link to={`/article/${slug}`} className="article-preview">
          <div className="my-6 flex flex-col md:flex-row ">
            <div className="flex-1">
              <Text as="h2" variant="h3Link">
                {title}
              </Text>
              <Text as="p">{descriptionTruncated}</Text>
              <Text as="p" className="italic text-gray-400">
                Publié {date}
              </Text>
            </div>
            <div className="img-parent flex-shrink-0 overflow-hidden">
              <div
                className="img bg-cover bg-center duration-300 ease-in-out"
                style={{ backgroundImage: `url(${thumbnailUrl})` }}
              ></div>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`/article/${slug}`} className="article-preview w-full ">
          <div className="my-6 flex flex-col md:flex-row ">
            <div className="flex-col">
              <div className="article-image m-auto h-48 mb-4">
                <div
                  className="img duration-300 ease-in-out m-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${thumbnailUrl})` }}
                ></div>
              </div>
              <Text as="h2" variant="h3Link">
                {title}
              </Text>
              <Text as="p">{descriptionTruncated}</Text>
              <Text as="p" className="italic text-gray-400">
                Publié {date}
              </Text>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export function ArticleList({ allArticles, isRow }: ArticleListItemProps) {
  return isRow ? (
    <>
      {allArticles.map((article) => {
        return <ArticleItem article={article} key={article.uid} isRow />
      })}
    </>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-2/3 m-auto">
      {allArticles.map((article) => {
        return <ArticleItem article={article} key={article.uid} />
      })}
    </div>
  )
}
