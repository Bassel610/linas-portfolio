import { Box } from '@mui/material';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { getAnimationStyles } from '../lib/animationStyles';

export default function AnimatedSection({ children, animation = 'fadeInUp', delay = 0, sx, ...rest }) {
  const [ref, isVisible] = useIntersectionObserver(delay);
  const animSx = getAnimationStyles(animation, isVisible);
  return (
    <Box ref={ref} sx={{ ...animSx, ...sx }} {...rest}>
      {children}
    </Box>
  );
}
