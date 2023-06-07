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
                        <li key={ radio.id }>
                            <Link href={ `radio/${ radio.id }` }>
                                <img src={ radio.picture_medium } alt="" />
                                <strong>{ radio.title }</strong>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};
