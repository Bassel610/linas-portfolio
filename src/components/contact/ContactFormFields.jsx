import { Stack, TextField, MenuItem } from '@mui/material';
import { FORM_FIELDS } from '../../constants/pageContent';
import { PROJECT_TYPES } from '../../constants/contact';

export default function ContactFormFields({ values, errors, onChange }) {
  const f = FORM_FIELDS;
  return (
    <Stack spacing={3}>
      <TextField fullWidth required {...f.name} value={values.name} onChange={onChange} error={!!errors.name} helperText={errors.name} />
      <TextField fullWidth required {...f.email} value={values.email} onChange={onChange} error={!!errors.email} helperText={errors.email} />
      <TextField fullWidth {...f.phone} value={values.phone} onChange={onChange} />
      <TextField fullWidth select {...f.projectType} value={values.projectType} onChange={onChange}>
        {PROJECT_TYPES.map((t) => <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>)}
      </TextField>
      <TextField fullWidth required multiline rows={4} {...f.message} value={values.message} onChange={onChange} error={!!errors.message} helperText={errors.message || f.message.helperText} />
    </Stack>
  );
}
