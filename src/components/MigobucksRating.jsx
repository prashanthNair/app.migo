import { Rating } from '@mui/material';
import { compose, spacing, typography } from '@mui/system';

import { styled } from '@mui/material/styles';
const MigobucksRating = styled(Rating)(compose(spacing, typography));
MigobucksRating.defaultProps = {
  fontSize: '1.25rem',
};
export default MigobucksRating;
