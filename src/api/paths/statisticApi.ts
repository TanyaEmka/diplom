import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StatisticType } from '../types';

export const statisticApi = createApi({
    reducerPath: 'statisticApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getPolygonStatistic: builder.query<Array<StatisticType>, number>({
            query: (id) => `statistics?polygon_id=${id}`,
        }),
    }),
});


export const {
    useGetPolygonStatisticQuery
} = statisticApi;