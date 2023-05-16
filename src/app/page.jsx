import Player from "../components/Player";
import TrendingSongs from "./trending_songs/page";

export default function Home() {
  return (
      <div>
      <TrendingSongs isRoute={ false } />
      <TopArtists isRoute={ false } />
          <TrendingSongs />
      </div>
  )
}
