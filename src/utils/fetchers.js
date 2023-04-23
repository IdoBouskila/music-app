const base = 'https://api.deezer.com';

async function fetchData(endpoint) {
    const response = await fetch(base + endpoint)
    return await response.json();
}

export async function fetchTopTracks() {
    const endpoint = '/editorial/0/charts';
    const { tracks: { data } } = await fetchData(endpoint)
    
    return data;
}