'use client';
import { useRef } from 'react';
import { useSong } from '@/context/SongProvider';
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause, MdVolumeUp } from 'react-icons/md';
import useWavesurfer from '@/hooks/useWavesurfer';
import VolumeSlider from '../VolumeSlider';

const Player = () => {
    const waveContainerRef = useRef(null);
    const { handleNextSong, handlePreviousSong, currentSong } = useSong();
    const { album, title, artist, preview: audioSrc, duration } = currentSong;
    const { handlePlayPause, isPlaying, setAudioVolume } = useWavesurfer(waveContainerRef, audioSrc);

    return (
        <>
            <div className={ audioSrc ? 'player' : 'player disable' }>
                <img src={ album?.cover_xl } alt='' />

                <div className='song-details'>
                    <span className='song-title'>{ title }</span>
                    <span className='artist-name'>{ artist?.name }</span>
                </div>

                <div className='control-buttons'>
                    <button onClick={ handlePreviousSong }>
                        <MdSkipPrevious />
                    </button>

                    <button
                        className='play-pause-btn'
                        onClick={ handlePlayPause }
                    >
                        { 
                            isPlaying ? 
                                <MdPause /> :
                                <MdPlayArrow /> 
                        }
                    </button>

                    <button onClick={ handleNextSong }>
                        <MdSkipNext />
                    </button>
                </div>

                <div className='wave-container' ref={ waveContainerRef }></div>

                <span className='duration'>{ duration }</span>

                <div className='volume-slider-container'>
                    <button>
                        <MdVolumeUp />
                    </button>

                    {
                        audioSrc &&
                            <VolumeSlider onChange={ (value) => setAudioVolume(value) } />
                        
                    }
                </div>
            </div>
        </>
    );
};

export default Player;
