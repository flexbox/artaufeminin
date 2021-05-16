import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DesignPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Design System" />

      <article className="post-content no-image">
        <div className="post-content-body">
          <p>
            This is{" "}
            <strong>
              <strong>bold</strong>
            </strong>{" "}
            and this is{" "}
            <strong>
              <strong>strong</strong>
            </strong>
            . This is{" "}
            <em>
              <em>italic</em>
            </em>{" "}
            and this is{" "}
            <em>
              <em>emphasized</em>
            </em>
            . This is <sup>superscript</sup>text and this is{" "}
            <sub>subscript</sub> text. This is <u>underlined</u>. Finally, this
            is a <Link to={`/`}>link</Link>.
          </p>
          <h1 id="heading-level-1">Heading Level 1</h1>
          <h2 id="heading-level-2">Heading Level 2</h2>
          <h3 id="heading-level-3">Heading Level 3</h3>
          <h4 id="heading-level-4">Heading Level 4</h4>
          <h5 id="heading-level-5">Heading Level 5</h5>
          <h6 id="heading-level-6">Heading Level 6</h6>
          <hr />
          <h2 id="this-is-a-section">This is a section</h2>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <h3 id="this-is-a-sub-section">This is a sub-section</h3>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet.
          </p>
          <h3 id="this-is-a-sub-section-1">This is a sub-section</h3>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet.
          </p>
          <hr />
          <h2 id="lists">Lists</h2>
          <h3 id="unordered">
            <strong>
              <strong>Unordered</strong>
            </strong>
          </h3>
          <ul>
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis lorem eleifend.</li>
            <li>Felis feugiat dolore viverra.</li>
            <li>Dolor pulvinar etiam.</li>
          </ul>
          <h3 id="ordered">Ordered</h3>
          <ol>
            <li>Dolor pulvinar etiam.</li>
            <li>Etiam vel felis at viverra.</li>
            <li>Felis enim feugiat magna.</li>
            <li>Etiam vel felis nullam.</li>
            <li>Felis enim et tempus.</li>
          </ol>
          <h3 id="definition">
            <strong>Definition</strong>
          </h3>
          <dl>
            <dt>Item 1</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
            <dt>Item 2</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
            <dt>Item 3</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
          </dl>
          <hr />
          <h2 id="blockquote">
            <strong>Blockquote</strong>
          </h2>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis.
          </blockquote>
          <hr />
          <h2 id="images">Images</h2>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.smallPic.childImageSharp.fluid}
              className="kg-image"
              alt="caption"
            />
            <figcaption>Regular image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-wide">
            <GatsbyImage
              image={data.medPic.childImageSharp.fluid}
              className="kg-image"
              alt="caption"
            />
            <figcaption>Large image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-full">
            <GatsbyImage
              image={data.largePic.childImageSharp.fluid}
              className="kg-image"
              alt="caption"
            />
            <figcaption>Full bleed image</figcaption>
          </figure>
          <hr />
          <h2 id="buttons">Buttons</h2>
          <ul className="flex">
            <li>
              <button className="button primary">Primary</button>
            </li>
            <li>
              <button className="button">Default</button>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <button className="button primary large">Large</button>
            </li>
            <li>
              <button className="button">Default</button>
            </li>
            <li>
              <button className="button small">Small</button>
            </li>
          </ul>
          <ul className="actions fit">
            <li>
              <button className="button primary fit">Fit</button>
            </li>
            <li>
              <button className="button fit">Fit</button>
            </li>
          </ul>
          <ul className="actions fit small">
            <li>
              <button className="button primary fit small">Fit + Small</button>
            </li>
            <li>
              <button className="button fit small">Fit + Small</button>
            </li>
          </ul>
          <hr />
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <DesignPage location={props.location} data={data} {...props} />
    )}
  />
)
