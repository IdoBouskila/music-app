import LinkCardItem from "@/components/list-items/LinkCardItem";
import { fetchTopRadio } from "@/utils/fetchers";

export default async function TopRadio() {
    const radioList = await fetchTopRadio();

    return (
        <div className='top-radio-container page-container'>
            <h2>Top Radios</h2>
            
            <ul>
                {
                    radioList.map(radio =>
                        <LinkCardItem
                            key={ radio.id }
                            href={ `radio/${ radio.id }` }
                            imgSrc={ radio.picture_medium }
                            title={ radio.title }
                        />
                    )
                }
            </ul>
        </div>
    );
};
