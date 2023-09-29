import customFetch from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { clearValues } from "./jobSlice";



export const deleteJobThunk = async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
        const response = await customFetch.delete(`/api/v1/jobs/${jobId}`, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        thunkAPI.dispatch(getAllJobs());
        return response.data;
    } catch (error) {
        thunkAPI.dispatch(hideLoading());
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
};

export const updateJobThunk = async ({ id, editJobData }, thunkAPI) => {
    try {
        console.log(id)
        console.log(editJobData)
        const response = await customFetch.patch(`/api/v1/jobs/${id}`, editJobData, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        thunkAPI.dispatch(clearValues());
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
};