import { Box, Typography } from '@mui/material';
import { H3, H6 } from 'components/Typography';
import React from 'react'; // ======================================================

// ======================================================
const ProductDescription = ({ data }) => {
  debugger;
  const { ProductBrand, CountryOfOrigin, KeyPoints } = data;
  const { ModelName } = data?.VariantInfo || '';
  const fields = Object.keys(data?.VariantInfo);
  return (
    <Box>
      <H3 mb={2}>About this item:</H3>
      <Box>
        {data?.ProductDescription} <br />
      </Box>
      <Box display={'flex'} mt={2}>
        <H6 mr={2}> Brand:</H6> {ProductBrand} <br />
      </Box>
      <Box display={'flex'}>
        <H6 mr={2}>Model:</H6> {ModelName} <br />
      </Box>
      <Box display={'flex'}>
        <H6 mr={2}>Origin:</H6> {CountryOfOrigin} <br />
      </Box>

      <H3 mt={2} mb={2}>
        Specification:
      </H3>
      <Box>
        {fields?.map((x) => {
          return (
            <>
              {`${x}: ${data.VariantInfo[x]}`} <br />
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductDescription;
