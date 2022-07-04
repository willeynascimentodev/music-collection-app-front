import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';
import { toast } from 'react-toastify';

const API_PATH = 'http://127.0.0.1:3000' + '/auth';

const user = JSON.parse(localStorage.getItem('user'));

const initialState =  {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    message: ''
}

export const login = createAsyncThunk(API_PATH, async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        toast.error("Sorry, we couldn't find an account with this username. Please check you're using the right username and try again.");
        
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })   
    }
});

export const { reset } = authSlice.actions
export default authSlice.reducer;