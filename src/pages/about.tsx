import React from 'react';

import Author from '../components/author';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Text from '../components/text';

export default function AboutPage() {
  return (
    <Layout>
      <article className="m-auto max-w-2xl">
        <div>
          <Text as="h2" variant={'h2about'}>
            Mon histoire
          </Text>
          <Text as="p" variant={'pAbout'}>
            Pour ma part, je vous propose de revenir sur certaines périodes de
            l’histoire de l’art, plus particulièrement sur{' '}
            <strong className="font-extrabold">
              l’histoire des femmes artistes
            </strong>
            .
          </Text>

          <Text as="p" variant={'pAbout'}>
            Avec ART au féminin, j’invite des directrices, conservatrices de
            musées, des historiennes de l’art… à nous parler de femmes artistes.
            Et ainsi, revenir sur l’histoire et les oeuvres de ces femmes qui
            ont marquées l’histoire de l’art. Des femmes pour la plupart
            oubliées.
          </Text>

          <Text as="p" variant={'pAbout'}>
            J’invite aussi des{' '}
            <strong className="font-extrabold">
              femmes artistes d’aujourd’hui
            </strong>{' '}
            à témoigner sur leur parcours, leur travail, et donner leur point de
            vue sur la place des femmes artistes dans le monde de l’art.
          </Text>

          <blockquote className="m-auto -mx-52 mb-12 items-center py-12 text-center">
            <Text as="h2" variant={'h2about'}>
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
            </Text>
            <Text as="h2" variant={'h2about'}>
              <cite>—Simone de Beauvoir</cite>
            </Text>
          </blockquote>

          <Text as="p" variant={'pAbout'}>
            ART au féminin, c’est des podcasts, mais pas que. Vous y trouverez
            des articles et le partage de certaines lectures.
          </Text>

          <Text as="h2" variant={'h2about'}>
            Pourquoi ?
          </Text>

          <Text as="p" variant={'pAbout'}>
            <ul className="list-inside list-disc leading-relaxed">
              <li>
                Car je suis une passionnée d’art, une amoureuse du partage.
              </li>
              <li>
                J’entend souvent parler d’hommes artistes et beaucoup moins de
                femmes artistes.
              </li>
              <li>Car le monde regorge de talentueuses femmes artistes.</li>
              <li>Car on en parle jamais trop,</li>
              <li>Car va va nous enrichir culturellement. </li>
            </ul>
          </Text>
          <Text as="p" variant={'pAbout'}>
            Ici je vous propose de retracer l’histoire des femmes artistes !
          </Text>
        </div>

        <div className="my-24">
          <Author />
        </div>
      </article>
    </Layout>
  );
}

export const Head = () => {
  return (
    <SEO
      title="À propos: découvrez qui je suis et les projets chez ART au féminin."
      description="à l’origine du projet, une question simple : combien existe-t-il de femme artistes dans les musées. La réponse est difficile à trouver voire impossible sans recherches approfondies que vous pourrez découvrir en écoutant le podcast."
    />
  );
};
