import { Box } from '@mui/material';
import ImageCard from '../image/ImageCard';
import { GRID_COLUMNS_3, PAGE_WIDTH } from '../../constants/layout';

export default function ProjectGrid({ projects, height = '300px', gap = 3, width = PAGE_WIDTH.responsive }) {
  const sx = { display: 'grid', gridTemplateColumns: GRID_COLUMNS_3, gap, width, margin: 'auto' };
  return (
    <Box sx={sx}>
      {projects.map((p) => (
        <ImageCard key={p.id} showDescription isBorder src={p.image} width="100%" height={height} alt={p.title} projectData={p} />
      ))}
    </Box>
  );
}
