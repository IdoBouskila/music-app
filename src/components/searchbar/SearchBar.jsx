'use client';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResults from './SearchResults';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
        <div className='searchbar'>
            <AiOutlineSearch />
            <input
                type="text"
                placeholder='Search for songs, artists...'
                value={ searchQuery }
                onChange={ (e) => setSearchQuery(e.target.value) }
            />
            
            <SearchResults query={ searchQuery }/>
        </div>
    );
};

export default SearchBar;