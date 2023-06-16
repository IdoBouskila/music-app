'use client';
import { playSong } from '@/redux/features/songsSlice';
import { useDispatch } from 'react-redux';

const IntroContainer = ({ imgSrc, title, description, playlist }) => {
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

                    <button className='favorite'><FaHeart /></button>
                </div>
            </div>
        </div>
    );
};

export default IntroContainer;