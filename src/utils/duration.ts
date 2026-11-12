// Durée d'un épisode, en secondes (« 722 ») ou en horloge (« 00:12:02 »),
// affichée en minutes : « 12 min ».
export function formatMinutes(duration?: string | null): string | null {
  if (!duration) return null;
  const seconds = duration.includes(':')
    ? duration
        .split(':')
        .map(Number)
        .reduce((total, part) => total * 60 + part, 0)
    : Number(duration);
  if (!seconds) return null;
  return `${Math.max(1, Math.round(seconds / 60))} min`;
}
