import { Box } from '@mui/material';
import IntroParagraph from '../atoms/IntroParagraph';

export default function TextCenterBlock({ text, mb = 4 }) {
  return (
    <Box sx={{ textAlign: 'center', mb }}>
      <IntroParagraph>{text}</IntroParagraph>
    </Box>
  );
}
