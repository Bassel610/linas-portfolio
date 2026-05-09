import { Typography } from '@mui/material';
import { COLORS } from '../constants/colors';
import { HERO_COPY } from '../constants/pageContent';

const SX = { fontWeight: 700, color: COLORS.textPrimary, fontSize: { xs: '2rem', md: '3rem' } };

export default function HeroHeading() {
  return <Typography variant="h2" sx={SX}>{HERO_COPY.title}</Typography>;
}
