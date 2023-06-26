import { getYearFromDate } from '@/utils/formatters';
import Link from 'next/link';

const PlaylistListItem = ({ id, title, imgSrc, creation_date }) => {
    const createdYear = getYearFromDate(creation_date);

    return (
        <li className='playlist-item'>
            <Link href={ `playlist/${ id }` }>
                <img src={ imgSrc } alt='playlist-img' />

                <div className='playlist-details'>
                    <strong>{ title }</strong>
                    <small>{ createdYear }</small>
                </div>
            </Link>
        </li>
    );
};

export default PlaylistListItem;