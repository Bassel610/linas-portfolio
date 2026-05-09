import { useEffect, useState } from 'react';
import { HERO_SLIDER } from '../constants/pageContent';

export function useCarousel(length, intervalMs = HERO_SLIDER.autoplayMs) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, isPlaying, intervalMs]);

  const next = () => setIndex((i) => (i + 1) % length);
  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const togglePlay = () => setIsPlaying((p) => !p);

  return { index, isPlaying, next, prev, goTo: setIndex, togglePlay };
}
