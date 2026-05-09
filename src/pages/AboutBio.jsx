import { Box } from '@mui/material';
import BioParagraph from '../atoms/BioParagraph';
import ImageCard from '../components/image/ImageCard';
import { ABOUT_COPY } from '../constants/pageContent';

const WRAP_SX = {
  width: '80%', margin: 'auto', display: 'flex',
  flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center',
};

export default function AboutBio({ portrait }) {
  return (
    <Box sx={WRAP_SX}>
      <Box flex={1}><BioParagraph paragraphs={ABOUT_COPY.bio} /></Box>
      <ImageCard src={portrait} width="500px" height="400px" alt="Interior designer portrait" sx={{ borderRadius: 2 }} />
    </Box>
  );
}
