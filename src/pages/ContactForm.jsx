import { Box, Paper, Stack, Alert } from '@mui/material';
import AccentTitle from '../atoms/AccentTitle';
import ContactFormFields from '../components/contact/ContactFormFields';
import SubmitButton from '../components/contact/SubmitButton';
import { useContactForm } from '../hooks/useContactForm';
import { CONTACT_COPY } from '../constants/pageContent';

export default function ContactForm() {
  const { formData, errors, isSubmitting, submitSuccess, onChange, onSubmit } = useContactForm();
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <AccentTitle>{CONTACT_COPY.formTitle}</AccentTitle>
      {submitSuccess && <Alert severity="success" sx={{ mb: 3 }}>{CONTACT_COPY.successMessage}</Alert>}
      <Box component="form" onSubmit={onSubmit}>
        <Stack spacing={3}>
          <ContactFormFields values={formData} errors={errors} onChange={onChange} />
          <SubmitButton submitting={isSubmitting} />
        </Stack>
      </Box>
    </Paper>
  );
}
