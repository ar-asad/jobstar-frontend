

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { deleteJobThunk, updateJobThunk } from "./jobThunk";

// Async Task Handlers
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);
export const updateJob = createAsyncThunk("job/updateJob", updateJobThunk);


const initialState = {
    position: "",
    company: "",
    jobLocation: "",
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOptions: ["pending", "declined", "interview"],
    status: "pending",
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearValues: (state) => {
            return {
                ...initialState,
            };
        },
        // setEditJob: (state, { payload }) => {
        //   return { ...state, isEditing: true, ...payload };
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(deleteJob.fulfilled, (state, { payload }) => {
                toast.success("Job deleted successfully");
            })
            .addCase(deleteJob.rejected, (state, { payload }) => {
                toast.error(payload);
            })
            .addCase(updateJob.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(updateJob.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                toast.success("Job updated successfully");
            })
            .addCase(updateJob.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            });
    },
});

export const { clearValues, handleChange } = jobSlice.actions;
export default jobSlice.reducer;
