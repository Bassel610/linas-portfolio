import { Stack } from '@mui/material';
import SocialIconButton from '../../atoms/SocialIconButton';
import { SOCIAL_LINKS } from '../../constants/contact';

export default function SocialIconList({ limit }) {
  const items = limit ? SOCIAL_LINKS.slice(0, limit) : SOCIAL_LINKS;
  return (
    <Stack direction="row" spacing={2}>
      {items.map((s) => (
        <SocialIconButton key={s.href} Icon={s.icon} href={s.href} ariaLabel={s.ariaLabel} />
      ))}
    </Stack>
  );
}
