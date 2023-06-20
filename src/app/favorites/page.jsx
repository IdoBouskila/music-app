'use client';
import { SWRConfig } from 'swr';
import { fetchProxyMultipleEntities } from '@/utils/fetchers';
import TabsContainer from '@/components/favorites-page/TabsContainer';
import * as Tabs from '@radix-ui/react-tabs';

const FavoritesPage = () => {
    return (
        <Tabs.Root
            className='page-container tabs-container'
            defaultValue='tracks'
        >
            <Tabs.List className='tablist'>
                <Tabs.Trigger value='tracks'>Tracks</Tabs.Trigger>
                <Tabs.Trigger value='albums'>Albums</Tabs.Trigger>
                <Tabs.Trigger value='radio'>Radio</Tabs.Trigger>
                <Tabs.Trigger value='artists'>Artists</Tabs.Trigger>
                <Tabs.Trigger value='playlists'>Playlists</Tabs.Trigger>
            </Tabs.List>

            <SWRConfig
                value={{
                    fetcher: fetchProxyMultipleEntities,
                    suspense: true
                }}
            >
                <TabsContainer />
            </SWRConfig>
        </Tabs.Root>
    );
};

export default FavoritesPage;
