import * as Tabs from '@radix-ui/react-tabs';
import { useSelector } from 'react-redux';
import { selectFavorites } from '@/redux/features/favoritesSlice';
import TracksTabContent from '@/components/favorites-page/tabs/TracksTabContent';
import AlbumsTabContent from '@/components/favorites-page/tabs/AlbumsTabContent';
import RadioTabContainer from '@/components/favorites-page/tabs/RadioTabContainer';
import ArtistsTabContent from '@/components/favorites-page/tabs/ArtistsTabContent';
import PlaylistsTabContent from '@/components/favorites-page/tabs/PlaylistsTabContent';
import TabContentContainer from '@/components/favorites-page/TabContentContainer';

const TabsContainer = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <>
            <Tabs.Content value='tracks'>
                <TabContentContainer entities={ favorites.track }>
                    <TracksTabContent tracks={ favorites.track } />
                </TabContentContainer>
            </Tabs.Content>

            <Tabs.Content value='albums'>
                <TabContentContainer entities={ favorites.album }>
                    <AlbumsTabContent albums={ favorites.album } />
                </TabContentContainer>
            </Tabs.Content>
            
            <Tabs.Content value='radio'>
                <TabContentContainer entities={ favorites.radio }>
                    <RadioTabContainer radios={ favorites.radio }/>
                </TabContentContainer>
            </Tabs.Content>

            <Tabs.Content value='artists'>
                <TabContentContainer entities={ favorites.artist }>
                    <ArtistsTabContent artists={ favorites.artist }/>
                </TabContentContainer>
            </Tabs.Content>

            <Tabs.Content value='playlists'>
                <TabContentContainer entities={ favorites.playlist }>
                    <PlaylistsTabContent playlists={ favorites.playlist }/>
                </TabContentContainer>
            </Tabs.Content>   
        </>
    );
};

export default TabsContainer;