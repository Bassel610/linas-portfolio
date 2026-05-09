import { useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';
import { COLORS } from '../constants/colors';

export function useDominantColor(imgRef, ready) {
  const [color, setColor] = useState(COLORS.primary);

  useEffect(() => {
    if (!ready || !imgRef.current) return;
    const fac = new FastAverageColor();
    fac.getColorAsync(imgRef.current)
      .then((c) => setColor(c.hexa))
      .catch(() => setColor(COLORS.primary));
  }, [imgRef, ready]);

  return color;
}
