import { useState } from 'react';

export function useImageHover(enabled, imgRef, boxRef) {
  const [isHovered, setIsHovered] = useState(false);

  const onEnter = () => enabled && setIsHovered(true);

  const onLeave = (e) => {
    if (!enabled) return;
    setTimeout(() => {
      const t = e.relatedTarget;
      const stillInside = imgRef?.current?.contains(t) || boxRef?.current?.contains(t);
      if (!stillInside) setIsHovered(false);
    }, 100);
  };

  return { isHovered, onEnter, onLeave };
}
