import { notFound } from "next/navigation";

const base = 'https://api.deezer.com';

async function fetchData(endpoint) {
    const response = await fetch(base + endpoint);
    const data = await response.json();

    // Deezer API internal notfound error
    if(data.error?.code === 800) { 
        return notFound();
    }

    return data;
}

export async function fetchTrack(id) {
    const endpoint = `/track/${ id }`;
    const data = await fetchData(endpoint);

    return data;
}

export async function fetchTopTracks({ limit = 10 } = {}) {
    const endpoint = `/chart/0/tracks?limit=${ limit }`;
    const { data } = await fetchData(endpoint);

    return data;
}

export async function fetchTopArtists({ limit = 3 } = {}) {
    const endpoint = `/chart/0/artists?limit=${ limit }`;

    const { data } = await fetchData(endpoint);
    
    const promises = data.map(artist => fetchArtist(artist.id));
    const topArtists = await Promise.all(promises);
    
    return topArtists;
}

export async function fetchTopPlaylists() {
    const endpoint = `/chart/0/playlists`;
    const { data } = await fetchData(endpoint);

    return data;
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

export async function fetchArtistAlbums(id, { limit = 9999 } = {}) {
    const endpoint = `/artist/${ id }/albums?limit=${ limit }`;
    const { data } = await fetchData(endpoint);
    
    return data;
}

export async function fetchAlbum(id) {
    const endpoint = `/album/${ id }`;
    const data = await fetchData(endpoint);
    
    return data;
}

export async function fetchPlaylist(id) {
    const endpoint = `/playlist/${ id }`;
    const data = await fetchData(endpoint);
    
    return data;
}

export async function fetchTopRadio() {
    const endpoint = '/radio/top';
    const { data } = await fetchData(endpoint);
    
    return data;
}

export async function fetchRadio(id) {
    const radioPromise = fetchData(`/radio/${ id }`);
    const trackListPromise = fetchData(`/radio/${ id }/tracks`);

    const [radio, tracks] = await Promise.all([radioPromise, trackListPromise]);
    
    return {
        ...radio,
        tracks: tracks.data
    };
}

export async function fetchSearchData(query, { limit = 3 } = {}) {
    const endpoint = (category) => `/search/${ category }?q=${ query }&limit=${ limit }`;
    
    const tracksPromise = fetchData(endpoint('track'));
    const albumsPromise = fetchData(endpoint('album'));
    const artistsPromise = fetchData(endpoint('artist'));

    return await Promise.all([tracksPromise, albumsPromise, artistsPromise]);
}
