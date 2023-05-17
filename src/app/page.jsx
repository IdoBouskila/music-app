import Player from "../components/Player";
import TrendingSongs from "./trending_songs/page";
import TopArtists from "./top_artists/page";

export default function Home() {
  return (
      <div>
      <TrendingSongs isRoute={ false } />
      <TopArtists isRoute={ false } />
          <TrendingSongs />
      </div>
  )
}
