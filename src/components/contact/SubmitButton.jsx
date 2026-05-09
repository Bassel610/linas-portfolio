import { Button } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { SUBMIT_BUTTON_SX } from '../../lib/buttonStyles';
import { CONTACT_COPY } from '../../constants/pageContent';

export default function SubmitButton({ submitting }) {
  return (
    <Button type="submit" variant="contained" disabled={submitting} sx={SUBMIT_BUTTON_SX}>
      {submitting && <ClipLoader color="white" size={16} cssOverride={{ marginRight: 8 }} />}
      {submitting ? CONTACT_COPY.submittingLabel : CONTACT_COPY.submitLabel}
    </Button>
  );
}
