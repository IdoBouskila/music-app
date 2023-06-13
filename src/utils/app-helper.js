export function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}

export function compactNumber(number) {
    return Intl.NumberFormat('en-us', {
        notation: 'compact',
    }).format(number);
};

export const formatDuration = (time) => {
    if(isNaN(time)) {
        return '00:00';
    }
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const padNumber = (number) => String(number).padStart(2, 0);
      
    return padNumber(minutes) + ":" + padNumber(seconds);
}
