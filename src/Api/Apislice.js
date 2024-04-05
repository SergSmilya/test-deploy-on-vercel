import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wineApi = createApi({
  reducerPath: 'wineApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://back.wineyard.space:8000/api/' }),
  endpoints: (builder) => ({
    getWineById: builder.query({
      query: (id) => `goods/${id}`,
    }),
  }),
})

export const {useGetWineByIdQuery} = wineApi;