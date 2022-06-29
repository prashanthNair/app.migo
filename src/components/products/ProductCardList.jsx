import { Grid, Pagination } from '@mui/material';
import { FlexBetween } from 'components/flex-box';
import ProductCard from 'components/product-cards/ProductCard';
import { Span } from 'components/Typography';
import productDatabase from 'data/product-database';
import React, { Fragment } from 'react'; // ========================================================

// ========================================================
const ProductCardList = () => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        {productDatabase.slice(95, 104).map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>

      <FlexBetween flexWrap='wrap' mt={4}>
        <Span color='grey.600'>Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant='outlined' color='primary' />
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCardList;
