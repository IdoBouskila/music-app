'use client';
import useCarousel from '@/hooks/useCarousel';
import React, { useRef } from 'react';

const Carousel = ({ children, header }) => {
    const carouselRef = useRef();
    const { changeSlide } = useCarousel(carouselRef);

    return (
        <> 
            <div className='carousel-header-container'>
                { header && <h2>{ header }</h2> }

                <div className='carousel-buttons'>
                    <button onClick={ () => changeSlide({ type: 'prev' }) }>{ '<' }</button>
                    <button onClick={ () => changeSlide({ type: 'next' }) }>{ '>' }</button>
                </div>
            </div>

            <div className='carousel'>
                <ul ref={ carouselRef }>
                    { children }
                </ul>
            </div>
        </>
    );
};

export default Carousel;