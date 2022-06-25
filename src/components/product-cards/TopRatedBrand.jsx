import { Box } from '@mui/material';
import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { H4 } from 'components/Typography';
import React from 'react'; // ==========================================================

// ==========================================================
const TopRatedBrand = ({ ImageUrl, Title }) => {
  return (
    <Box>
      <HoverBox borderRadius='5px' mb={1}>
        <LazyImage
          alt={Title}
          width={260}
          src={ImageUrl || ''}
          height={175}
          objectFit='cover'
          layout='responsive'
        />
      </HoverBox>
      <H4 fontSize={14}>{Title}</H4>
    </Box>
  );
};

export default TopRatedBrand;
