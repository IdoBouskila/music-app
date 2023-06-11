import LinkCardItem from "@/components/list-items/LinkCardItem";
import Carousel from "@/components/others/Carousel";
import IntroContainer from "@/components/others/IntroContainer";
import TrackListContainer from "@/components/others/TrackListContainer";
import { fetchArtist, fetchArtistAlbums, fetchArtistTopTracks } from "@/utils/fetchers";

const ArtistPage = async ({ params: { id } }) => {
    const artistPromise = fetchArtist(id);
    const topTracksPromise = fetchArtistTopTracks(id);
    const artistAlbumsPromise = fetchArtistAlbums(id, { limit: 20 });

    const [artist, topTracks, artistAlbums] = await Promise.all([artistPromise, topTracksPromise, artistAlbumsPromise]);

    return (
        <div className='artist-page page-container'>
            <IntroContainer
                title={ artist.name }
                imgSrc={ artist.picture_xl }
                description={ `${ artist.nb_fan } Fans` }
                playlist={ topTracks }
            />

            <TrackListContainer header='Top Songs' tracks={ topTracks } />

            <div className='albums-container'>
                <Carousel header='Albums'>
                {
                    artistAlbums.map((album) => {
                        const { id, title, cover_xl, release_date } = album;
                        
                        return (
                            <LinkCardItem
                                key={ id }
                                title={ title }
                                imgSrc= { cover_xl }
                                href={ `/album/${ id }` }
                                description={ `Album | ${ release_date }` }
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