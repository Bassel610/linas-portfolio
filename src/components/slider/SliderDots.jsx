import { Box } from '@mui/material';
import PaginationDot from '../../atoms/PaginationDot';

const WRAP_SX = {
  position: 'absolute', bottom: '20px', left: '50%',
  transform: 'translateX(-50%)', display: 'flex', gap: '8px',
};

export default function SliderDots({ count, current, onSelect }) {
  return (
    <Box sx={WRAP_SX}>
      {Array.from({ length: count }).map((_, i) => (
        <PaginationDot key={i} isActive={i === current} onClick={() => onSelect(i)} />
      ))}
    </Box>
  );
}
