export function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}

export function compactNumber(number) {
    return Intl.NumberFormat('en-us', {
        notation: 'compact',
    }).format(number);
};

