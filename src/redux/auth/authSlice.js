import { createSlice } from '@reduxjs/toolkit';
// import { updateUserThunk } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      username: null,
      email: null,
      roles: [],
    },
    isAuth: false,
    // token: null,
  },
  reducers: {
    logOutSuccess: (state) => {
      state.user = null;
      // state.token = null;
      state.isAuth = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.data;
      // state.token = action.payload.access_token;
      state.isAuth = true;
    },
  },
});

export const { logOutSuccess, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
