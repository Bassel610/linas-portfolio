import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { OUTLINE_BUTTON_SX } from '../lib/buttonStyles';

export default function OutlineButton({ to, children }) {
  return (
    <Button component={Link} to={to} variant="outlined" sx={OUTLINE_BUTTON_SX}>
      {children}
    </Button>
  );
}
