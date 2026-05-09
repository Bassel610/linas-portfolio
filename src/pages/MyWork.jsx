import { Box, Stack, Typography, Fade } from '@mui/material';
import { useState } from 'react';
import { useMainContext } from '../context';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import FilterChips from '../components/project/FilterChips';
import ProjectGrid from '../components/project/ProjectGrid';
import TextCenterBlock from '../components/TextCenterBlock';
import { SEO_WORK } from '../constants/seo';
import { SECTION_TITLES, WORK_COPY } from '../constants/pageContent';
import { CARD_HEIGHTS } from '../constants/layout';
import { filterProjectsByCategory } from '../lib/filterProjects';

export default function MyWork() {
  const { projectData } = useMainContext();
  const [filter, setFilter] = useState('all');
  const projects = filterProjectsByCategory(projectData, filter);
  return (
    <Stack spacing={4} sx={{ py: 4 }}>
      <SEO {...SEO_WORK} />
      <SectionTitle title={SECTION_TITLES.myWork} />
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <TextCenterBlock text={WORK_COPY.intro} />
        <FilterChips selected={filter} onSelect={setFilter} />
      </Box>
      <Fade in timeout={500}>
        <Box><ProjectGrid projects={projects} height={CARD_HEIGHTS.workGrid} gap={{ xs: 2, md: 3 }} /></Box>
      </Fade>
      {projects.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary">{WORK_COPY.emptyState}</Typography>
        </Box>
      )}
    </Stack>
  );
}
