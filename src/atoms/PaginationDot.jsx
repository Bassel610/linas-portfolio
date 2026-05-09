import { Box } from '@mui/material';
import { getDotSx } from '../lib/sliderStyles';

export default function PaginationDot({ isActive, onClick }) {
  return <Box onClick={onClick} sx={getDotSx(isActive)} />;
}
