const { defaultLanguage } = require("../../prismic-configuration")

/* The Link Resolver
* This function will be used to generate links to Prismic documents
As your project grows, you should update this function according to your routes */

const linkResolver = (doc) => {
  const properties = doc._meta || doc

  // Route for blog posts
  if (properties.type === "blog_post") return "/article/" + properties.uid

  // Homepage route fallback
  return "/"
}

module.exports = linkResolver
