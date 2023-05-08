import TrackListItem from "@/components/TrackListItem";
import { fetchRadioTracklist } from "@/utils/fetchers";

const page = async ({ params }) => {
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

export default page;