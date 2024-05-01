import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getFullUrl } from '../../utils/urls';
import { PolygonType } from '../types';

export const polygonApi = createApi({
    reducerPath: 'polygonApi',
    tagTypes: ['Polygon', 'Polygons'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
        getPolygons: builder.query<{ polygons: Array<PolygonType>}, void>({
            query: () => 'polygons/',
            providesTags: ['Polygons']
        }),
        getSearchPolygons: builder.query<{ polygons: Array<PolygonType>}, { queryStr: string }>({
            query: (queryStr) => `polygons/search?query=${queryStr}`,
            providesTags: ['Polygons']
        }),
        getPolygon: builder.query<{ polygon: PolygonType }, number>({
            query: (id) => `polygons/${id}`,
            providesTags: ['Polygon'],
        }),
        updatePolygon: builder.mutation<PolygonType, { id: number, attrs: any }>({
            query: (params) => ({
                url: `polygons/${params.id}`,
                method: 'PATCH',
                body: { ...params.attrs }
            }),
            invalidatesTags: ['Polygon', 'Polygons']
        }),
        deletePolygon: builder.mutation<PolygonType, { id: number }>({
            query: (params) => ({
                url: `polygons/${params.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Polygon', 'Polygons']
        }),
        addPolygon: builder.mutation<PolygonType, { attrs: any }>({
            query: (params) => ({
                url: `polygons`,
                method: 'POST',
                body: { ...params.attrs }
            }),
            invalidatesTags: ['Polygon', 'Polygons']
        }),
    }),
});


export const {
    useGetPolygonsQuery,
    useGetPolygonQuery,
    useGetSearchPolygonsQuery,
    useUpdatePolygonMutation,
    useDeletePolygonMutation,
    useAddPolygonMutation
} = polygonApi;