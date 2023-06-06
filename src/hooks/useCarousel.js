import { getCarouselData } from "@/utils/carousel-helper";
import { useEffect, useState } from "react";

const useCarousel = (carousel) => {
    const firstSlide = 0;
    const [currentSlide, setCurrentSlide] = useState(firstSlide);

    useEffect(() => {
        if(! carousel) {
            return;
        }

        const { childWidth } = getCarouselData(carousel.current);
        
        carousel.current.style.transform = `translateX(-${ childWidth * currentSlide }px)`;
    }, [currentSlide]);

    const changeSlide = ({ type }) => {
        const { lastSlide } = getCarouselData(carousel.current);

        setCurrentSlide((prev) =>
            type === 'next'
                ? prev >= lastSlide ? firstSlide : prev + 1
                : prev <= firstSlide ? lastSlide : prev - 1
        );
    }

    return {
        changeSlide
    }
};

export default useCarousel;