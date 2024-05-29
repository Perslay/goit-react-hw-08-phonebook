// import axios from 'axios';
import axios from './axiosConfig.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk();

export const logIn = createAsyncThunk();

export const logOut = createAsyncThunk();

export const refreshUser = createAsyncThunk();
