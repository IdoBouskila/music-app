'use client';
import React from 'react';
import { useSong } from "../context/SongProvider";

const TrackListItem = ({ index, playlist, track: { title, duration, artist, album } }) => {
    const { handleSongClick } = useSong();
    
    return (
        <li onClick={ () => handleSongClick(index, playlist) }>
             <img src={ album.cover_xl } alt="" />

            <div>
                <strong>{ title }</strong>
                <span>{ artist.name }</span>
            </div>

            <span>{ duration }</span>
        </li>
    );
};

export default TrackListItem;