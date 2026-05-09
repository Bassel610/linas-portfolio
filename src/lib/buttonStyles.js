import { COLORS } from '../constants/colors';

export const PRIMARY_BUTTON_SX = {
  backgroundColor: COLORS.primary,
  textDecoration: 'none',
  '&:hover': { backgroundColor: COLORS.primaryDark },
  px: 4,
  py: 1.5,
  fontSize: '1rem',
};

export const OUTLINE_BUTTON_SX = {
  color: COLORS.primary,
  borderColor: COLORS.primary,
  textDecoration: 'none',
  '&:hover': { backgroundColor: COLORS.primary, color: 'white' },
  px: 4,
  py: 1.5,
  fontSize: '1rem',
};

export const SUBMIT_BUTTON_SX = {
  backgroundColor: COLORS.primary,
  '&:hover': { backgroundColor: COLORS.primaryDark },
  py: 1.5,
  position: 'relative',
};
