import { fetchTopTracks } from "@/utils/fetchers";
import TrackListItem from "../components/TrackListItem";

export default async function TrendingSongsList() {
    const tracks = await fetchTopTracks();

    return (
        <div>
            <h2>Trending right now</h2>

            <ul>
                {
                    tracks.map(track =>
                        <TrackListItem
                            key={ track.id }
                            track={ track }
                        />
                    )
                }
            </ul>
        </div>
    );
}