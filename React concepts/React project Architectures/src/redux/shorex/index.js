import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../config';

function prepareHeaders(headers, { getState }) {
  headers.set('WebLocation', window.location.href);

  const state = getState();
  const token = state?.global?.data?.token;
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
}

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders,
});

const shorexApi = createApi({
  reducerPath: 'shorexApi',
  baseQuery,
  tagTypes: [
    'todo',
  ],
  endpoints: () => ({}),
});

export { shorexApi }
