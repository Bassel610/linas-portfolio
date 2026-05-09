import { Stack } from '@mui/material';
import ContactInfoLink from '../../atoms/ContactInfoLink';
import { CONTACT_INFO } from '../../constants/contact';

export default function ContactInfoList() {
  return (
    <Stack spacing={2}>
      {CONTACT_INFO.map((c) => (
        <ContactInfoLink key={c.href} Icon={c.icon} label={c.label} href={c.href} />
      ))}
    </Stack>
  );
}
