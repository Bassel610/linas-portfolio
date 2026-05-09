import { COLORS } from '../constants/colors';

export const SLIDER_NAV_BASE_SX = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  backgroundColor: COLORS.primaryAlpha80,
  '&:hover': {
    backgroundColor: COLORS.primary,
    transform: 'translateY(-50%) scale(1.1)',
  },
  transition: 'all 0.3s ease',
};

export const SLIDER_PLAY_SX = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
  backgroundColor: COLORS.blackAlpha50,
  '&:hover': { backgroundColor: COLORS.blackAlpha70 },
};

export function getDotSx(isActive) {
  return {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: isActive ? COLORS.primary : COLORS.whiteAlpha50,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: isActive ? COLORS.primary : COLORS.whiteAlpha80,
      transform: 'scale(1.2)',
    },
  };
}
