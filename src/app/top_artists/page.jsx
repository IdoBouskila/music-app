import { fetchTopArtist } from "@/utils/fetchers";
import ArtistListItem from "../../components/ArtistListItem";

export default async function TopArtists({ isRoute = true }) {
    const artists = await fetchTopArtist(isRoute && { limit: 50 });
    
    return (
        <div>
            <h2>Top Artist</h2>

            <ul>
                {
                    artists.map(artist =>
                        <ArtistListItem
                            key={ artist.id }
                            artist={ artist }
                        />
                    )
                }
            </ul>
        </div>
    );
}