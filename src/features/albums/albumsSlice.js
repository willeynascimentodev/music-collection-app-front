import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import albumsService from './albumsService';

const API_PATH = 'http://127.0.0.1:3000' + '/albums';

const initialState = {
    albums : [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: ''
}

export const getAlbums = createAsyncThunk('albums/list', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await albumsService.getAlbums(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteAlbum = createAsyncThunk('albums/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await albumsService.deleteAlbum(token, id);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
});

export const albumsSlice = createSlice({
    name: 'albums',
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
        builder.addCase(getAlbums.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAlbums.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.albums = action.payload
        })
        .addCase(getAlbums.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            state.albums = null
        })
        .addCase(deleteAlbum.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.albums.filter(function(album) { 
                return album.id !== action.payload.id
            })
        })
    
    }
});

export const { reset } = albumsSlice.actions
export default albumsSlice.reducer;