import { Stack, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BrandLogo from '../../atoms/BrandLogo';
import NavLinks from './NavLinks';
import NavDrawer from './NavDrawer';
import { COLORS } from '../../constants/colors';

const BAR_SX = {
  bgcolor: COLORS.secondary, boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  position: 'sticky', top: 0, zIndex: 1000,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
  const toggle = () => setOpen((v) => !v);
  return (
    <>
      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" px={3} py={2} sx={BAR_SX}>
        <BrandLogo />
        {isMobile
          ? <IconButton onClick={toggle} sx={{ color: '#333' }} aria-label="open drawer"><MenuIcon /></IconButton>
          : <NavLinks />}
      </Stack>
      <NavDrawer open={open} onClose={toggle} />
    </>
  );
}
