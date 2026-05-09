import { Box, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavDrawerLinks from './NavDrawerLinks';

export default function NavDrawer({ open, onClose }) {
  return (
    <Drawer variant="temporary" anchor="right" open={open} onClose={onClose} ModalProps={{ keepMounted: true }}>
      <Box sx={{ width: 250, pt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>
        <NavDrawerLinks onItemClick={onClose} />
      </Box>
    </Drawer>
  );
}
