import Player from "../components/Player";
import TrendingSongs from "./trending_songs/page";

export default function Home() {
  return (
      <div>
        <h1>Home</h1>
          <Player />
          <TrendingSongs />
      </div>
  )
}
