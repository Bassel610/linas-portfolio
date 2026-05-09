import { Typography } from '@mui/material';
import { COLORS } from '../constants/colors';

export default function AccentTitle({ children, variant = 'h5', mb = 3 }) {
  return (
    <Typography variant={variant} sx={{ mb, color: COLORS.primary }}>
      {children}
    </Typography>
  );
}
