import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../operations/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder;
    // add cases
  },
});

export const authReducer = authSlice.reducer;
