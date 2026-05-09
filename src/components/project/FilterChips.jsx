import { Stack } from '@mui/material';
import FilterChip from '../../atoms/FilterChip';
import { PROJECT_CATEGORIES } from '../../constants/navigation';

export default function FilterChips({ selected, onSelect }) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
      {PROJECT_CATEGORIES.map((c) => (
        <FilterChip key={c} category={c} isActive={selected === c} onClick={() => onSelect(c)} />
      ))}
    </Stack>
  );
}
