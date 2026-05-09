import { Box, Stack, Typography, Fade } from '@mui/material';
import { COLORS } from '../../constants/colors';
import { IMAGE_DEFAULTS } from '../../constants/pageContent';

const STACK_SX = {
  position: 'absolute', inset: 0, backgroundColor: COLORS.whiteAlpha95,
  display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3, textAlign: 'center',
};
const CAPTION_SX = { color: 'text.secondary', fontSize: '0.75rem', mb: 2, display: 'block' };
const BODY_SX = { color: 'text.secondary', lineHeight: 1.6, fontSize: '0.9rem' };

export default function ImageHoverInfo({ open, dominantColor, project, fallbackDescription, boxRef }) {
  const title = project?.title || IMAGE_DEFAULTS.projectFallbackTitle;
  return (
    <Fade in={open} timeout={300}>
      <Stack ref={boxRef} sx={STACK_SX}>
        <Box>
          <Typography variant="h6" sx={{ color: dominantColor, fontWeight: 600, mb: 1 }}>{title}</Typography>
          {project?.category && (
            <Typography variant="caption" sx={CAPTION_SX}>{project.category} • {project.year}</Typography>
          )}
          <Typography variant="body2" sx={BODY_SX}>{project?.description || fallbackDescription}</Typography>
        </Box>
      </Stack>
    </Fade>
  );
}
