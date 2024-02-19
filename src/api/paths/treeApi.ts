import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFullUrl } from "../../utils/urls";
import { TreeType } from "../types";

export const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getTrees: builder.query<Array<TreeType>, void>({
            query: () => 'trees/',
        }),
        getTree: builder.query<TreeType, number>({
            query: (id) => `trees/${id}`,
        }),
        getPolygonTrees: builder.query<Array<TreeType>, number>({
            query: (id) => `trees?polygon_id=${id}`,
        }),
    }),
});


export const {
    useGetTreesQuery,
    useGetTreeQuery,
    useGetPolygonTreesQuery,
} = treeApi;