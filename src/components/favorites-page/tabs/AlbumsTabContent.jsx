import useSWR from 'swr';
import { getYearFromDate } from '@/utils/formatters';
import LinkCardItem from '@/components/list-items/LinkCardItem';

const AlbumsTabContent = ({ albums }) => {
    const { data } = useSWR({ entitiesIds: albums, endpoint: '/api/album' });

    return (
        <ul>
        {
            data.map((album) => {
                const { id, title, cover_medium, release_date } = album;
                const releaseYear = getYearFromDate(release_date);

                return (
                    <LinkCardItem
                        key={ id }
                        title={ title }
                        imgSrc={ cover_medium }
                        href={ `/album/${ id }` }
                        description={ `Album  | ${ releaseYear }` }
                    />
                );
            })
        }
        </ul>
    );
};

export default AlbumsTabContent;
