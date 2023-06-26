import IntroContainer from "@/components/others/IntroContainer";
import TrackListContainer from "@/components/others/TrackListContainer";
import { getYearFromDate } from "@/utils/formatters";
import { fetchAlbum } from "@/utils/fetchers";

const AlbumPage = async ({ params }) => {
    const { title, cover_medium, release_date, tracks, type } = await fetchAlbum(params.id);
    const releaseYear = getYearFromDate(release_date);

    return (
        <div className='page-container'>
            <IntroContainer
                id={ params.id }
                type={ type }
                title={ title }
                description={ `Album • ${ releaseYear }` }
                imgSrc={ cover_medium }
                playlist={ tracks.data }
            />

            <TrackListContainer tracks={ tracks.data }/>
        </div>
    );
}

export default AlbumPage;