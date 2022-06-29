import { Box } from '@mui/material';
import MigobucksAvatar from 'components/MigobucksAvatar';
import MigobucksRating from 'components/MigobucksRating';
import { FlexBox } from 'components/flex-box';
import { H5, H6, Paragraph, Span } from 'components/Typography';
import React from 'react';
import { getDateDifference } from 'utils/utils';

const ProductComment = ({
  CustomerName,
  ProfileUrl,
  Rating,
  CreatedAt,
  Comments,
}) => {
  return (
    <Box mb={4} maxWidth='600px'>
      <FlexBox alignItems='center' mb={2}>
        <MigobucksAvatar src={ProfileUrl} height={48} width={48} />
        <Box ml={2}>
          <H5 mb={0.5}>{CustomerName}</H5>
          <FlexBox alignItems='center'>
            <MigobucksRating value={Rating} color='warn' readOnly />
            <H6 mx={1.25}>{Rating}</H6>
            <Span>{getDateDifference(CreatedAt)}</Span>
          </FlexBox>
        </Box>
      </FlexBox>

      <Paragraph color='grey.700'>{Comments}</Paragraph>
    </Box>
  );
};

export default ProductComment;
