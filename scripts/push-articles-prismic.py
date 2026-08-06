#!/usr/bin/env python3
"""
Push enriched articles to Prismic Migration API.
Usage: PRISMIC_TOKEN=<token> python3 scripts/push-articles-prismic.py

- Met à jour l'article Alice Guy (ID: YC_5aRAAACMAHzOe)
- Crée le nouvel article Sofonisba Anguissola
"""

import json
import os
import sys
import urllib.error
import urllib.request

TOKEN = os.environ.get("PRISMIC_TOKEN", "")
if not TOKEN:
    print("Usage: PRISMIC_TOKEN=<token> python3 scripts/push-articles-prismic.py")
    sys.exit(1)

BASE_URL = "https://migration.prismic.io/documents"
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "repository": "artaufeminin",
    "Content-Type": "application/json",
}


def api_call(method, url, data):
    body = json.dumps(data, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(url, data=body, headers=HEADERS, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            print(f"  ✓ {method} → {resp.status}")
            return result
    except urllib.error.HTTPError as e:
        print(f"  ✗ {method} → {e.code}")
        print(e.read().decode("utf-8"))
        sys.exit(1)


# ─────────────────────────────────────────────────────────────────────────────
# ALICE GUY — mise à jour du document existant
# ─────────────────────────────────────────────────────────────────────────────

ALICE_GUY_ID = "YC_5aRAAACMAHzOe"

alice_content = [
    {
        "type": "paragraph",
        "text": "Le 28 décembre 1895, Alice Guy est dans la salle. Elle a vingt-deux ans, elle travaille comme secrétaire chez Léon Gaumont, et elle assiste à la première projection publique des frères Lumière au Grand Café de Paris. Quelques semaines plus tard, Gaumont acquiert à son tour une caméra cinématographique — mais l'inspiration manque. Alors Alice propose quelque chose : et si on racontait une histoire ?",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "« Tant que ça n'empiète pas sur votre travail de secrétaire. » C'est en ces termes que Léon Gaumont lui donne son accord. Une réponse qui allait changer l'histoire du cinéma.",
        "spans": [],
    },
    {
        "type": "heading2",
        "text": "La Fée aux choux, 1896 : la naissance du récit cinématographique",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "À l'automne 1896, Alice Guy tourne La fée aux choux — un court métrage fantaisiste de deux minutes dans lequel une fée distribue des nourrissons à de jeunes couples. Ce qui paraît anodin est en réalité révolutionnaire : c'est la première fois dans l'histoire du cinéma que quelqu'un filme des acteurs qui jouent un rôle, dans une fiction construite avec un début, un milieu et une fin. Avant elle, les frères Lumière et leurs contemporains ne filmaient que la réalité brute : une arrivée de train, une sortie d'usine, des enfants qui jouent.",
        "spans": [{"start": 35, "end": 51, "type": "strong"}],
    },
    {
        "type": "image",
        "url": "https://images.prismic.io/artaufeminin/97105f8c-7c0e-46b5-9ec0-c50d0f0c9d8b_MV5BYzZiYTIxN2QtMWFkZS00OGJmLTk1OTQtODAzN2Q3N2NlMWE0XkEyXkFqcGdeQXVyNzUyMjQ3NTQ%40._V1_.jpg?auto=format,compress",
        "alt": "Alice Guy : La fée aux choux (imdb.com)",
        "copyright": None,
        "dimensions": {"width": 600, "height": 439},
        "id": "YC_zRhAAACMAHxgR",
        "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
    },
    {
        "type": "paragraph",
        "text": "Alice Guy vient d'inventer le cinéma narratif.",
        "spans": [{"start": 0, "end": 46, "type": "strong"}],
    },
    {
        "type": "heading2",
        "text": "Chez Gaumont : l'art de tout faire",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Entre 1896 et 1906, Alice Guy réalise pour Gaumont une centaine de films dans tous les genres — comédie, mélodrame, fantastique, films à sujet religieux ou social. Elle est à la fois réalisatrice, scénariste, directrice artistique. Elle choisit les acteurs, conçoit les décors, supervise le montage.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1900, elle commence à réaliser des phonoscènes — l'ancêtre du clip vidéo, qui combine l'image cinématographique et un phonographe pour produire des films synchronisés avec de la musique. C'est une innovation technique et artistique majeure qui fait d'Alice Guy l'une des pionnières du cinéma sonore.",
        "spans": [{"start": 38, "end": 49, "type": "strong"}],
    },
    {
        "type": "paragraph",
        "text": "En 1906, elle dirige La Vie du Christ : vingt-cinq décors, plusieurs centaines de figurants, le budget le plus important qu'ait jamais consenti Gaumont. C'est aussi le premier film où Léon Gaumont accepte de faire apparaître son nom au générique.",
        "spans": [{"start": 21, "end": 38, "type": "strong"}],
    },
    {
        "type": "paragraph",
        "text": "Sur tous ses plateaux, Alice Guy fait afficher une inscription sur les murs : « Be natural ». Elle voulait un jeu d'acteur vrai, spontané — à une époque où la gestuelle théâtrale et outrée était la norme. Elle est aussi l'une des premières cinéastes à faire jouer des acteurs noirs dans des rôles propres, sans recourir au blackface qui sévissait dans l'industrie.",
        "spans": [{"start": 80, "end": 90, "type": "strong"}],
    },
    {
        "type": "image",
        "url": "https://images.prismic.io/artaufeminin/fed7883f-f770-48d4-8855-21e831cf1412_Madame_a_des_envies.jpg?auto=format,compress",
        "alt": "Alice Guy : Affiche du film Madame a ses envies",
        "copyright": None,
        "dimensions": {"width": 500, "height": 750},
        "id": "YC_1VRAAACEAHyFX",
        "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
    },
    {
        "type": "paragraph",
        "text": "Parmi ses films les plus remarquables de cette période, Madame a ses envies (1906) et Les résultats du féminisme (1906) interrogent la place de la femme dans la société — par l'humour et le renversement satirique des rôles de genre. Ces films sont d'une modernité saisissante pour leur époque.",
        "spans": [
            {"start": 56, "end": 76, "type": "strong"},
            {"start": 82, "end": 113, "type": "strong"},
        ],
    },
    {
        "type": "image",
        "url": "https://images.prismic.io/artaufeminin/39acb7fd-2952-4d9d-bad2-483330405309_affich_68955_1.jpg?auto=format,compress",
        "alt": "Alice Guy : Affiche film Les résultats du féminisme",
        "copyright": None,
        "dimensions": {"width": 500, "height": 750},
        "id": "YC_2pBAAACIAHycw",
        "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
    },
    {
        "type": "heading2",
        "text": "L'Amérique et la Solax : première femme à posséder son propre studio",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1907, Alice Guy épouse Herbert Blaché, un cinéaste et producteur américain, et part aux États-Unis. Elle ne se contente pas de suivre son mari : en 1910, elle cofonde la Solax Company, sa propre société de production. En 1912, elle fait construire pour 100 000 dollars un studio entièrement vitré à Fort Lee, dans le New Jersey — alors capitale du cinéma américain, avant l'essor d'Hollywood. Elle devient ainsi la première femme à posséder et diriger son propre studio de cinéma dans le monde.",
        "spans": [{"start": 173, "end": 187, "type": "strong"}],
    },
    {
        "type": "image",
        "url": "https://images.prismic.io/artaufeminin/eddfb6ea-976f-452b-8ac5-3add3d2a4e90_MV5BNTFmYTcxMGEtYzMxNC00ZjZjLTkwNDYtMDBhODMwNDJhMzYxXkEyXkFqcGdeQXVyMDUyOTUyNQ%40%40._V1_.jpg?auto=format,compress",
        "alt": "Alice Guy : Dick Whittington and his cat",
        "copyright": None,
        "dimensions": {"width": 1068, "height": 657},
        "id": "YC__lRAAACIAH07R",
        "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
    },
    {
        "type": "paragraph",
        "text": "En 1912, elle tourne A Fool and His Money, considéré comme l'un des premiers films de l'histoire avec une distribution entièrement composée d'acteurs noirs dans des rôles à part entière — à une époque où le cinéma américain avait encore recours à des acteurs blancs grimés.",
        "spans": [{"start": 21, "end": 41, "type": "strong"}],
    },
    {
        "type": "heading2",
        "text": "L'oubli et la redécouverte",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "La Première Guerre mondiale bouleverse l'industrie cinématographique. Les grandes majors hollywoodiennes émergent et écrasent les studios indépendants. Alice Guy cesse de réaliser vers 1920 et rentre en France en 1922 — sans retrouver la place qu'elle avait quittée quinze ans plus tôt.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Pendant plusieurs décennies, son nom disparaît. Ses films sont attribués à des hommes. Ses archives sont perdues ou détruites. C'est le destin commun de trop nombreuses pionnières du cinéma.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "C'est seulement dans les années 1950 que la mémoire d'Alice Guy-Blaché refait surface. En 1957, la Cinémathèque française lui rend hommage. Elle est décorée de la Légion d'honneur. Elle meurt le 24 mars 1968, à l'âge de 94 ans, dans le New Jersey — le même État où elle avait bâti son studio un demi-siècle plus tôt.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Alice Guy-Blaché a réalisé entre 600 et 1 000 films au cours de sa carrière — les estimations varient selon les archives retrouvées. Ce que l'Histoire ne peut plus effacer, c'est qu'elle a été la première à comprendre que le cinéma pouvait raconter. Que l'image pouvait servir une histoire. Que derrière la caméra, il n'y avait pas qu'un opérateur — mais une autrice.",
        "spans": [],
    },
]

alice_payload = {
    "type": "blog_post",
    "uid": "la-naissance-du-cinema-alice-guy-la-pionniere-du-septiemeart",
    "lang": "fr-fr",
    "data": {
        "title": [
            {
                "type": "heading1",
                "text": "Alice Guy-Blaché : la femme qui a inventé le cinéma narratif",
                "spans": [],
            }
        ],
        "description": [
            {
                "type": "paragraph",
                "text": "Elle a réalisé le premier film narratif de l'histoire en 1896, fondé son propre studio aux États-Unis en 1912, dirigé près de mille films — et l'Histoire a failli l'effacer. Portrait d'Alice Guy-Blaché, pionnière absolue du cinéma mondial.",
                "spans": [],
            }
        ],
        "image": {
            "dimensions": {"width": 399, "height": 309},
            "alt": "Alice Guy",
            "copyright": None,
            "url": "https://images.prismic.io/artaufeminin/4f5133a9-e78f-4049-a3a0-76b6ff304ebd_Capture_decran_2020-07-01_a_10.22.25.png?auto=format,compress",
            "id": "YC_xvRAAACIAHxDp",
            "edit": {"x": 0, "y": 0, "zoom": 1, "background": "transparent"},
        },
        "date": "2021-02-25",
        "content": alice_content,
    },
}

# ─────────────────────────────────────────────────────────────────────────────
# SOFONISBA ANGUISSOLA — création d'un nouveau document
# ─────────────────────────────────────────────────────────────────────────────

# Lien podcast : index 30→97 dans la phrase d'intro podcast
PODCAST_URL = "https://artaufeminin.fr/podcasts/sofonisba-anguissola-star-de-son-epoque-s04e06/"

sofonisba_content = [
    {
        "type": "paragraph",
        "text": "En 1557, le père de Sofonisba Anguissola écrit une lettre à Michel-Ange. Il le remercie — lui, le plus grand artiste du siècle — de l'attention qu'il a portée à sa fille, de ses conseils, de l'intérêt qu'il lui a témoigné. Michel-Ange, qui avait alors quatre-vingt-deux ans, avait examiné les dessins de Sofonisba et lui avait envoyé un sujet à travailler pour juger de sa progression.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Sofonisba Anguissola (vers 1535–1625) n'était pas une exception tolérée. Elle était une artiste reconnue par les plus grands de son temps.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Pour aller plus loin, écoutez l'épisode du podcast ART AU FÉMININ consacré à Sofonisba Anguissola.",
        "spans": [
            {
                "start": 30,
                "end": 97,
                "type": "hyperlink",
                "data": {
                    "link_type": "Web",
                    "url": PODCAST_URL,
                    "target": "_blank",
                },
            }
        ],
    },
    {
        "type": "heading2",
        "text": "Une éducation exceptionnelle",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Sofonisba naît vers 1535 à Crémone, en Lombardie, dans une famille noble. Son père, Amilcare Anguissola, fait le choix — rare pour l'époque — de donner à toutes ses filles une éducation humaniste complète, incluant la musique, les langues et les arts. Sofonisba et plusieurs de ses sœurs — Elena, Lucia, Minerva, Europa — apprendront toutes à peindre.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Vers 1546, elle entre en apprentissage chez Bernardino Campi, peintre maniériste de Crémone, puis travaille avec Bernardino Gatti. Sa formation est rigoureuse, académique — identique à celle des artistes hommes de son milieu. Ce qui était exceptionnel.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Sa réputation grandit rapidement. Giorgio Vasari, qui visite Crémone en 1568 pour la seconde édition de ses Vies des artistes, décrit ses œuvres avec admiration : elle a, écrit-il, « travaillé les difficultés du dessin avec plus d'application et de grâce qu'aucune autre femme de notre temps ».",
        "spans": [{"start": 108, "end": 125, "type": "em"}],
    },
    {
        "type": "heading2",
        "text": "À la cour de Philippe II d'Espagne",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1559, le duc d'Albe, représentant du roi d'Espagne Philippe II, fait venir Sofonisba à Madrid. Elle entre à la cour comme dame de compagnie de la jeune reine Élisabeth de Valois — mais aussi comme portraitiste officielle de la famille royale.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Elle restera en Espagne quatorze ans. Durant cette période, elle peint le roi, la reine, les infantes, les courtisans. Ses portraits se distinguent par une sobriété élégante, une lumière diffuse, une attention particulière à l'expression des visages — loin de la raideur formelle qui caractérisait souvent le portrait de cour. Le Prado conserve aujourd'hui plusieurs de ces œuvres.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1573, la reine Élisabeth étant décédée, Sofonisba quitte l'Espagne. Philippe II lui accorde une rente viagère en reconnaissance de ses services — une marque de distinction rare, accordée à peu d'artistes.",
        "spans": [],
    },
    {
        "type": "heading2",
        "text": "Les autoportraits : se montrer pour exister",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "On connaît aujourd'hui au moins douze autoportraits de Sofonisba Anguissola — davantage que ceux de Dürer ou de Rembrandt à la même époque. Ce n'est pas un hasard.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Dans un monde où les femmes artistes ne pouvaient pas travailler avec des modèles masculins nus, ne pouvaient pas voyager librement pour étudier les œuvres antiques, n'avaient pas accès aux grandes commandes publiques ou religieuses — le corps disponible était le leur. Sofonisba s'est peinte en train de lire, de jouer du clavecin, de peindre. Elle s'est peinte comme une femme de lettres, une musicienne, une artiste.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Ses autoportraits ne sont pas de la vanité. Ils sont une revendication : je suis là, je crée, j'existe.",
        "spans": [{"start": 73, "end": 103, "type": "em"}],
    },
    {
        "type": "heading2",
        "text": "La partie d'échecs : un tableau hors norme",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Parmi ses œuvres les plus célèbres figure La partie d'échecs (1555), un portrait de groupe représentant trois de ses sœurs — Lucia, Minerva et Europa — jouant aux échecs, sous le regard d'une servante âgée. Le tableau est remarquable : il met en scène des femmes actives, pensantes, en pleine compétition intellectuelle. La composition est vivante, les regards interagissent. C'est l'une des premières représentations de la vie quotidienne féminine traitée avec la dignité du grand portrait.",
        "spans": [{"start": 43, "end": 61, "type": "em"}],
    },
    {
        "type": "heading2",
        "text": "La vieillesse et Van Dyck",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1573, Sofonisba épouse Fabrizio de Moncada, un noble sicilien. Veuve quelques années plus tard, elle se remarie avec Orazio Lomellino, un capitaine génois. Elle choisit elle-même cet époux — ce qui était là encore exceptionnel pour l'époque.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1624, le jeune peintre flamand Antoine van Dyck fait le voyage jusqu'à Palerme pour la rencontrer. Elle a près de quatre-vingt-dix ans et elle est presque aveugle. Dans son carnet de voyage, Van Dyck note qu'elle lui a donné des conseils sur la lumière, sur les portraits, sur la manière de saisir l'expression d'un visage. Elle lui conseille de placer la lumière en hauteur pour éviter les ombres disgracieuses sur le visage des personnes âgées.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "À quatre-vingt-dix ans, aveugle, elle enseignait encore.",
        "spans": [{"start": 0, "end": 56, "type": "em"}],
    },
    {
        "type": "paragraph",
        "text": "Sofonisba Anguissola meurt à Palerme en 1625, à un âge estimé entre quatre-vingt-dix et quatre-vingt-treize ans.",
        "spans": [],
    },
    {
        "type": "heading2",
        "text": "L'oubli et la redécouverte",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Pendant des siècles après sa mort, ses œuvres ont circulé sous des noms d'hommes. Attribuées à son maître Campi, à des anonymes, à des contemporains mieux documentés. Ce n'est qu'au XXe siècle que les historiens de l'art ont entrepris de lui rendre ses tableaux — et son nom.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Sofonisba Anguissola est aujourd'hui conservée au Prado de Madrid, aux Offices de Florence, au Kunsthistorisches Museum de Vienne, au musée des Beaux-Arts de Boston. Elle est, enfin, là où elle aurait toujours dû être.",
        "spans": [],
    },
]

sofonisba_payload = {
    "title": "Sofonisba Anguissola : la peintre que Michel-Ange admirait",
    "type": "blog_post",
    "uid": "sofonisba-anguissola-peintre-renaissance",
    "lang": "fr-fr",
    "data": {
        "title": [
            {
                "type": "heading1",
                "text": "Sofonisba Anguissola : la peintre que Michel-Ange admirait",
                "spans": [],
            }
        ],
        "description": [
            {
                "type": "paragraph",
                "text": "Formée avec la bénédiction de Michel-Ange, portraitiste à la cour de Philippe II d'Espagne, admirée par Vasari — Sofonisba Anguissola (v. 1535–1625) fut la première femme artiste à connaître une renommée internationale. Et pourtant, ses œuvres ont longtemps été attribuées à des hommes.",
                "spans": [],
            }
        ],
        "date": "2026-08-06",
        "content": sofonisba_content,
    },
}

# ─────────────────────────────────────────────────────────────────────────────
# EXÉCUTION
# ─────────────────────────────────────────────────────────────────────────────

print(f"→ Sofonisba uniquement (Alice Guy déjà mise à jour)...")

print("→ Création article Sofonisba Anguissola...")
result = api_call("POST", BASE_URL, sofonisba_payload)
print(f"  ID créé : {result.get('id', '?')}")

print("\n✓ Terminé. Publie les brouillons dans le dashboard Prismic.")
