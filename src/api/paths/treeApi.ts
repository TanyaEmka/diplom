import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TreeType } from "@api/types";

export const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
        getTrees: builder.query<{ trees: Array<TreeType>}, void>({
            query: () => 'trees/',
        }),
        getTree: builder.query<TreeType, number>({
            query: (id) => `trees/${id}`,
        }),
        getPolygonTrees: builder.query<{ trees: Array<TreeType> }, number>({
            query: (id) => `trees?polygon_id=${id}`,
        }),
    }),
});


export const {
    useGetTreesQuery,
    useGetTreeQuery,
    useGetPolygonTreesQuery,
} = treeApi;