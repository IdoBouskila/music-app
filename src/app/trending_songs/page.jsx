import { fetchTopTracks } from "@/utils/fetchers";
import TrackListItem from "../../components/TrackListItem";

export default async function TrendingSongsList() {
    const tracks = await fetchTopTracks();

    return (
        <div>
            <h2>Trending right now</h2>

            <ul>
                {
                    tracks.map((track, index) =>
                        <TrackListItem
                            key={ track.id }
                            index={ index }
                            playlist={ tracks }
                            track={ track }
                        />
                    )
                }
            </ul>
        </div>
    );
}