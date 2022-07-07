import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import artistsService from './artistsService';

const API_PATH = 'https://testapi.io/api/willeynascimento/artists';

const initialState = {
    artists: [],
    artist: {},
    isSuccess: false,
    isError: false,
    message: '',
    isLoading: ''
}

export const getArtists = createAsyncThunk('artists/all', async (_, thunkAPI) => {
    try {
        return await artistsService.getArtists();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
});

export const getArtist = createAsyncThunk('artists/get', async (id, thunkAPI) => {
    try {
        return await artistsService.getArtist(id);
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
        .addCase(getArtist.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getArtist.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.artist = action.payload
        })
        .addCase(getArtist.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            
        })    
    }
});

export const { reset } = artistsSlice.actions
export default artistsSlice.reducer;