import { fetchTopArtist } from "@/utils/fetchers";
import LinkCardItem from "@/components/list-items/LinkCardItem";

export default async function TopArtists({ isRoute = true }) {
    const artists = await fetchTopArtist(isRoute && { limit: 50 });
    
    return (
        <div className='top-artists-container'>
            <h2>Top Artist</h2>

            <ul>
                {
                    artists.map(artist => {
                        const { id, name, picture_xl, nb_album, nb_fan } = artist;

                        return (
                            <LinkCardItem 
                                key={ id }
                                title={ name }
                                imgSrc= { picture_xl }
                                href={ `/artist/${ id }` }
                                description={ `${ nb_fan } Fans | ${ nb_album } Albums` }
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}