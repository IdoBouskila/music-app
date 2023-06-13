import IntroContainer from '@/components/others/IntroContainer';
import TrackListContainer from '@/components/others/TrackListContainer';
import { fetchRadio } from '@/utils/fetchers';

export default async function RadioTrackList({ params }) {
    const { tracks, title, picture_xl } = await fetchRadio(params.id);

    return (
        <div className='radio-container page-container'>
            <IntroContainer
                imgSrc={ picture_xl }
                title={ title }
                playlist={ tracks }
                description='Radio'
            />

            <TrackListContainer tracks={ tracks } />
        </div>
    );
};
