import { getCarouselData } from "@/utils/carousel";
import { useRef } from "react";

const useCarousel = () => {
    const slide = useRef(0);
    const carouselRef = useRef(null);

    const setSlide = (slideIndex) => {
        slide.current = slideIndex;

        const { childWidth } = getCarouselData(carouselRef.current);
        carouselRef.current.style.transform = `translateX(-${ childWidth * slideIndex }px)`;
    }

    const next = () => {
        const { lastSlide } = getCarouselData(carouselRef.current);
        const newIndex = lastSlide === slide.current ? 0 : slide.current + 1;
        
        setSlide(newIndex);
    }
    
    const prev = () => {
        const { lastSlide } = getCarouselData(carouselRef.current);
        const newIndex = slide.current === 0 ? lastSlide : slide.current - 1;
        
        setSlide(newIndex);
    }

    return {
        carouselRef,
        next,
        prev,
    }
};

export default useCarousel;
