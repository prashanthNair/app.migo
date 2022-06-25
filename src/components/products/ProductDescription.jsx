import { Box } from '@mui/material';
import { H3 } from 'components/Typography';
import React from 'react'; // ======================================================

// ======================================================
const ProductDescription = (data) => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: {data?.ProductBrand} <br />
        Model: {data?.ProductBrand} <br />
        {data?.ProductDescription}
        <br />
        {data?.CountryOfOrigin} <br />
      </Box>
    </Box>
  );
};

export default ProductDescription;
