'use client';
import React from 'react';
import { useSong } from '../context/SongProvider';

const Player = () => {
    const { handleNextSong, handlePreviousSong, currentSong: { album, title, artist }, audioRef } = useSong();

    const handleAudioToggle = () => {
        // check if sound file exists
        if(isNaN(audioRef.current.duration)) {
            return;
        }
        
        const isPlaying = ! audioRef.current.paused;

        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        
    };

    return (
        <>
            <div>
                <img src={ album?.cover_xl} alt="" />
                <span>{ title }</span>
                <span>{ artist?.name}</span>

                <div className='audio-control-buttons'>
                    <button onClick={ handlePreviousSong }>Previous</button>
                    <button onClick={ handleAudioToggle }>Play / Pause</button>
                    <button onClick={ handleNextSong }>Next</button>
                </div>
            </div>
        </>
    );
};

export default Player;