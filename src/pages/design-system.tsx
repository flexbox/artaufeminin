import React, { ReactElement, ReactNode } from 'react';

import BookList from '../components/book-list';
import { ContentCard } from '../components/content-card';
import { FeaturedCard } from '../components/featured-card';
import Layout from '../components/layout';
import { Pagination } from '../components/pagination';
import PressList from '../components/pressList';
import { Quote } from '../components/quote';
import SEO from '../components/seo';

// Référentiel visuel du site. Chaque exemple applique la constante qu'il
// affiche : si une classe change ici, l'exemple et le code changent ensemble.
// Quand un motif évolue sur le site, mettre à jour la constante correspondante.

// ── Classes de référence ───────────────────────────────────────────────────

const TYPO = {
  eyebrow: 'text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500',
  h1: 'font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl',
  h1Hero:
    'font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl',
  h2: 'font-display text-3xl font-light leading-snug text-neutral-900 md:text-4xl',
  h2Label:
    'font-sans text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900',
  cardTitle: 'font-display text-2xl font-light leading-snug text-neutral-900',
  lead: 'font-display text-xl font-light italic leading-relaxed text-neutral-600 md:text-2xl',
  body: 'text-base leading-relaxed text-neutral-600 md:text-lg',
  small: 'text-sm leading-relaxed text-neutral-600',
  caption: 'text-xs leading-relaxed text-neutral-500',
};

const BUTTON = {
  primary:
    'inline-block border border-neutral-900 bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700',
  outline:
    'inline-block border border-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white',
  secondary:
    'inline-block border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900',
  onDark:
    'inline-block border border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-neutral-900',
  textLink:
    'text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900',
};

const FORM = {
  label:
    'mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500',
  input:
    'w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 transition-colors focus:border-neutral-500 focus:outline-none',
  inputOnDark:
    'min-w-0 flex-1 border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 transition-colors focus:border-white focus:bg-white/20 focus:outline-none focus:ring-0',
  submitOnDark:
    'border border-white bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-200',
};

const LAYOUT = {
  reading: 'mx-auto w-page max-w-3xl',
  content: 'mx-auto w-page max-w-5xl',
  list: 'mx-auto w-page max-w-6xl lg:w-page-lg',
  band: 'border-y border-neutral-200 bg-neutral-50 py-16',
  bandDark: 'border-y border-neutral-200 bg-neutral-900 py-16',
};

const PROSE =
  'prose prose-neutral max-w-none prose-p:leading-relaxed prose-p:text-neutral-600 prose-headings:font-display prose-headings:font-light prose-a:text-neutral-900 prose-a:decoration-neutral-300 prose-a:underline-offset-4 hover:prose-a:decoration-neutral-900';

const COLORS = [
  {
    name: 'white',
    hex: '#ffffff',
    role: 'Fond de page, cartes',
    bg: 'bg-white',
  },
  {
    name: 'neutral-50',
    hex: '#fafafa',
    role: 'Bandeaux clairs',
    bg: 'bg-neutral-50',
  },
  {
    name: 'neutral-100',
    hex: '#f5f5f5',
    role: "Fond d'image en chargement",
    bg: 'bg-neutral-100',
  },
  {
    name: 'neutral-200',
    hex: '#e5e5e5',
    role: 'Bordures, séparateurs',
    bg: 'bg-neutral-200',
  },
  {
    name: 'neutral-300',
    hex: '#d4d4d4',
    role: 'Bordures de boutons secondaires',
    bg: 'bg-neutral-300',
  },
  {
    name: 'neutral-500',
    hex: '#666666',
    role: 'Sur-titres, méta (assombri : AA)',
    bg: 'bg-neutral-500',
  },
  {
    name: 'neutral-600',
    hex: '#525252',
    role: 'Texte courant',
    bg: 'bg-neutral-600',
  },
  {
    name: 'neutral-700',
    hex: '#404040',
    role: 'Survol des boutons primaires',
    bg: 'bg-neutral-700',
  },
  {
    name: 'neutral-900',
    hex: '#171717',
    role: 'Titres, boutons, footer',
    bg: 'bg-neutral-900',
  },
  {
    name: 'neutral-950',
    hex: '#0a0a0a',
    role: 'Bandeau final de l’accueil',
    bg: 'bg-neutral-950',
  },
];

const SAMPLE_IMAGE = '/og-default.png';

// ── Helpers ────────────────────────────────────────────────────────────────

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-20 scroll-mt-20">
      <div className="mb-8 border-b border-neutral-200 pb-6">
        <h2 className={TYPO.h2}>{title}</h2>
        {intro && <p className={`mt-3 max-w-2xl ${TYPO.small}`}>{intro}</p>}
      </div>
      {children}
    </section>
  );
}

function Code({ children }: { children: string }) {
  return (
    <code className="mt-3 block whitespace-pre-line break-words bg-neutral-50 px-3 py-2 font-mono text-xs leading-relaxed text-neutral-600">
      {children}
    </code>
  );
}

function Specimen({
  label,
  code,
  dark = false,
  children,
}: {
  label: string;
  code?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="border border-neutral-200">
      <p className="border-b border-neutral-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        {label}
      </p>
      <div className={dark ? 'bg-neutral-900 p-6' : 'bg-white p-6'}>
        {children}
      </div>
      {code && (
        <div className="border-t border-neutral-200 p-3">
          <Code>{code}</Code>
        </div>
      )}
    </div>
  );
}

const NAV = [
  ['principes', 'Principes'],
  ['couleurs', 'Couleurs'],
  ['typographie', 'Typographie'],
  ['mise-en-page', 'Mise en page'],
  ['boutons', 'Boutons & liens'],
  ['formulaires', 'Formulaires'],
  ['cartes', 'Cartes'],
  ['texte-riche', 'Texte riche'],
  ['a-eviter', 'À éviter'],
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function DesignSystemPage(): ReactElement {
  return (
    <Layout>
      <header
        className={`${LAYOUT.content} mb-12 mt-8 border-b border-neutral-200 pb-8`}
      >
        <p className={`mb-2 ${TYPO.eyebrow}`}>Référentiel interne</p>
        <h1 className={TYPO.h1}>Design System</h1>
        <p className={`mt-4 max-w-2xl ${TYPO.small}`}>
          Couleurs, typographie, mise en page et composants d'artaufeminin.fr.
          Les exemples ci-dessous sont les vrais composants du site : avant
          d'ajouter un style, vérifier qu'il n'existe pas déjà ici.
        </p>
        <nav
          aria-label="Sommaire"
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
        >
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={BUTTON.textLink}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <div className={LAYOUT.content}>
        {/* ── PRINCIPES ─────────────────────────────────────────────── */}
        <Section
          id="principes"
          title="Principes"
          intro="Un « white cube » : l'œuvre (les images, les noms des artistes) occupe le devant, l'interface s'efface."
        >
          <ol className="grid grid-cols-1 gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
            {[
              [
                'Monochrome',
                'Uniquement la gamme neutral, du blanc au noir. Pas de couleur d’accent : la couleur vient des images.',
              ],
              [
                'Angles droits',
                'Aucun arrondi, sauf les éléments circulaires par nature (avatar, bouton lecture du lecteur).',
              ],
              [
                'Deux polices, deux rôles',
                'Cormorant Garamond fin (300) pour les titres et citations, Inter pour tout le reste.',
              ],
              [
                'Pas d’ombre',
                'Le survol se signale par une bordure noire, un texte qui s’éclaircit ou une image qui zoome légèrement.',
              ],
              [
                'Sur-titres en capitales espacées',
                'Labels, catégories et liens d’action : text-xs, semibold, tracking 0.25em (0.2em dans les boutons).',
              ],
              [
                'Marges constantes',
                '24 px sur mobile pour tout le contenu, grâce aux conteneurs w-page.',
              ],
            ].map(([title, text], i) => (
              <li key={title} className="bg-white p-6">
                <p className={TYPO.eyebrow}>{String(i + 1).padStart(2, '0')}</p>
                <p className={`mt-2 ${TYPO.cardTitle}`}>{title}</p>
                <p className={`mt-2 ${TYPO.small}`}>{text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── COULEURS ──────────────────────────────────────────────── */}
        <Section
          id="couleurs"
          title="Couleurs"
          intro="Gamme Tailwind neutral. neutral-500 est redéfini à #666666 dans tailwind.config.js pour atteindre le contraste AA (4,5:1) sur blanc et sur neutral-50."
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {COLORS.map(({ name, hex, role, bg }) => (
              <div key={name}>
                <div className={`h-16 border border-neutral-200 ${bg}`} />
                <p className="mt-2 text-xs font-semibold text-neutral-900">
                  {name}
                </p>
                <p className="font-mono text-xs text-neutral-500">{hex}</p>
                <p className={`mt-1 ${TYPO.caption}`}>{role}</p>
              </div>
            ))}
          </div>
          <p className={`mt-6 ${TYPO.small}`}>
            Sur fond sombre (footer, bandeaux noirs), le texte utilise le blanc
            et ses opacités :{' '}
            <code className="font-mono text-xs">text-white</code>,{' '}
            <code className="font-mono text-xs">text-white/70</code> (texte),{' '}
            <code className="font-mono text-xs">text-white/50</code> (mentions),
            bordures <code className="font-mono text-xs">border-white/10</code>{' '}
            à <code className="font-mono text-xs">/30</code>.
          </p>
        </Section>

        {/* ── TYPOGRAPHIE ───────────────────────────────────────────── */}
        <Section
          id="typographie"
          title="Typographie"
          intro="Cormorant Garamond (300, 400, 500, 600 + italiques) et Inter (300 à 600) sont chargées dans gatsby-ssr.js. Ne pas utiliser font-bold (700) : la graisse n'est pas chargée et le navigateur la simulerait."
        >
          <div className="space-y-6">
            <Specimen label="Sur-titre" code={TYPO.eyebrow}>
              <p className={TYPO.eyebrow}>Saison 6 · Épisode 4</p>
            </Specimen>
            <Specimen label="Titre de page (h1)" code={TYPO.h1}>
              <h3 className={TYPO.h1}>Les femmes artistes</h3>
            </Specimen>
            <Specimen
              label="Titre de hero (h1, pages d'accueil de section)"
              code={TYPO.h1Hero}
            >
              <h3 className={TYPO.h1Hero}>
                Célébrer les <span className="italic">femmes artistes</span>
              </h3>
            </Specimen>
            <Specimen label="Titre de section (h2)" code={TYPO.h2}>
              <h3 className={TYPO.h2}>Derniers épisodes</h3>
            </Specimen>
            <Specimen
              label="Intertitre en capitales (h2 discret)"
              code={TYPO.h2Label}
            >
              <h3 className={TYPO.h2Label}>Articles & mentions</h3>
            </Specimen>
            <Specimen label="Titre de carte" code={TYPO.cardTitle}>
              <h3 className={TYPO.cardTitle}>Sofonisba Anguissola</h3>
            </Specimen>
            <Specimen label="Chapeau" code={TYPO.lead}>
              <p className={TYPO.lead}>
                Développeuse web orientée Art et Culture.
              </p>
            </Specimen>
            <Specimen label="Texte courant" code={TYPO.body}>
              <p className={TYPO.body}>
                Un projet né d'une curiosité simple : combien de femmes artistes
                connaît-on vraiment ?
              </p>
            </Specimen>
            <Specimen
              label="Texte secondaire (descriptions de cartes)"
              code={TYPO.small}
            >
              <p className={TYPO.small}>
                Berthe Morisot, Mary Cassatt, Eva Gonzalès… redonner leur juste
                place aux femmes artistes.
              </p>
            </Specimen>
            <Specimen label="Légende, mention" code={TYPO.caption}>
              <p className={TYPO.caption}>© Musée d'Orsay, Paris</p>
            </Specimen>
          </div>
        </Section>

        {/* ── MISE EN PAGE ──────────────────────────────────────────── */}
        <Section
          id="mise-en-page"
          title="Mise en page"
          intro="<main> n'a pas de padding : chaque section de premier niveau choisit son conteneur. w-page = 100 % − 3 rem (24 px de chaque côté) ; w-page-lg = 100 % − 8 rem à partir de lg."
        >
          <div className="space-y-4">
            {[
              [
                'Lecture',
                'Articles, épisodes, pages légales, FAQ',
                LAYOUT.reading,
                'max-w-3xl',
              ],
              [
                'Contenu',
                'Presse, livres, citations, à propos',
                LAYOUT.content,
                'max-w-5xl',
              ],
              [
                'Liste',
                'Podcasts, articles, accueil (aligné sur le hero)',
                LAYOUT.list,
                'max-w-6xl',
              ],
            ].map(([name, usage, code, width]) => (
              <div key={name} className="border border-neutral-200 p-4">
                <div className="flex items-baseline justify-between gap-4">
                  <p className={TYPO.cardTitle}>{name}</p>
                  <p className={TYPO.caption}>{usage}</p>
                </div>
                <div className="mt-3 bg-neutral-50 py-2">
                  <div
                    className={`h-3 bg-neutral-300 ${
                      {
                        'max-w-3xl': 'w-[60%]',
                        'max-w-5xl': 'w-[80%]',
                        'max-w-6xl': 'w-[92%]',
                      }[width]
                    } mx-auto`}
                  />
                </div>
                <Code>{code}</Code>
              </div>
            ))}
            <div className="border border-neutral-200 p-4">
              <p className={TYPO.cardTitle}>Bandeau pleine largeur</p>
              <p className={`mt-1 ${TYPO.small}`}>
                Section directement sous &lt;main&gt;, fond sur toute la largeur
                ; le contenu à l'intérieur reprend un conteneur ci-dessus ou{' '}
                <code className="font-mono text-xs">
                  mx-auto max-w-3xl px-6 lg:px-0
                </code>
                .
              </p>
              <Code>{LAYOUT.band}</Code>
              <Code>{LAYOUT.bandDark}</Code>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className={TYPO.cardTitle}>Séparateurs</p>
              <hr className="separator" />
              <Code>
                {'<hr className="separator" />  — entre blocs d’un article'}
              </Code>
              <Code>
                border-b border-neutral-200 — sous les en-têtes de page et de
                section
              </Code>
            </div>
          </div>
        </Section>

        {/* ── BOUTONS ───────────────────────────────────────────────── */}
        <Section
          id="boutons"
          title="Boutons & liens"
          intro="Toujours en capitales espacées, angles droits. Une flèche → pour les actions qui mènent ailleurs."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Specimen
              label="Primaire — action principale"
              code={BUTTON.primary}
            >
              <a href="#boutons" className={BUTTON.primary}>
                Je m'abonne →
              </a>
            </Specimen>
            <Specimen
              label="Contour — action forte, plus discrète"
              code={BUTTON.outline}
            >
              <a href="#boutons" className={BUTTON.outline}>
                Écouter le podcast
              </a>
            </Specimen>
            <Specimen label="Secondaire" code={BUTTON.secondary}>
              <a href="#boutons" className={BUTTON.secondary}>
                aldjia.dev →
              </a>
            </Specimen>
            <Specimen label="Sur fond sombre" code={BUTTON.onDark} dark>
              <a href="#boutons" className={BUTTON.onDark}>
                Visiter la galerie
              </a>
            </Specimen>
            <Specimen
              label="Lien d'action (cartes, listes)"
              code={BUTTON.textLink}
            >
              <a href="#boutons" className={BUTTON.textLink}>
                Lire l'Article <span aria-hidden="true">→</span>
              </a>
            </Specimen>
            <Specimen
              label="Lien dans le texte"
              code="Géré par les classes prose (voir Texte riche)"
            >
              <div className={PROSE}>
                <p>
                  Retrouvez{' '}
                  <a href="#texte-riche">l'épisode consacré à Alice Guy</a> dans
                  la saison 3.
                </p>
              </div>
            </Specimen>
          </div>
        </Section>

        {/* ── FORMULAIRES ───────────────────────────────────────────── */}
        <Section
          id="formulaires"
          title="Formulaires"
          intro="Le plugin @tailwindcss/forms fournit la base. Chaque champ a un label (visible, ou sr-only si le contexte suffit)."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Specimen
              label="Champ sur fond clair (page Newsletter)"
              code={`${FORM.label}\n${FORM.input}`}
            >
              <label htmlFor="ds-email" className={FORM.label}>
                Adresse email
              </label>
              <input
                id="ds-email"
                type="email"
                placeholder="votre@email.fr"
                className={FORM.input}
              />
            </Specimen>
            <Specimen
              label="Champ sur fond sombre (footer)"
              code={`${FORM.inputOnDark}\n${FORM.submitOnDark}`}
              dark
            >
              <div className="flex">
                <label htmlFor="ds-email-dark" className="sr-only">
                  Adresse email
                </label>
                <input
                  id="ds-email-dark"
                  type="email"
                  placeholder="votre@email.fr"
                  className={FORM.inputOnDark}
                />
                <button type="button" className={FORM.submitOnDark}>
                  <span aria-hidden="true">→</span>
                  <span className="sr-only">S'inscrire</span>
                </button>
              </div>
            </Specimen>
          </div>
        </Section>

        {/* ── CARTES ────────────────────────────────────────────────── */}
        <Section
          id="cartes"
          title="Cartes"
          intro="Composants réels de src/components. Survol : le titre s'éclaircit (text-neutral-500), la bordure passe au noir, l'image zoome à 104 %."
        >
          <div className="space-y-10">
            <div>
              <p className={`mb-4 ${TYPO.h2Label}`}>
                ContentCard — épisodes et articles en grille
              </p>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {['Sofonisba Anguissola', 'Florestine Perrault Collins'].map(
                  (title) => (
                    <ContentCard
                      key={title}
                      href="#cartes"
                      imageUrl={SAMPLE_IMAGE}
                      imageAlt=""
                      meta="12 octobre 2026"
                      title={title}
                      description="Une description courte, tronquée à 140 caractères dans les listes."
                      action={
                        <a href="#cartes" className={BUTTON.textLink}>
                          Écouter l'Épisode <span aria-hidden="true">→</span>
                        </a>
                      }
                    />
                  )
                )}
              </div>
            </div>

            <div>
              <p className={`mb-4 ${TYPO.h2Label}`}>
                FeaturedCard — mise en avant
              </p>
              <FeaturedCard
                href="#cartes"
                imageUrl={SAMPLE_IMAGE}
                imageAlt=""
                label="Dernier épisode"
                title="Florestine Perrault Collins"
                description="Se faire passer pour blanche pour photographier les siens."
                cta={
                  <a href="#cartes" className={BUTTON.textLink}>
                    Écouter l'Épisode <span aria-hidden="true">→</span>
                  </a>
                }
              />
            </div>

            <div>
              <p className={`mb-4 ${TYPO.h2Label}`}>
                BookList — chroniques de livres
              </p>
              <BookList
                allBooks={[
                  {
                    uid: 'exemple-1',
                    data: {
                      title: { text: 'Les Refusées — Anne Bourrassé' },
                      description: {
                        text: '70 % des étudiantes en art, 6 % des collections muséales.',
                      },
                      content: { text: '' },
                    },
                  },
                  {
                    uid: 'exemple-2',
                    data: {
                      title: { text: "Histoire de l'Art d'un nouveau genre" },
                      description: {
                        text: "D'Anguissola à Frida Kahlo : réécrire l'histoire de l'art.",
                      },
                      content: { text: '' },
                    },
                  },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <p className={`mb-4 ${TYPO.h2Label}`}>Quote — citations</p>
                <Quote
                  data={{
                    author: 'Louise Bourgeois',
                    quotation:
                      "J'ai toujours éprouvé une fascination pour l'aiguille et son pouvoir magique.",
                  }}
                />
              </div>
              <div>
                <p className={`mb-4 ${TYPO.h2Label}`}>
                  PressList — mentions presse
                </p>
                <PressList
                  allPress={[
                    {
                      uid: 'exemple',
                      data: {
                        sitename: { text: 'Cultea' },
                        description: {
                          text: "Visite de l'exposition Memoria au Frac Nouvelle-Aquitaine MÉCA.",
                        },
                        url: { url: '#cartes' },
                      },
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <p className={`mb-4 ${TYPO.h2Label}`}>Pagination</p>
              <Pagination currentPage={2} numPages={4} basePath="/podcasts" />
            </div>
          </div>
        </Section>

        {/* ── TEXTE RICHE ───────────────────────────────────────────── */}
        <Section
          id="texte-riche"
          title="Texte riche"
          intro="Contenu Prismic des articles, livres, épisodes et FAQ. Toujours appliquer ce jeu de classes prose complet, pour que titres et liens restent identiques partout."
        >
          <Specimen label="Article" code={PROSE}>
            <div className={PROSE}>
              <h2>Une enfance à Crémone</h2>
              <p>
                Née vers 1532, Sofonisba Anguissola reçoit une éducation
                humaniste rare pour une jeune fille. Elle étudie auprès de{' '}
                <a href="#texte-riche">Bernardino Campi</a>, puis correspond
                avec Michel-Ange.
              </p>
              <blockquote>
                <p>
                  « Je n'ai jamais vu une jeune fille dessiner aussi bien. »
                </p>
              </blockquote>
              <ul>
                <li>Autoportraits nombreux et novateurs</li>
                <li>Peintre de cour de Philippe II</li>
              </ul>
            </div>
          </Specimen>
        </Section>

        {/* ── À ÉVITER ──────────────────────────────────────────────── */}
        <Section id="a-eviter" title="À éviter">
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {[
              [
                'rounded-*, shadow-*',
                'Angles droits, survol par bordure ou couleur.',
              ],
              [
                'font-bold, font-extrabold',
                'Graisse non chargée : utiliser font-semibold.',
              ],
              [
                'font-semibold sur font-display',
                'Les titres Cormorant restent en font-light.',
              ],
              [
                'stone-*, slate-*, gray-*, couleurs vives',
                'Uniquement neutral (et white).',
              ],
              [
                'w-3/4, w-11/12, px-4 sur <main>',
                'Utiliser les conteneurs w-page de la section Mise en page.',
              ],
              [
                'tracking-widest, tracking-wide',
                'Utiliser tracking-[0.25em] (labels) ou tracking-[0.2em] (boutons).',
              ],
              [
                'prose sans prose-headings:font-display',
                'Les titres sortiraient en gras : reprendre le jeu de classes complet.',
              ],
              [
                'Libellés ARIA en anglais',
                'Le site est en français, y compris pour les lecteurs d’écran.',
              ],
            ].map(([dont, why]) => (
              <li
                key={dont}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8"
              >
                <code className="shrink-0 font-mono text-xs text-neutral-900 sm:w-72">
                  {dont}
                </code>
                <p className={TYPO.small}>{why}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <SEO
    title="Design System — ART au féminin"
    description="Référentiel visuel du site artaufeminin.fr"
    noindex={true}
  />
);
