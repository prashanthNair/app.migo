import { Box, Button, Card, Divider, Stack, TextField } from '@mui/material';
import VendorDashboardLayout from 'components/layouts/vendor-dashboard';
import { H3, Paragraph } from 'components/Typography';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
const cardInitialValues = {
  amount: '$250',
  cardCvc: '255',
  cardNo: '12345678910',
  cardHolderName: 'Gage Paquette',
};
const accountInitialValues = {
  amount: '$250',
  routingNo: '255',
  accountNo: '12345678910',
  accountHolderName: 'Gage Paquette',
};
const validationSchema = Yup.object().shape({
  cardCvc: Yup.number().required('Card CVC is required!'),
  amount: Yup.string().required('Amount is required!'),
  cardNo: Yup.string().required('Card No is required!'),
  cardHolderName: Yup.string().required('Card Holder Name is required!'),
});
const accountValidateSchema = Yup.object().shape({
  routingNo: Yup.number().required('Routing No is required!'),
  amount: Yup.string().required('Amount is required!'),
  accountNo: Yup.string().required('Account No is required!'),
  accountHolderName: Yup.string().required('Acc. Holder Name is required!'),
}); // =============================================================================

PayoutSettings.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function PayoutSettings() {
  // pay via card form handler
  const handleCardPaymentSubmit = (values) => {}; // pay via bank account form handler

  const handleAccountPaymentSubmit = (values) => {};

  return (
    <Box py={4} maxWidth={740} margin='auto'>
      <H3 mb={2}>Payout Settings</H3>

      <Card
        sx={{
          p: 3,
        }}
      >
        <Paragraph fontWeight={700} mb={4}>
          Cash Payment
        </Paragraph>

        <TextField
          fullWidth
          color='info'
          size='medium'
          name='amount'
          label='Amount'
          defaultValue='$250'
          sx={{
            mb: 3,
          }}
        />

        <Button type='submit' color='info' variant='contained'>
          Save Changes
        </Button>

        <Divider
          sx={{
            my: 4,
          }}
        />

        <Paragraph fontWeight={700} mb={4}>
          Card Payment
        </Paragraph>

        <Formik
          initialValues={cardInitialValues}
          onSubmit={handleCardPaymentSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} mb={3}>
                <TextField
                  color='info'
                  size='medium'
                  name='amount'
                  label='Amount'
                  onBlur={handleBlur}
                  value={values.amount}
                  onChange={handleChange}
                  helperText={touched.amount && errors.amount}
                  error={Boolean(errors.amount && touched.amount)}
                />

                <TextField
                  color='info'
                  size='medium'
                  onBlur={handleBlur}
                  name='cardHolderName'
                  onChange={handleChange}
                  label='Card Holder Name'
                  value={values.cardHolderName}
                  helperText={touched.cardHolderName && errors.cardHolderName}
                  error={Boolean(
                    errors.cardHolderName && touched.cardHolderName
                  )}
                />

                <TextField
                  color='info'
                  size='medium'
                  name='cardNo'
                  label='Card No'
                  onBlur={handleBlur}
                  value={values.cardNo}
                  onChange={handleChange}
                  helperText={touched.cardNo && errors.cardNo}
                  error={Boolean(errors.cardNo && touched.cardNo)}
                />

                <TextField
                  color='info'
                  size='medium'
                  name='cardCvc'
                  label='Card CVC'
                  onBlur={handleBlur}
                  value={values.cardCvc}
                  onChange={handleChange}
                  helperText={touched.cardCvc && errors.cardCvc}
                  error={Boolean(errors.cardCvc && touched.cardCvc)}
                />
              </Stack>

              <Button type='submit' color='info' variant='contained'>
                Save Changes
              </Button>
            </form>
          )}
        </Formik>

        <Divider
          sx={{
            my: 4,
          }}
        />

        <Paragraph fontWeight={700} mb={4}>
          Bank Payment
        </Paragraph>

        <Formik
          initialValues={accountInitialValues}
          onSubmit={handleAccountPaymentSubmit}
          validationSchema={accountValidateSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} mb={3}>
                <TextField
                  color='info'
                  size='medium'
                  name='amount'
                  label='Amount'
                  onBlur={handleBlur}
                  value={values.amount}
                  onChange={handleChange}
                  helperText={touched.amount && errors.amount}
                  error={Boolean(errors.amount && touched.amount)}
                />

                <TextField
                  color='info'
                  size='medium'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name='accountHolderName'
                  label='Account Holder Name'
                  value={values.accountHolderName}
                  helperText={
                    touched.accountHolderName && errors.accountHolderName
                  }
                  error={Boolean(
                    errors.accountHolderName && touched.accountHolderName
                  )}
                />

                <TextField
                  color='info'
                  size='medium'
                  name='accountNo'
                  label='Account No'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.accountNo}
                  helperText={touched.accountNo && errors.accountNo}
                  error={Boolean(errors.accountNo && touched.accountNo)}
                />

                <TextField
                  color='info'
                  size='medium'
                  name='routingNo'
                  label='Routing No'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.routingNo}
                  helperText={touched.routingNo && errors.routingNo}
                  error={Boolean(errors.routingNo && touched.routingNo)}
                />
              </Stack>

              <Button type='submit' color='info' variant='contained'>
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}
