import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService';
import { toast } from 'react-toastify';

const API_PATH = 'http://127.0.0.1:3000' + '/users';

const user = JSON.parse(localStorage.getItem('user'));

const initialState =  {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    message: ''
}

export const insertUser = createAsyncThunk(API_PATH, async (user, thunkAPI) => {
    try {
        return await userService.insertUser(user);
    } catch (error) {
        if(error.response.status == 422 && error.response.data.username)
        toast.error(`Username ${ error.response.data.username[0] }`);
    }
});

export const userSlice = createSlice({
    name: 'user',
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
        builder.addCase(insertUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(insertUser.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(insertUser.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })   
    }
});

export const { reset } = userSlice.actions
export default userSlice.reducer;