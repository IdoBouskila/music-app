'use client';
import { playSong } from '@/redux/features/songsSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const SearchResultItem = ({ type, result }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, name, title, picture_medium, md5_image } = result; 
    
    return (
        <li
            onClick={
                type === 'track'
                    ? () => dispatch(playSong({ playlist: [result], index: 0}))
                    : () => router.push(`/${ type }/${ id }`)
            }
        >
            <img
                src={ picture_medium || `https://e-cdns-images.dzcdn.net/images/artist/${ md5_image }/1000x1000-000000-80-0-0.jpg` }
                alt={ title || name }
            />
            <span className='overflowing-text'>{ name || title }</span>
        </li>
    );
};

export default SearchResultItem;
