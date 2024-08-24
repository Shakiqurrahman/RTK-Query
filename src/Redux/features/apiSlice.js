import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl : "https://localhost:3000/api/v1"
    }),
    endpoints : (builder) => {
        getProducts : builder.query({
            query : () => 'query'
        })
    }
})

export const { useGetProductsQuery } = apiSlice;