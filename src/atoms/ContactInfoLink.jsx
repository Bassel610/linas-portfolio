import { Box, Link } from '@mui/material';
import { COLORS } from '../constants/colors';

const LINK_SX = { color: 'text.primary', textDecoration: 'none', '&:hover': { color: COLORS.primary } };

export default function ContactInfoLink({ Icon, label, href }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Icon sx={{ color: COLORS.primary, mr: 2 }} />
      <Link href={href} sx={LINK_SX}>{label}</Link>
    </Box>
  );
}
