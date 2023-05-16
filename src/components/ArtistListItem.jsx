import Link from "next/link";

const ArtistListItem = ({ artist }) => {
    const { id, name, picture_xl, nb_fan, nb_album } = artist;

    return (
        <li key={ id }>
            <Link href={ `/artist/${ id }` }>
                <img src={ picture_xl } alt='' />
                
                <div className='artist-container'>
                    <strong>{ name }</strong>

                    <div className='artist-details'>
                        <span>{ nb_fan + ' Fans'}</span>
                        <span>{ nb_album + ' Albums'}</span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default ArtistListItem;