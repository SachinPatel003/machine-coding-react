import { isRejectedWithValue } from '@reduxjs/toolkit';

const globalErrorHandlerMiddleware = () => (next) => async (action) => {
  if (!isRejectedWithValue(action)) {
    return next(action);
  }

  // Handle specific tasks based on the error code
  const { payload } = action;
  if (payload?.status === 401 || payload?.status === 403) {
    console.log('Apis are Unauthorized');
  }

  return next(action);
};

export { globalErrorHandlerMiddleware }
