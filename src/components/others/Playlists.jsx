import { fetchTopPlaylists } from "@/utils/fetchers";
import PlaylistListItem from "@/components/list-items/PlaylistListItem";
import Carousel from "./Carousel";

const Playlists = async () => {
    const playlists = await fetchTopPlaylists();
    
    return (
        <div className='top-playlists-container'>            
            <Carousel header='Playlists'>
                {
                    playlists.map(playlist => {
                        const { id, title, creation_date, picture_xl } = playlist;

                        return (
                            <PlaylistListItem
                                id={ id }
                                key={ id }
                                title={ title }
                                imgSrc={ picture_xl }
                                creation_date={ creation_date }
                            />
                        );
                    })
                }
            </Carousel>        
        </div>
    );
};

export default Playlists;