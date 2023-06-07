import TrendingSongs from "./top_tracks/page";
import TopArtists from "./top_artists/page";
import Playlists from "@/components/others/Playlists";

export default function Home() {
  return (
    <div className='home-container'>
      <TrendingSongs isRoute={ false } />
      <TopArtists isRoute={ false } />
      <Playlists />
    </div>
  )
}
