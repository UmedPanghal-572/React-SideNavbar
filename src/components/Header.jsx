import React, { useEffect, useState } from 'react'
import { LINKS } from '../utils/helper'

const Header = () => {
    const [nav, setNav] = useState(false);

    // Function to handle menu button click
    const handleClick = (isMenu = true) => {
        if (isMenu) {
            setNav(!nav);
        }
    };

    useEffect(() => {
        const handleAdd = () => {
            if (nav && window.innerWidth < 768) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };

        handleAdd();
    }, [nav]);

    return (
        <div className="relative flex min-h-screen">
            {/* overlay div  */}
            <div>
                {nav && (
                    <div
                        onClick={() => handleClick(true)}
                        className="transition-all duration-500 ease-in-out fixed top-0 left-0 min-h-screen w-full bg-red-400 opacity-60"
                    ></div>
                )}
            </div>

            {/* menu-button  */}
            <button onClick={() => handleClick(true)} className="text-black md:hidden flex items-start max-h-6 mt-2 ms-2">
                {nav ? "" : "menu"}
            </button>

            {/* sidenav  */}
            <div
                className={`bg-black w-[300px] p-6 max-md:absolute min-h-screen transition-all duration-500 z-10 ease-in-out ${
                    nav ? "max-md:left-0" : "max-md:-translate-x-full"
                }`}
            >
                {/* close button  */}
                <div className="flex justify-end mb-3 md:hidden">
                    <button onClick={() => handleClick(true)} className="text-white">
                        {nav ? "close" : ""}
                    </button>
                </div>

                {/* logo  */}
                <a className="text-white flex justify-center font-bold text-4xl" href="/">
                    Logo
                </a>

                {/* links  */}
                <div className="flex flex-col justify-between h-[70vh]">
                    <ul className="flex space-y-3 pt-8 flex-col justify-between">
                        {LINKS.map((Obj, index) => (
                            <li key={index}>
                                <a className="text-white text-xl font-semibold" href={Obj.path}>
                                    {Obj.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li className="flex ">
                            <button onClick={() => handleClick(false)} className="text-white border-[2px] border-white px-4 py-2 rounded-lg">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* dummy-content  */}
            <div className="flex flex-col px-7 pt-5">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et beatae, adipisci minus iure totam magni tenetur dolorem ipsum eaque neque fugit, est consequatur doloribus, vero eligendi doloremque? Illo, beatae?
                </p>
                {/* Add more content as needed */}
            </div>
        </div>
    );
};

export default Header;
