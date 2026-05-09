function setMetaByAttr(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function updateDocumentSEO({ title, description, keywords, image }) {
  document.title = title;
  setMetaByAttr('name', 'description', description);
  setMetaByAttr('name', 'keywords', keywords);
  setMetaByAttr('property', 'og:title', title);
  setMetaByAttr('property', 'og:description', description);
  setMetaByAttr('property', 'og:image', image);
  setMetaByAttr('property', 'og:type', 'website');
  setMetaByAttr('name', 'twitter:card', 'summary_large_image');
  setMetaByAttr('name', 'twitter:title', title);
  setMetaByAttr('name', 'twitter:description', description);
  setMetaByAttr('name', 'twitter:image', image);
}
