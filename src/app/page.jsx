import Playlists from "@/components/others/Playlists";
import TrackListContainer from "@/components/others/TrackListContainer";
import { fetchTopTracks } from "@/utils/fetchers";
import TopArtistsContainer from "@/components/others/TopArtistsContainer";

export default async function Home() {
  const tracks = await fetchTopTracks({ limit: 10 });

  return (
    <div className='home-container'>
      <TrackListContainer
        header='Trending right now'
        tracks={ tracks }
      />
      <TopArtistsContainer limit={ 3 }/>
      <Playlists />
    </div>
  )
}
