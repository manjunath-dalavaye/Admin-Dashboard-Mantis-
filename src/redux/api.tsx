import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }), // Adjust the base URL
  endpoints: (builder) => ({
    getLineData: builder.query<any[], void>({
      query: () => '/lineData', // Matches the endpoint in db.json
    }),
    getBarData: builder.query<any[], void>({
      query: () => '/barData', // Matches the endpoint in db.json
    }),
    getDashboardStats: builder.query<any, void>({
      query: () => '/dashboardStats', // Matches the endpoint in db.json
    }),
    getAnalyticsReportData: builder.query<any[], void>({
      query: () => '/analytics', // Matches the endpoint in db.json
    }),
    getOrdersData: builder.query<any[], void>({
      query: () => '/orders', // Matches the endpoint in db.json
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