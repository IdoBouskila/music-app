import { configureStore } from "@reduxjs/toolkit";
import songsReducer from './features/songsSlice';
import favoritesReducer from "./features/favoritesSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from './utils/storage';

const persistConfig = {
    key: 'favorites',
    storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
    reducer: {
        songs: songsReducer,
        favorites: persistedReducer,
    }
});

export default store;
