import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PORT = "3001";

export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${PORT}`,
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useGetDataQuery } = sliderApi;
