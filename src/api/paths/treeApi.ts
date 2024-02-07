import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFullUrl } from "../../utils/urls";
import { TreeType } from "../types";

export const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({ baseUrl: getFullUrl() + 'trees/' }),
    endpoints: (builder) => ({
        getTrees: builder.query<Array<TreeType>, void>({
            query: () => 'get/',
        }),
        getTree: builder.query<TreeType, number>({
            query: (id) => `get/${id}`,
        }),
        getPolygonTrees: builder.query<Array<TreeType>, number>({
            query: (id) => `get/polygon_id=${id}`,
        }),
    }),
});


export const {
    useGetTreesQuery,
    useGetTreeQuery,
    useGetPolygonTreesQuery,
} = treeApi;