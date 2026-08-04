#!/bin/bash
# Rapport GSC hebdomadaire — artaufeminin.fr
# Exécuté automatiquement chaque lundi matin via crontab

set -e

DATE=$(date +%Y-%m-%d)
REPORT_DIR="/Users/aldjiaboughias/code/artaufeminin/.reports"
REPORT_FILE="$REPORT_DIR/gsc-$DATE.md"

mkdir -p "$REPORT_DIR"

cd /Users/aldjiaboughias/code/artaufeminin

echo "# Rapport GSC — $DATE" > "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "_Généré automatiquement le $(date '+%A %d %B %Y à %H:%M')_" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

/opt/homebrew/bin/claude \
  --dangerously-skip-permissions \
  -p "Tu es en charge du suivi SEO hebdomadaire de artaufeminin.fr.

Lance un audit Google Search Console complet avec les outils MCP disponibles dans ce projet (site: https://www.artaufeminin.fr/) :
1. site_snapshot — vue d'ensemble du trafic et des positions
2. quick_wins — opportunités d'amélioration rapides (CTR, positions 4-20)
3. content_decay — pages qui perdent du trafic
4. traffic_drops — baisses de trafic récentes

Génère un rapport markdown structuré et actionnable avec :
- Vue d'ensemble (clics, impressions, CTR moyen, position moyenne)
- Top 5 opportunités rapides cette semaine
- Pages en déclin à surveiller
- 3 recommandations prioritaires pour la semaine

Sois concis, factuel et actionnable. Format markdown." \
  --output-format text \
  >> "$REPORT_FILE" 2>&1

echo "Rapport sauvegardé : $REPORT_FILE"
