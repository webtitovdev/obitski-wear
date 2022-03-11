import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PORT = "3001";

export const crudApi = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${PORT}`,
  }),
  tagTypes: ["data"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: (name) => `/${name}`,
      providesTags: ["data"],
    }),
    deleteById: builder.mutation({
      query: (id) => ({
        url: id,
        method: "DELETE",
      }),
      invalidatesTags: ["data"],
    }),
    updateById: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: id,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["data"],
    }),
  }),
});

export const { useGetDataQuery, useDeleteByIdMutation, useUpdateByIdMutation } =
  crudApi;
