#!/usr/bin/env python3
"""
Mise à jour de l'article Linda Nochlin
Document ID: YVXR7xMAACAAindA
UID: pourquoi-ny-a-t-il-pas-eu-de-grands-artistes-femmes-lindanochlin

Réécriture de fond : analyse de l'essai, contexte historique, impact.
Toutes les images et citations originales conservées.
Usage: PRISMIC_TOKEN=<token> python3 scripts/update-linda-nochlin.py
"""

import json
import os
import sys
import urllib.error
import urllib.request

TOKEN = os.environ.get("PRISMIC_TOKEN", "")
if not TOKEN:
    print("Usage: PRISMIC_TOKEN=<token> python3 scripts/update-linda-nochlin.py")
    sys.exit(1)

DOC_ID = "YVXR7xMAACAAindA"
BASE_URL = "https://migration.prismic.io/documents"
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "repository": "artaufeminin",
    "Content-Type": "application/json",
}

# ── Images originales conservées ──────────────────────────────────────────────

IMG_NOCHLIN = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/9113f33c-dad8-48a1-9dd9-d968cf168d0b_linda_nochlin_237_A-scaled-e1590026608474.jpg?auto=format,compress",
    "alt": "Linda Nochlin à Paris, 1978 — Betty Boyd Dettre Library and Research Center, National Museum of Women in the Arts. Courtesy of Marion Kalter",
    "copyright": "Marion Kalter",
    "dimensions": {"width": 1658, "height": 2182},
    "id": "YVXOuRMAACAAimkM",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_ARTNEWS = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/737bd4e6-43dd-4233-80ce-412bd2c7ede4_Rare-VF-N72_F45-W533-1971-001-1.jpg?auto=format,compress",
    "alt": "Women's Liberation, Woman Artists and Art History — numéro spécial d'ARTnews, vol. 69, n° 9, janvier 1971",
    "copyright": None,
    "dimensions": {"width": 680, "height": 936},
    "id": "YVXQbBMAACEAinCr",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

# ── Helpers ───────────────────────────────────────────────────────────────────

def blockquote(text):
    return {
        "type": "paragraph",
        "text": text,
        "spans": [
            {"start": 0, "end": len(text), "type": "label", "data": {"label": "blockquote"}},
            {"start": 0, "end": len(text), "type": "strong"},
        ],
    }

def p(text, spans=None):
    return {"type": "paragraph", "text": text, "spans": spans or []}

def h2(text):
    return {"type": "heading2", "text": text, "spans": []}

def h3(text):
    return {"type": "heading3", "text": text, "spans": []}

def li(text, spans=None):
    return {"type": "list-item", "text": text, "spans": spans or []}

def em(start, end):
    return {"start": start, "end": end, "type": "em"}

def bold(start, end):
    return {"start": start, "end": end, "type": "strong"}

# ── Contenu ───────────────────────────────────────────────────────────────────

JUDY_CHICAGO = (
    "« Il est rare que l'on puisse dire d'une publication d'histoire de l'art qu'elle a changé le monde, "
    "pourtant c'est précisément ce que Linda Nochlin a fait en 1971 avec son texte "
    "« Pourquoi n'y a-t-il pas eu de grands artistes femmes ? ». À l'époque, par mon travail de "
    "recherche en autodidacte, j'avais déjà eu l'occasion de me rendre compte que les certitudes sur "
    "la rareté des grandes artistes étaient erronées. Mais pour la profession, ce texte fut une "
    "véritable révélation : de celles qui engendrent des générations d'historiens de l'art féministes, "
    "lesquelles ont commencé à fouiller dans le passé, et en faisant cela, à révolutionner le canon "
    "encore en vigueur. »"
)

NOCHLIN_QUOTE_1 = (
    "« Si la montée récente du féminisme dans notre pays a bien été une libération, sa force a surtout "
    "été de nature émotionnelle — personnelle — psychologique et subjective à l'instar des autres "
    "mouvements radicaux auxquels le féminisme est lié. Elle a porté sur le présent et ses besoins "
    "immédiats plutôt que sur l'analyse historique des questions intellectuelles élémentaires qui sont "
    "immanquablement soulevées par les féministes dans leur remise en cause du statu quo. Pourtant, "
    "comme toute révolution, celle du féminisme devra se confronter aux fondements intellectuels et "
    "idéologiques des différentes disciplines — histoire, philosophie, sociologie, psychologie… de la "
    "même manière qu'elle interroge les idéologies des institutions sociales de son époque. »"
)

NOCHLIN_QUOTE_2 = (
    "« Sous la surface s'étend une grosse masse sombre d'idées reçues bancales sur l'art et ses "
    "implications, sur les capacités humaines en général et la perfection humaine en particulier, "
    "et sur le rôle que l'ordre social vient jouer dans tout cela. »"
)

CONCLUSION_BOLD = (
    "L'absence de grandes artistes femmes dans le canon de l'histoire de l'art n'est pas la preuve "
    "d'une incapacité naturelle. C'est la conséquence d'une exclusion organisée."
)

content = [
    # ── Citation d'ouverture : Judy Chicago ──
    blockquote(JUDY_CHICAGO),
    blockquote("— Judy Chicago"),

    # ── Section 1 : Biographie ──
    h2("Qui est Linda Nochlin ?"),
    IMG_NOCHLIN,
    p(
        "Linda Nochlin naît en 1931 à Brooklyn. Son parcours académique est d'une rigueur et d'une "
        "pluridisciplinarité rares pour l'époque : baccalauréat en philosophie à Vassar College en 1951, "
        "avec une formation parallèle en grec ancien et en histoire de l'art, puis maîtrise en littérature "
        "anglaise médiévale à l'université de Columbia. En 1963, elle obtient son doctorat en histoire "
        "de l'art à l'université de New York — institution où elle enseignera une grande partie de sa carrière."
    ),
    p(
        "Elle enseigne ensuite à Vassar, au New York University Institute of Fine Arts, et à Yale, "
        "formant plusieurs générations d'historiens et historiennes de l'art. En 1988, elle co-organise "
        "l'exposition Courbet Reconsidered au Brooklyn Museum — occasion pour elle de travailler sur "
        "L'Origine du monde, tableau qui deviendra central dans sa réflexion sur le regard masculin dans l'art.",
        [em(97, 117), em(133, 150)]
    ),
    p(
        "Mais c'est en 1971 que Linda Nochlin entre dans l'histoire — avec un essai de vingt pages qui "
        "va transformer durablement la façon dont le monde académique pense l'art et le genre."
    ),

    # ── Section 2 : 1971 ──
    h2("1971 : une question qui dérange"),
    IMG_ARTNEWS,
    p(
        "Nous sommes en janvier 1971. Le mouvement de libération des femmes est en plein essor aux "
        "États-Unis. La revue ARTnews publie un numéro spécial intitulé Women's Liberation, Women Artists "
        "and Art History. C'est dans ce contexte que paraît l'essai de Linda Nochlin sous le titre "
        "original : Why Have There Been No Great Women Artists?",
        [em(84, 91), em(102, 149), em(228, 274)]
    ),
    p(
        "L'essai est traduit en français en 1993. Il est réédité en 2021 — cinquante ans après sa parution "
        "— aux éditions Thames & Hudson, preuve de sa permanente actualité."
    ),
    p("Dès ses premières lignes, Nochlin pose le problème dans toute sa brutalité intellectuelle :"),
    blockquote(NOCHLIN_QUOTE_1),

    # ── Section 3 : L'argument central ──
    h2("L'argument central : la question est piégée"),
    p(
        "Le coup de génie de Nochlin n'est pas de répondre à la question telle qu'elle est posée. "
        "C'est de montrer que la question elle-même est un piège."
    ),
    p(
        "Demander « pourquoi n'y a-t-il pas eu de grands artistes femmes ? » revient à accepter "
        "implicitement une prémisse fausse : que le génie artistique est une qualité naturelle, "
        "individuelle, qui se manifeste spontanément chez les individus qui en sont dotés. "
        "Si les femmes n'ont pas produit de grands artistes, la question suggère qu'elles en seraient "
        "intrinsèquement incapables."
    ),
    p(
        "Nochlin refuse cette logique. Elle renverse la question : ce n'est pas une question de talent "
        "ou de nature, c'est une question d'institutions."
    ),
    blockquote(NOCHLIN_QUOTE_2),
    p(
        "Ce que Nochlin démontre, c'est que les structures sociales et institutionnelles ont "
        "systématiquement empêché les femmes d'accéder aux conditions nécessaires à la production "
        "d'une grande œuvre :"
    ),
    li(
        "L'interdiction du nu : dans les académies d'art européennes, l'étude du modèle vivant nu — "
        "fondement de la formation académique — était refusée aux femmes au nom de la bienséance. "
        "Or la maîtrise du corps humain était indispensable pour accéder aux genres les plus prestigieux "
        "(peinture d'histoire, mythologie, scènes religieuses). Les femmes étaient donc structurellement "
        "cantonnées aux genres mineurs : portraits, natures mortes, fleurs.",
        [bold(0, 24)]
    ),
    li(
        "L'accès aux ateliers : le système d'apprentissage artistique passait par les grands ateliers "
        "de maîtres, quasi-exclusivement masculins. Une femme ne pouvait y accéder qu'en étant la fille "
        "ou l'épouse d'un artiste.",
        [bold(0, 22)]
    ),
    li(
        "L'exclusion des académies : comme l'Académie royale de peinture et de sculpture à Paris, "
        "les grandes institutions artistiques limitaient ou interdisaient l'accès des femmes. "
        "Sans appartenance académique, pas de Salon, pas de commandes officielles, pas de carrière reconnue.",
        [bold(0, 27)]
    ),
    li(
        "Les contraintes économiques et domestiques : même lorsque des femmes parvenaient à créer, "
        "le mariage et la maternité interrompaient ou réduisaient drastiquement leurs carrières.",
        [bold(0, 43)]
    ),
    p(
        "Nochlin cite des exemples précis : Rosa Bonheur, qui dut obtenir une autorisation officielle "
        "pour se travestir en homme et travailler dans les abattoirs — seul moyen pour elle d'étudier "
        "l'anatomie animale nécessaire à sa peinture. Ou encore Sofonisba Anguissola, dont les œuvres "
        "ont longtemps été attribuées à des hommes, faute d'être considérée comme capable de les avoir produites."
    ),
    p(CONCLUSION_BOLD, [bold(0, len(CONCLUSION_BOLD))]),

    # ── Section 4 : Impact ──
    h2("L'impact : une révolution dans l'histoire de l'art"),
    p(
        "L'essai de Nochlin ouvre un chantier immense. Une génération entière d'historiennes féministes "
        "va s'y engouffrer — en commençant par fouiller systématiquement les archives, les collections "
        "de musées, les ventes aux enchères, pour retrouver les femmes artistes que le canon avait "
        "effacées ou ignorées."
    ),
    p(
        "En 1976, Linda Nochlin co-organise avec Ann Sutherland Harris l'exposition Women Artists 1550-1950 "
        "au Los Angeles County Museum of Art — première grande rétrospective consacrée aux femmes artistes "
        "dans l'histoire de l'art occidental. L'exposition révèle au grand public des noms jusqu'alors "
        "méconnus : Artemisia Gentileschi, Judith Leyster, Élisabeth Vigée Le Brun, Berthe Morisot.",
        [em(62, 85)]
    ),
    p(
        "Dans les années 1980 et 1990, des chercheuses comme Griselda Pollock (Vision and Difference, 1988) "
        "et Rozsika Parker approfondissent et radicalisent l'approche de Nochlin, intégrant les outils "
        "de la théorie critique, du féminisme poststructuraliste et des études culturelles.",
        [em(76, 98)]
    ),
    p(
        "Cinquante ans après sa parution, l'essai n'a rien perdu de sa force. Moins de 30 % des œuvres "
        "exposées dans les grands musées occidentaux sont signées par des femmes. Le canon de l'histoire "
        "de l'art reste massivement masculin. La question de Nochlin — c'est-à-dire la vraie question, "
        "celle des institutions — reste entière."
    ),

    # ── Section 5 : Le livre ──
    h2("Le livre : ce qu'il contient"),
    p("L'édition française de l'essai, publiée par Thames & Hudson, se compose de :"),
    li("Une introduction de Catherine Grant"),
    li(
        "Pourquoi n'y a-t-il pas eu de grands artistes femmes ? (ARTnews, janvier 1971)",
        [em(0, 54)]
    ),
    li(
        "Pourquoi n'y a-t-il pas eu de grands artistes femmes ? Trente ans plus tard "
        "(Women Artists at the Millennium, 2006)",
        [em(0, 54)]
    ),
    p(
        "La seconde partie est particulièrement intéressante : Nochlin y revient sur son propre texte "
        "trente-cinq ans après, mesure ce qui a changé — et ce qui n'a pas changé —, et affine son "
        "analyse à la lumière de décennies de travaux féministes en histoire de l'art."
    ),
    p("Linda Nochlin décède en 2017, à 86 ans. Elle laisse une œuvre qui a refondé une discipline entière."),

    # ── Sources ──
    h2("Sources"),
    li(
        "Linda Nochlin, Why Have There Been No Great Women Artists?, ARTnews, janvier 1971",
        [em(16, 57)]
    ),
    li(
        "Linda Nochlin, Pourquoi n'y a-t-il pas eu de grands artistes femmes ?, Thames & Hudson, rééd. 2021",
        [em(16, 62)]
    ),
    li(
        "Ann Sutherland Harris & Linda Nochlin, Women Artists 1550-1950, Los Angeles County Museum of Art, 1976",
        [em(38, 58)]
    ),
    li(
        "Griselda Pollock & Rozsika Parker, Old Mistresses: Women, Art and Ideology, 1981",
        [em(34, 74)]
    ),
    li(
        "Griselda Pollock, Vision and Difference, Routledge, 1988",
        [em(18, 39)]
    ),
]

# ── Payload ───────────────────────────────────────────────────────────────────

payload = {
    "uid": "pourquoi-ny-a-t-il-pas-eu-de-grands-artistes-femmes-lindanochlin",
    "type": "blog_post",
    "lang": "fr-fr",
    "data": {
        "title": [
            {
                "type": "heading1",
                "text": "Pourquoi n'y a-t-il pas eu de grands artistes femmes ? — Linda Nochlin",
                "spans": [],
            }
        ],
        "description": [
            {
                "type": "paragraph",
                "text": "L'essai fondateur de Linda Nochlin (1971) qui a révolutionné l'histoire de l'art féministe. Une question qui dérange, une réponse qui change tout.",
                "spans": [],
            }
        ],
        "date": "2021-09-30",
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
            print(f"  ✓ {method} {resp.status}")
            return result
    except urllib.error.HTTPError as e:
        print(f"  ✗ {method} {e.code}")
        print(e.read().decode("utf-8"))
        sys.exit(1)


print("→ Mise à jour article : pourquoi-ny-a-t-il-pas-eu-de-grands-artistes-femmes-lindanochlin")
api_call("PUT", f"{BASE_URL}/{DOC_ID}", payload)
print("\n✓ Terminé. Publie le brouillon dans le dashboard Prismic.")
