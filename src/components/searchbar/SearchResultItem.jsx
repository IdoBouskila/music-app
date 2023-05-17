'use client';
import { useSong } from '@/context/SongProvider';
import { useRouter } from 'next/navigation';

const SearchResultItem = ({ type, result }) => {
    const router = useRouter();
    const { handleSongClick } = useSong();
    const { id, name, title, picture_xl, md5_image } = result; 
    
    return (
        <li
            onClick={
                type === 'track'
                    ? () => handleSongClick(0, [result])
                    : () => router.push(`/${ type }/${ result.id }`)
            }
        >
            <img
                src={ picture_xl || `https://e-cdns-images.dzcdn.net/images/artist/${ md5_image }/1000x1000-000000-80-0-0.jpg` }
                alt={ title || name }
            />
            <span>{ name || title }</span>
        </li>
    );
};

export default SearchResultItem;
