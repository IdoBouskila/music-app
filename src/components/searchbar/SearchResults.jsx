'use client';
import useSWR from 'swr';
import SearchResultItem from './SearchResultItem';

const SearchResults = ({ query }) => {
    const { data: resultsObj = {}, error, isLoading } = useSWR(query, async () => {
        const response = await fetch(`/api/search?q=${ query }`);
        return await response.json();
    });

    return (
        <>
        {
            query &&
            <div className='search-results-container'>
                { isLoading && <strong>Loading...</strong>}

                { error && <strong>Something went wrong...</strong>}

                {
                    Object.keys(resultsObj).map(type => {
                        return (
                            <div key={ type }>
                                <strong>{ type + 's' }</strong>

                                <ul>
                                    {
                                        ! resultsObj[type].length ?
                                            <span className='not-found-error'>Item not found. Please try a different search term.</span>
                                        :
                                            resultsObj[type].map(result =>
                                                <SearchResultItem
                                                    key={ result.id }
                                                    type={ type }
                                                    result={ result }
                                                />
                                            )
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        }
        </>
    );
};

export default SearchResults;
