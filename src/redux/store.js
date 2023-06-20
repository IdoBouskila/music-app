import { configureStore } from "@reduxjs/toolkit";
import songsReducer from './features/songsSlice';
import favoritesReducer from "./features/favoritesSlice";

export const store = configureStore({
    reducer: {
        songs: songsReducer,
        favorites: favoritesReducer,
    }
});

export default store;
