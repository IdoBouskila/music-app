'use client';
import { addToFavorites, removeFromFavorites, selectFavorites } from "@/redux/features/favoritesSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const FavoriteButton = ({ type, id }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    const isFavorite = favorites[type].find(favoriteId => favoriteId === id);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();

        isFavorite
            ? dispatch(removeFromFavorites({ type, id }))
            : dispatch(addToFavorites({ type, id }));
    };

    return (
        <button
            className={ isFavorite ? `favorite active` : 'favorite' }
            onClick={ handleFavoriteClick }
        >
            { isFavorite ? <AiFillHeart /> : <AiOutlineHeart /> }
        </button>
    );
};

export default FavoriteButton;
