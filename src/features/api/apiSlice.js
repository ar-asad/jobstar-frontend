import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const jobApi = createApi({
    reducerPath: "jobApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/api/v1",
    }),
    // tagTypes: ["Jobs"],
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => ({
                url: "/jobs/get-stats",
            }),
            // providesTags: ['Jobs'],
        }),
        addJobs: builder.mutation({
            query: (data) => ({
                url: "/jobs/add-job",
                method: "POST",
                body: data,
            }),
            // invalidatesTags: ["Jobs"],
        }),
        // removeJob: builder.mutation({
        //     query: (id) => ({
        //         url: `/jobs/${id}`,
        //         method: "DELETE",
        //     }),
        //     // invalidatesTags: ["Jobs"],
        // }),
        //     UpdateJob: builder.mutation({
        //         query: (data) => ({
        //             url: `/jobs/${id}`,
        //             method: "DELETE",
        //         }),
        //         invalidatesTags: ["Jobs"],
        //     }),
    }),
});

export const { useGetJobsQuery, useAddJobsMutation, useRemoveJobMutation } = jobApi;