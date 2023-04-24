'use client';
import React from 'react';
import { useSong } from '../context/SongProvider';

const Player = () => {
    const { currentSong, audioRef } = useSong();

    const handleAudioToggle = () => {
        const isPlaying = ! audioRef.current.paused;
        
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }

    return (
        <div>
            <img src={ currentSong?.album?.cover_xl} alt="" />
            <br />
            <button onClick={ handleAudioToggle }>Play / Pause</button>
        </div>
    );
};

export default Player;