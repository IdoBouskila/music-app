'use client';
import React from 'react';
import { useSong } from "../context/SongProvider";
import { useRouter } from 'next/navigation';

const TrackListItem = ({ index, playlist, track: { title, duration, artist, album } }) => {
    const { handleSongClick } = useSong();
    const router = useRouter();

    return (
        <li onClick={ () => handleSongClick(index, playlist) }>
             <img src={ album.cover_xl } alt="" />

            <div>
                <strong>{ title }</strong>
                
                <a onClick={ () => router.push(`/artist/${ artist.id }`) }>{ artist.name }</a>
            </div>

            <span>{ duration }</span>
        </li>
    );
};

export default TrackListItem;