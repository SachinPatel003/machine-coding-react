import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { shorexApi } from './shorex/index';
import { globalErrorHandlerMiddleware } from './middleware';
import globelDataReducer from './common/global-data'
import counterReducer from './shorex/slice/counterSlice'

const store = configureStore({
  reducer: {
    global: globelDataReducer,
    counter: counterReducer,
    [shorexApi.reducerPath]: shorexApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(shorexApi.middleware)
    .concat(globalErrorHandlerMiddleware),
  devTools: { trace: true, traceLimit: 25 },
});

setupListeners(store.dispatch)

export { store };
