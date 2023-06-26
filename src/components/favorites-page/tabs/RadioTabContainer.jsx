import useSWR from 'swr';
import LinkCardItem from '@/components/list-items/LinkCardItem';

const RadioTabContainer = ({ radios }) => {
    const { data } = useSWR({ entitiesIds: radios, endpoint: '/api/radio' });

    return (
        <ul>
        {
            data.map(radio =>
                <LinkCardItem
                    key={ radio.id }
                    href={ `radio/${ radio.id }` }
                    imgSrc={ radio.picture_medium }
                    title={ radio.title }
                />
            )
        }
        </ul>
    );
};

export default RadioTabContainer;
