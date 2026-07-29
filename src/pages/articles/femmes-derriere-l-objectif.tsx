import { Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

export default function FemmesDerriereLObjectifPage() {
  return (
    <Layout withInstagram={false}>
      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="-mx-4 border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Série · Femmes derrière l'objectif
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Elles ont tenu l'appareil
          </h1>
          <p className="mt-4 font-display text-xl font-light italic text-neutral-500">
            Les femmes photographes que l'Histoire a refusé de voir
          </p>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
            En septembre 2026, Art au Féminin explore pour la première fois la
            photographie — et quatre femmes qui ont tenu un objectif comme on
            tient une arme, un journal intime, un acte de résistance.
          </p>
        </div>
      </section>

      {/* ── ARTICLE ───────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-0">
        <div className="prose prose-neutral max-w-none font-light text-neutral-600 prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600 prose-headings:font-display prose-headings:font-light prose-a:text-neutral-700 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-neutral-200 prose-blockquote:pl-6 prose-blockquote:not-italic">
          <p>
            Si vous entrez dans un musée d'art et cherchez la salle consacrée à
            la photographie, vous y trouverez des noms. Ansel Adams. Henri
            Cartier-Bresson. Robert Capa. Man Ray. Des hommes, presque
            exclusivement — comme si l'appareil photo avait toujours été entre
            leurs mains.
          </p>

          <p>
            Il ne l'a pas toujours été. Et quand des femmes l'ont tenu, elles
            ont souvent été effacées.
          </p>

          <h2>Ce que l'Histoire a décidé de ne pas regarder</h2>

          <p>
            La photographie est née en 1839. Dès ses premières décennies, des
            femmes s'en emparent — en studio, dans la rue, sur les champs de
            bataille. Julia Margaret Cameron révolutionne le portrait
            photographique dans les années 1860. Gertrude Käsebier devient l'une
            des photographes les mieux payées d'Amérique au tournant du XXe
            siècle. Dorothea Lange change le cours d'une politique nationale
            avec une seule image.
          </p>

          <p>
            Pourtant, leurs noms disparaissent des livres d'histoire. Leurs
            archives sont mal conservées. Leurs œuvres sont attribuées à des
            hommes, ou simplement oubliées. Ce n'est pas une coïncidence — c'est
            un effacement systématique, produit par des institutions culturelles
            qui ont longtemps décidé de ce qui méritait d'être vu et de qui
            méritait d'être cité.
          </p>

          <h2>Quatre femmes. Quatre façons d'exister.</h2>

          <p>
            En septembre 2026, Art au Féminin consacre une série de quatre
            épisodes à des photographes dont l'œuvre a été ignorée, volée,
            confisquée ou simplement oubliée. Quatre façons très différentes de
            tenir un appareil — et quatre façons très différentes de disparaître
            de l'histoire.
          </p>

          <h3>Vivian Maier — Le secret absolu</h3>
          <p>
            Vivian Maier était nourrice à Chicago. Pendant trente ans, elle
            photographiait dans les rues de la ville — portraits de passants,
            reflets dans les vitrines, enfants dans les ruelles. Elle n'a jamais
            montré ses photos à personne. Cent mille négatifs stockés dans un
            garde-meuble, vendus aux enchères pour 380 dollars après sa mort.
            Aujourd'hui ses tirages se vendent des milliers de dollars dans les
            plus grandes galeries du monde.
          </p>
          <p>
            <Link to="/articles/vivian-maier">Lire son portrait →</Link>
          </p>

          <h3>Dorothea Lange — L'image qui a changé une politique</h3>
          <p>
            En mars 1936, Dorothea Lange s'arrête au bord d'une route en
            Californie. Devant elle, une femme de 32 ans et ses enfants, bloqués
            par une voiture en panne. Elle fait cinq poses en dix minutes. La
            photo paraît dans les journaux deux jours plus tard. Le gouvernement
            américain envoie vingt mille livres de nourriture à la région.
            Dorothea Lange avait 40 ans. Son nom est resté dans l'ombre de son
            image.
          </p>
          <p>
            <Link to="/articles/dorothea-lange">Lire son portrait →</Link>
          </p>

          <h3>Lee Miller — Du cadre à la guerre</h3>
          <p>
            Lee Miller a commencé comme modèle pour Vogue. Elle a terminé la
            Seconde Guerre mondiale en photographiant les camps de concentration
            libérés, accréditée auprès des forces américaines — l'une des quatre
            seules femmes photographes à l'être. Le soir du 30 avril 1945, elle
            pose dans la baignoire d'Hitler à Munich, les bottes encore
            couvertes de la boue de Dachau. Elle n'en parlera jamais vraiment.
            Ses soixante mille négatifs sont découverts par son fils après sa
            mort.
          </p>
          <p>
            <Link to="/articles/lee-miller">Lire son portrait →</Link>
          </p>

          <h3>Claude Cahun — Se photographier contre</h3>
          <p>
            Dès 1912, à dix-huit ans, Claude Cahun se photographie — tête rasée,
            costumes ambigus, regard qui défie. Ses autoportraits ne ressemblent
            à rien de ce qui existe alors. Ils posent une seule question,
            inlassablement : qui suis-je, vraiment ? En 1944, elle est arrêtée
            par les nazis à Jersey, où elle résistait depuis quatre ans en
            fabriquant des tracts clandestins avec sa compagne Marcel Moore.
            Condamnée à mort. Survivante. Presque oubliée jusqu'aux années 1990.
          </p>
          <p>
            <Link to="/articles/claude-cahun">Lire son portrait →</Link>
          </p>

          <h2>Pourquoi ce sujet, maintenant</h2>

          <p>
            La photographie n'est pas seulement un médium artistique — c'est
            aussi un document. Une preuve de ce qui a existé. Quand des femmes
            photographes sont effacées, ce sont aussi leurs regards qui
            disparaissent : leur façon de cadrer le monde, de choisir ce qui
            mérite d'être vu, de témoigner de leur époque.
          </p>

          <p>
            Vivian Maier nous a laissé le Chicago des années 1950 et 1960 vu par
            une femme du peuple. Dorothea Lange nous a laissé la Grande
            Dépression vue par quelqu'un qui refusait de regarder ailleurs. Lee
            Miller nous a laissé la vérité des camps quand d'autres préféraient
            ne pas y croire. Claude Cahun nous a laissé une exploration de
            l'identité qui n'a pas vieilli d'un jour.
          </p>

          <p>
            Leurs images méritent d'être vues. Leurs noms méritent d'être
            retenus.
          </p>
        </div>

        {/* ── ÉPISODES ──────────────────────────────────────────────── */}
        <div className="mt-12 border border-neutral-200 p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            La Série en 4 Épisodes
          </p>
          <h2 className="mb-6 font-display text-2xl font-light text-neutral-900">
            Femmes derrière l'objectif
          </h2>
          <div className="space-y-3">
            {[
              {
                num: '01',
                name: 'Vivian Maier',
                sub: 'La nourrice aux 100 000 négatifs',
                href: '/articles/vivian-maier',
              },
              {
                num: '02',
                name: 'Dorothea Lange',
                sub: 'Migrant Mother',
                href: '/articles/dorothea-lange',
              },
              {
                num: '03',
                name: 'Lee Miller',
                sub: 'Sortir du cadre',
                href: '/articles/lee-miller',
              },
              {
                num: '04',
                name: 'Claude Cahun',
                sub: 'Se photographier contre',
                href: '/articles/claude-cahun',
              },
            ].map(({ num, name, sub, href }) => (
              <Link
                key={num}
                to={href}
                className="group flex items-center gap-4 border border-neutral-100 p-4 transition-colors hover:border-neutral-300"
              >
                <span className="font-display text-2xl font-light text-neutral-200 group-hover:text-neutral-300">
                  {num}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-light text-neutral-900">{name}</p>
                  <p className="text-xs font-light text-neutral-400">{sub}</p>
                </div>
                <span
                  className="text-neutral-300 group-hover:text-neutral-600"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── NEWSLETTER ────────────────────────────────────────────── */}
        <section className="mt-10 border border-neutral-200 bg-neutral-50 p-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Newsletter
          </p>
          <h2 className="mb-2 font-display text-xl font-light text-neutral-900">
            Recevez la suite de la série
          </h2>
          <p className="mb-5 text-sm font-light leading-relaxed text-neutral-500">
            Un email par mois : un portrait de femme artiste oubliée, les
            nouveaux épisodes et les actualités du projet. Gratuit, sans spam.
          </p>
          <Link
            to="/newsletter"
            className="inline-block border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700"
          >
            S'abonner Gratuitement <span aria-hidden="true">→</span>
          </Link>
        </section>
      </article>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      "Elles ont tenu l'appareil — les femmes photographes que l'Histoire a refusé de voir",
    description:
      "Vivian Maier, Dorothea Lange, Lee Miller, Claude Cahun : quatre femmes photographes dont l'œuvre a été ignorée, volée ou oubliée. La série de septembre 2026 d'Art au Féminin.",
    url: `https://www.artaufeminin.fr${location.pathname}`,
    inLanguage: 'fr',
    author: {
      '@type': 'Person',
      name: 'Aldjia Boughias',
      url: 'https://www.artaufeminin.fr/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ART AU FÉMININ',
      url: 'https://www.artaufeminin.fr',
    },
  };

  return (
    <SEO
      title="Elles ont tenu l'appareil — les femmes photographes oubliées par l'Histoire — ART AU FÉMININ"
      description="Vivian Maier, Dorothea Lange, Lee Miller, Claude Cahun : quatre femmes photographes dont l'œuvre a été ignorée, volée ou oubliée par l'Histoire de l'Art. Série de portraits par Art au Féminin."
      url={`https://www.artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};
