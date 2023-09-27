


// Thunks Functions
// export const createAJobThunk = async (job, thunkAPI) => {
//     try {
//       const response = await customFetch.post("/api/v1/jobs/add-job", job, {
//         headers: {
//           authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         thunkAPI.dispatch(logoutUser());
//         return thunkAPI.rejectWithValue("Unauthorized. Logging Out...");
//       }
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   };