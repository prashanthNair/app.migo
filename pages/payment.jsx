import { Grid } from '@mui/material';
import CheckoutNavLayout from 'components/layouts/CheckoutNavLayout';
import PaymentForm from '../src/components/payment/PaymentForm';
import PaymentSummary from '../src/components/payment/PaymentSummary';
import React from 'react';

const Checkout = () => {
  return (
    <CheckoutNavLayout>
      <Grid container flexWrap='wrap-reverse' spacing={3}>
        <Grid item lg={8} md={8} xs={12}>
          <PaymentForm />
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <PaymentSummary />
        </Grid>
      </Grid>
    </CheckoutNavLayout>
  );
};

export default Checkout;
