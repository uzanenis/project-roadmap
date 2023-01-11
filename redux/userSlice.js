import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    /*[userLogin.pending]: (state) => {
                              state.loading = true;
                              state.error = null;
                            },
                            [userLogin.fulfilled]: (state, { payload }) => {
                              state.loading = false;
                              state.userInfo = payload;
                              //state.userToken = payload.userToken;
                            },
                            [userLogin.rejected]: (state, { payload }) => {
                              state.loading = false;
                              state.error = payload;
                            },*/
  },
});

export default authSlice.reducer;
