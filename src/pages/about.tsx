import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Author from "../components/blog/author"

const AboutPage = ({ data }) => {
  const imageUrlFixed = data.benchAccounting.childImageSharp.fixed

  return (
    <Layout>
      <SEO
        title="👩‍🎨 À propos"
        description="à l’origine du projet, une question simple : combien existe-t-il de femme artistes dans les musées. La réponse est difficile à trouver voire impossible sans recherches approfondies que vous pourrez découvrir en écoutant le podcast."
      />

      <Hero
        heroTitle={
          "Moins de 4% des artistes dans la section art moderne sont des femmes, mais 76% des nus sont des femmes. —Guerrilla Girls"
        }
        imageUrlFixed={imageUrlFixed}
        imageAlt={"Logo podcast ART au feminin"}
      />

      <article className="post-content">
        <div className="post-content-body">
          <h2>Mon histoire</h2>
          <blockquote>
            <p className="mb-4">
              Nous commencerons par discuter les points de vue pris sur la femme
              par la biologie, la psychanalyse, le matérialisme historique. Nous
              essaierons de monter ensuite positivement comment la réalité
              féminine s’est constituée, pourquoi la femme a été définie comme
              l’Autre et quelles en ont été les conséquences du point de vue des
              hommes. Alors nous décrirons du point de vue des femmes le monde
              tel qu’il leur est proposé, et nous pourrons comprendre a quelles
              difficultés elles se heurtent au moment où, essayant de s’évader
              de la sphère qui leur a été jusqu’a présent assignée, elles
              prétendent participer au mitsein humain
            </p>
            <cite>—Simone de Beauvoir</cite>
          </blockquote>

          <hr />
          <p>
            Pour ma part, je vous propose de revenir sur certaines périodes de
            l’histoire de l’art, plus particulièrement sur{" "}
            <strong className="font-extrabold">
              l’histoire des femmes artistes
            </strong>
            .
          </p>

          <p>
            Avec ART au féminin, j’invite des directrices, conservatrices de
            musées, des historiennes de l’art… à nous parler de femmes artistes.
            Et ainsi, revenir sur l’histoire et les oeuvres de ces femmes qui
            ont marquées l’histoire de l’art. Des femmes pour la plupart
            oubliées.
          </p>

          <p>
            J’invite aussi des{" "}
            <strong className="font-extrabold">
              femmes artistes d’aujourd’hui
            </strong>{" "}
            à témoigner sur leur parcours, leur travail, et donner leur point de
            vue sur la place des femmes artistes dans le monde de l’art.
          </p>

          <p>
            ART au féminin, c’est des podcasts, mais pas que. Vous y trouverez
            des articles et le partage de certaines lectures.
          </p>

          <h2>Pourquoi ?</h2>

          <ul>
            <li>Car je suis une passionnée d’art, une amoureuse du partage.</li>
            <li>
              Car j’ai souvent entendue parler d’hommes artistes et beaucoup
              moins de femmes artistes.
            </li>
            <li>
              Car le monde de l’art regorge de talentueuses femmes artistes.
            </li>
            <li>Car on en parle jamais trop,</li>
            <li>Car va va nous enrichir culturellement. </li>
          </ul>
          <p>
            Ici je vous propose de retracer l’histoire des femmes artistes !
          </p>
        </div>

        <div className="my-48">
          <Author />
        </div>

        <div className="post-content-body">
          <p>
            <strong className="font-extrabold">P.S.</strong> Voici quelques
            pages de ce site qui ne sont pas incluses dans la navigation
            principale, mais qui pourraient vous intéresser :
          </p>
          <ul>
            <li>
              <Link to={"/faq"}>Questions fréquentes</Link>
            </li>
            <li>
              <Link to={"/start"}>Participer à un épisode</Link>
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    benchAccounting: file(
      relativePath: { eq: "flipboard-Ylus81fS7q4-unsplash.jpg" }
    ) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
