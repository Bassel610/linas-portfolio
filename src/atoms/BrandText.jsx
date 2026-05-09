import { Typography } from '@mui/material';
import { COLORS } from '../constants/colors';
import { BRAND } from '../constants/pageContent';

export default function BrandText() {
  return (
    <Typography variant="h6" sx={{ color: COLORS.footerAccent, fontWeight: 600, mb: { xs: 2, md: 0 } }}>
      {BRAND.name}
    </Typography>
  );
}
