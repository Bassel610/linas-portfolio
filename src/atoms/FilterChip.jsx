import { Chip } from '@mui/material';
import { getChipStyles } from '../lib/chipStyles';
import { formatCategory } from '../lib/formatCategory';

export default function FilterChip({ category, isActive, onClick }) {
  return (
    <Chip
      label={formatCategory(category)}
      onClick={onClick}
      variant={isActive ? 'filled' : 'outlined'}
      sx={getChipStyles(isActive)}
    />
  );
}
