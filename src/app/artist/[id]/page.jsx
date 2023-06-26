import LinkCardItem from "@/components/list-items/LinkCardItem";
import Carousel from "@/components/others/Carousel";
import IntroContainer from "@/components/others/IntroContainer";
import TrackListContainer from "@/components/others/TrackListContainer";
import { compactNumber, getYearFromDate } from "@/utils/formatters";
import { fetchArtist, fetchArtistAlbums, fetchArtistTopTracks } from "@/utils/fetchers";

const ArtistPage = async ({ params: { id } }) => {
    const artistPromise = fetchArtist(id);
    const topTracksPromise = fetchArtistTopTracks(id);
    const artistAlbumsPromise = fetchArtistAlbums(id, { limit: 20 });

    const [artist, topTracks, artistAlbums] = await Promise.all([artistPromise, topTracksPromise, artistAlbumsPromise]);
    const formattedFanNumber = compactNumber(artist.nb_fan);

    return (
        <div className='artist-page page-container'>
            <IntroContainer
                id={ id }
                type={ artist.type }
                title={ artist.name }
                imgSrc={ artist.picture_medium }
                description={ `${ formattedFanNumber } Fans` }
                playlist={ topTracks }
            />

            <TrackListContainer header='Top Songs' tracks={ topTracks } />

            <div className='albums-container'>
                <Carousel header='Albums'>
                {
                    artistAlbums.map((album) => {
                        const { id, title, cover_medium, release_date } = album;
                        const releaseYear = getYearFromDate(release_date);

                        return (
                            <LinkCardItem
                                key={ id }
                                title={ title }
                                imgSrc= { cover_medium }
                                href={ `/album/${ id }` }
                                description={ `Album | ${ releaseYear }` }
                            />
                        )
                    })
                }
                </Carousel>
            </div>
        </div>
    );
}

export default ArtistPage;