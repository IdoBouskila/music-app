import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    album: [],
    track: [],
    radio: [],
    artist: [],
    playlist: [],
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites(state, { payload }) {
            const { type, id } = payload;
            
            state[type].push(id);
        },
        removeFromFavorites(state, { payload }) {
            const { type, id } = payload;
            
            state[type] = state[type].filter(favoriteId => favoriteId !== id);
        },
    }
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export const selectFavorites = (state) => state.favorites;

export default favoriteSlice.reducer;
