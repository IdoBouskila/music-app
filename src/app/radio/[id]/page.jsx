import TrackListItem from "@/components/list-items/TrackListItem";
import { fetchRadioTracklist } from "@/utils/fetchers";

export default async function RadioTrackList({ params }) {
    const tracks = await fetchRadioTracklist(params.id);

    return (
        <div>
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
};