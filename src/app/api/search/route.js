import { fetchSearchData } from "@/utils/fetchers";

// GET proxy request to bypass CORS block when fetching on client components
export async function GET(req) {
  const query = req.nextUrl.searchParams.get("q");
  const [tracks, albums, artists] = await fetchSearchData(query)
  
  return Response.json({
    track: tracks.data,
    album: albums.data,
    artist: artists.data,
  });
}
  