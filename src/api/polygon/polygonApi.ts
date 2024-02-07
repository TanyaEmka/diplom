import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const polygonApi = createApi({
    reducerPath: 'polygonApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/gis/api/v1/polygons/' }),
    endpoints: (builder) => ({
        getPolygons: builder.query<Array<PolygonType>, void>({
            query: () => 'get',
        }),
        getPolygon: builder.query<PolygonType, number>({
            query: (id) => `get/${id}`,
        }),
    }),
});


export const {
    useGetPolygonsQuery,
    useGetPolygonQuery,
} = polygonApi;