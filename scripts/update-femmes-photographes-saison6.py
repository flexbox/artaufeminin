#!/usr/bin/env python3
"""
Mise à jour — Elles ont tenu l'appareil (article pilier saison 6)
Document ID: akj67hIAACcAGZ0Z
UID: articlesfemmes-photographes-histoire-oubliees → femmes-photographes-histoire-oubliees

Changements :
- Titre : 83 → 60 car. / Description : 188 → ~150 car.
- Lien vers l'épisode correspondant à la fin de chaque portrait
- Nouvelle section Florestine Perrault Collins (S06E06)
- Conclusion réécrite au passé (la saison est terminée) + 5 trajectoires
- Nouvelle section « Écouter la saison 6 » avec les 6 épisodes
- Coquilles corrigées (« autres disciplines », « des précédents »)
- Image héro et texte d'origine conservés
- UID corrigé (préfixe « articles » en double) + redirect 301 dans netlify.toml

Usage: PRISMIC_TOKEN=<token> python3 scripts/update-femmes-photographes-saison6.py
"""

import json
import os
import sys
import urllib.error
import urllib.request

TOKEN = os.environ.get("PRISMIC_TOKEN", "")
if not TOKEN:
    print("Usage: PRISMIC_TOKEN=<token> python3 scripts/update-femmes-photographes-saison6.py")
    sys.exit(1)

DOC_ID = "akj67hIAACcAGZ0Z"
BASE_URL = "https://migration.prismic.io/documents"
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "repository": "artaufeminin",
    "Content-Type": "application/json",
}

SITE = "https://artaufeminin.fr/podcasts"
EP_INTRO = f"{SITE}/celles-qui-tenaient-lappareil-introduction-saison-6/"
EP_MAIER = f"{SITE}/vivian-maier-la-nourrice-aux-100-000-negatifs/"
EP_LANGE = f"{SITE}/dorothea-lange-lil-de-la-grande-depression-americaine/"
EP_MILLER = f"{SITE}/lee-miller-la-photographe-qui-sest-lavee-dans-la-baignoire-dhitler/"
EP_CAHUN = f"{SITE}/claude-cahun-photographe-resistante-insaisissable/"
EP_COLLINS = f"{SITE}/florestine-perrault-collins-se-faire-passer-pour-blanche-pour-photographier-les-/"

TITLE = "Elles ont tenu l'appareil : les femmes photographes oubliées"
DESCRIPTION = (
    "Vivian Maier, Dorothea Lange, Lee Miller, Claude Cahun, Florestine Perrault Collins : "
    "cinq photographes que l'Histoire a refusé de voir."
)


# ── Helpers ────────────────────────────────────────────────────────────────────

def _span(text, sub, kind, data=None):
    start = text.index(sub)
    s = {"start": start, "end": start + len(sub), "type": kind}
    if data:
        s["data"] = data
    return s


def p(text, strong=(), em=(), links=()):
    spans = []
    for sub in strong:
        spans.append(_span(text, sub, "strong"))
    for sub in em:
        spans.append(_span(text, sub, "em"))
    for sub, url in links:
        spans.append(_span(text, sub, "hyperlink", {"link_type": "Web", "url": url}))
    return {"type": "paragraph", "text": text, "spans": spans, "direction": "ltr"}


def h2(text):
    return {"type": "heading2", "text": text, "spans": [], "direction": "ltr"}


def listen(label, url):
    text = f"→ Écouter l'épisode : {label}"
    return p(text, strong=[label], links=[(label, url)])


# ── Image héro (inchangée) ─────────────────────────────────────────────────────

IMG_HERO = {
    "dimensions": {"width": 1280, "height": 1664},
    "alt": "Dorothea Lange, Migrant Mother, 1936. Library of Congress, Prints & Photographs Division, Farm Security Administration/Office of War Information Black-and-White Negatives.",
    "copyright": None,
    "url": "https://images.prismic.io/artaufeminin/6loYgLo-8q9bSjxR_Lange-MigrantMother02.jpg?auto=format,compress",
    "id": "6loYgLo-8q9bSjxR",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "transparent"},
}

# ── Contenu ────────────────────────────────────────────────────────────────────

P_MIGRANT = (
    "Vous connaissez Migrant Mother ? Cette photo en noir et blanc d'une femme au regard perdu, "
    "tenant deux enfants contre ses épaules, prise en Californie en mars 1936. C'est l'une des images "
    "les plus reproduites de l'histoire de la photographie, publiée dans le San Francisco News "
    "accompagnée d'un article intitulé What Does the 'New Deal' Mean To This Mother and Her Children? ³"
)
NEW_DEAL = "What Does the 'New Deal' Mean To This Mother and Her Children?"

P_LANGE = (
    "Vous connaissez peut-être moins le nom de Dorothea Lange. C'est elle qui a pris cette photo. "
    "Née Dorothea Margaretta Nutzhorn le 26 mai 1895 à Hoboken, dans le New Jersey, elle travaillait "
    "pour la Farm Security Administration, une agence gouvernementale américaine qui documentait les "
    "ravages de la crise économique. ³ Cette même année, John Steinbeck, chargé par le San Francisco "
    "News d'écrire une série sur les migrations de la Grande Dépression, reçoit les rapports de "
    "l'administration Roosevelt, accompagnés des photographies de Lange. Les critiques littéraires ont "
    "depuis établi que les descriptions visuelles des personnages dans Les Raisins de la colère portent "
    "l'empreinte directe de son œil : la même attention aux textures, aux visages, aux corps que le "
    "temps a marqués. ⁴"
)

P_MILLER_WAR = (
    "Le 30 avril 1945, elle venait d'avoir 38 ans une semaine plus tôt, elle entre dans le camp de "
    "concentration de Dachau parmi les premiers correspondants de guerre. ⁷ Elle photographiera aussi "
    "Buchenwald. En juin 1945, Vogue publie ses images sous le titre Believe It. ⁶ Ce même 30 avril, "
    "depuis Munich, elle se photographie dans la baignoire d'Hitler, ses bottes encore couvertes de la "
    "boue de Dachau posées délibérément sur le tapis de bain. ⁵"
)

P_CAHUN = (
    "Claude Cahun, née Lucy Schwob à Nantes le 25 octobre 1894, passe sa vie à se photographier pour "
    "défaire ce qu'on attend d'elle. Pas pour se montrer : pour se démultiplier. Elle explore l'identité "
    "comme une fiction, vingt ans avant que le mot « performativité » existe dans ce sens."
)

content = [
    # ── INTRO ──────────────────────────────────────────────────────────────────
    p("La photographie était censée tout changer. Contrairement à la peinture ou à la sculpture, elle ne demandait pas d'atelier, pas de formation académique réservée aux hommes, pas de commande aristocratique. Un appareil, une pellicule, un œil. Les femmes allaient enfin pouvoir créer à égalité."),
    p("Et pourtant. L'histoire de la photographie a reproduit exactement le même schéma que les autres disciplines : les femmes ont photographié. Les femmes ont innové. Et on a retenu les noms des hommes."),
    p(
        "C'est le fil de la saison 6 du podcast ART AU FÉMININ, Celles qui tenaient l'appareil : "
        "six épisodes, cinq photographes, de Chicago à Jersey en passant par La Nouvelle-Orléans. "
        "Cet article en est la porte d'entrée. Chaque portrait renvoie à l'épisode qui lui est consacré.",
        em=["Celles qui tenaient l'appareil"],
        links=[("saison 6 du podcast ART AU FÉMININ", EP_INTRO)],
    ),

    # ── VIVIAN MAIER ───────────────────────────────────────────────────────────
    h2("Vivian Maier, ou comment disparaître avec 100 000 négatifs"),
    p("En 2007, un agent immobilier de Chicago nommé John Maloof achète des cartons dans une salle des ventes pour 380 dollars. Il cherche des photos du quartier pour un livre sur Portage Park. Ce qu'il trouve à la place : des milliers de négatifs, des rouleaux non développés, des planches-contacts. L'auteure s'appelle Vivian Maier. Maloof n'a jamais entendu ce nom. ¹"),
    p("Personne n'en avait entendu parler. Parce que Vivian Maier était nourrice. Pendant des décennies, elle a photographié Chicago, New York, les visages dans la rue, les enfants qu'elle gardait, les reflets dans les vitrines. Son œuvre inventoriée par Maloof compte plus de 100 000 négatifs, auxquels s'ajoutent environ 2 000 rouleaux et 3 000 tirages. ² Elle n'en a presque jamais montré une seule image. Elle est morte le 21 avril 2009, seule, quelques semaines avant que Maloof commence à comprendre ce qu'il avait acheté."),
    p("Ses photos sont aujourd'hui exposées dans les musées du monde entier. Son œuvre est comparée à Diane Arbus, à Henri Cartier-Bresson. Elle n'a jamais su qu'elle serait célèbre, et elle n'a jamais eu accès aux structures qui lui auraient permis de l'être de son vivant."),
    listen("Vivian Maier, la nourrice aux 100 000 négatifs", EP_MAIER),

    # ── DOROTHEA LANGE ─────────────────────────────────────────────────────────
    h2("Le nom qu'on n'attache pas à l'image"),
    p(P_MIGRANT, strong=[NEW_DEAL], em=[NEW_DEAL]),
    p(P_LANGE, strong=["Dorothea Margaretta Nutzhorn"]),
    p("Son nom, lui, reste dans l'ombre de ses propres images."),
    listen("Dorothea Lange, l'œil de la Grande Dépression américaine", EP_LANGE),

    # ── LEE MILLER ─────────────────────────────────────────────────────────────
    h2("Lee Miller : sortir du cadre"),
    p("Lee Miller est née le 23 avril 1907 à Poughkeepsie, New York. ⁵ On la connaît d'abord comme modèle : Vogue, Man Ray, les couvertures de l'entre-deux-guerres. C'est l'image qu'on garde d'elle le plus souvent : la muse, l'objet photographié.", strong=["Lee Miller"]),
    p("Ce qu'on oublie : pendant la Seconde Guerre mondiale, elle était photographe de guerre accréditée pour Vogue, l'une des quatre seules femmes reporters accréditées auprès des forces américaines. ⁶ Elle photographie la libération de Paris, avance avec les troupes alliées vers l'Allemagne."),
    p(P_MILLER_WAR, strong=["Dachau", "Buchenwald", "Believe It"], em=["Believe It"]),
    p("Avec Man Ray, dont elle fut la compagne et collaboratrice, ils redécouvrent ensemble la solarisation, cette technique qui inverse partiellement les tons d'une image. La découverte est accidentelle, née de leur travail commun en chambre noire. ⁸ Pendant des décennies, la technique sera pourtant présentée comme l'œuvre de Man Ray seul."),
    p("Elle arrête de photographier après la guerre. Les images de Dachau et Buchenwald la hantent. Ses archives : des milliers de négatifs, de tirages, de carnets, ... dorment dans le grenier de sa maison de campagne en Angleterre jusqu'à sa mort le 21 juillet 1977. Son fils Antony Penrose les découvre en les triant. ⁹"),
    p("Le grenier. Encore."),
    listen("Lee Miller, la photographe qui s'est lavée dans la baignoire d'Hitler", EP_MILLER),

    # ── CLAUDE CAHUN ───────────────────────────────────────────────────────────
    h2("Claude Cahun : se photographier contre"),
    p("Il y a des autoportraits, dès 1912, sur lesquels une femme regarde l'objectif avec une intensité tranquille. Elle porte des tenues qui ne sont ni masculines ni féminines, joue avec l'identité comme avec une matière. Ces images ne ressemblent à rien de ce que la photographie de l'époque produisait. ¹⁰"),
    p(P_CAHUN, strong=["Claude Cahun", "performativité"]),
    p("Avec sa compagne et demi-sœur Suzanne Malherbe (qu'elle appelle Marcel Moore) elles s'installent à Jersey dans les années 1930. ¹⁰ Pendant l'occupation allemande, elles fabriquent des tracts anti-nazis qu'elles glissent dans les poches des soldats, dans les paquets de cigarettes. Arrêtées et condamnées à mort, elles échappent à l'exécution grâce à la commutation de leur peine, obtenue par l'intervention du bailli de Jersey, Alexander Coutanche. Elles seront libérées de prison à la Libération de l'île par les Alliés, en mai 1945. ¹¹"),
    p("Claude Cahun est morte le 8 décembre 1954. Elle a été redécouverte dans les années 1980, portée par les études queer et les féministes qui cherchaient des précédents. Mais dans le grand récit de la photographie du XXe siècle, celui qu'on apprend encore dans les écoles des Beaux-Arts, son nom reste marginal."),
    listen("Claude Cahun, photographe, résistante, insaisissable", EP_CAHUN),

    # ── FLORESTINE PERRAULT COLLINS (nouveau) ──────────────────────────────────
    h2("Florestine Perrault Collins : mentir pour apprendre, puis photographier les siens"),
    p(
        "Florestine Perrault Collins naît en 1895 à La Nouvelle-Orléans, dans une famille créole. "
        "La précarité écourte son enfance. Pour apprendre la photographie, elle n'a qu'une solution : "
        "se faire passer pour blanche. Des décennies plus tard, elle le dira simplement : s'ils avaient "
        "su qu'elle était noire, ils ne l'auraient jamais laissée toucher un appareil. ¹²",
        strong=["Florestine Perrault Collins"],
    ),
    p(
        "Elle apprend pourtant. D'après le recensement de 1920, elle est alors la seule femme photographe "
        "noire de toute la ville. Au milieu des années 1930, elle ouvre son propre studio sur South Rampart "
        "Street. Cette fois, plus besoin de mentir : elle photographie sa communauté au grand jour, "
        "communions, mariages, portraits de famille, avec toute la dignité que la société ségrégationniste "
        "lui refusait ailleurs. ¹²",
        strong=["seule femme photographe noire de toute la ville"],
    ),
    p(
        "Son histoire diffère de celle des quatre autres sur un point essentiel. Son œuvre n'a jamais dormi "
        "dans un grenier oublié ni dans un garde-meuble vendu aux enchères : c'est sa propre famille qui l'a "
        "conservée. Sa petite-nièce, l'historienne Arthé A. Anthony, lui a consacré un livre, Picturing Black "
        "New Orleans, et ses tirages sont entrés au Metropolitan Museum of Art et à la National Gallery of Art. ¹²",
        em=["Picturing Black New Orleans"],
    ),
    listen("Florestine Perrault Collins, se faire passer pour blanche pour photographier les siens", EP_COLLINS),

    # ── CONCLUSION ─────────────────────────────────────────────────────────────
    h2("Ce que la photographie révèle sur l'art"),
    p("Ces cinq trajectoires ont un point commun qui n'est pas la photographie. C'est l'accès."),
    p("Vivian Maier n'avait pas de réseau. Dorothea Lange avait le talent et le mandat, mais pas les biographes. Lee Miller avait tout (la notoriété, les connexions, l'audace) et on a préféré garder l'image de la muse. Claude Cahun refusait les catégories que son époque lui proposait, et son époque ne l'a pas pardonné. Florestine Perrault Collins a dû renier son identité pour simplement avoir le droit d'apprendre."),
    p("La photographie n'a pas démocratisé l'accès à la reconnaissance. Elle a créé un nouveau territoire avec les mêmes vieilles règles."),
    p("Ce que ces femmes ont laissé, c'est une archive. Des milliers d'images qui disent : on était là, on regardait, on avait quelque chose à montrer. Ces archives ont failli disparaître, dans des greniers, des salles des ventes, des cartons oubliés. Celle de Florestine Perrault Collins rappelle la leçon inverse : quand quelqu'un garde l'archive, l'Histoire ne peut plus l'effacer tout à fait."),
    p("Pendant six semaines, la saison 6 du podcast les a rouvertes, une par une.", links=[("la saison 6 du podcast", EP_INTRO)]),

    # ── ÉPISODES ───────────────────────────────────────────────────────────────
    h2("Écouter la saison 6 : Celles qui tenaient l'appareil"),
    p("Introduction : Celles qui tenaient l'appareil", links=[("Introduction : Celles qui tenaient l'appareil", EP_INTRO)]),
    p("Vivian Maier, la nourrice aux 100 000 négatifs", links=[("Vivian Maier, la nourrice aux 100 000 négatifs", EP_MAIER)]),
    p("Dorothea Lange, l'œil de la Grande Dépression américaine", links=[("Dorothea Lange, l'œil de la Grande Dépression américaine", EP_LANGE)]),
    p("Lee Miller, la photographe qui s'est lavée dans la baignoire d'Hitler", links=[("Lee Miller, la photographe qui s'est lavée dans la baignoire d'Hitler", EP_MILLER)]),
    p("Claude Cahun, photographe, résistante, insaisissable", links=[("Claude Cahun, photographe, résistante, insaisissable", EP_CAHUN)]),
    p("Florestine Perrault Collins, se faire passer pour blanche pour photographier les siens", links=[("Florestine Perrault Collins, se faire passer pour blanche pour photographier les siens", EP_COLLINS)]),

    # ── SOURCES ────────────────────────────────────────────────────────────────
    h2("Sources"),
    p("  1. John Maloof and the discovery of Vivian Maier - The Chicago Ambassador"),
    p("  2. Vivian Maier biographie - Celles qui osent"),
    p("  3. Dorothea Lange biography - PBS American Masters"),
    p("  4. Wiping the Dust from Our Eyes - The Cine-Files"),
    p("  5. Lee Miller in Hitler's Bathtub - Time Magazine"),
    p("  6. Lee Miller: From Vogue to Buchenwald and Dachau - Blind Magazine"),
    p("  7. Lee Miller: Witness to the Concentration Camps - National WWII Museum"),
    p("  8. Lee Miller et la solarisation - Musée du Luxembourg"),
    p("  9. Lee Miller Archives - leemiller.co.uk"),
    p("  10. Claude Cahun - AWARE Women Artists"),
    p("  11. Claude Cahun and Jersey - Jersey Heritage"),
    p("  12. Arthé A. Anthony, Picturing Black New Orleans: A Creole Photographer's View of the Early Twentieth Century, University Press of Florida, 2012", em=["Picturing Black New Orleans: A Creole Photographer's View of the Early Twentieth Century"]),
]

# ── Payload ────────────────────────────────────────────────────────────────────

payload = {
    "uid": "femmes-photographes-histoire-oubliees",
    "type": "blog_post",
    "lang": "fr-fr",
    "data": {
        "title": [{"type": "heading1", "text": TITLE, "spans": [], "direction": "ltr"}],
        "description": [{"type": "paragraph", "text": DESCRIPTION, "spans": [], "direction": "ltr"}],
        "image": IMG_HERO,
        "date": "2026-09-01",
        "content": content,
    },
}


# ── Appel API ─────────────────────────────────────────────────────────────────

def api_call(method, url, data):
    body = json.dumps(data, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(url, data=body, headers=HEADERS, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            print(f"  OK {method} {resp.status}")
            return result
    except urllib.error.HTTPError as e:
        print(f"  ERREUR {method} {e.code}")
        print(e.read().decode("utf-8"))
        sys.exit(1)


print("-> Mise à jour Elles ont tenu l'appareil (saison 6)")
print(f"   Titre : {len(TITLE)} car. (était 83)")
print(f"   Description : {len(DESCRIPTION)} car. (était 188)")
print("   + section Florestine Perrault Collins")
print("   + 6 liens vers les épisodes de la saison 6")
api_call("PUT", f"{BASE_URL}/{DOC_ID}", payload)
print("\nTerminé. Publie le brouillon dans le dashboard Prismic.")
