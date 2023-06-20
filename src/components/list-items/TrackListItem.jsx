'use client';
import React from 'react';
import Link from 'next/link';
import { formatDuration } from '@/utils/app-helper';
import { useDispatch } from 'react-redux';
import { playSong } from '@/redux/features/songsSlice';
import FavoriteButton from '../others/FavoriteButton';

const TrackListItem = ({ index, playlist, track: { id, title, duration, artist, album, type } }) => {
    const dispatch = useDispatch();
    const formattedDuration = formatDuration(duration);

    return (
        <li
            className='track-list-item'
            onClick={ () => dispatch(playSong({index, playlist})) }
        >
                <img src={ album.cover_xl } alt="" />

                <div className='song-details'>
                    <div>
                        <strong className='overflowing-text'>{ title }</strong>
                        <Link onClick={ (e) => e.stopPropagation() } className='artist-name' href={ `/artist/${ artist.id }` }>
                            { artist.name }
                        </Link>
                    </div>

                    <span>{ formattedDuration }</span>
                    
                    <FavoriteButton id={ id } type={ type } />
                </div>

        </li>
    );
};

export default TrackListItem;