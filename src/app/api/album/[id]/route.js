import { fetchAlbum } from "@/utils/fetchers";

// GET proxy request to bypass CORS block when fetching on client components
export async function GET(req, { params }) {
    const data = await fetchAlbum(params.id);
    
    return Response.json(data);
}
