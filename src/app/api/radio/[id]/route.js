import { fetchRadio } from "@/utils/fetchers";

// GET proxy request to bypass CORS block when fetching on client components
export async function GET(req, { params }) {
    const data = await fetchRadio(params.id);
    
    return Response.json(data);
}
