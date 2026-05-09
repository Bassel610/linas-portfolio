import { Box } from '@mui/material';
import { useMainContext } from '../context';
import ImageCard from '../components/image/ImageCard';
import BioParagraph from '../atoms/BioParagraph';
import PrimaryButton from '../atoms/PrimaryButton';
import { HOME_COPY, BUTTON_LABELS } from '../constants/pageContent';

const WRAP_SX = {
  display: 'flex', flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center', gap: 4, width: '85%', margin: 'auto',
};

export default function AboutPreview() {
  const { img11 } = useMainContext();
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={WRAP_SX}>
        <Box flex={1}>
          <BioParagraph paragraphs={HOME_COPY.aboutIntro} sx={{ mb: 3 }} />
          <PrimaryButton to="/about">{BUTTON_LABELS.learnMore}</PrimaryButton>
        </Box>
        <ImageCard src={img11} width={{ xs: '100%', md: '450px' }} height="350px" alt="Interior designer portrait" sx={{ borderRadius: 3 }} />
      </Box>
    </Box>
  );
}
