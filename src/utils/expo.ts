import { useEffect, useState } from 'react';

// Exposition en cours ou à venir de la galerie 3D. Pour la prochaine
// exposition, mettre à jour ces valeurs : l'accueil et la page Galerie
// changent de statut tout seuls selon la date.
export const EXPO = {
  title: 'Sororité',
  dates: '25 janvier – 25 février 2027',
  opening: '25 janvier 2027',
  closing: '25 février 2027',
  start: new Date('2027-01-25T00:00:00+01:00'),
  end: new Date('2027-02-25T23:59:59+01:00'),
};

export type ExpoStatus = 'upcoming' | 'open' | 'closed';

export function getExpoStatus(now: Date): ExpoStatus {
  if (now < EXPO.start) return 'upcoming';
  if (now <= EXPO.end) return 'open';
  return 'closed';
}

// Le statut est recalculé dans le navigateur : le HTML statique peut dater
// du dernier déploiement, la date du jour non.
export function useExpoStatus(): ExpoStatus {
  const [status, setStatus] = useState<ExpoStatus>(() =>
    getExpoStatus(new Date())
  );
  useEffect(() => setStatus(getExpoStatus(new Date())), []);
  return status;
}
