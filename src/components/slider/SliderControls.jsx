import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight, PlayArrow, Pause } from '@mui/icons-material';
import { SLIDER_NAV_BASE_SX, SLIDER_PLAY_SX } from '../../lib/sliderStyles';

const PREV_SX = { ...SLIDER_NAV_BASE_SX, left: { xs: '10px', md: '20px' } };
const NEXT_SX = { ...SLIDER_NAV_BASE_SX, right: { xs: '10px', md: '20px' } };

export default function SliderControls({ onPrev, onNext, onTogglePlay, isPlaying }) {
  return (
    <>
      <IconButton onClick={onPrev} sx={PREV_SX}><ChevronLeft /></IconButton>
      <IconButton onClick={onNext} sx={NEXT_SX}><ChevronRight /></IconButton>
      <IconButton onClick={onTogglePlay} sx={SLIDER_PLAY_SX}>{isPlaying ? <Pause /> : <PlayArrow />}</IconButton>
    </>
  );
}
