import { Stack, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { NAV_PAGES } from '../../constants/navigation';
import { getNavButtonStyles } from '../../lib/navItemStyles';

export default function NavLinks() {
  const { pathname } = useLocation();
  return (
    <Stack direction="row" spacing={1}>
      {NAV_PAGES.map((p) => (
        <Button key={p.path} component={Link} to={p.path} sx={getNavButtonStyles(pathname === p.path)}>
          {p.name}
        </Button>
      ))}
    </Stack>
  );
}
