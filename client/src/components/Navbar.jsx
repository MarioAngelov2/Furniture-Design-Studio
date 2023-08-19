import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo_dark.png";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between max-w-[1440px] mx-auto items-center md:flex-col mt-4 px-4">
            <ul className="hidden md:flex gap-5 items-center text-sm ">
                <li className="p-4">SERVICES</li>
                <li className="p-4">PORTFOLIO</li>
                <li className="p-4">ABOUT</li>
                <div>
                    <img className="w-20" src={logo} alt="" />
                </div>
                <li className="p-4">SHOP</li>
                <li className="p-4">JOURNAL</li>
                <li className="p-4">PRESS</li>
                <li className="p-4">CONTACT</li>
            </ul>
            <div className="w-[40%] h-[20%] bg-white">
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? (
                        <AiOutlineClose
                            className="fixed right-4 top-7"
                            size={30}
                        />
                    ) : (
                        <RxHamburgerMenu
                            className="fixed right-4 top-7"
                            size={30}
                        />
                    )}
                </div>
                <div className="md:hidden">
                    <img className="w-16 fixed left-5" src={logo} />
                </div>
            </div>

            <div
                className={
                    !nav
                        ? "fixed bg-white left-2 top-0 w-[40%] h-full ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <ul className="text-sm my-2">
                    <li className="p-4">SERVICES</li>
                    <li className="p-4">PORTFOLIO</li>
                    <li className="p-4">ABOUT</li>
                    <li className="p-4">SHOP</li>
                    <li className="p-4">JOURNAL</li>
                    <li className="p-4">PRESS</li>
                    <li className="p-4">CONTACT</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
