import React from 'react';
import { GlobalContextWrapper } from '../context/global-context';

const withGlobalContext = (WrappedComponent) => (props) => (
  <GlobalContextWrapper {...props}><WrappedComponent {...props} /></GlobalContextWrapper>
)

export default withGlobalContext;
