import IntroContainer from "@/components/others/IntroContainer";
import TrackListContainer from "@/components/others/TrackListContainer";
import { fetchPlaylist } from "@/utils/fetchers";

const Playlists = async ({ params }) => {
    const { title, description, picture_xl, tracks } = await fetchPlaylist(params.id);

    return (
        <div className='page-container'>
            <IntroContainer
                title={ title }
                imgSrc={ picture_xl }
                playlist={ tracks.data }
                description={ description}
            />
            
            <TrackListContainer tracks={ tracks.data }/>
        </div>
    );
};

export default Playlists;