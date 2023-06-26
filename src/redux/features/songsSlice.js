import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: [],
    activeEntity: null,
};

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        playSong(state, action) {
            const { payload } = action;

            return state = {
                entities: payload.playlist,
                activeEntity: payload.index
            };
        },
        playNextSong(state) {
            const { entities, activeEntity } = state;
            const isLastSong = entities.length - 1 <= activeEntity;
            
            if(isLastSong) {
                state.activeEntity = 0;
                return;
            }
            
            state.activeEntity = activeEntity + 1;
        },
        playPreviousSong(state) {
            const { entities, activeEntity } = state;

            if(activeEntity <= 0) {
                state.activeEntity = entities.length - 1;
                return;
            }
            
            state.activeEntity = activeEntity - 1;
        }
    }
});

export const { playSong, playNextSong, playPreviousSong } = songsSlice.actions;
export const selectCurrentSong = createSelector((state) => state.songs, (songs) => {
    return songs.entities[songs.activeEntity] || {}
});

export default songsSlice.reducer;
