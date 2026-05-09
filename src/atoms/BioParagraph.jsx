import { Typography } from '@mui/material';
import { Fragment } from 'react';

const SX = { lineHeight: 1.8, fontSize: '1.1rem', color: 'text.secondary' };

export default function BioParagraph({ paragraphs, sx }) {
  return (
    <Typography variant="body1" sx={{ ...SX, ...sx }}>
      {paragraphs.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <><br /><br /></>}
          {p}
        </Fragment>
      ))}
    </Typography>
  );
}
