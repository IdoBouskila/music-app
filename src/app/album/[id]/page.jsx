import IntroContainer from "@/components/others/IntroContainer";
import TrackListContainer from "@/components/others/TrackListContainer";
import { getYearFromDate } from "@/utils/app-helper";
import { fetchAlbum } from "@/utils/fetchers";

const AlbumPage = async ({ params }) => {
    const { title, cover_xl, release_date, tracks } = await fetchAlbum(params.id);
    const releaseYear = getYearFromDate(release_date);

    return (
        <div className='page-container'>
            <IntroContainer
                title={ title }
                description={ `Album • ${ releaseYear }` }
                imgSrc={ cover_xl }
                playlist={ tracks.data }
            />

            <TrackListContainer tracks={ tracks.data }/>
        </div>
    );
}

export default AlbumPage;