import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUserData } from './operations';

const initialState = {
  user: { name: null, email: null }, // De ce nu am pus si password?
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUserData.pending](state) {
      state.isRefreshing = true;
    },
    [getCurrentUserData.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getCurrentUserData.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const usersReducer = usersSlice.reducer;
