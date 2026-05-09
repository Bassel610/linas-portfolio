import { Stack, Box } from '@mui/material';
import BrandText from '../../atoms/BrandText';
import Tagline from '../../atoms/Tagline';
import Copyright from '../../atoms/Copyright';
import FooterSocialList from './FooterSocialList';
import { COLORS } from '../../constants/colors';

const SX = { bgcolor: COLORS.footerBg, py: 3, px: 4, mt: 6 };

export default function Footer() {
  return (
    <Stack width="100%" direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={2} sx={SX}>
      <Box><BrandText /><Tagline /></Box>
      <FooterSocialList />
      <Copyright />
    </Stack>
  );
}
