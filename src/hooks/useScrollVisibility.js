import { useEffect, useState } from 'react';
import { SCROLL_SHOW_OFFSET } from '../constants/layout';

export function useScrollVisibility(offset = SCROLL_SHOW_OFFSET) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.pageYOffset > offset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return isVisible;
}
