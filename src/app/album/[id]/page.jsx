import IntroContainer from "@/components/others/IntroContainer";
import TrackListContainer from "@/components/others/TrackListContainer";
import { fetchAlbum } from "@/utils/fetchers";

const AlbumPage = async ({ params }) => {
    const { title, cover_xl, release_date, tracks } = await fetchAlbum(params.id);

    return (
        <div className='page-container'>
            <IntroContainer
                title={ title }
                description={ `Album | ${ release_date }` }
                imgSrc={ cover_xl }
                playlist={ tracks.data }
            />

            <TrackListContainer tracks={ tracks.data }/>
        </div>
    );
}

export default AlbumPage;