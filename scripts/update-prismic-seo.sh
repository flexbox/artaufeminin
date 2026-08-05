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

PAYLOAD1=$(python3 -c "
import json
print(json.dumps({
    'uid': 'femmes-academie-royale-peinture-sculpture',
    'type': 'blog_post',
    'lang': 'fr-fr',
    'data': {
        'description': [
            {
                'type': 'paragraph',
                'text': \"Elles s'appelaient \u00c9lisabeth Vig\u00e9e Le Brun, Ad\u00e9la\u00efde Labille-Guiard ou Anne Vallayer-Coster. Pourtant, seules 15 femmes ont \u00e9t\u00e9 admises \u00e0 l'Acad\u00e9mie royale de peinture et de sculpture \u2014 sur plus de 450 membres. Portrait de ces pionni\u00e8res oubli\u00e9es du XVIIe et XVIIIe si\u00e8cle.\",
                'spans': []
            }
        ]
    }
}))
")

curl -s -X PUT "$API/XzlX3RIAACIAKFLM" \
  -H "Authorization: Bearer $TOKEN" \
  -H "repository: $REPO" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD1"

echo ""

# ── 2. Jane Avril — description trop longue (263 car.) ─────────────────────
echo ">>> Mise à jour : jane-avril-le-bal-des-folles"

PAYLOAD2=$(python3 -c "
import json
print(json.dumps({
    'uid': 'jane-avril-le-bal-des-folles',
    'type': 'blog_post',
    'lang': 'fr-fr',
    'data': {
        'title': [
            {
                'type': 'heading1',
                'text': 'Jane Avril au Bal des folles \u2014 de la Salp\u00eatri\u00e8re au Moulin Rouge',
                'spans': []
            }
        ],
        'description': [
            {
                'type': 'paragraph',
                'text': \"Intern\u00e9e \u00e0 la Salp\u00eatri\u00e8re \u00e0 13 ans, elle en sortira pour devenir la danseuse star du Moulin Rouge et la muse de Toulouse-Lautrec. L'histoire vraie de Jane Avril, inspir\u00e9e du roman de Victoria Mas.\",
                'spans': []
            }
        ]
    }
}))
")

curl -s -X PUT "$API/Yfa5-BIAAC4Acd2G" \
  -H "Authorization: Bearer $TOKEN" \
  -H "repository: $REPO" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD2"

echo ""
echo "Done. Penser à republier les documents dans le dashboard Prismic si nécessaire."
