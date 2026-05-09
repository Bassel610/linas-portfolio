import { useEffect } from 'react';
import { SEO_DEFAULTS } from '../constants/seo';
import { updateDocumentSEO } from '../lib/updateMetaTags';

export function useSEO({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  keywords = SEO_DEFAULTS.keywords,
  image = SEO_DEFAULTS.image,
} = {}) {
  useEffect(() => {
    updateDocumentSEO({ title, description, keywords, image });
  }, [title, description, keywords, image]);
}
