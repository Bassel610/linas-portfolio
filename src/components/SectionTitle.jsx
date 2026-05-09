import { Stack, Typography } from '@mui/material';
import { COLORS } from '../constants/colors';

const TITLE_SX = { fontWeight: 700, textAlign: 'center', color: 'text.primary', mb: 1 };
const SUBTITLE_SX = { color: 'text.secondary', textAlign: 'center', fontWeight: 400, maxWidth: '600px' };

export default function SectionTitle({ title, alignItems = 'center', subtitle }) {
  return (
    <Stack width="100%" alignItems={alignItems} justifyContent="center" spacing={1} sx={{ mb: 4 }}>
      <Typography variant="h3" component="h2" sx={TITLE_SX}>
        <Typography component="span" sx={{ color: COLORS.primary }}>{title}</Typography>
      </Typography>
      {subtitle && <Typography variant="h6" sx={SUBTITLE_SX}>{subtitle}</Typography>}
    </Stack>
  );
}
