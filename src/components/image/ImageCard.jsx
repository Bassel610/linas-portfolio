import { Box, Skeleton } from '@mui/material';
import { useRef, useState } from 'react';
import ImageHoverInfo from './ImageHoverInfo';
import { useDominantColor } from '../../hooks/useDominantColor';
import { useImageHover } from '../../hooks/useImageHover';
import { IMAGE_DEFAULTS } from '../../constants/pageContent';

export default function ImageCard({
  src, height = '300px', width = '100%', isBorder = false, margin = '0',
  showDescription = false, alt = IMAGE_DEFAULTS.alt, sx = {},
  projectData = null, description = IMAGE_DEFAULTS.description,
}) {
  const imgRef = useRef(null);
  const boxRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const dominantColor = useDominantColor(imgRef, loaded);
  const { isHovered, onEnter, onLeave } = useImageHover(showDescription, imgRef, boxRef);

  const wrapSx = {
    width, height, margin, position: 'relative',
    border: isBorder ? `4px solid ${dominantColor}` : 'none',
    borderRadius: 2, overflow: 'hidden', transition: 'all 0.3s ease',
    cursor: showDescription ? 'pointer' : 'default',
    '&:hover': {
      transform: showDescription ? 'scale(1.02)' : 'none',
      boxShadow: showDescription ? '0 8px 25px rgba(0,0,0,0.15)' : 'none',
    },
    ...sx,
  };
  const imgStyle = { objectFit: 'cover', display: loaded ? 'block' : 'none' };

  return (
    <Box sx={wrapSx} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {!loaded && <Skeleton variant="rectangular" width="100%" height="100%" sx={{ position: 'absolute', inset: 0 }} />}
      <img ref={imgRef} src={src} alt={alt} width="100%" height="100%" style={imgStyle} onLoad={() => setLoaded(true)} />
      {showDescription && (
        <ImageHoverInfo open={isHovered} dominantColor={dominantColor} project={projectData} fallbackDescription={description} boxRef={boxRef} />
      )}
    </Box>
  );
}
