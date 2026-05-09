import { Typography } from '@mui/material';

const SX = { color: 'text.secondary', maxWidth: '600px', margin: 'auto', lineHeight: 1.6 };

export default function IntroParagraph({ children }) {
  return <Typography variant="h6" sx={SX}>{children}</Typography>;
}
