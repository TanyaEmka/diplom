import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { getFullUrl } from "../../utils/urls";
import { SigninType, SignupType } from "../types";

export const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: getFullUrl() + 'auth/' }),
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