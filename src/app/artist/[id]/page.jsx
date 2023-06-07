import AlbumListItem from "@/components/list-items/AlbumListItem";
import TrackListItem from "@/components/list-items/TrackListItem";
import { fetchArtist, fetchArtistAlbums, fetchArtistTopTracks } from "@/utils/fetchers";

const ArtistPage = async ({ params: { id } }) => {
    const artist = await fetchArtist(id);
    const topTracks = await fetchArtistTopTracks(id);
    const artistAlbums = await fetchArtistAlbums(id, { limit: 5 });

    return (
        <div>
            <div>
                <span>{ artist.name }</span>
                
                <div>
                    <button>Shuffle</button>
                    <button>{ artist.nb_fans } fans | Add to Favorites</button>
                </div>
            </div>

            <div>
                <span>Top Songs</span>

                <ul>
                    {
                        topTracks.map((track, index) =>
                            <TrackListItem
                                key={ track.id }
                                index={ index }
                                playlist={ topTracks }
                                track={ track }
                            />
                        )
                    }
                </ul>
            </div>

            <div>
                <span>Albums</span>

                <ul>
                    {
                        artistAlbums.map((album) => {
                            const { id, title, cover_xl, release_date } = album;
                            
                            return (
                                <LinkCardItem
                                    key={ id }
                                    title={ title }
                                    imgSrc= { cover_xl }
                                    href={ `/album/${ id }` }
                                    description={ ` Album | ${ release_date }` }
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ArtistPage;