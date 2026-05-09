import { Box } from '@mui/material';
import { useMainContext } from '../context';
import { useCarousel } from '../hooks/useCarousel';
import HeroText from '../components/HeroText';
import SliderImage from '../components/slider/SliderImage';
import SliderControls from '../components/slider/SliderControls';
import SliderDots from '../components/slider/SliderDots';
import { HERO_HEIGHT } from '../constants/layout';

const FRAME_SX = {
  position: 'relative', width: { xs: '95%', md: '85%' }, height: HERO_HEIGHT,
  margin: 'auto', overflow: 'hidden', borderRadius: 3,
  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
};

export default function HeroSlider() {
  const { images } = useMainContext();
  const { index, isPlaying, next, prev, goTo, togglePlay } = useCarousel(images.length);
  return (
    <Box sx={{ py: 4 }}>
      <HeroText />
      <Box sx={FRAME_SX}>
        <SliderImage src={images[index]} index={index} />
        <SliderControls onPrev={prev} onNext={next} onTogglePlay={togglePlay} isPlaying={isPlaying} />
        <SliderDots count={images.length} current={index} onSelect={goTo} />
      </Box>
    </Box>
  );
}
