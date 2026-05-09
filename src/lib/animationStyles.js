import { ANIMATION_DURATION } from '../constants/layout';

const HIDDEN_BY_TYPE = {
  fadeInUp: { opacity: 0, transform: 'translateY(40px)' },
  fadeInLeft: { opacity: 0, transform: 'translateX(-40px)' },
  fadeInRight: { opacity: 0, transform: 'translateX(40px)' },
  fadeIn: { opacity: 0 },
  scaleIn: { opacity: 0, transform: 'scale(0.8)' },
};

const VISIBLE = { opacity: 1, transform: 'translateY(0) translateX(0) scale(1)' };
const BASE = { transition: `all ${ANIMATION_DURATION}` };

export function getAnimationStyles(animation, isVisible) {
  if (isVisible) return { ...BASE, ...VISIBLE };
  return { ...BASE, ...(HIDDEN_BY_TYPE[animation] || HIDDEN_BY_TYPE.fadeInUp) };
}
