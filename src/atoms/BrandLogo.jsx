import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/Lina Interiors.png';
import { BRAND } from '../constants/pageContent';

const IMG_STYLE = { height: '50px', cursor: 'pointer' };

export default function BrandLogo() {
  return (
    <Box component={Link} to="/" sx={{ textDecoration: 'none' }}>
      <img src={logo} alt={BRAND.logoAlt} style={IMG_STYLE} />
    </Box>
  );
}
