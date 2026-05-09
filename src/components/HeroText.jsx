import { Stack } from '@mui/material';
import HeroHeading from '../atoms/HeroHeading';
import HeroSubtitle from '../atoms/HeroSubtitle';

export default function HeroText() {
  return (
    <Stack spacing={2} sx={{ textAlign: 'center', mb: 4 }}>
      <HeroHeading />
      <HeroSubtitle />
    </Stack>
  );
}
