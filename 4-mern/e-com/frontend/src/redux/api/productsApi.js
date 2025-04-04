
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1"}),
    keepUnusedDataFor: 60,
    endpoints: (builder) => ({
        getProducts:builder.query({
            query:(params) => ({
                url:"/products"
            })
        }),
        getProductDetails:builder.query({
            query:(id) => `/products/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;