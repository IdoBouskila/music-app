import Player from "./components/Player";
import { SongProvider } from "./context/SongProvider";
import TrendingSongs from "./trending_songs/page";

export default function Home() {
  return (
    <SongProvider>
      <div>
        <h1>Home</h1>
          <Player />
          <TrendingSongs />
      </div>
    </SongProvider>
  )
}
