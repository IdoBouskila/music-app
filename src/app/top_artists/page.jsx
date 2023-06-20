import TopArtistsContainer from "@/components/others/TopArtistsContainer";

export default async function TopArtists() {
    return (
        <TopArtistsContainer limit={ 25 } />
    );
}