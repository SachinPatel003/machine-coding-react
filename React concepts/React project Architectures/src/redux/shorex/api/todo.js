import { shorexApi } from '../index';

const todo = shorexApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get getTodo
    getTodo: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      transformResponse: (res) => res,
      providesTags: ['todo'],
    }),
  }),
  overrideExisting: false,
});

export { todo }

export const {
  useGetTodoQuery,
} = todo;
