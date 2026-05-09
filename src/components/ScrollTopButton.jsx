import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { useScrollToTop } from '../hooks/useScrollToTop';

const SX = {
  position: 'fixed', bottom: 32, right: 32,
  backgroundColor: 'primary.main', color: 'white',
  '&:hover': { backgroundColor: 'primary.dark', transform: 'scale(1.1)' },
  transition: 'all 0.3s ease', zIndex: 1000,
};

export default function ScrollTopButton() {
  const isVisible = useScrollVisibility();
  const scrollUp = useScrollToTop();
  return (
    <Zoom in={isVisible}>
      <Fab onClick={scrollUp} sx={SX} aria-label="scroll to top"><KeyboardArrowUpIcon /></Fab>
    </Zoom>
  );
}
