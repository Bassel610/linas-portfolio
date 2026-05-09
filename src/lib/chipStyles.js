import { COLORS } from '../constants/colors';

export function getChipStyles(isActive) {
  return {
    backgroundColor: isActive ? COLORS.primary : 'transparent',
    color: isActive ? 'white' : COLORS.primary,
    borderColor: COLORS.primary,
    '&:hover': {
      backgroundColor: isActive ? COLORS.primaryDark : COLORS.primaryAlpha10,
    },
    px: 3,
    py: 1,
    fontSize: '0.9rem',
  };
}
