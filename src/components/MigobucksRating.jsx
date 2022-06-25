import { Rating } from '@mui/material';
import { compose, spacing, styled, typography } from '@mui/system';
const MigobucksRating = styled(Rating)(compose(spacing, typography));
MigobucksRating.defaultProps = {
  fontSize: '1.25rem',
};
export default MigobucksRating;
