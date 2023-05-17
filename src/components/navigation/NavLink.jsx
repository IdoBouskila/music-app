'use client';
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ slug, children }) => {
    const segment = useSelectedLayoutSegment() || '';
    const isActive = segment === slug;

    return (
        <Link href={ `/${ slug }` } className={ isActive ? 'active' : null }>
            { children }
        </Link>
    );
};

export default NavLink;