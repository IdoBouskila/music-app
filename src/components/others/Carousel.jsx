'use client';
import React, { useEffect, useRef, useState } from 'react';

const Carousel = ({ children, header }) => {
    const firstSlide = 0;
    const carouselRef = useRef(null);
    const [carouselData, setCarouselData] = useState({ currentSlide: firstSlide });
    
    useEffect(() => {
        if(! carouselRef?.current) {
            return;
        }

        carouselRef.current.style.transform = `translateX(-${ carouselData.childWidth * carouselData.currentSlide }px)`;
    }, [carouselData.currentSlide]);
    
    const handleSlideChange = ({ type }) => {
        // share data between effect and function
        const carouselWidth = carouselRef.current.scrollWidth;
        const childrenLength = carouselRef.current.children.length;
        const childWidth = carouselWidth / childrenLength;

        setCarouselData((prev) => ({ ...prev, carouselWidth, childrenLength, childWidth }));
        
        const childsInSlide = Math.floor(carouselRef.current.clientWidth / childWidth);
        const lastSlide = carouselRef.current.children.length - (childsInSlide || 1);

        if(type === 'next') {
            return setCarouselData((prev) =>
                prev.currentSlide > lastSlide
                    ? { ...prev, currentSlide: firstSlide }
                    : { ...prev, currentSlide: prev.currentSlide++ }
            );
        };

        setCarouselData((prev) =>
            prev.currentSlide < firstSlide
                ? { ...prev, currentSlide: lastSlide }
                : { ...prev, currentSlide: prev.currentSlide-- }
        );
    }

    return (
        <div className='carousel-container'> 
            <div className='carousel-header-container'>
                { header && <h2>{ header }</h2> }

                <div className='carousel-buttons'>
                    <button onClick={ () => handleSlideChange({ type: 'prev' }) }>{ '<' }</button>
                    <button onClick={ () => handleSlideChange({ type: 'next' }) }>{ '>' }</button>
                </div>
            </div>

            <div className='inner-carousel'>
                <ul ref={ carouselRef }>
                    { children }
                </ul>
            </div>
        </div>
    );
};

export default Carousel;