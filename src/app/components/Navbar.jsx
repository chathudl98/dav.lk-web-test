"use client";
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const NavLinkData = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Services", path: "services" },
    { title: "Booking", path: "booking" },
    { title: "Location", path: "locations" }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleLinkClick = () => {
        setNavbarOpen(false); // Close the mobile menu after clicking on a link
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#4a319d] bg-opacity-100">
            <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
                <Link to="home" className="cursor-pointer text-zxl md:text-5xl text-white font-semibold">Airport Tranfers</Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {NavLinkData.map((link, index) => (
                            <li key={index}>
                                <Link activeClass="active" to={link.path} spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" onClick={handleLinkClick}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={NavLinkData} onLinkClick={handleLinkClick} />}
        </nav>
    );
};

export default Navbar;
