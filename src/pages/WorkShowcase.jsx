import { Box } from '@mui/material';
import { useMainContext } from '../context';
import ProjectGrid from '../components/project/ProjectGrid';
import OutlineButton from '../atoms/OutlineButton';
import TextCenterBlock from '../components/TextCenterBlock';
import { HOME_COPY, BUTTON_LABELS } from '../constants/pageContent';
import { CARD_HEIGHTS } from '../constants/layout';

export default function WorkShowcase() {
  const { projectData } = useMainContext();
  return (
    <Box sx={{ py: 4 }}>
      <TextCenterBlock text={HOME_COPY.workIntro} />
      <ProjectGrid projects={projectData.slice(0, 6)} height={CARD_HEIGHTS.showcase} width="85%" />
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <OutlineButton to="/work">{BUTTON_LABELS.viewAllProjects}</OutlineButton>
      </Box>
    </Box>
  );
}
