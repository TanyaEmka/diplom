import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SigninType, SignupType, SigninResponse } from "../types";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
        login: builder.mutation<SigninResponse, SigninType>({
            query: (params: SigninType) => ({
                url: 'login/',
                method: 'POST',
                body: { ...params }
            }),
        }),
        logout: builder.query<string, SignupType>({
            query: (params: SignupType) => 'logout/',
        }),
    }),
});

export const {
    useLoginMutation
} = userApi;