import { Box, Stack } from '@mui/material';
import { useMainContext } from '../context';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import ProjectGrid from '../components/project/ProjectGrid';
import OutlineButton from '../atoms/OutlineButton';
import AboutBio from './AboutBio';
import { SEO_ABOUT } from '../constants/seo';
import { SECTION_TITLES, BUTTON_LABELS } from '../constants/pageContent';

export default function AboutMe() {
  const { projectData, img11 } = useMainContext();
  return (
    <Stack spacing={4} sx={{ py: 4 }}>
      <SEO {...SEO_ABOUT} />
      <SectionTitle title={SECTION_TITLES.aboutMe} />
      <AboutBio portrait={img11} />
      <SectionTitle title={SECTION_TITLES.featuredWork} />
      <ProjectGrid projects={projectData.slice(0, 6)} width="80%" />
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <OutlineButton to="/work">{BUTTON_LABELS.viewAllProjects}</OutlineButton>
      </Box>
    </Stack>
  );
}
