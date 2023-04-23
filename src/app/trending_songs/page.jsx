import { fetchTopTracks } from "@/utils/fetchers";
import TrackListItem from "../components/TrackListItem";

export default async function TrendingSongsList() {
    const tracks = await fetchTopTracks();
    
    return (
        <div>
            <h2>Trending right now</h2>

            <ul>
                {
                    tracks.map(track => {
                        const { id, title, artist: { name }, album: { cover_xl }, duration} = track;
                        
                        return (
                            <TrackListItem
                                key={ id }
                                songTitle={ title }
                                artistName={ name }
                                imgSrc={ cover_xl }
                                duration={ duration }
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}