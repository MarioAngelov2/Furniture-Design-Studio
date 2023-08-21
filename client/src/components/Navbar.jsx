import React, { useState } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { navbarLinks } from "../utils/navbarLinks";

import logo from "../assets/logo_dark.png";

function Navbar() {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className="flex fixed right-0 left-0 bg-white h-[90px] md:bg-white md:h-[100px] py-4 justify-between max-w-[1440px] mx-auto items-center md:flex-col px-4">
                <div className="absolute hidden md:left-10 md:top-2 md:flex items-start gap-2">
                    <BiLogoFacebook size={18} />
                    <BiLogoInstagram size={18} />
                </div>
                <div className="absolute right-3 top-3 md:right-10 md:top-2 flex items-start gap-2">
                    <p className="text-xs tracking-widest">BG/EN</p>
                </div>
                <ul className="hidden md:flex gap-5 items-center text-sm">
                    {navbarLinks.map((link) => (
                        <li key={link.title} className="p-4 cursor-pointer font-barlow tracking-widest">
                            {link.isLogo ? (
                                <div key={link.title} className="mx-auto">
                                    <img className="w-16" src={link.imageSrc} />
                                </div>
                            ) : (
                                <Link
                                    to={link.target}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    {link.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="w-[40%] h-[20%] bg-white">
                    <div onClick={handleNav} className="block md:hidden">
                        {!nav ? (
                            <AiOutlineClose
                                className="fixed right-5 top-9"
                                size={30}
                            />
                        ) : (
                            <RxHamburgerMenu
                                className="fixed right-5 top-9"
                                size={30}
                            />
                        )}
                    </div>
                    <div className="md:hidden">
                        <img className="w-16 fixed left-5 top-4" src={logo} />
                    </div>
                </div>

                <div
                    className={
                        !nav
                            ? "fixed bg-white left-2 top-0 w-[40%] h-full ease-in-out duration-500"
                            : "fixed ease-in-out h-full duration-500 left-[-100%]"
                    }
                >
                    <ul className="text-sm my-2 cursor-pointer">
                        {navbarLinks.map((link) => (
                            <li key={link.title} className="p-4">
                                <Link
                                    to={link.target}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
