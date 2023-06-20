import Link from 'next/link';
import React from 'react';

const LinkCardItem = ({ href, imgSrc, title, description }) => {
    return (
        <li className='card-container'>
            <Link href={ href }>
                <img src={ imgSrc } alt="" />
                <strong>{ title }</strong>
                
                {
                    description &&
                        <small>{ description }</small>
                }
            </Link>
        </li>
    );
};

export default LinkCardItem;