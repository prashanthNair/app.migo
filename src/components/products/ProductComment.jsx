import { Box } from '@mui/material';
import MigobucksAvatar from 'components/MigobucksAvatar';
import MigobucksRating from 'components/MigobucksRating';
import { FlexBox } from 'components/flex-box';
import { H5, H6, Paragraph, Span } from 'components/Typography';
import React from 'react';
import { getDateDifference } from 'utils/utils';

const ProductComment = ({ name, imgUrl, rating, date, comment }) => {
  return (
    <Box mb={4} maxWidth='600px'>
      <FlexBox alignItems='center' mb={2}>
        <MigobucksAvatar src={imgUrl} height={48} width={48} />
        <Box ml={2}>
          <H5 mb={0.5}>{name}</H5>
          <FlexBox alignItems='center'>
            <MigobucksRating value={rating} color='warn' readOnly />
            <H6 mx={1.25}>{rating}</H6>
            <Span>{getDateDifference(date)}</Span>
          </FlexBox>
        </Box>
      </FlexBox>

      <Paragraph color='grey.700'>{comment}</Paragraph>
    </Box>
  );
};

export default ProductComment;
