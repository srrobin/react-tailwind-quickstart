import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdLightMode, MdNightlight } from "react-icons/md";


import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const SimpleNavbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const [theme, setTheme] = useState(null);

    const handelNav = () => {
        setNav(!nav);
        setLogo(!nav);
    };


    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex justify-between bg-transparent  top-0
    items-center h-20 px-4 absolute z-10 text-black dark:text-slate-300  w-full shadow-md dark:bg-black"
        >
            <div className="cursor-pointer">
                <h2 onClick={handelNav} className={logo ? "hidden" : "block"}>
                    MEMU
                </h2>
            </div>

            <ul className="hidden md:flex cursor-pointer">
                <li>Menu</li>
                <li>Menu</li>
                <li>Menu</li>
                <li>Menu</li>
                <li>Menu</li>
            </ul>


            <div className="md:flex">
                <div onClick={handleThemeSwitch} className="">
                    {theme === "dark" ? (
                        <MdLightMode className="mr-2 font-bold cursor-pointer" size={20} />
                    ) : (
                        <MdNightlight className="mr-2 font-bold cursor-pointer " size={20} />
                    )}
                </div>


                <div className="hidden md:flex">
                    <BiSearch className="mr-2 font-bold cursor-pointer" size={20} />
                    <BsPerson className=" font-bold cursor-pointer" size={20} />
                </div>
            </div>

            {/* hamburger menu */}

            <div onClick={handelNav} className="md:hidden cursor-pointer z-10">
                {nav ? (
                    <AiOutlineClose className="text-black" size={20} />
                ) : (
                    <HiOutlineMenuAlt4 size={20} />
                )}
            </div>
            {/* mobalie menu */}
            <div
                onClick={handelNav}
                className={
                    nav
                        ? "text-black absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-4 flex-col"
                        : "absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex-col"
                }
            >
                <ul>
                    <h2>MEMU </h2>
                    <li className="border-b">Menu</li>
                    <li className="border-b">Menu</li>
                    <li className="border-b">Menu</li>
                    <li className="border-b">Menu</li>
                    <li className="border-b">Menu</li>
                    <div className="flex flex-col">
                        <button className="my-6">search</button>
                        <button>account</button>
                    </div>
                    <div className="flex justify-between my-6">
                        <FaFacebook className="icon" />
                        <FaTwitter className="icon" />
                        <FaInstagram className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default SimpleNavbar;