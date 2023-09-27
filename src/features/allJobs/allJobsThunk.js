import customFetch from "../../utils/axios";


export const getAllJobsThunk = async (_, thunkAPI) => {
    const { searchStatus, searchType, sort, page, search } =
        thunkAPI.getState().allJobs;
    let url = `/api/v1/jobs?jobType=${searchType}&status=${searchStatus}&sort=${sort}&page=${page}&search=${search}`;

    try {
        const response = await customFetch.get(url);
        // const response = await customFetch.get(url, {
        //     headers: {
        //         authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        //     },
        // });

        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
};