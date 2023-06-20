'use client';
import { playSong } from '@/redux/features/songsSlice';
import { FaPlay } from 'react-icons/fa';
import FavoriteButton from './FavoriteButton';
import { useDispatch } from 'react-redux';

const IntroContainer = ({ id, imgSrc, title, description, playlist, type }) => {
    const dispatch = useDispatch();

    return (
        <div className='intro-container'>
            <img src={ imgSrc } alt="" />

            <div className='intro-details'>
                <strong>{ title }</strong>
                <small>{ description }</small>
                
                <div className='intro-buttons'>
                    <button
                        className='play-button'
                        onClick={ () => dispatch(playSong({ playlist, index: 0 })) }
                    >
                        <FaPlay />

                        <span>Play</span>
                    </button>

                    <FavoriteButton type={ type } id={ id } />
                </div>
            </div>
        </div>
    );
};

export default IntroContainer;