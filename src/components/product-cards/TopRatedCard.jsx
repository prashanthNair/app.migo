import { Box } from '@mui/material';
import MigobucksRating from 'components/MigobucksRating';
import { FlexRowCenter } from 'components/flex-box';
import HoverBox from 'components/HoverBox';
import LazyImage from 'components/LazyImage';
import { H4, Small } from 'components/Typography';
import React from 'react';

const TopRatedCard = ({
  ImageUrl,
  Rating,
  Tittle,
  SellingPrice,
  ReviewCount = 0,
}) => {
  return (
    <Box>
      <HoverBox mb={2} mx='auto' borderRadius='8px'>
        <LazyImage
          src={ImageUrl || ''}
          width={0}
          height={0}
          layout='responsive'
          alt={Tittle}
          mx='auto'
        />
      </HoverBox>

      <FlexRowCenter mb={0.5}>
        <MigobucksRating value={Rating} color='warn' readOnly />
        <Small fontWeight={600} pl={0.5}>
          ({ReviewCount})
        </Small>
      </FlexRowCenter>

      <H4 fontSize={14} textAlign='center' mb={0.5} title={Tittle} ellipsis>
        {Tittle}
      </H4>
      <H4 fontSize={14} textAlign='center' color='primary.main'>
        ${Math.ceil(SellingPrice).toLocaleString()}
      </H4>
    </Box>
  );
};

export default TopRatedCard;
