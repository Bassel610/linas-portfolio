import { Box, Typography } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { COLORS } from '../constants/colors';

const WRAPPER_SX = {
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  justifyContent: 'center', minHeight: '200px', gap: 2,
};

export default function Loader({ message = 'Loading...', size = 50 }) {
  return (
    <Box sx={WRAPPER_SX}>
      <ClipLoader color={COLORS.primary} size={size} aria-label="Loading" />
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{message}</Typography>
    </Box>
  );
}
