import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

export function formatHumanDate(date: string) {
  return format(new Date(date), 'PPPP', { locale: fr });
}

// « 12 novembre 2026 » : pour les sur-titres de cartes
export function formatShortDate(date: string) {
  return format(new Date(date), 'd MMMM yyyy', { locale: fr });
}

// Coupe un texte sur un mot entier, sans laisser de ponctuation avant « … »
export function truncateWords(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (
    (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(
      /[\s,;:.—–-]+$/,
      ''
    ) + '…'
  );
}

export function splitDate(date: string) {
  if (typeof date === 'string' && date) {
    const indexT = date.indexOf('T');

    if (indexT !== -1) {
      return date.substring(0, indexT);
    } else {
      return date;
    }
  } else {
    console.error('splitDate a été appelé avec un argument non valide:', date);
    return null;
  }
}
