import { Box, Stack } from '@mui/material';
import { useMainContext } from '../context';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import TextCenterBlock from '../components/TextCenterBlock';
import ContactForm from './ContactForm';
import ContactSidebar from './ContactSidebar';
import { SEO_CONTACT } from '../constants/seo';
import { SECTION_TITLES, CONTACT_COPY } from '../constants/pageContent';

const GRID_SX = {
  display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
  gap: { xs: 4, md: 6 }, width: { xs: '95%', md: '85%' }, margin: 'auto',
};

export default function ContactMe() {
  const { img11 } = useMainContext();
  return (
    <Stack spacing={6} sx={{ py: 4 }}>
      <SEO {...SEO_CONTACT} />
      <SectionTitle title={SECTION_TITLES.contactMe} />
      <TextCenterBlock text={CONTACT_COPY.intro} />
      <Box sx={GRID_SX}>
        <ContactForm />
        <ContactSidebar portrait={img11} />
      </Box>
    </Stack>
  );
}
