import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

axios.defaults.baseURL = 'https://wallet.b.goit.study/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const register=createAsyncThunk('auth/register',async (credentials, thunkAPI)=>{
    try {
        const res = await axios.post('api/auth/sign-up', credentials);
        setAuthHeader(res.data.token);
        return res.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/auth/sign-in', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);