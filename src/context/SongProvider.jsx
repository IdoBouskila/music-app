'use client';
import { createContext, useContext, useState } from "react"

const SongContext = createContext();

export const useSong = () => {
    return useContext(SongContext);
}

export const SongProvider = ({ children }) => {
    const [playlist, setPlaylist] = useState([]);
    const [currentId, setCurrentId] = useState(null);

    const value = {
        currentSong: playlist?.[currentId] || {},
        handleSongClick: (songIndex, targetPlaylist) => {
            setCurrentId(songIndex);
            setPlaylist(targetPlaylist);
        },
        handlePreviousSong: () => {
            if(currentId <= 0) {
                return setCurrentId(playlist.length - 1);
            }
        
            setCurrentId((prev) => prev - 1);
        },
        handleNextSong: () => {
            if(playlist.length - 1 <= currentId) {
                return setCurrentId(0);
            }
            
            setCurrentId((prev) => prev + 1);
        }
    }

    return (
        <SongContext.Provider value={value}>
            { children }
        </SongContext.Provider>
    );
}
