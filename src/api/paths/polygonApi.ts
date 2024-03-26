import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getFullUrl } from '../../utils/urls';
import { PolygonType } from '../types';

export const polygonApi = createApi({
    reducerPath: 'polygonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
        getPolygons: builder.query<{ polygons: Array<PolygonType>}, void>({
            query: () => 'polygons/',
        }),
        getPolygon: builder.query<PolygonType, number>({
            query: (id) => `polygons/${id}`,
        }),
    }),
});


export const {
    useGetPolygonsQuery,
    useGetPolygonQuery,
} = polygonApi;