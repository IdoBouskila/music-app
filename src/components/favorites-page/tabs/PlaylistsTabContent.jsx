import useSWR from 'swr';
import PlaylistListItem from '@/components/list-items/PlaylistListItem';

const PlaylistsTabContent = ({ playlists }) => {
    const { data } = useSWR({ entitiesIds: playlists, endpoint: '/api/playlist' });

    return (
        <ul>
        {
            data.map(playlist => {
                const { id, title, creation_date, picture_medium } = playlist;

                return (
                    <PlaylistListItem
                        id={ id }
                        key={ id }
                        title={ title }
                        imgSrc={ picture_medium }
                        creationDate={ creation_date }
                    />
                );
            })
        }
        </ul>
    );
};

export default PlaylistsTabContent;