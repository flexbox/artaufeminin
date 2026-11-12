/**
 * Strips HTML tags and decodes HTML entities from a string.
 * Used to clean RSS feed summaries (e.g. Anchor podcast descriptions).
 */
export function stripHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;|&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&rsquo;|&lsquo;/g, "'")
    .replace(/&rdquo;|&ldquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .trim();
}

/**
 * Removes the "Soutenir ART au féminin" Tipeee paragraphs that Anchor
 * episode descriptions still contain.
 */
export function removeTipeee(input: string): string {
  return input.replace(
    /<p>(?:(?!<\/p>)[\s\S])*tipeee(?:(?!<\/p>)[\s\S])*<\/p>/gi,
    ''
  );
}
