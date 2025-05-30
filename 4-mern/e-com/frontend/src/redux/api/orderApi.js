
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1", credentials:"include"}),
    keepUnusedDataFor: 60,
    endpoints: (builder) => ({
        createNewOrder:builder.mutation({
            query(body){
                return{
                    url:"/orders/new",
                    method:"POST",
                    body
                }
            }
        }),
        myOrder:builder.query({
            query:() => `/me/orders`
        }),
        orderDetails:builder.query({
            query:(id) => `/orders/${id}`
        }),
        stripeCheckoutSession:builder.mutation({
            query(body){
                return{
                    url:"/payment/checkout_session",
                    method:"POST",
                    body
                }
            }
        })
        
    })
})

export const { useCreateNewOrderMutation, useStripeCheckoutSessionMutation, useMyOrderQuery, useOrderDetailsQuery } = orderApi;