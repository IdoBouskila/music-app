'use client';
import useSWR from 'swr';
import { fetchProxySearchData } from '@/utils/fetchers';
import SearchResultItem from './SearchResultItem';

const SearchResults = ({ query }) => {
    const { data: resultsObj, error, isLoading } = useSWR(query, fetchProxySearchData);

    return (
        <div className='search-results-container'>
            { isLoading && <strong>Loading...</strong>}

            { error && <strong>Error</strong>}

            {
                resultsObj && 
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
                    )
                })
            }
        </div>
    );
};

export default SearchResults;
