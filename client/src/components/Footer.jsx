import React from "react";
import logo from "../assets/logo_dark.png";
import { AiOutlineMail } from "react-icons/ai";
import { LiaPhoneSolid } from "react-icons/lia";
import {
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
} from "react-icons/bi";

function Footer() {
    return (
        <div className="max-w-[1440px] mx-auto mt-28">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-12  mb-4">
                <div className="mb-5 flex flex-col items-center justify-between">
                    <img className="w-[130px] h-[117px]" src={logo} alt="" />
                    <div className="flex flex-row gap-2 text-[#888681]">
                        <BiLogoFacebook size={22}/>
                        <BiLogoInstagram size={22}/>
                        <BiLogoLinkedin size={22}/>
                    </div>
                </div>
                <div className="mb-5">
                    <h3 className="mb-3 text-lg tracking-widest">PAGES</h3>
                    <ul className="text-sm font-thin space-y-2">
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h3 className="mb-3 text-lg tracking-widest">
                        USEFUL LINKS
                    </h3>
                    <ul className="text-sm font-thin space-y-2">
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                        <li>Press</li>
                        <li>Journal</li>
                    </ul>
                </div>
                <div className="mb-5">
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
                <div className="mb-5">
                    <h3 className="mb-3 text-lg tracking-widest">NEWSLETTER</h3>
                    <label className="text-sm font-thin">Email address</label>
                    <input
                        className="border w-full h-[20%] border-black mt-1"
                        type="email"
                    />
                    <div className="flex justify-end">
                        <button className="mt-5 underline underline-offset-8 tracking-widest">
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

// <div className="flex flex-col md:grid grid-cols-5 max-w-[1440px] mx-auto mt-28 px-12 mb-4">
//             <div className="flex flex-col items-center md:flex md:items-start justify-center">
//                 <img className="w-[130px] h-[117px]" src={logo} alt="" />
//             </div>
//             <div className="flex flex-col items-center mt-8 md:flex md:flex-col md:items-start gap-2">
//                 <h2 className="text-lg mb-0 md:text-lg tracking-widest md:mb-4">
//                     PAGES
//                 </h2>
//                 <div className="text-sm flex flex-col gap-2">
//                     <p>Services</p>
//                     <p>Portfolio</p>
//                     <p>About</p>
//                     <p>Shop</p>
//                     <p>Contact</p>
//                 </div>
//             </div>
//             <div className="flex flex-col items-center mt-8 md:flex md:flex-col md:items-start gap-2">
//                 <h2 className="text-lg md:tracking-widest md:mb-4">
//                     USEFUL LINKS
//                 </h2>
//                 <div className="text-sm flex flex-col gap-2">
//                     <p>Privacy policy</p>
//                     <p>Cookie policy</p>
//                     <p>Press</p>
//                     <p>Journal</p>
//                 </div>
//             </div>
//             <div className="flex flex-col items-center mt-8 md:flex md:flex-col md:items-start gap-2">
//                 <h2 className="text-lg tracking-widest md:mb-4">CONTACTS</h2>
//                 <div className="text-sm flex flex-col gap-2">
//                     <div className="flex gap-2">
//                         <AiOutlineMail size={24} />
//                         studio@elinorinteriors.com
//                     </div>
//                     <div className="flex gap-2">
//                         <LiaPhoneSolid size={24} />
//                         0881122345 / Sofia, Bulgaria
//                     </div>
//                     <div className="flex gap-2">
//                         <LiaPhoneSolid size={24} />
//                         0881122345 / New York, USA
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col items-center mt-8 md:flex md:flex-col md:items-start gap-2">
//                 <h2 className="text-lg tracking-widest mb-4">NEWSLETTER</h2>
//                 <label className="text-sm">Email Address</label>
//                 <input
//                     className="border items-center w-[70%] h-[40px] md:w-[100%] md:h-[20%]"
//                     type="email"
//                     placeholder="ivan@gmail.com"
//                 />
//                 <div className="mt-4 flex items-end">
//                     <button className="underline underline-offset-8 tracking-widest">
//                         SUBSCRIBE
//                     </button>
//                 </div>
//             </div>
//             <div className=" w-[1440px]">
//             </div>
//         </div>
