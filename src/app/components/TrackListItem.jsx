'use client';
import React from 'react';
import { useSong } from "../context/SongProvider";

const TrackListItem = ({ track, track: { title, duration, artist, album } }) => {
    const { handleSongClick } = useSong();
    
    return (
        <li onClick={ () => handleSongClick(track)}>
             <img src={ album.cover_xl } alt="" />

            <div>
                <strong>{ title }</strong>
                <span>{ artist.name }</span>
            </div>

            <span>{ duration }</span>
            <span>Play / Pause</span>
        </li>
    );
};

export default TrackListItem;