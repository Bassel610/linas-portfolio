import { IconButton, Link } from '@mui/material';
import { COLORS } from '../constants/colors';

const SX = {
  color: COLORS.primary,
  '&:hover': { backgroundColor: COLORS.primaryAlpha10 },
};

export default function SocialIconButton({ Icon, href, ariaLabel }) {
  return (
    <IconButton component={Link} href={href} aria-label={ariaLabel} sx={SX}>
      <Icon />
    </IconButton>
  );
}
