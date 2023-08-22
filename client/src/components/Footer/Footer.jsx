import React from "react";
import { Link } from "react-scroll";
import { pagesLink, usefulLinks, } from "../../utils/footerLinks";
import logo from "../../assets/logo_dark.png";
import { AiOutlineMail } from "react-icons/ai";
import { LiaPhoneSolid } from "react-icons/lia";
import {
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
} from "react-icons/bi";

function Footer() {
    return (
        <div id="contact" className="max-w-[1440px] mx-auto mt-28">
            <div className="grid grid-cols-1 place-items-center md:grid md:grid-cols-3 md:place-items-start lg:grid-cols-5 px-12 mb-4">
                <div className="flex flex-col items-center gap-4 md:flex md:flex-col md:mt-10 md:items-start">
                    <img className="w-[130px] h-[117px]" src={logo} alt="" />
                    <div className="flex flex-row gap-2 text-[#888681]">
                        <BiLogoFacebook size={24} />
                        <BiLogoInstagram size={24} />
                        <BiLogoLinkedin size={24} />
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10 md:mb-5 md:grid md:place-items-start">
                    <h3 className="mb-3 text-lg tracking-widest">PAGES</h3>
                    <ul className="text-sm font-thin space-y-2">
                        {pagesLink.map((link) => (
                            <li key={link._id} className="cursor-pointer">
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
                <div className="flex flex-col items-center mt-10 md:mb-5 md:grid md:place-items-start">
                    <h3 className="mb-3 text-lg tracking-widest">
                        USEFUL LINKS
                    </h3>
                    <ul className="text-sm font-thin space-y-2">
                        {usefulLinks.map((link) => (
                            <li key={link._id}>
                                <a href=''>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center mt-10 md:mb-5 md:grid md:place-items-start">
                    <h3 className="mb-3 text-lg tracking-widest">CONTACTS</h3>
                    <ul className="text-sm font-thin space-y-2">
                        <li className="flex items-center gap-2">
                            <AiOutlineMail size={22} />
                            studio@elinorinteriors.com
                        </li>
                        <li className="flex items-center gap-2">
                            <LiaPhoneSolid size={22} />
                            0881122345 / Sofia, Bulgaria
                        </li>
                        <li className="flex items-center gap-2">
                            <LiaPhoneSolid size={22} />
                            0881122345 / New York, USA
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center mt-10 md:mb-5 md:grid md:place-items-start">
                    <h3 className="mb-3 text-lg tracking-widest">NEWSLETTER</h3>
                    <label className="text-sm font-thin">Email address</label>
                    <input
                        className="border w-[100%] h-[40px] md:h-[35px] border-black mt-2 px-3"
                        type="email"
                        placeholder="george@gmail.com"
                    />
                    <div className="flex justify-end">
                        <button className="md:ml-24 text-sm md:text-md mt-8 underline underline-offset-8 tracking-widest">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-[93%] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-8s dark:bg-gray-300"></hr>
            <div className="flex justify-between mb-4">
                <p className="px-12 text-sm font-thin">
                    Copyright 2023 Elenor Design Studio
                </p>
                <p className="px-12 text-sm font-thin">
                    Made with love and code by Fundamental Studio
                </p>
            </div>
        </div>
    );
}

export default Footer;
