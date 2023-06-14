'use client';
import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import Link from 'next/link';
import { formatDuration } from '@/utils/app-helper';
import { useDispatch } from 'react-redux';
import { playSong } from '@/redux/features/songsSlice';

const TrackListItem = ({ index, playlist, track: { title, duration, artist, album } }) => {
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
                    
                    <button className='favorite'>
                        <BsHeartFill />
                    </button>
                </div>

        </li>
    );
};

export default TrackListItem;