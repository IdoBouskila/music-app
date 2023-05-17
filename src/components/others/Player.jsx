'use client';
import React from 'react';
import { useSong } from '@/context/SongProvider';
import { BsRepeat, BsShuffle } from 'react-icons/bs';
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause } from 'react-icons/md';
const Player = () => {
    const { handleNextSong, handlePreviousSong, isPlaying, currentSong: { album, title, artist }, audioRef } = useSong()
    
    const handleAudioToggle = () => {
        const isAudioFileExists = ! isNaN(audioRef.current.duration);        
        if(! isAudioFileExists) {
            return;
        }

        isPlaying ? audioRef.current.pause() : audioRef.current.play(); 
    };

    return (
        <>
            <div className='player'>
                <img src={ album?.cover_xl} alt="" />

                <div className='song-details'>
                    <span className='song-title'>{ title }</span>
                    <span className='artist-name'>{ artist?.name}</span>
                </div>

                <div className='control-buttons'>
                    <button>
                        <BsRepeat />
                    </button>

                    <div>
                        <button onClick={ handlePreviousSong }><MdSkipPrevious /></button>
                        <button className='play-pause-btn' onClick={ handleAudioToggle }>
                            {
                                isPlaying ? 
                                    <MdPause /> :
                                    <MdPlayArrow />
                            }
                        </button>
                        <button onClick={ handleNextSong }><MdSkipNext /></button>
                    </div>
                    
                    <button>
                        < BsShuffle />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Player;