'use client';
import useCarousel from '@/hooks/useCarousel';

const Carousel = ({ children, header }) => {
    const { carouselRef, next, prev } = useCarousel();

    return (
        <> 
            <div className='carousel-header-container'>
                { header && <h2>{ header }</h2> }

                <div className='carousel-buttons'>
                    <button onClick={ prev }>{ '<' }</button>
                    <button onClick={ next }>{ '>' }</button>
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