import TrackListItem from "@/components/TrackListItem";
import fetchAlbum from "@/utils/fetchers";

const AlbumPage = async ({ params }) => {
    const { title, artist, cover_xl, release_date, duration, tracks: { data: tracks } } = await fetchAlbum(params.id);
    
    return (
        <div>
            <div>
                <img src={ cover_xl } alt="" />

                <div>
                    <h1>{ title }</h1>

                    <div>
                        <span>Album</span>
                        <span>{ artist.name }</span>
                        <span>{ release_date }</span>
                    </div>

                    <div>
                        <span>{ tracks.length }</span>
                        <span>{ duration }</span>
                    </div>

                    <div>
                        <button>Play</button>
                        <button>Add to favorite</button>
                    </div>
                </div>
            </div>

            <div>
                <ul>
                    {
                        tracks.map((track, index) =>
                            <TrackListItem
                                key={ track.id }
                                index={ index }
                                track={ track }
                                playlist={ tracks }
                            />
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default AlbumPage;