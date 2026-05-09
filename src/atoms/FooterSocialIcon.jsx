import { IconButton, Link } from '@mui/material';
import { COLORS } from '../constants/colors';

const SX = {
  color: COLORS.footerAccent,
  '&:hover': { backgroundColor: COLORS.footerAccentAlpha10, transform: 'translateY(-2px)' },
  transition: 'all 0.3s ease',
};

export default function FooterSocialIcon({ Icon, href, ariaLabel }) {
  return (
    <IconButton component={Link} href={href} aria-label={ariaLabel} sx={SX}>
      <Icon />
    </IconButton>
  );
}
