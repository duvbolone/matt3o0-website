"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonClass, faviconPreviews, faviconPreviewsLG, linkButtonClass, linkClass } from "@/components/classes";
import { getFavicon, inter, rubik } from "../app/layout";

const SideBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const handleClickBar = () => {
        setShowSideBar(!showSideBar);
    };

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            if (showSideBar) {
                navbar.classList.remove("nav-background");
            } else {
                navbar.classList.add("nav-background");
            }
        }
    }, [showSideBar]);

    return (
        <>
            <div className={`m-[1.5rem] absolute right-2 lg:hidden ${showSideBar ? 'hidden' : ''}`}>
                <button onClick={handleClickBar}>
                    <Image src="/icons/menu.svg" width="64" height="64" alt="menu" className="h-8 w-8" />
                </button>
            </div>
            {showSideBar && (
                <div className={`${inter.className} sidebar-anim bg-transparent p-4 overflow-auto backdrop-blur-2xl fixed top-0 right-0 w-screen h-screen`}>
                    <button onClick={handleClickBar} className={`${rubik.className} text-neutral-600 text-[3em] p-4 right-2 font-bold absolute`}>
                        X
                    </button>
                    <div className="py-10 space-y-2 text-4xl flex flex-col">
                        <Link href="/about" onClick={handleClickBar}>
                            About
                        </Link>
                        <Link href="/projects" onClick={handleClickBar}>
                            Projects
                        </Link>
                        <div className="h-10"></div>
                        <div className="-space-y-4" onClick={handleClickBar}>
                            <a href="https://github.com/duvbolone" target="_blank" className={`${linkClass} py-3 block`}><Image src={getFavicon("https://github.com", 128)} width="128" height="128" alt="GitHub logo" className={faviconPreviewsLG} /> <strong>GitHub</strong></a>
                            <a href="https://discord.com/users/668874138160594985" target="_blank" className={`${linkClass} py-3 block`}><Image src={getFavicon("https://discord.com", 128)} width="128" height="128" alt="Discord logo" className={faviconPreviewsLG} /> <strong>Discord</strong></a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SideBar;
