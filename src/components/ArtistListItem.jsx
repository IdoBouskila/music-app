import Link from "next/link";

const ArtistListItem = ({ artist }) => {
    const { id, name, picture_xl, nb_fan, nb_album } = artist;

    return (
        <Link href={ `/artist/${ id }` }>
            <li>
                <img src={ picture_xl } alt='' />
                
                <div>
                    <strong>{ name }</strong>
                    <span>{ nb_fan + 'Fans'}</span>
                    <span>{ nb_album + 'Albums'}</span>
                </div>
                
                <i></i>
            </li>
        </Link>
    );
};

export default ArtistListItem;