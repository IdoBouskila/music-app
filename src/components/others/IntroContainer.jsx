'use client';
import { useSong } from "@/context/SongProvider";
import { FaPlay, FaHeart } from 'react-icons/fa';

const IntroContainer = ({ imgSrc, title, description, playlist }) => {
    const { handleSongClick } = useSong();

    return (
        <div className='intro-container'>
            <img src={ imgSrc } alt="" />

            <div className='intro-details'>
                <strong>{ title }</strong>
                <small>{ description }</small>
                
                <div className='intro-buttons'>
                    <button className='play-button' onClick={ () => handleSongClick(0, playlist) }>
                        <FaPlay />

                        <span>Play</span>
                    </button>

                    <button className='favorite'><FaHeart /></button>
                </div>
            </div>
        </div>
    );
};

export default IntroContainer;