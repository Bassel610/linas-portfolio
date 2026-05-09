import { List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { NAV_PAGES } from '../../constants/navigation';
import { getDrawerItemStyles } from '../../lib/navItemStyles';
import { COLORS } from '../../constants/colors';

const ITEM_SX = { cursor: 'pointer', textDecoration: 'none', '&:hover': { backgroundColor: COLORS.primaryAlpha10 } };

export default function NavDrawerLinks({ onItemClick }) {
  const { pathname } = useLocation();
  return (
    <List>
      {NAV_PAGES.map((p) => (
        <ListItem key={p.path} component={Link} to={p.path} onClick={onItemClick} sx={ITEM_SX}>
          <ListItemText primary={p.name} sx={getDrawerItemStyles(pathname === p.path)} />
        </ListItem>
      ))}
    </List>
  );
}
