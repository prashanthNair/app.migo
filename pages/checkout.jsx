import { Container, Grid } from '@mui/material';
import CheckoutInfo from '../src/components/checkout/CheckoutInfo';
import CheckoutBreakOut from '../src/components/checkout/CheckoutBreakOut';
import AppLayout from '../src/components/layouts/AppLayout';

const CheckoutAlternative = () => {
  return (
    <AppLayout>
      <Container
        sx={{
          my: '1.5rem',
        }}
      >
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} xs={12}>
            <CheckoutInfo />
          </Grid>

          <Grid item lg={4} md={4} xs={12}>
            <CheckoutBreakOut />
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default CheckoutAlternative;
