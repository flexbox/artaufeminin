exports.linkResolver = (doc) => {
  // URL for a blogpost type
  if (doc.type === 'article') {
    return `/articles/${doc.uid}`;
  }

  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }

  // Backup for all other types
  return '/';
};
