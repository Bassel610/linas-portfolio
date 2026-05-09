import { Stack } from '@mui/material';
import FooterSocialIcon from '../../atoms/FooterSocialIcon';
import { SOCIAL_LINKS } from '../../constants/contact';

export default function FooterSocialList() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {SOCIAL_LINKS.map((s) => (
        <FooterSocialIcon key={s.href} Icon={s.icon} href={s.href} ariaLabel={s.ariaLabel} />
      ))}
    </Stack>
  );
}
