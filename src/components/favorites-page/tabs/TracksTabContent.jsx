import useSWR from "swr";
import TrackListContainer from "@/components/others/TrackListContainer";

const TracksTabContent = ({ tracks }) => {
    const { data } = useSWR({ entitiesId: tracks, endpoint: '/api/track' })

    return (
        <TrackListContainer tracks={ data } />
    );
}

export default TracksTabContent;