import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import artistsService from './artistsService';

const API_PATH = 'https://www.moat.ai/api/task';

const initialState = {
    artists: [],
    isSuccess: false,
    isError: false,
    message: '',
    isLoading: ''
}

export const getArtists = createAsyncThunk(API_PATH, async (_, thunkAPI) => {
    try {
        return await artistsService.getArtists();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
});

export const artistsSlice = createSlice({
    name: 'artists',
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
        builder.addCase(getArtists.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getArtists.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.artists = action.payload
        })
        .addCase(getArtists.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            
        })   
    }
});

export const { reset } = artistsSlice.actions
export default artistsSlice.reducer;