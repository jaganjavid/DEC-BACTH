
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setIsAuthenticated, setUser } from '../features/userSlice';

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1", credentials:"include"}),
    keepUnusedDataFor: 60,
    endpoints: (builder) => ({
        getMe:builder.query({
            query:() => "/me",
            transformResponse:(result) => result.user,
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled;
                    console.log(data);
                    dispatch(setUser(data.user))
                    dispatch(setIsAuthenticated(true))
                }catch(error){
                    console.log(error);
                }
            }
        }),
    })
})

export const { useGetMeQuery } = userApi;