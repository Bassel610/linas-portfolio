import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { PRIMARY_BUTTON_SX } from '../lib/buttonStyles';

export default function PrimaryButton({ to, children }) {
  return (
    <Button component={Link} to={to} variant="contained" sx={PRIMARY_BUTTON_SX}>
      {children}
    </Button>
  );
}
