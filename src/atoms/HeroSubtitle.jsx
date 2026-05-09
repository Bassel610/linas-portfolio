import { Typography } from '@mui/material';
import { HERO_COPY } from '../constants/pageContent';

const SX = { color: 'text.secondary', maxWidth: '600px', margin: 'auto', lineHeight: 1.6 };

export default function HeroSubtitle() {
  return <Typography variant="h6" sx={SX}>{HERO_COPY.subtitle}</Typography>;
}
