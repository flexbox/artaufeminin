import { Link } from 'gatsby';
import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const questions = [
  {
    question: 'Cet été, ton énergie ressemble à\u00a0\u2026',
    options: [
      "Un jardin qu'on cultive avec les mains",
      'Une création qui sort un mardi sans prévenir',
      'Quelque chose à transmettre, à laisser après soi',
      'La liberté de tout recommencer',
    ],
  },
  {
    question:
      "Quand tu crées ou apprends quelque chose, ce qui compte le plus, c'est\u00a0\u2026",
    options: [
      'La couleur, la sensation, ce que ça fait dans le corps',
      "L'histoire derrière — les gens, la mémoire, le tissu des choses",
      'Que ça serve à quelque chose, que ça touche vraiment',
      "La découverte d'un monde qu'on ne connaissait pas encore",
    ],
  },
  {
    question: "Ce que tu veux laisser cet été, c'est\u00a0\u2026",
    options: [
      'Une trace de couleur, de lumière, de beauté',
      "Un récit qu'on pourra relire longtemps",
      'Un geste concret, quelque chose de construit',
      "Un regard différent sur ce qu'on croyait connaître",
    ],
  },
];

const artists = [
  {
    name: 'Alma Thomas',
    dates: '1891\u20131978',
    tagline: 'La joie comme acte de résistance',
    description:
      "Comme elle, tu trouves le beau là où d'autres ne regardent pas — dans un jardin, dans la lumière qui change, dans la répétition apaisante d'un geste. Elle a commencé à peindre vraiment à 68\u00a0ans, depuis sa cuisine, en regardant les fleurs par la fenêtre. Ses toiles sont aujourd'hui à la Maison Blanche.",
    work: 'Iris, Tulips, Jonquils and Crocuses, 1969',
  },
  {
    name: 'Faith Ringgold',
    dates: '1930\u20132024',
    tagline: 'Les histoires cousues dans le tissu',
    description:
      "Comme elle, tu crois que les histoires méritent d'être transmises — pas seulement racontées, mais portées, données, cousues. Elle a inventé les story quilts pour mêler la peinture et le tissu, l'art et la mémoire des femmes noires américaines.",
    work: 'Tar Beach, 1988',
  },
  {
    name: 'Elizabeth Catlett',
    dates: '1915\u20132012',
    tagline: "L'art comme acte politique",
    description:
      "Comme elle, tu crois que l'art doit toucher au sens propre — pas rester derrière le verre des musées. Elle sculpta, grava, construisit toujours pour les gens qui n'allaient pas dans les galeries. Mexicaine d'adoption, elle fit de chaque œuvre un geste de résistance.",
    work: 'The Negro Woman, 1947',
  },
  {
    name: 'Loïs Mailou Jones',
    dates: '1905\u20131998',
    tagline: 'Plusieurs mondes dans un seul regard',
    description:
      "Comme elle, tu portes en toi plusieurs univers et tu n'as pas besoin de choisir. Elle peignit à Paris, à Haïti, à Washington — absorbant chaque culture sans jamais se dissoudre. Elle enseigna à Howard University pendant 47\u00a0ans et peignit jusqu'à la fin de sa vie.",
    work: 'Les Fétiches, 1938',
  },
];

export default function QuizEte2026() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function handleAnswer(optionIndex: number) {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(3);
    }
  }

  function getResult(): number {
    const counts = [0, 0, 0, 0];
    answers.forEach((a) => counts[a]++);
    let max = 0;
    let maxIdx = answers[0];
    counts.forEach((count, idx) => {
      if (count > max) {
        max = count;
        maxIdx = idx;
      }
    });
    return maxIdx;
  }

  function handleRestart() {
    setStep(0);
    setAnswers([]);
  }

  const resultArtist = step === 3 ? artists[getResult()] : null;
  const currentQuestion = step < 3 ? questions[step] : null;

  return (
    <Layout withInstagram={false}>
      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-12 mt-8 w-11/12 max-w-3xl border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Été 2026 · Lettre N°1
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Quelle artiste te ressemble cet été ?
        </h1>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
          Dans la première lettre d&rsquo;ART AU FÉMININ, j&rsquo;ai parlé
          d&rsquo;Alma Thomas — peintre, enseignante, et femme qui a commencé à
          68 ans dans sa cuisine. Il y avait d&rsquo;autres femmes autour
          d&rsquo;elle. Ce quiz t&rsquo;en fait découvrir une.
        </p>
      </section>

      {/* ── ALMA THOMAS ───────────────────────────────────────────── */}
      <section className="mx-auto mb-16 w-11/12 max-w-3xl">
        <div className="border border-neutral-200 p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            L&rsquo;artiste de ce numéro
          </p>
          <h2 className="font-display text-2xl font-light text-neutral-900">
            Alma Thomas{' '}
            <span className="font-light text-neutral-300">· 1891–1978</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">
            En 1960, Alma Thomas prend sa retraite après 35 ans à enseigner
            l&rsquo;art à des enfants de Washington. Elle s&rsquo;installe dans
            sa cuisine, regarde son jardin par la fenêtre, et elle commence. Des
            couleurs pures posées en petites touches serrées, des anneaux
            concentriques qui vibrent. Elle peindra jusqu&rsquo;à 86 ans.
          </p>
          <blockquote className="mt-6 border-l-2 border-neutral-200 pl-6">
            <p className="font-display text-lg font-light italic leading-relaxed text-neutral-600">
              « À travers la couleur, j&rsquo;ai cherché à me concentrer sur la
              beauté et le bonheur, plutôt que sur l&rsquo;inhumanité de
              l&rsquo;homme envers l&rsquo;homme. »
            </p>
            <cite className="mt-3 block text-xs not-italic font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Alma Thomas
            </cite>
          </blockquote>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Œuvre à chercher
          </p>
          <p className="mt-1 font-display text-sm font-light italic text-neutral-600">
            Iris, Tulips, Jonquils and Crocuses, 1969 — Smithsonian American Art
            Museum
          </p>
        </div>
      </section>

      {/* ── QUIZ ──────────────────────────────────────────────────── */}
      <section className="mx-auto mb-20 w-11/12 max-w-3xl">
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            {step < 3
              ? `Question ${step + 1} sur 3`
              : 'Ton artiste de l\u2019\u00e9t\u00e9'}
          </h2>
          {step < 3 && (
            <span className="text-xs font-light text-neutral-400">
              3 questions · Résultat immédiat
            </span>
          )}
        </div>

        {/* Question active */}
        {currentQuestion && (
          <>
            <article className="border border-neutral-200">
              <div className="border-b border-neutral-200 px-6 py-6">
                <p className="font-display text-xl font-light leading-snug text-neutral-900">
                  {currentQuestion.question}
                </p>
              </div>
              <div className="divide-y divide-neutral-100">
                {currentQuestion.options.map((option, oi) => (
                  <button
                    key={oi}
                    onClick={() => handleAnswer(oi)}
                    className="w-full px-6 py-4 text-left text-sm font-light text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    <span className="mr-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
                      {['A', 'B', 'C', 'D'][oi]}.
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </article>

            {/* Barre de progression */}
            <div className="mt-4 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-0.5 flex-1 transition-colors duration-300 ${
                    i < step
                      ? 'bg-neutral-900'
                      : i === step
                        ? 'bg-neutral-400'
                        : 'bg-neutral-200'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Résultat */}
        {resultArtist && (
          <div className="border border-neutral-200">
            <div className="border-b border-neutral-200 bg-neutral-900 px-8 py-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Ton artiste de l&rsquo;été
              </p>
              <h3 className="font-display text-4xl font-light text-white">
                {resultArtist.name}
              </h3>
              <p className="mt-1 text-xs font-light tracking-[0.1em] text-white/30">
                {resultArtist.dates}
              </p>
              <p className="mt-4 font-display text-lg font-light italic text-white/60">
                {resultArtist.tagline}
              </p>
            </div>

            <div className="px-8 py-8">
              <p className="text-sm font-light leading-relaxed text-neutral-600">
                {resultArtist.description}
              </p>
              <div className="mt-6 border-t border-neutral-100 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Œuvre à chercher
                </p>
                <p className="mt-1 font-display text-base font-light italic text-neutral-700">
                  {resultArtist.work}
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-200 px-8 py-5">
              <button
                onClick={handleRestart}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-neutral-900"
              >
                Recommencer <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ── CARNETS ───────────────────────────────────────────────── */}
      <section className="-mx-4 border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-10 py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Depuis toujours, j&rsquo;ai des carnets
          </p>
          <p className="font-display text-xl font-light leading-relaxed text-neutral-700">
            Des noms d&rsquo;artistes notés après une expo, des questions sans
            réponse, des œuvres qui m&rsquo;avaient arrêtée et que je voulais ne
            pas oublier. Personne ne me le demandait. Je le faisais pour moi.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">
            Et puis, sur toutes ces pages, une question a commencé à
            revenir&nbsp;: <em>Où sont les femmes&nbsp;?</em>
          </p>
          <div className="mt-8">
            <Link
              to="/newsletter"
              className="inline-block border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              Recevoir la Lettre <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── POUR ALLER PLUS LOIN ──────────────────────────────────── */}
      <section className="mx-auto my-20 w-11/12 max-w-3xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Pour aller plus loin
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/podcasts"
            className="border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Écouter le Podcast <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/articles"
            className="border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Lire les Articles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Quelle artiste te ressemble cet été ? — Quiz Été 2026 — ART AU FÉMININ"
    description="Un quiz pour découvrir une femme artiste noire oubliée de l'histoire — inspiré de la lettre d'Aldjia sur Alma Thomas. 3 questions, une découverte."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);
