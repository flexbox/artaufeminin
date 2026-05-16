import { Link } from 'gatsby';
import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const questions = [
  {
    question: "Qui a créé la sculpture géante "Maman", représentant une araignée ?",
    options: ["Yayoi Kusama", "Louise Bourgeois", "Camille Claudel"],
    answer: 1,
    explanation:
      "Louise Bourgeois a créé "Maman" en 1999 pour l'inauguration de la Tate Modern à Londres. L'araignée représente sa mère, restauratrice de tapisseries — patiente, habile et indispensable comme une araignée.",
  },
  {
    question: "En quelle année les Guerrilla Girls ont-elles été fondées ?",
    options: ["1975", "1980", "1985"],
    answer: 2,
    explanation:
      "Les Guerrilla Girls naissent en 1985 en réaction à une exposition du MoMA de New York qui ne comptait que 13 femmes sur 169 artistes sélectionnés.",
  },
  {
    question: "Quel est le vrai nom de VALIE EXPORT ?",
    options: ["Waltraud Hollinger", "Maria Braun", "Ingrid Weber"],
    answer: 0,
    explanation:
      "Née Waltraud Hollinger en 1940 à Linz, elle se rebaptise VALIE EXPORT en 1967 — un nom toujours écrit en majuscules, emprunté à une marque de cigarettes pour dénoncer la marchandisation des femmes.",
  },
  {
    question:
      "Hilma af Klint a peint ses premières œuvres abstraites en 1906 — combien d'années avant Kandinsky ?",
    options: ["1 an", "5 ans", "10 ans"],
    answer: 1,
    explanation:
      "Kandinsky est souvent cité comme le père de l'abstraction avec ses premières aquarelles abstraites vers 1911. Hilma af Klint peignait ses "Peintures pour le Temple" dès 1906 — cinq ans avant lui.",
  },
  {
    question:
      "Berthe Morisot était la seule femme à exposer régulièrement avec quel groupe ?",
    options: ["Les Cubistes", "Les Fauves", "Les Impressionnistes"],
    answer: 2,
    explanation:
      "Berthe Morisot a participé à sept des huit expositions impressionnistes entre 1874 et 1886. Elle était la seule femme à exposer régulièrement aux côtés de Monet, Renoir et Degas.",
  },
  {
    question:
      "Quelle œuvre d'Edmonia Lewis a été utilisée comme décoration dans un hippodrome avant d'être retrouvée et restaurée ?",
    options: ["Hagar in the Wilderness", "Portrait of Lincoln", "The Death of Cleopatra"],
    answer: 2,
    explanation:
      ""The Death of Cleopatra" (1876) a disparu après l'Exposition universelle de Philadelphie. Elle a servi de décoration dans un hippodrome du Illinois avant d'être retrouvée et restaurée. Elle est aujourd'hui conservée au Smithsonian American Art Museum de Washington.",
  },
  {
    question: "Pourquoi Frida Kahlo réalisait-elle autant d'autoportraits ?",
    options: [
      ""Parce que les galeries l'exigeaient"",
      ""Parce que je manque de modèles"",
      ""Parce que je suis souvent seule et suis le sujet que je connais le mieux"",
    ],
    answer: 2,
    explanation:
      "Frida Kahlo a réalisé 55 autoportraits sur 143 œuvres au total. Cette phrase, extraite de ses écrits, dit tout de sa démarche : se peindre soi-même comme acte de connaissance, non de narcissisme.",
  },
  {
    question:
      "Yayoi Kusama est l'artiste vivante la plus cotée au monde. Où vit-elle volontairement depuis des décennies ?",
    options: [
      "Dans un monastère à Kyoto",
      "Dans un hôpital psychiatrique à Tokyo",
      "Dans une île isolée au Japon",
    ],
    answer: 1,
    explanation:
      "Depuis 1977, Yayoi Kusama vit volontairement dans un hôpital psychiatrique de Tokyo. Elle y trouve la structure dont elle a besoin pour canaliser ses hallucinations visuelles — et continue de créer chaque jour dans son atelier voisin.",
  },
  {
    question:
      "Artemisia Gentileschi a été la première femme admise dans quelle institution artistique prestigieuse ?",
    options: [
      "L'Académie royale de Londres",
      "L'École des Beaux-Arts de Paris",
      "L'Académie des Arts du Dessin de Florence",
    ],
    answer: 2,
    explanation:
      "En 1616, Artemisia Gentileschi devient la première femme admise à l'Accademia delle Arti del Disegno de Florence — l'une des institutions artistiques les plus influentes de la Renaissance italienne.",
  },
  {
    question:
      "Käthe Kollwitz pratiquait principalement quel type d'art pour dénoncer la guerre et la misère ?",
    options: [
      "La peinture à l'huile abstraite",
      "La photographie documentaire",
      "La gravure et le dessin engagés",
    ],
    answer: 2,
    explanation:
      "Käthe Kollwitz a consacré sa vie à la gravure et au dessin pour représenter la souffrance ouvrière, la guerre et le deuil. Elle a perdu son fils pendant la Première Guerre mondiale et son petit-fils pendant la Seconde.",
  },
];

export default function QuizEte2026() {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const totalAnswered = Object.keys(answers).length;
  const isFinished = totalAnswered === questions.length;
  const score = Object.entries(answers).filter(
    ([i, selected]) => questions[Number(i)].answer === selected
  ).length;

  function handleAnswer(questionIndex: number, optionIndex: number) {
    if (answers[questionIndex] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  }

  return (
    <Layout withInstagram={false}>

      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-12 mt-8 w-11/12 max-w-3xl border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Été 2026 · Quiz
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Connaissez-vous les femmes artistes ?
        </h1>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
          10 questions pour tester vos connaissances sur les femmes artistes
          qui ont façonné l'Histoire de l'Art. Bonne chance !
        </p>
      </section>

      {/* ── QUESTIONS ─────────────────────────────────────────────── */}
      <div className="mx-auto mb-16 w-11/12 max-w-3xl space-y-10">
        {questions.map((q, qi) => {
          const selected = answers[qi];
          const isAnswered = selected !== undefined;

          return (
            <article key={qi} className="border border-neutral-200">

              {/* Question */}
              <div className="border-b border-neutral-200 px-6 py-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Question {qi + 1}
                </p>
                <p className="font-display text-xl font-light leading-snug text-neutral-900">
                  {q.question}
                </p>
              </div>

              {/* Options */}
              <div className="divide-y divide-neutral-100">
                {q.options.map((option, oi) => {
                  const isSelected = selected === oi;
                  const isCorrect = q.answer === oi;

                  let style =
                    'w-full px-6 py-4 text-left text-sm font-light text-neutral-600 transition-colors hover:bg-neutral-50';

                  if (isAnswered) {
                    if (isCorrect) {
                      style =
                        'w-full px-6 py-4 text-left text-sm font-light bg-neutral-900 text-white';
                    } else if (isSelected) {
                      style =
                        'w-full px-6 py-4 text-left text-sm font-light bg-neutral-100 text-neutral-400 line-through';
                    } else {
                      style =
                        'w-full px-6 py-4 text-left text-sm font-light text-neutral-300';
                    }
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleAnswer(qi, oi)}
                      disabled={isAnswered}
                      className={style}
                      aria-pressed={isSelected}
                    >
                      <span className="mr-3 text-xs font-semibold uppercase tracking-[0.2em]">
                        {['A', 'B', 'C'][oi]}.
                      </span>
                      {option}
                      {isAnswered && isCorrect && (
                        <span className="ml-3 text-xs font-semibold uppercase tracking-[0.2em]">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explication */}
              {isAnswered && (
                <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    {selected === q.answer ? 'Bonne réponse !' : 'Pas tout à fait…'}
                  </p>
                  <p className="font-display text-base font-light italic leading-relaxed text-neutral-600">
                    {q.explanation}
                  </p>
                </div>
              )}

            </article>
          );
        })}
      </div>

      {/* ── SCORE FINAL ───────────────────────────────────────────── */}
      {isFinished && (
        <section className="mx-auto mb-20 w-11/12 max-w-3xl border border-neutral-200 bg-neutral-900 px-8 py-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Résultat Final
          </p>
          <p className="font-display text-5xl font-light text-white">
            {score} / {questions.length}
          </p>
          <p className="mt-3 font-display text-xl font-light italic text-white/60">
            {score <= 3 && "De belles découvertes à faire — le podcast est là pour ça !"}
            {score >= 4 && score <= 6 && "Pas mal ! Vous connaissez déjà quelques-unes de ces femmes remarquables."}
            {score >= 7 && score <= 9 && "Excellent ! Vous êtes une vraie passionnée d'Histoire de l'Art au féminin."}
            {score === 10 && "Parfait ! Vous méritez un épisode entier rien que pour vous."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/podcasts"
              className="border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:border-white/60 hover:text-white"
            >
              Écouter le Podcast <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/articles"
              className="border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:border-white/60 hover:text-white"
            >
              Lire les Articles <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}

    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Quiz Été 2026 — Connaissez-vous les femmes artistes ? — ART AU FÉMININ"
    description="10 questions pour tester vos connaissances sur les femmes artistes qui ont façonné l'Histoire de l'Art. Frida Kahlo, Louise Bourgeois, Artemisia Gentileschi et bien d'autres."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);
