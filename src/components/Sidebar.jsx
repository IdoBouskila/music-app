import { AiFillHome } from 'react-icons/ai';
import { FiMusic, FiUsers, FiRadio } from 'react-icons/fi';
import { GiMusicSpell } from 'react-icons/gi';
import NavLink from './NavLink';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <GiMusicSpell className='app-logo'/>

            <ul>
                <li>
                    <NavLink slug=''>
                        <AiFillHome />
                    </NavLink>
                </li>

                <li>
                    <NavLink slug='trending_songs'>
                        <FiMusic />
                    </NavLink>
                </li>

                <li>
                    <NavLink slug='top_artists'>
                        <FiUsers />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;