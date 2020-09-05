import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"

export default function articleCard(props) {
  const { counter, postClass } = props
  const slug = props.node._meta.uid
  const thumbnail = props.node.image.url
  const title = props.node.title

  return (
    <article
      className={`post-card ${counter % 3 === 0 &&
        `post-card-large`} ${postClass} ${
        thumbnail ? `with-image` : `no-image`
      }`}
      style={
        thumbnail && {
          backgroundImage: `url(${thumbnail})`,
        }
      }
    >
      <Link to={`article/${slug}`} className="post-card-link">
        <div className="post-card-content">
          <h2 className="post-card-title">{RichText.asText(title)}</h2>
        </div>
      </Link>
    </article>
  )
}
