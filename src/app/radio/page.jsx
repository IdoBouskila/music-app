import { fetchTopRadio } from "@/utils/fetchers";
import Link from "next/link";

const page = async () => {
    const radioList = await fetchTopRadio();

    return (
        <div>
            <h1>Top Radios</h1>
            <ul>
                {
                    radioList.map(radio =>
                        <li key={ radio.id }>
                            <Link href={ `radio/${ radio.id }` }>
                                    <div>
                                        <span>{ radio.title }</span>
                                        <img src={ radio.picture_medium } alt="" />
                                    </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default page;