export function filterProjectsByCategory(projects, category) {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category.toLowerCase() === category);
}
