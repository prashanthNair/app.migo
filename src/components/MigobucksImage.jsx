import { compose, display, spacing } from '@mui/system';
import { styled } from '@mui/material/styles';
const MigobucksImage = styled('img')(compose(spacing, display));
MigobucksImage.defaultProps = {
  display: 'block',
};
export default MigobucksImage; // compose,
// borders,
// display,
// flexbox,
// palette,
// positions,
// shadows,
// sizing,
// spacing,
// typography
