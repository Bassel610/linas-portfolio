import { useEffect, useRef, useState } from 'react';
import { ANIMATION_THRESHOLD, ANIMATION_ROOT_MARGIN } from '../constants/layout';

export function useIntersectionObserver(delay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTimeout(() => setIsVisible(true), delay),
      { threshold: ANIMATION_THRESHOLD, rootMargin: ANIMATION_ROOT_MARGIN },
    );
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [delay]);

  return [ref, isVisible];
}
