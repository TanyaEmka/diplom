import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/gis/api/v1/auth/' }),
    endpoints: (builder) => ({
        signin: builder.query<string, SigninType>({
            query: (params: SigninType) => 'signin/',
        }),
        signup: builder.query<string, SignupType>({
            query: (params: SignupType) => 'signup/',
        }),
    }),
});


export const {
} = authApi;