
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1",credentials:"include"}),
    keepUnusedDataFor: 60,
    tagTypes:["Product"],
    endpoints: (builder) => ({
        getProducts:builder.query({
            query:(params) => ({
                url:"/products",
                params:{
                    page:params?.page,
                    keyword:params?.keyword,
                    category:params?.category,
                    "price[gte]":params.min,
                    "price[lte]":params.max,
                    "ratings[gte]":params.ratings,
                }
            })
        }),
        getProductDetails:builder.query({
            query:(id) => `/products/${id}`,
            providesTags:["Product"]
        }),
        submitReview:builder.mutation({
            query(body){
                return{
                    url:"/reviews",
                    method:"PUT",
                    body
                }
            },
            invalidatesTags:["Product"]
        }),
        canUserReview:builder.query({
            query:(productId) => `/can_review/?productId=${productId}`,
        }),
        getAdminProducts:builder.query({
            query:() => `admin/products`,
        })
    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery, useSubmitReviewMutation, useCanUserReviewQuery, useGetAdminProductsQuery} = productApi;