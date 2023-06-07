import LinkCardItem from "@/components/list-items/LinkCardItem";
import { fetchTopRadio } from "@/utils/fetchers";
import Link from "next/link";

export default async function TopRadio() {
    const radioList = await fetchTopRadio();

    return (
        <div className='top-radio-container'>
            <h2>Top Radios</h2>
            <ul>
                {
                    radioList.map(radio =>
                        <LinkCardItem
                            key={ radio.id }
                            href={ `radio/${ radio.id }` }
                            imgSrc={ radio.picture_xl }
                            title={ radio.title }
                        />
                    )
                }
            </ul>
        </div>
    );
};
