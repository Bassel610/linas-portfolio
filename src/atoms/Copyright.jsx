import { Typography } from '@mui/material';
import { COLORS } from '../constants/colors';
import { BRAND } from '../constants/pageContent';

export default function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: COLORS.footerText, textAlign: { xs: 'center', md: 'right' } }}>
      {BRAND.copyright}
    </Typography>
  );
}
