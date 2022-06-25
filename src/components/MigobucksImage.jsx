import { compose, display, spacing, styled } from '@mui/system';
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
