 import React from 'react';

const TrackListItem = ({ songTitle, artistName, imgSrc, duration }) => {
    return (
        <li>
             <img src={ imgSrc } alt="" />

            <div>
                <strong>{ songTitle }</strong>
                <span>{ artistName }</span>
            </div>

            <span>{ duration }</span>
            <span>Play / Pause</span>
        </li>
    );
};

export default TrackListItem;