import useSWR from 'swr';
import { compactNumber } from '@/utils/formatters';
import LinkCardItem from '@/components/list-items/LinkCardItem';

const ArtistsTabContent = ({ artists }) => {
    const { data } = useSWR({ entitiesIds: artists, endpoint: '/api/artist' });

    return (
        <ul>
        {
            data.map((artist => {
                const { id, name, picture_medium, nb_album, nb_fan } = artist;
                const formattedFanNumber = compactNumber(nb_fan);

                return (
                    <LinkCardItem
                        key={ id }
                        title={ name }
                        imgSrc= { picture_medium }
                        href={ `/artist/${ id }` }
                        description={ `${ formattedFanNumber } Fans | ${ nb_album } Albums` }
                    />
                );
            }))
        }
        </ul>
    );
};

export default ArtistsTabContent;
