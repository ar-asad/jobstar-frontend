import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "../features/api/apiSlice";
import jobSliceReducer from '../features/job/jobSlice';


const store = configureStore({
    reducer: {
        [jobApi.reducerPath]: jobApi.reducer,
        // user: userSliceReducer,
        job: jobSliceReducer,
        // allJobs: allJobsSliceReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobApi.middleware),
});
export default store;