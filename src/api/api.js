import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl =
//   process.env.NODE_ENV === "development"
//     ? "https://localhost:3001/api"
//     : "https://obitski.herokuapp.com/api";

export const crudApi = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://obitski.herokuapp.com/",
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
    addNewItem: builder.mutation({
      query(data) {
        const { getDataParams, ...body } = data;
        return {
          url: `${getDataParams}`,
          method: "POST",
          body,
        };
      },
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

export const {
  useGetDataQuery,
  useDeleteByIdMutation,
  useUpdateByIdMutation,
  useAddNewItemMutation,
} = crudApi;
