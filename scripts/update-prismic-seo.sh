#!/bin/bash
# Mise à jour SEO via Prismic Migration API
# Usage: PRISMIC_TOKEN=xxx bash scripts/update-prismic-seo.sh
#
# Récupérer le token sur : https://prismic.io/dashboard → Settings → API & Security → Migration API

set -e

REPO="artaufeminin"
TOKEN="${PRISMIC_TOKEN:?'Définir la variable PRISMIC_TOKEN avant de lancer ce script'}"
API="https://migration.prismic.io/documents"

# ── 1. Femmes académie royale — description trop courte (97 car.) ──────────
echo ">>> Mise à jour : femmes-academie-royale-peinture-sculpture"

curl -s -X PUT "$API/XzlX3RIAACIAKFLM" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-prismic-repository: $REPO" \
  -H "Content-Type: application/json" \
  -d '{
    "uid": "femmes-academie-royale-peinture-sculpture",
    "type": "blog_post",
    "lang": "fr-fr",
    "data": {
      "description": [
        {
          "type": "paragraph",
          "text": "Elles s'appelaient Élisabeth Vigée Le Brun, Adélaïde Labille-Guiard ou Anne Vallayer-Coster. Pourtant, seules 15 femmes ont été admises à l'Académie royale de peinture et de sculpture — sur plus de 450 membres. Portrait de ces pionnières oubliées du XVIIe et XVIIIe siècle.",
          "spans": []
        }
      ]
    }
  }' | python3 -m json.tool

echo ""

# ── 2. Jane Avril — description trop longue (263 car.) ─────────────────────
echo ">>> Mise à jour : jane-avril-le-bal-des-folles"

curl -s -X PUT "$API/Yfa5-BIAAC4Acd2G" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-prismic-repository: $REPO" \
  -H "Content-Type: application/json" \
  -d '{
    "uid": "jane-avril-le-bal-des-folles",
    "type": "blog_post",
    "lang": "fr-fr",
    "data": {
      "title": [
        {
          "type": "heading1",
          "text": "Jane Avril au Bal des folles — de la Salpêtrière au Moulin Rouge",
          "spans": []
        }
      ],
      "description": [
        {
          "type": "paragraph",
          "text": "Internée à la Salpêtrière à 13 ans, elle en sortira pour devenir la danseuse star du Moulin Rouge et la muse de Toulouse-Lautrec. L'histoire vraie de Jane Avril, inspirée du roman de Victoria Mas.",
          "spans": []
        }
      ]
    }
  }' | python3 -m json.tool

echo ""
echo "Done. Penser à republier les documents dans le dashboard Prismic si nécessaire."
