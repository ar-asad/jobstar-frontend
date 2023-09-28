import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "../features/api/apiSlice";
import userSliceReducer from '../features/user/userSlice';
import jobSliceReducer from '../features/job/jobSlice';
import allJobsSliceReducer from '../features/allJobs/allJobsSlice';


const store = configureStore({
    reducer: {
        [jobApi.reducerPath]: jobApi.reducer,
        user: userSliceReducer,
        job: jobSliceReducer,
        allJobs: allJobsSliceReducer,

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobApi.middleware),
});
export default store;