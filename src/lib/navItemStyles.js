import { COLORS } from '../constants/colors';

export function getNavButtonStyles(isActive) {
  return {
    color: isActive ? COLORS.primary : '#333',
    fontWeight: isActive ? 700 : 500,
    fontSize: isActive ? '1.1rem' : '1rem',
    textTransform: 'none',
    px: 2,
    py: 1,
    borderRadius: 2,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&:hover': { backgroundColor: COLORS.primaryAlpha10, color: COLORS.primary },
  };
}

export function getDrawerItemStyles(isActive) {
  return {
    color: isActive ? COLORS.primary : '#333',
    fontWeight: isActive ? 700 : 500,
  };
}
