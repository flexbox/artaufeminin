import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

export function formatHumanDate(date: string) {
  return format(new Date(date), 'PPPP', { locale: fr });
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
