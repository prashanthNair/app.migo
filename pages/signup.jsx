import { FlexRowCenter } from 'components/flex-box';
import Signup from '../src/components/sessions/Signup';
import React from 'react';

const SignUpPage = () => {
  return (
    <FlexRowCenter flexDirection='column' minHeight='100vh'>
      <Signup />
    </FlexRowCenter>
  );
};

export default SignUpPage;
