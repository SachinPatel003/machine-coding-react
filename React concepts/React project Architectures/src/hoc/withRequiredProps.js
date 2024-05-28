/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { moduleRequiredProps } from '../config';

const withRequiredProps = (WrappedComponent) => (props) => {
  const checkRequiredProps = () => {
    const { module } = props;

    if (!moduleRequiredProps.moduleType.includes(module)) {
      alert('Missing required prop Module')
      return
    }

    const requiredProps = moduleRequiredProps[module];
    const missingProps = requiredProps?.filter((prop) => !(prop in props));

    if (missingProps?.length > 0) {
      alert(`Missing required props: ${missingProps.join(', ')}`);
    }
  };

  useEffect(() => {
    checkRequiredProps();
  }, []);

  return <WrappedComponent {...props} />;
};

export default withRequiredProps;
