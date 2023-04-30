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

// Fetching each artist individual for more inforamtion about 
export async function fetchTopArtist() {
    const endpoint = '/editorial/0/charts';

    const { artists: { data } } = await fetchData(endpoint)
    
    const promises = data.map(artist => fetchData(`/artist/${artist.id}`));
    const topArtists = await Promise.all(promises);
    
    return topArtists;
}
