'use client';
import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { useSong } from '@/context/SongProvider';
import Link from 'next/link';

const TrackListItem = ({ index, playlist, track: { title, duration, artist, album } }) => {
    const { handleSongClick } = useSong();

    return (
        <li
            className='track-list-item'
            onClick={ () => handleSongClick(index, playlist) }
        >
                <img src={ album.cover_xl } alt="" />

                <div className='song-details'>
                    <div>
                        <strong>{ title }</strong>
                        <Link className='artist-name' href={ `/artist/${ artist.id }` }>
                            { artist.name }
                        </Link>
                    </div>

                    <span>{ duration }</span>
                    
                    <button className='favorite'>
                        <BsHeartFill />
                    </button>
                </div>

        </li>
    );
};

export default TrackListItem;