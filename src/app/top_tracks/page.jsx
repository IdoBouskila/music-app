import { fetchTopTracks } from "@/utils/fetchers";
import TrackListContainer from "@/components/others/TrackListContainer";

export default async function TopTracks() {
    const tracks = await fetchTopTracks({ limit: 50 });

    return (
        <TrackListContainer
            header='Trending right Now'
            tracks={ tracks }
        />
    );
}