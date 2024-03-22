import React from 'react';
import { Link } from 'react-scroll';

const MenuOverlay = ({ links, onLinkClick }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
            <ul className="flex flex-col items-center justify-center h-full">
                {links.map((link, index) => (
                    <li key={index} className="mb-4">
                        <Link
                            to={link.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={onLinkClick}
                            className="text-white text-xl cursor-pointer"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuOverlay;
