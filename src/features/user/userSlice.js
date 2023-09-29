import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { registerUserThunk, loginUserThunk, updateAUserThunk } from "../user/userThunk";


const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage()
};


export const registerUser = createAsyncThunk(
  "user/registerUser",
  registerUserThunk
);
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const updateUser = createAsyncThunk("user/updateUser", updateAUserThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload.data;
        state.isLoading = false;
        state.user = user;
        state.user.token = payload.token;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
        // <Navigate to='/dashboard' />
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload.data;
        state.isLoading = false;
        state.user = user;
        state.user.token = payload.token;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload.data;
        state.isLoading = false;
        state.user = user;
        state.user.token = payload.token;
        addUserToLocalStorage(user);
        toast.success("User updated");
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
