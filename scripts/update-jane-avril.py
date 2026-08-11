#!/usr/bin/env python3
"""
Mise à jour de l'article Jane Avril
Document ID: Yfa5-BIAAC4Acd2G
UID: jane-avril-le-bal-des-folles

Réécriture de fond : style éditorial, citations originales conservées,
toutes les images à leurs positions, section Toulouse-Lautrec enrichie.
Usage: PRISMIC_TOKEN=<token> python3 scripts/update-jane-avril.py
"""

import json
import os
import sys
import urllib.error
import urllib.request

TOKEN = os.environ.get("PRISMIC_TOKEN", "")
if not TOKEN:
    print("Usage: PRISMIC_TOKEN=<token> python3 scripts/update-jane-avril.py")
    sys.exit(1)

DOC_ID = "Yfa5-BIAAC4Acd2G"
BASE_URL = "https://migration.prismic.io/documents"
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "repository": "artaufeminin",
    "Content-Type": "application/json",
}

# ── Images originales conservées ──────────────────────────────────────────────

IMG_DANSANT = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/f10eb92e-550a-4a8e-a716-024c07cbc047_image_0931735_20211210_ob_0c3f7e_jane-jambe-dessin.jpg?auto=format,compress",
    "alt": "Jane Avril dansant — 1893 — Étude de l'affiche Jardin de Paris — Gouache sur carton, 99x71 cm — Collection Stavros S. Niarchos (Toulouse-Lautrec)",
    "copyright": "Toulouse Lautrec",
    "dimensions": {"width": 745, "height": 986},
    "id": "YfawBxIAAC8AcbDn",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_BAL_SALPETRIERE = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/a98628d4-7c73-4441-897a-92857d3d65b4_bal_des_folles01_0.jpg?auto=format,compress",
    "alt": "Un bal à la Salpêtrière — Paris, vers 1890",
    "copyright": None,
    "dimensions": {"width": 1000, "height": 962},
    "id": "YfaxexIAACsAcbdo",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_JANE_1893 = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/ccbe946a-7c18-4e5d-ad37-585d1ab5a8fe_23804.jpg?auto=format,compress",
    "alt": "Jane Avril — 1893",
    "copyright": None,
    "dimensions": {"width": 1200, "height": 675},
    "id": "Yfa1cxIAACoAcclq",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_MOULIN_ROUGE = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/cbbb05f2-e78d-4a8d-bdfd-d23d14cf428b_228670%402x.jpg?auto=format,compress",
    "alt": "Jane Avril sortant du Moulin Rouge — 1892 — Huile et gouache sur carton, 84,3x63,4 cm — Wadsworth Atheneum Museum of Art, Hartford, Connecticut (Toulouse-Lautrec)",
    "copyright": "Toulouse Lautrec",
    "dimensions": {"width": 2125, "height": 2800},
    "id": "Yfay6RIAACsAcb35",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

# ── Helpers ───────────────────────────────────────────────────────────────────

def blockquote(text, italic=False):
    spans = [{"start": 0, "end": len(text), "type": "label", "data": {"label": "blockquote"}}]
    if italic:
        spans.append({"start": 0, "end": len(text), "type": "em"})
    else:
        spans.append({"start": 0, "end": len(text), "type": "strong"})
    return {"type": "paragraph", "text": text, "spans": spans}

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

VICTORIA_MAS_1 = (
    "« Perpendiculairement au boulevard de Clichy, Geneviève s'engage dans la rue Germain-Pilon "
    "et pénètre dans un immeuble de quatre étages. La cage d'escalier est exiguë, humide et obscure. "
    "Au dernier palier, derrière la porte de droite, des rires de femmes… »"
)

VICTORIA_MAS_2 = (
    "« Lorsque les deux femmes pénètrent dans le salon, la plus jeune du groupe reconnaît "
    "Geneviève… dans la cuisine rustique éclairée par quelques bougies, l'adolescente de "
    "dix-sept ans prépare du café sur un petit feu. Il y a plus d'un an, Jeanne dormait "
    "dans le dortoir avec les autres aliénées… »"
)

JANE_MEMOIRES_VIOLENCE = (
    "« Joignant le reste à la parole, avec ou sans le moindre prétexte, elle me frappait "
    "cruellement et cela plusieurs fois la journée ; évitant toutefois de me marquer au visage "
    "par crainte de traces visibles qui auraient pu éveiller les soupçons de notre entourage. "
    "Par contre, le reste de mon individu était illustré de toutes les couleurs du prisme "
    "et sa signature. » — Jane Avril, Mes Mémoires"
)

JANE_MEMOIRES_SALPETRIERE = (
    "« Mes bienfaiteurs étaient liés d'amitié avec le célèbre neurologue, le Dr Magnan. "
    "Celui-ci me fit admettre à la Salpêtrière dans le service du grand professeur Charcot "
    "parmi les grandes étoiles de l'hystérie qui, à ce moment-là, faisaient fureur. » "
    "— Jane Avril, Mes Mémoires"
)

JANE_MEMOIRES_GUERISON = "« Hélas ! Je fus guérie ! » — Jane Avril, Mes Mémoires"

JANE_MEMOIRES_DANSE = (
    "« J'avais à rattraper toute ma jeunesse et la dépenser ! De ce fameux soir date ma vocation "
    "de danseuse, ma seule raison d'être désormais… On fait comme on le peut son entrée dans "
    "le monde. » — Jane Avril, Mes Mémoires"
)

JANE_MEMOIRES_LAUTREC = (
    "« Il est hors de doute que c'est à lui que je dois la célébrité dont j'ai joui depuis "
    "la parution de la première affiche qu'il a faite de moi. » — Jane Avril, Mes Mémoires"
)

content = [
    # ── Extrait d'ouverture Victoria Mas ──
    blockquote(VICTORIA_MAS_1, italic=True),
    blockquote(VICTORIA_MAS_2, italic=True),
    p(
        "C'est à travers ces lignes que l'autrice Victoria Mas fait entrer Jane Avril dans son "
        "roman — comme un fantôme bienveillant, une femme qui a traversé la Salpêtrière et en "
        "est ressortie vivante. Mais qui était vraiment Jeanne Louise Beaudon, avant de devenir "
        "Jane Avril ?"
    ),

    # ── Section 1 : Enfance ──
    h2("Une enfance fracturée"),
    IMG_DANSANT,
    p(
        "Jeanne Louise Beaudon voit le jour à Paris le 9 juin 1868. Son père, le marquis Luigi "
        "Fontana, est un Italien raffiné, artiste, d'une extrême sensibilité — mais absent. "
        "Sa mère, Parisienne, est dotée, écrira Jane dans ses mémoires, d'une « grande beauté "
        "qui dissimulait une nature de méchanceté cruelle et morbide »."
    ),
    p(
        "Après deux ans de vie commune, ses parents se séparent. Jeanne est d'abord confiée à "
        "ses grands-parents maternels, puis placée dans un couvent. Elle s'y sent aimée, en "
        "sécurité. C'est sa mère qui vient briser cet équilibre, en réclamant sa fille à l'âge "
        "de neuf ans."
    ),
    p("La violence commence. Dans ses mémoires, Jane Avril la décrit sans détour :"),
    blockquote(JANE_MEMOIRES_VIOLENCE),
    p(
        "Un ami de sa mère, M. Hutt, tente d'intervenir. Il propose de financer l'éducation de "
        "Jeanne — chant, musique. Sa mère y met fin. Jeanne, à bout, fuit le domicile familial."
    ),

    # ── Section 2 : Salpêtrière ──
    h2("La Salpêtrière : l'asile comme refuge"),
    IMG_BAL_SALPETRIERE,
    p(
        "C'est M. Hutt et son épouse qui trouvent une solution. Ils font admettre Jeanne à "
        "l'hôpital de la Salpêtrière — institution qui accueille alors, pêle-mêle, malades "
        "mentales, épileptiques, femmes sans ressources et enfants abandonnés. Jeanne a treize ans."
    ),
    blockquote(JANE_MEMOIRES_SALPETRIERE),
    p(
        "Jean-Martin Charcot est alors au sommet de sa gloire. Ses célèbres « leçons du mardi » "
        "— au cours desquelles il présente ses patientes devant un amphithéâtre de médecins et "
        "d'artistes — attirent des personnalités comme Sigmund Freud, Guy de Maupassant ou "
        "Alphonse Daudet. Les femmes diagnostiquées « hystériques » sont à la fois enfermées "
        "et exhibées."
    ),
    p(
        "Jeanne préfère néanmoins cet asile à la violence maternelle. Elle y reste jusqu'à ce "
        "que le Dr Charcot prononce sa guérison — avec une ironie qu'elle conserve dans ses mémoires :"
    ),
    blockquote(JANE_MEMOIRES_GUERISON),
    p(
        "C'est au cours de son séjour à la Salpêtrière que Jeanne découvre la danse, lors du "
        "fameux Bal des folles — le bal annuel organisé à l'hôpital, qui mêlait patients, médecins "
        "et public parisien venu en curieux. Ce bal, rendu célèbre par le roman de Victoria Mas "
        "et le film de Mélanie Laurent (2021), sera le point de départ de sa vocation."
    ),

    # ── Section 3 : Naissance d'une danseuse ──
    h2("La naissance d'une danseuse"),
    IMG_JANE_1893,
    p(
        "À sa sortie de la Salpêtrière, Jeanne refuse de retourner chez sa mère. Elle fuit. "
        "Rue de Médicis, des femmes la recueillent pour la nuit. Ces femmes fréquentent le "
        "Bal Bullier, une salle de danse populaire du Quartier latin. Elles l'y emmènent."
    ),
    p("Ce soir-là change tout.", [bold(0, 22)]),
    blockquote(JANE_MEMOIRES_DANSE),
    p(
        "Elle apprend sur le tas, développe un style immédiatement reconnaissable : une danse "
        "excentrique, souple, presque acrobatique, où les jambes parlent autant que le visage. "
        "Autour d'elle gravitent des écrivains, des poètes, des artistes. Elle voyage, vit de son art."
    ),
    p(
        "Les portes du Moulin Rouge s'ouvrent. Elle s'y impose et impose ses choix — c'est elle "
        "qui instaure la tradition de la robe rouge pour la soliste de revue. Au tournant du "
        "XXe siècle, elle exporte le French Cancan dans les capitales européennes : le Palace "
        "Theatre de Londres, Madrid."
    ),

    # ── Section 4 : Toulouse-Lautrec ──
    h2("Toulouse-Lautrec : une amitié qui la rend immortelle"),
    IMG_MOULIN_ROUGE,
    p(
        "C'est au Moulin Rouge que Jane Avril entre dans le cercle d'Henri de Toulouse-Lautrec "
        "(1864-1901). Entre le peintre et la danseuse s'installe une véritable complicité — "
        "fondée sur une admiration mutuelle et une compréhension commune de la marginalité. "
        "Toulouse-Lautrec, diminué physiquement depuis l'enfance, et Jane Avril, marquée par "
        "ses années de violence et d'internement, se reconnaissent."
    ),
    p(
        "Lautrec la peint à de nombreuses reprises. Il la fait figurer sur le numéro 1 de la "
        "revue L'Estampe originale. Il crée pour elle plusieurs des affiches les plus célèbres "
        "de l'histoire de l'affiche moderne : Jane Avril au Jardin de Paris (1893), Jane Avril "
        "sortant du Moulin Rouge (1892). Ces œuvres fixent à jamais son image — la silhouette "
        "élancée, la jambe levée, le mouvement suspendu.",
        [em(91, 112), em(122, 160), em(162, 199)]
    ),
    p("Jane Avril mesurera elle-même ce que lui doit sa célébrité :"),
    blockquote(JANE_MEMOIRES_LAUTREC),

    # ── Section 5 : Héritage ──
    h2("L'héritage"),
    p(
        "En 1935, à 67 ans, Jane Avril danse pour la dernière fois. Elle rejoint ensuite une "
        "maison de retraite et s'éteint le 17 janvier 1943, à 74 ans. Son corps repose au "
        "cimetière du Père-Lachaise."
    ),
    p(
        "Elle laisse derrière elle des mémoires d'une franchise remarquable, une carrière de "
        "plus de quarante ans, et une présence dans l'œuvre de Toulouse-Lautrec qui assure "
        "à son visage une forme d'éternité."
    ),
    p(
        "En 2019, Victoria Mas lui redonne vie dans Le Bal des folles (Albin Michel) — roman "
        "qui reconstitue l'atmosphère de la Salpêtrière de Charcot et la trajectoire de ces "
        "femmes enfermées, dont Jane Avril fut l'une des rares à s'échapper. Mélanie Laurent "
        "en tire un film en 2021.",
        [em(42, 58)]
    ),

    # ── Pour aller plus loin ──
    h2("Pour aller plus loin"),
    h3("À voir"),
    li(
        "Le Bal des folles — film de Mélanie Laurent, 2021 (Amazon Prime Vidéo)",
        [{"start": 0, "end": 18, "type": "em"},
         {"start": 21, "end": 70,
          "type": "hyperlink",
          "data": {"link_type": "Web",
                   "url": "https://www.primevideo.com/detail/0I5ATVSGSUYORJR7Q7G4VDYWGA/ref=dvm_src_ret_fr_xx_s",
                   "target": "_blank"}}]
    ),
    h3("À lire"),
    li("Le Bal des folles — Victoria Mas, Albin Michel, 2019", [em(0, 18)]),
    li("Mes Mémoires — Jane Avril, éditions l'Escalier", [em(0, 13)]),
    li("Jane Avril au Moulin Rouge avec Toulouse-Lautrec — François Caradec, Fayard", [em(0, 44)]),
    li("Toulouse-Lautrec — Matthias Arnold, Taschen", [em(0, 17)]),
]

# ── Payload ───────────────────────────────────────────────────────────────────

payload = {
    "uid": "jane-avril-le-bal-des-folles",
    "type": "blog_post",
    "lang": "fr-fr",
    "data": {
        "title": [
            {
                "type": "heading1",
                "text": "Jane Avril au Bal des folles — de la Salpêtrière au Moulin Rouge",
                "spans": [],
            }
        ],
        "description": [
            {
                "type": "paragraph",
                "text": "Internée à la Salpêtrière à 13 ans, elle en sortira pour devenir la star du Moulin Rouge et la muse de Toulouse-Lautrec. L'histoire vraie de Jane Avril.",
                "spans": [],
            }
        ],
        "date": "2022-01-30",
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


print("→ Mise à jour article : jane-avril-le-bal-des-folles")
api_call("PUT", f"{BASE_URL}/{DOC_ID}", payload)
print("\n✓ Terminé. Publie le brouillon dans le dashboard Prismic.")
