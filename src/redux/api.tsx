import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }), // Adjust the base URL
  endpoints: (builder) => ({
    getLineData: builder.query<any[], void>({
      query: () => '/lineData', // Matches the endpoint in db.json
    }),
    getBarData: builder.query<any[], void>({
      query: () => '/barData',
    }),
    getDashboardStats: builder.query<any, void>({
      query: () => '/dashboardStats',
    }),
    getAnalyticsReportData: builder.query<any[], void>({
      query: () => '/analytics',
    }),
    getOrdersData: builder.query<any[], void>({
      query: () => '/orders',
    }),
  }),
});
 
export const {
  useGetLineDataQuery,
  useGetBarDataQuery,
  useGetDashboardStatsQuery,
  useGetAnalyticsReportDataQuery,
  useGetOrdersDataQuery,
} = api;