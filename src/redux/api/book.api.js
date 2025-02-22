import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: (params) => ({
        url: "/books",
        method: "GET",
        params
      }),
      providesTags: ["books"]
    }),
    createBook: build.mutation({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body
      }),
      invalidatesTags: ["books"]
    }),
    deleteBook: build.mutation({
      query: (id)=> ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"]
    })
  }),
  overrideExisting: false,
})

export const { useGetBooksQuery, useCreateBookMutation, useDeleteBookMutation } = extendedApi