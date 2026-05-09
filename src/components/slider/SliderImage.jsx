import { Box, Fade } from '@mui/material';
import { HERO_SLIDER } from '../../constants/pageContent';

const IMG_SX = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function SliderImage({ src, index }) {
  return (
    <Fade in timeout={500} key={index}>
      <Box component="img" src={src} alt={`${HERO_SLIDER.imageAltPrefix} ${index + 1}`} sx={IMG_SX} />
    </Fade>
  );
}
