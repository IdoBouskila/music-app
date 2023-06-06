/**
 * Retrieves data about the carousel based on the provided carousel element.
 *
 * @param {HTMLElement} carousel - The HTML element representing the carousel.
 * @returns {Object} An object containing carousel data.
 * @property {number} childWidth - The width of each child element in the carousel.
 * @property {number} lastSlide - The index of the last slide in the carousel.
 */
export const getCarouselData = (carousel) => {
    const childWidth = carousel.scrollWidth / carousel.children.length
    const childsInSlide = Math.floor(carousel.clientWidth / childWidth);
    const lastSlide = carousel.children.length - (childsInSlide || 1);

    return {
        childWidth,
        lastSlide,
    }
};