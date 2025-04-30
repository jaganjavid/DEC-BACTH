
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setIsAuthenticated, setUser,setLoading } from '../features/userSlice';

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1", credentials:"include"}),
    keepUnusedDataFor: 60,
    tagTypes:["User"],
    endpoints: (builder) => ({
        getMe:builder.query({
            query:() => "/me",
            // transformResponse:(result) => result.user,
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled;
                    dispatch(setUser(data.user))
                    dispatch(setIsAuthenticated(true))
                    dispatch(setLoading(false));
                }catch(error){
                    console.log(error);
                    dispatch(setLoading(false));
                }
            },
            providesTags:["User"]
        }),
        updateProfile: builder.mutation({
            query:(body) => ({
                url:"/me/update",
                method:"PUT",
                body
            }),
            invalidatesTags:["User"]
        }),
        uploadAvatar: builder.mutation({
            query:(body) => ({
                url:"/me/upload_avatar",
                method:"PUT",
                body
            }),
            invalidatesTags:["User"]
        }),
        updatePassword: builder.mutation({
            query:(body) => ({
                url:"/password/update",
                method:"PUT",
                body
            }),
            invalidatesTags:["User"]
        })
    })
})

export const { useGetMeQuery, useUpdateProfileMutation, useUploadAvatarMutation, useUpdatePasswordMutation} = userApi;