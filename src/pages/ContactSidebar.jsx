import { Box, Stack } from '@mui/material';
import AccentTitle from '../atoms/AccentTitle';
import ContactInfoList from '../components/contact/ContactInfoList';
import SocialIconList from '../components/contact/SocialIconList';
import ImageCard from '../components/image/ImageCard';
import { CONTACT_COPY } from '../constants/pageContent';
import { CARD_HEIGHTS } from '../constants/layout';

export default function ContactSidebar({ portrait }) {
  return (
    <Stack spacing={4}>
      <Box>
        <AccentTitle>{CONTACT_COPY.contactTitle}</AccentTitle>
        <ContactInfoList />
      </Box>
      <Box>
        <AccentTitle variant="h6" mb={2}>{CONTACT_COPY.socialTitle}</AccentTitle>
        <SocialIconList limit={3} />
      </Box>
      <ImageCard src={portrait} width="100%" height={CARD_HEIGHTS.about} alt="Interior designer" sx={{ borderRadius: 2 }} />
    </Stack>
  );
}
