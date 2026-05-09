import { createContext, useContext } from 'react';
import { PROJECTS, IMAGES } from './constants/projects';

const MainContext = createContext(undefined);
const VALUE = { projectData: PROJECTS, images: PROJECTS.map((p) => p.image), ...IMAGES };

export function MainProvider({ children }) {
  return <MainContext.Provider value={VALUE}>{children}</MainContext.Provider>;
}

export function useMainContext() {
  const ctx = useContext(MainContext);
  if (!ctx) throw new Error('Error On Main Context');
  return ctx;
}
