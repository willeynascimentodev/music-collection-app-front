import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import albumsReducer from '../features/albums/albumsSlice'
import artistsReducer from '../features/artists/artistsSlice'
import userReducer from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      albums: albumsReducer,
      album: albumsReducer,
      artists: artistsReducer,
      user: userReducer
  },
});
