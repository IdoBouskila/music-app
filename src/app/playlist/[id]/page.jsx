import IntroContainer from "@/components/others/IntroContainer";
import TrackListContainer from "@/components/others/TrackListContainer";
import { fetchPlaylist } from "@/utils/fetchers";

const Playlists = async ({ params }) => {
    const { type, title, description, picture_medium, tracks } = await fetchPlaylist(params.id);

    return (
        <div className='page-container'>
            <IntroContainer
                id={ params.id }
                type={ type }
                title={ title }
                imgSrc={ picture_medium }
                playlist={ tracks.data }
                description={ description}
            />
            
            <TrackListContainer tracks={ tracks.data }/>
        </div>
    );
};

export default Playlists;