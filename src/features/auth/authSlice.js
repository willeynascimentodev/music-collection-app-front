import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';
import { toast } from 'react-toastify';

const API_PATH = process.env.REACT_APP_API_URL + '/auth';

const user = JSON.parse(localStorage.getItem('user'));

const initialState =  {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    message: ''
}

export const login = createAsyncThunk('login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        toast.error("Sorry, we couldn't find an account with this username. Please check you're using the right username and try again.");
        
    }
});

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        authService.logout();
    } catch (error) {
        toast.error("Sorry, Unexpected error.");
    }
})

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
        .addCase(logout.pending, (state) => {
            state.isLoading = true
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.user = null
        })
        .addCase(logout.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
        }) 
    }
});

export const { reset } = authSlice.actions
export default authSlice.reducer;