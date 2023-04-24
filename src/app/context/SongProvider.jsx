'use client';
import { createContext, useContext, useRef, useState } from "react"

const SongContext = createContext();

export const useSong = () => {
    return useContext(SongContext);
}

export const SongProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [currentSong, setSong] = useState({});

    const value = {
        audioRef,
        currentSong,
        handleSongClick: (song) => setSong(song)
    }

    return (
        <SongContext.Provider value={ value }>
            <audio autoPlay src={ currentSong?.preview } ref={ audioRef }></audio>

            { children }
        </SongContext.Provider>
    );
}
