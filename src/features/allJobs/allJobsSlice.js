import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAllJobsThunk } from "./allJobsThunk";



const initialFiltersState = {
    search: "",
    searchStatus: "all",
    statusOptions: ["all", "pending", "declined", "interview"],
    searchType: "all",
    jobTypeOptions: ["all", "full-time", "part-time", "remote", "internship"],
    sort: "latest",
    sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    // monthlyApplications: [],
    ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk("allJobs/getJobs", getAllJobsThunk);
//   export const showMonthlyApplications = createAsyncThunk(
//     "allJobs/showMonthlyApplications",
//     showMonthlyApplicationsThunk
//   );

const allJobsSlice = createSlice({
    name: "allJobs",
    initialState,
    reducers: {
        //   showLoading: (state) => {
        //     state.isLoading = true;
        //   },
        //   hideLoading: (state) => {
        //     state.isLoading = false;
        //   },
        handleChange: (state, { payload: { name, value } }) => {
            state.page = 1;
            state[name] = value;
        },
        clearFilters: (state) => {
            return { ...state, ...initialFiltersState };
        },
        // changePage: (state, { payload }) => {
        //     state.page = payload;
        // },
        // increasePageValueByOne: (state) => {
        //     state.page++;
        // },
        // decreasePageValueByOne: (state) => {
        //     state.page--;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllJobs.fulfilled, (state, { payload }) => {
                const { jobs, totalJobs, numOfPages } = payload.data;
                state.isLoading = false;
                state.jobs = jobs;
                state.totalJobs = totalJobs;
                state.numOfPages = numOfPages;
            })
            .addCase(getAllJobs.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
        // .addCase(showMonthlyApplications.pending, (state, { payload }) => {
        //     state.isLoading = true;
        // })
        // .addCase(showMonthlyApplications.fulfilled, (state, { payload }) => {
        //     const { stats } = payload.data;
        //     state.isLoading = false;
        //     state.monthlyApplications = stats;
        // })
        // .addCase(showMonthlyApplications.rejected, (state, { payload }) => {
        //     state.isLoading = false;
        //     toast.error(payload);
        // });
    },
});

export const {
    showLoading,
    // hideLoading,
    handleChange,
    clearFilters,
    // changePage,
    // increasePageValueByOne,
    // decreasePageValueByOne,
} = allJobsSlice.actions;

export default allJobsSlice.reducer;
