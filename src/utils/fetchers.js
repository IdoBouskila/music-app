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

export async function fetchTopArtist() {
    const endpoint = '/editorial/0/charts';

    const { artists: { data } } = await fetchData(endpoint)
    
    const promises = data.map(artist => fetchArtist(artist.id));
    const topArtists = await Promise.all(promises);
    
    return topArtists;
}

export async function fetchArtist(id) {
    const endpoint = `/artist/${ id }`;
    const data = await fetchData(endpoint);
    
    return data;
}

export async function fetchArtistTopTracks(id) {
    const endpoint = `/artist/${ id }/top`;
    const { data } = await fetchData(endpoint);
    
    return data;
}

export async function fetchArtistAlbums(id, { limit = 9999 }) {
    const endpoint = `/artist/${ id }/albums?limit=${ limit }`;
    const { data } = await fetchData(endpoint);
    
    return data;
}

export default async function fetchAlbum(id) {
    const endpoint = `/album/${ id }`;
    const data = await fetchData(endpoint);
    
    return data;
}