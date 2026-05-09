import { CATEGORY_LABEL_OVERRIDES } from '../constants/navigation';

export function formatCategory(category) {
  if (CATEGORY_LABEL_OVERRIDES[category]) return CATEGORY_LABEL_OVERRIDES[category];
  return category.charAt(0).toUpperCase() + category.slice(1);
}
