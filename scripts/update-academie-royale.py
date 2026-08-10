#!/usr/bin/env python3
"""
Mise à jour de l'article "Les femmes de l'Académie royale de peinture et de sculpture"
Document ID: XzlX3RIAACIAKFLM
UID: femmes-academie-royale-peinture-sculpture

Réécriture complète : article de fond, sources solides, toutes images conservées.
Usage: PRISMIC_TOKEN=<token> python3 scripts/update-academie-royale.py
"""

import json
import os
import sys
import urllib.error
import urllib.request

TOKEN = os.environ.get("PRISMIC_TOKEN", "")
if not TOKEN:
    print("Usage: PRISMIC_TOKEN=<token> python3 scripts/update-academie-royale.py")
    sys.exit(1)

DOC_ID = "XzlX3RIAACIAKFLM"
BASE_URL = "https://migration.prismic.io/documents"
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "repository": "artaufeminin",
    "Content-Type": "application/json",
}

# ── Images originales conservées ──────────────────────────────────────────────

IMG_CLAUDINE = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/699f3916-749e-49f6-86be-86401b231bec_Portrait_of_Claudine_Bouzonnet_Stella__facing_right%2C_holding_a_brush_and_palette.jpg?auto=format,compress",
    "alt": "Portrait de Claudine Bouzonnet Stella, peintre et graveuse française du XVIIe siècle",
    "copyright": None,
    "dimensions": {"width": 672, "height": 668},
    "id": "X0a4CRIAACUAY9iq",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_CATHERINE_DUCHEMIN = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/e163c8b8-7bd5-41ef-8f88-c629331fe9a9_image.jpg?auto=format,compress",
    "alt": "Catherine Duchemin, première femme admise à l'Académie royale de peinture et de sculpture (1663)",
    "copyright": None,
    "dimensions": {"width": 270, "height": 298},
    "id": "X0a4BBIAACIAY9iE",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_MADELEINE_BOULLOGNE = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/b0c829ff-4bce-4b8a-be04-a877058c16df_Antichambre_de_la_reine-TROPHEES_D%27ARMES_ET_INSTRUMENTS_MILITAIRES-3.jpg?auto=format,compress",
    "alt": "Madeleine Boullogne — Trophée d'armes avec une timbale, vers 1672, Versailles, Musée national du château",
    "copyright": None,
    "dimensions": {"width": 640, "height": 510},
    "id": "X0a4BxIAACMAY9iZ",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_CHERON = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/ab09b615-c60d-4a7e-a561-ae4cbc7fae4c_autoportrait.png?auto=format,compress",
    "alt": "Élisabeth-Sophie Chéron — Autoportrait présenté lors de son admission à l'Académie royale (1672), musée du Louvre",
    "copyright": None,
    "dimensions": {"width": 250, "height": 312},
    "id": "X0a4BRIAACUAY9iN",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "transparent"},
}

IMG_ROSALBA = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/e556a449-7f66-4b9c-ba2c-9b7d6129b799_Rosalba-Carriera-Felicita-Sartori-in-costume-turco-1728-1741-circa-Galleria-degli-Uffizi-Firenze.jpg?auto=format,compress",
    "alt": "Rosalba Carriera — Felicità Sartori en costume turc, 1728-1741, Galerie des Offices, Florence",
    "copyright": None,
    "dimensions": {"width": 545, "height": 307},
    "id": "X0a4BBIAACMAY9iM",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_REBOUL = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/453448cb-c1b5-40fd-8caf-7434401aa6e7_te%CC%81le%CC%81chargement.jpeg?auto=format,compress",
    "alt": "Marie-Thérèse Reboul, peintre française, admise à l'Académie royale le 30 juillet 1754",
    "copyright": None,
    "dimensions": {"width": 202, "height": 249},
    "id": "X0a4BBIAACIAY9iF",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_TERBUSH_1 = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/48f24dec-2a0c-4862-8961-78639c361e9a_tumblr_lwnt1boUvf1qggdq1.jpg?auto=format,compress",
    "alt": "Anna-Dorothéa Terbush, peintre allemande admise à l'Académie royale en 1767",
    "copyright": None,
    "dimensions": {"width": 500, "height": 262},
    "id": "X0a4BBIAACUAY9iG",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_TERBUSH_2 = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/f11587a4-7711-4815-aa84-293e27f8f0eb_2751874440_1.jpg?auto=format,compress",
    "alt": "Anna-Dorothéa Terbush — tableau présenté à l'Académie royale de Paris, effet de lumière à la bougie",
    "copyright": None,
    "dimensions": {"width": 384, "height": 460},
    "id": "X0a4BBIAACIAY9iH",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_ROSLIN_1 = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/301370f2-1a15-462f-92db-e24351e4630a_1280px-The_artist_Marie_Suzanne_Giroust.jpg?auto=format,compress",
    "alt": "Marie-Suzanne Roslin (née Giroust), portraitiste et pastelliste, académicienne en 1770",
    "copyright": None,
    "dimensions": {"width": 1280, "height": 1635},
    "id": "X0a4CRIAACQAY9ik",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_ROSLIN_2 = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/37df4831-d5cb-412f-a1c7-bd7a78ddfb07_Roslin__Marie-Suzanne_-_Jean-Baptiste_Pigalle_-_18th_century.jpg?auto=format,compress",
    "alt": "Marie-Suzanne Roslin — Portrait de Jean-Baptiste Pigalle, œuvre de réception à l'Académie royale (1770), musée du Louvre",
    "copyright": None,
    "dimensions": {"width": 900, "height": 1116},
    "id": "X0a4BhIAACMAY9iU",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_VALLAYER = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/04bf0b47-4dcd-42ed-b758-d1becc6758be_The_artist_Anne_Vallayer-Coster.jpg?auto=format,compress",
    "alt": "Anne Vallayer-Coster, peintre de natures mortes, admise à l'Académie royale le 28 juillet 1770",
    "copyright": None,
    "dimensions": {"width": 2375, "height": 3000},
    "id": "X0a4DBIAACMAY9i3",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_LABILLE = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/b0a06568-5859-4ba8-8641-1f8999f6df1e_louvre-adelaide-labille-guiard-portrait_0.gif?auto=format,compress",
    "alt": "Adélaïde Labille-Guiard, portraitiste, admise à l'Académie royale le 31 mai 1783, musée du Louvre",
    "copyright": None,
    "dimensions": {"width": 606, "height": 731},
    "id": "X0a4CBIAACUAY9ij",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_VIGEE_FILLE = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/1e4147c3-3614-4e68-af11-1543f879d5fc_Madame_Vige%CC%81e_Le_Brun_et_sa_fille__1786%2C_Elisabeth_Louise_Vige%CC%81e_Le_Brun_%283%29.jpg?auto=format,compress",
    "alt": "Élisabeth Vigée Le Brun et sa fille Julie, 1786 — l'une des œuvres les plus célèbres de la portraitiste",
    "copyright": None,
    "dimensions": {"width": 1683, "height": 2115},
    "id": "X0a4ChIAACUAY9ir",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_MA_LEBRUN = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/4f543332-d52d-4181-9583-4f4d64aed90d_MA-Lebrun.jpg?auto=format,compress",
    "alt": "Élisabeth Vigée Le Brun — Marie-Antoinette, portrait officiel",
    "copyright": None,
    "dimensions": {"width": 1000, "height": 1252},
    "id": "X0a4ChIAACMAY9iw",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

IMG_MA_1783 = {
    "type": "image",
    "url": "https://images.prismic.io/artaufeminin/89bf6312-3ddb-47eb-b4d0-410aa46c25f9_Vige%CC%81e-Lebrun_Marie_Antoinette_1783.jpg?auto=format,compress",
    "alt": "Élisabeth Vigée Le Brun — Marie-Antoinette en robe de mousseline, 1783, tableau qui fit scandale",
    "copyright": None,
    "dimensions": {"width": 1235, "height": 1473},
    "id": "X0a4DBIAACUAY9i4",
    "edit": {"x": 0, "y": 0, "zoom": 1, "background": "#fff"},
}

# ── Contenu de l'article ──────────────────────────────────────────────────────

content = [
    # ── Intro ──
    {
        "type": "paragraph",
        "text": "De 1648 à 1793, l'Académie royale de peinture et de sculpture a compté plus de 450 membres. Parmi eux, les historiens dénombrent une quinzaine de femmes.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Une quinzaine sur quatre cent cinquante. En cent quarante-cinq ans.",
        "spans": [{"start": 0, "end": 66, "type": "strong"}],
    },
    {
        "type": "paragraph",
        "text": "Non par absence de talent féminin — les femmes artistes existaient, produisaient, excellaient. Mais parce que l'institution avait érigé leur exclusion en politique, parfois tacite, parfois explicite. Comprendre qui étaient ces femmes, c'est comprendre à quel prix l'art s'est exercé au féminin dans la France de l'Ancien Régime.",
        "spans": [],
    },

    # ── Section 1 ──
    {
        "type": "heading2",
        "text": "L'Académie royale : une institution au cœur du pouvoir artistique",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Fondée en 1648 sous l'impulsion du peintre Charles Le Brun, protégé de Louis XIV, l'Académie royale de peinture et de sculpture naît d'un double projet : émanciper les artistes de la tutelle des corporations de maîtres, et placer la création artistique sous l'autorité directe de la Couronne.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "L'institution prospère rapidement. Elle contrôle l'enseignement des arts, organise les Salons — les seules expositions publiques légitimes de l'époque — et confère à ses membres un statut reconnu, une pension royale pour les professeurs, et l'accès aux commandes officielles. Être académicien, c'est exister dans le monde de l'art français.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1663, Charles Le Brun en devient directeur et chancelier. L'Académie fonctionnera pendant près d'un siècle et demi avant d'être supprimée par la Convention nationale en 1793 — à la demande du peintre David — et remplacée par l'École des beaux-arts.",
        "spans": [],
    },

    # ── Section 2 ──
    {
        "type": "heading2",
        "text": "Une exclusion organisée : le quota des quatre",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "L'exclusion des femmes de l'Académie n'était pas inscrite dans ses statuts fondateurs. Aucun texte ne leur en interdisait formellement l'accès. Pourtant, un obstacle structurel rendait leur formation quasi impossible : l'étude du modèle vivant nu, exercice central dans l'apprentissage de la peinture d'histoire — le genre le plus valorisé —, leur était interdite au nom de la bienséance.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Cette interdiction les cantonnait aux genres dits « mineurs » : natures mortes, peintures de fleurs, portraits, miniatures. Des spécialités dans lesquelles elles pouvaient exceller, mais qui ne conféraient pas le même prestige que la grande peinture d'histoire.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1706, la restriction devient officielle : l'Académie décide qu'elle ne pourra compter simultanément plus de quatre femmes parmi ses membres. Ce quota — jamais transgressé — consacre l'exception féminine comme politique institutionnelle.",
        "spans": [{"start": 0, "end": 238, "type": "strong"}],
    },
    {
        "type": "paragraph",
        "text": "La sociologue Séverine Sofio, dans Artistes femmes (CNRS Éditions, 2016), analyse cette décision comme la traduction d'une crainte partagée par les académiciens : celle d'une présence féminine qui dévaluerait le prestige de l'institution. Les femmes pouvaient y être admises — à condition qu'elles n'y soient jamais trop nombreuses.",
        "spans": [{"start": 35, "end": 49, "type": "em"}],
    },
    {
        "type": "paragraph",
        "text": "Le cas de Claudine Bouzonnet Stella (1636-1697) illustre ce paradoxe. Graveur et peintre de premier rang, nièce et élève de Jacques Stella, admirée de ses contemporains, elle aurait pu figurer parmi les académiciennes. Les sources indiquent qu'elle mena « une vie retirée et modeste qui l'empêcha sans doute de se présenter à l'académie ou même lui fit refuser les avances que l'on put lui faire » (Jules Guiffrey, 1877). Une vie entière de création, hors des murs de l'institution.",
        "spans": [{"start": 391, "end": 408, "type": "em"}],
    },
    IMG_CLAUDINE,

    # ── Section 3 ──
    {
        "type": "heading2",
        "text": "Les femmes de l'Académie royale",
        "spans": [],
    },

    # Catherine Duchemin
    {
        "type": "heading3",
        "text": "Catherine Duchemin (1630-1698) — la première",
        "spans": [],
    },
    IMG_CATHERINE_DUCHEMIN,
    {
        "type": "paragraph",
        "text": "Le 14 avril 1663 est une date historique. Ce jour-là, Catherine Duchemin devient la première femme admise à l'Académie royale de peinture et de sculpture — quinze ans après sa fondation.",
        "spans": [{"start": 0, "end": 18, "type": "strong"}],
    },
    {
        "type": "paragraph",
        "text": "Fille d'un maître sculpteur, elle a reçu sa formation artistique dans l'atelier paternel avant d'épouser en 1657 le sculpteur François Girardon, lui-même futur académicien. C'est sa peinture de fleurs qui lui ouvre les portes de l'institution — un genre dans lequel elle excelle et qui constituera, pour beaucoup de ses successeures, l'unique voie d'entrée autorisée.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Sa carrière connaît ensuite un retrait progressif. Florent Le Comte, dans sa Galerie des peintres flamands (1702), note qu'elle « aurait arrêté de peindre pour s'occuper de son ménage et de l'éducation de ses enfants » — dix enfants nés entre 1658 et 1673. Son œuvre de réception, un tableau de fleurs, a disparu lors de la Révolution.",
        "spans": [{"start": 78, "end": 106, "type": "em"}],
    },
    {
        "type": "paragraph",
        "text": "Sa réception reste néanmoins fondatrice : elle crée un précédent que l'Académie ne pourra plus ignorer, ouvrant la voie aux femmes qui la suivront.",
        "spans": [],
    },

    # Sœurs Boullogne
    {
        "type": "heading3",
        "text": "Les sœurs Boullogne (admises le 7 octobre 1669)",
        "spans": [],
    },
    IMG_MADELEINE_BOULLOGNE,
    {
        "type": "paragraph",
        "text": "Six ans après Catherine Duchemin, deux femmes entrent ensemble à l'Académie : Geneviève et Madeleine Boullogne. Filles du peintre Louis Boullogne l'Ancien, elles appartiennent à l'une des dynasties artistiques les plus prolifiques de leur temps.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Elles sont reçues sur présentation d'un tableau exécuté conjointement — figures, fond d'architecture et instruments de musique — signal de leur formation rigoureuse, mais aussi d'une institution qui, admettant deux femmes d'un coup, semble vouloir traiter ces réceptions comme des exceptions contrôlées.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "L'œuvre de Madeleine est mieux documentée : son Trophée d'armes avec une timbale (vers 1672, musée national du château de Versailles) témoigne d'une maîtrise solide dans la peinture décorative de grand format.",
        "spans": [{"start": 48, "end": 82, "type": "em"}],
    },

    # Élisabeth-Sophie Chéron
    {
        "type": "heading3",
        "text": "Élisabeth-Sophie Chéron (1648-1711)",
        "spans": [],
    },
    IMG_CHERON,
    {
        "type": "paragraph",
        "text": "Reçue à l'Académie en septembre 1672, sur recommandation expresse de Charles Le Brun, Élisabeth-Sophie Chéron présente un autoportrait lors de son admission — œuvre aujourd'hui conservée au musée du Louvre.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Son parcours est singulier. Fille du peintre Henri Chéron, déjà célèbre à quatorze ans pour ses portraits, elle se retrouve à seize ans chef de foyer lorsque son père — protestant — fuit la France pour échapper aux persécutions religieuses. Elle subvient seule aux besoins de sa mère, de sa sœur et de son frère, uniquement grâce à ses revenus artistiques.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Elle réussit là où beaucoup auraient renoncé : atteindre l'excellence dans un milieu qui l'exclut de l'étude du modèle vivant, tout en assumant seule des responsabilités économiques considérables. Son autoportrait — dans lequel elle se représente un dessin à la main, en femme d'esprit autant que de métier — est un geste revendicatif autant qu'artistique.",
        "spans": [],
    },

    # Rosalba Carriera
    {
        "type": "heading3",
        "text": "Rosalba Carriera (1675-1757) — la Vénitienne",
        "spans": [],
    },
    IMG_ROSALBA,
    {
        "type": "paragraph",
        "text": "Née à Chioggia (Vénétie), Rosa Alba Carriera est la première femme artiste à connaître une renommée véritablement européenne de son vivant. Formée à la miniature, elle se spécialise ensuite dans le pastel, genre dans lequel elle révolutionne la pratique du portrait : légèreté de touche, spontanéité, capacité à saisir l'expression sans raideur.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1715, le financier et marchand d'art français Pierre Crozat lui rend visite à Venise et l'invite à Paris. Elle y arrive en avril 1720, à 45 ans. Son séjour de dix-huit mois est un triomphe : elle est reçue à l'Académie royale le 26 octobre 1720 et enchaîne les commandes de la haute société parisienne.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Rentrée en Italie, invitée en Autriche, sa vue se détériore progressivement. Atteinte de cécité, elle décède à Venise en 1757 à l'âge de 82 ans. Sa réception à l'Académie de Paris fut la première d'une femme étrangère d'envergure internationale dans l'institution française.",
        "spans": [],
    },

    # Marguerite Haverman
    {
        "type": "heading3",
        "text": "Marguerite Haverman (vers 1693 – après 1722) — l'admission annulée",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Seul cas de ce type dans l'histoire de l'Académie : Marguerite Haverman est admise le 31 janvier 1722, sur présentation d'un tableau de fleurs dans le style de Jan Van Huysum — son maître, dont elle fut la seule élève connue. Son talent est jugé exceptionnel.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Mais l'institution se ravise rapidement. Suspectée d'avoir présenté une œuvre qui n'était pas entièrement de sa main — accusation sur laquelle les archives restent lacunaires, et que certains historiens attribuent à la jalousie de Van Huysum lui-même —, elle est radiée de la liste des membres dans l'année. Aucune justification officielle n'est conservée.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Après elle, l'Académie n'admettra plus aucune femme pendant trente-deux ans.",
        "spans": [{"start": 0, "end": 77, "type": "strong"}],
    },

    # Marie-Thérèse Reboul
    {
        "type": "heading3",
        "text": "Marie-Thérèse Reboul (1728-1805)",
        "spans": [],
    },
    IMG_REBOUL,
    {
        "type": "paragraph",
        "text": "Admise à l'Académie le 30 juillet 1754, Marie-Thérèse Reboul interrompt l'absence féminine de trente-deux ans qui avait suivi l'éviction de Haverman. Peintre de genre et de portraits dans la tradition rococo, elle est connue pour la délicatesse de son traitement de la lumière.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Elle épouse quelques années plus tard le peintre Joseph-Marie Vien, futur directeur de l'Académie de France à Rome et figure de proue du renouveau néoclassique. Son œuvre demeure moins connue que celle de son mari — destin partagé par nombre de femmes artistes de cette époque dont la carrière s'est effacée derrière celle d'un époux plus visible.",
        "spans": [],
    },

    # Anna-Dorothéa Terbush
    {
        "type": "heading3",
        "text": "Anna-Dorothéa Terbush (1721-1782) — l'audacieuse",
        "spans": [],
    },
    IMG_TERBUSH_1,
    {
        "type": "paragraph",
        "text": "Née à Berlin dans une famille de peintres d'origine polonaise, Anna-Dorothéa Terbush interrompt sa carrière pour élever ses quatre enfants, puis la reprend à quarante ans — avec un éclat qui sidère ses contemporains.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "En 1765, elle arrive à Paris avec l'ambition d'être reçue à l'Académie royale. Son premier tableau présenté est refusé. Elle en soumet un second — un homme éclairé par une bougie, effet de lumière artificielle d'une maîtrise remarquable — et est admise le 24 février 1767.",
        "spans": [],
    },
    IMG_TERBUSH_2,
    {
        "type": "paragraph",
        "text": "Diderot, qu'elle rencontre lors de son séjour, lui consacre des pages dans sa correspondance artistique : il admire sa technique, formule des réserves sur « l'agrément » de ses portraits — remarques qui en disent autant sur les attentes masculines de l'époque que sur l'œuvre elle-même.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Elle quitte Paris en novembre 1768, rejoint Vienne puis Berlin, où elle travaille successivement pour Frédéric II de Prusse et Catherine II de Russie.",
        "spans": [],
    },

    # Marie-Suzanne Roslin
    {
        "type": "heading3",
        "text": "Marie-Suzanne Roslin (1734-1772)",
        "spans": [],
    },
    IMG_ROSLIN_1,
    {
        "type": "paragraph",
        "text": "Orpheline de père et de mère avant ses neuf ans, Marie-Suzanne Giroust — future Mme Roslin — est formée par Joseph-Marie Vien avant de devenir une portraitiste et pastelliste reconnue.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Elle est admise à l'Académie le 1er janvier 1770, sur présentation d'un portrait du sculpteur Pigalle — œuvre conservée au musée du Louvre.",
        "spans": [],
    },
    IMG_ROSLIN_2,
    {
        "type": "paragraph",
        "text": "Sa carrière académique sera brève : atteinte d'un cancer du sein, elle décède le 31 mars 1772, à 38 ans seulement, deux ans après son admission. Elle n'aura eu le temps d'exposer qu'une seule fois en qualité d'académicienne, au Salon de 1771.",
        "spans": [],
    },

    # Anne Vallayer-Coster
    {
        "type": "heading3",
        "text": "Anne Vallayer-Coster (1744-1818)",
        "spans": [],
    },
    IMG_VALLAYER,
    {
        "type": "paragraph",
        "text": "Fille d'un orfèvre parisien — et non d'un artiste, ce qui la distingue de la quasi-totalité de ses pairs —, Anne Vallayer-Coster est formée auprès de Madeleine Basseporte et de Claude Joseph Vernet. Elle est admise à l'Académie le 28 juillet 1770, la même année que Marie-Suzanne Roslin.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "À sa réception, le Mercure de France lui consacre un éloge remarqué : « Ses tableaux dans le genre de fleurs, de fruits, de bas-reliefs, d'animaux, ont été la meilleure recommandation de ses talents. Elle peut se placer à côté des maîtres célèbres… elle porte l'art si difficile de rendre la nature à un degré de perfection qui enchante et qui étonne. »",
        "spans": [{"start": 19, "end": 35, "type": "em"}],
    },
    {
        "type": "paragraph",
        "text": "Elle devient chef du cabinet de peinture de la reine Marie-Antoinette, choisit de rester en France pendant la Révolution, et poursuit sa carrière jusqu'à sa mort en 1818 — l'une des rares femmes de cette liste à avoir traversé intact le bouleversement révolutionnaire.",
        "spans": [],
    },

    # Adélaïde Labille-Guiard
    {
        "type": "heading3",
        "text": "Adélaïde Labille-Guiard (1749-1803)",
        "spans": [],
    },
    IMG_LABILLE,
    {
        "type": "paragraph",
        "text": "Adélaïde Labille-Guiard est admise à l'Académie royale le 31 mai 1783 — le même jour qu'Élisabeth Vigée Le Brun, dans un double événement qui fait sensation dans le milieu artistique parisien.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Formée à la miniature par François-Élie Vincent puis à la peinture à l'huile, elle expose d'abord à l'Académie de Saint-Luc — institution plus ouverte aux femmes — avant d'accéder à l'Académie royale. Son œuvre de réception présente des portraits de membres de l'Académie elle-même : un geste politique, qui affirme sa légitimité au sein de l'institution par le biais de l'institution elle-même.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Pendant la Révolution, contrairement à Vigée Le Brun, elle reste en France, se reconvertit à une clientèle républicaine et milite activement pour l'ouverture de l'Académie aux femmes — en vain.",
        "spans": [],
    },

    # Élisabeth Vigée Le Brun
    {
        "type": "heading3",
        "text": "Élisabeth Vigée Le Brun (1755-1842) — la plus célèbre",
        "spans": [],
    },
    IMG_VIGEE_FILLE,
    {
        "type": "paragraph",
        "text": "Fille du pastelliste Louis Vigée, membre de l'Académie de Saint-Luc, Élisabeth Vigée Le Brun est formée dès l'enfance par son père, puis à sa mort — elle a douze ans — par les amis de ce dernier. À treize ans, elle peint des portraits contre rémunération. À vingt ans, elle est déjà l'une des portraitistes les plus recherchées de Paris.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Son admission à l'Académie royale, le 31 mai 1783, est le fruit d'une longue résistance institutionnelle. Mary D. Sheriff, dans The Exceptional Woman (University of Chicago Press, 1996), documente les tentatives répétées de Vigée Le Brun pour y accéder et les cabales menées contre elle par le directeur Pierre. L'intervention de Marie-Antoinette — dont elle était déjà la portraitiste officielle — fut sans doute décisive.",
        "spans": [{"start": 130, "end": 149, "type": "em"}],
    },
    {
        "type": "paragraph",
        "text": "Son tableau de réception, La paix ramenant l'abondance, est une allégorie de grand format qui dépasse délibérément le cadre des genres « féminins » auxquels l'institution entendait la cantonner.",
        "spans": [{"start": 26, "end": 54, "type": "em"}],
    },
    IMG_MA_LEBRUN,
    IMG_MA_1783,
    {
        "type": "paragraph",
        "text": "En 1789, à l'annonce de la prise de la Bastille, elle quitte la France dans la nuit du 5 au 6 octobre avec sa fille et cent louis. Italie, Autriche, Prusse, Russie — où elle réside six ans, à Saint-Pétersbourg. Elle rentre définitivement en France en 1809.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Elle laisse derrière elle plus de 660 portraits documentés et des mémoires autobiographiques (Souvenirs, 1835-1837) d'une vivacité remarquable. La première rétrospective consacrée à son œuvre en France n'a eu lieu qu'en 2015, au Grand Palais — soit 173 ans après sa mort.",
        "spans": [{"start": 94, "end": 103, "type": "em"}],
    },

    # ── Section 4 : Héritage ──
    {
        "type": "heading2",
        "text": "L'héritage : une institution fermée, des œuvres qui demeurent",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "La suppression de l'Académie royale en 1793 ne marque pas la fin des inégalités dans le monde de l'art français. L'École des beaux-arts qui lui succède restera fermée aux femmes jusqu'en 1897. Le Prix de Rome — sésame suprême pour une carrière artistique — ne leur sera accessible qu'en 1903.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "Mais les femmes de l'Académie royale ont laissé quelque chose d'irréductible : la preuve, œuvres en main, que l'excellence artistique n'avait pas de genre. Cantonnées aux natures mortes, limitées à quatre simultanément, admises à contrecœur, elles ont produit des œuvres conservées au Louvre, à Versailles, dans les musées d'Europe entière.",
        "spans": [],
    },
    {
        "type": "paragraph",
        "text": "C'est peut-être là leur héritage le plus durable : non pas l'institution qui a si longtemps résisté à les accueillir, mais les femmes qui ont fini par s'y imposer malgré tout.",
        "spans": [],
    },

    # ── Sources ──
    {
        "type": "heading2",
        "text": "Sources",
        "spans": [],
    },
    {
        "type": "list-item",
        "text": "Séverine Sofio, Artistes femmes. La parenthèse enchantée, XVIIIe-XIXe siècles, CNRS Éditions, 2016",
        "spans": [{"start": 16, "end": 79, "type": "em"}],
    },
    {
        "type": "list-item",
        "text": "Mary D. Sheriff, The Exceptional Woman: Elisabeth Vigée-Lebrun and the Cultural Politics of Art, University of Chicago Press, 1996",
        "spans": [{"start": 17, "end": 95, "type": "em"}],
    },
    {
        "type": "list-item",
        "text": "Élisabeth Vigée Le Brun, Souvenirs, 1835-1837 (rééd. Honoré Champion, 2008)",
        "spans": [{"start": 25, "end": 34, "type": "em"}],
    },
    {
        "type": "list-item",
        "text": "Jules Guiffrey, Les femmes à l'Académie royale de peinture et de sculpture, 1877",
        "spans": [{"start": 16, "end": 74, "type": "em"}],
    },
    {
        "type": "list-item",
        "text": "Florent Le Compte, Galerie des peintres flamands, hollandais et allemands, 1702",
        "spans": [{"start": 19, "end": 73, "type": "em"}],
    },
]

# ── Payload complet ───────────────────────────────────────────────────────────

payload = {
    "uid": "femmes-academie-royale-peinture-sculpture",
    "type": "blog_post",
    "lang": "fr-fr",
    "data": {
        "title": [
            {
                "type": "heading1",
                "text": "Les femmes de l'Académie royale de peinture et de sculpture",
                "spans": [],
            }
        ],
        "description": [
            {
                "type": "paragraph",
                "text": "En 145 ans, seules 15 femmes ont intégré l'Académie royale de peinture et de sculpture — sur plus de 450 membres. Portrait de ces pionnières oubliées.",
                "spans": [],
            }
        ],
        "date": "2020-09-05",
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


print("→ Mise à jour article : femmes-academie-royale-peinture-sculpture")
api_call("PUT", f"{BASE_URL}/{DOC_ID}", payload)
print("\n✓ Terminé. Publie le brouillon dans le dashboard Prismic.")
