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

    if (showSideBar == false) {
        return (
            <div className="m-[1.5rem] absolute right-2 lg:hidden">
                <button onClick={handleClickBar}>
                    <Image src="/icons/menu.svg" width="64" height="64" alt="menu" className="h-8 w-8" />
                </button>
            </div>
        )
    } else if (showSideBar == true) {
        return (
            <div className={inter.className + " sidebar-anim p-3 overflow-hidden bg-slate-300 dark:bg-slate-950 fixed top-2 right-2 rounded-md shadow-2xl w-[95%] h-[800%]"}>
                <button onClick={handleClickBar} className={rubik.className + " text-slate-600 text-4xl px-4 p-2 right-2 font-bold absolute rounded-full bg-gray-400 dark:bg-gray-800"}>
                    X
                </button>
                <div className="py-10 space-y-2 text-4xl flex flex-col">
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/projects">
                        Projects
                    </Link>
                    <div className="-space-y-4">
                        <a href="https://github.com/duvbolone" target="_blank" className={linkClass + "py-3 block"}><Image src={getFavicon("https://github.com", 32)} width="32" height="32" alt="GitHub logo" className={faviconPreviewsLG} /> <strong>GitHub</strong></a>
                        <a href="https://discord.com/users/668874138160594985" target="_blank" className={linkClass + "py-3 block"}><Image src={getFavicon("https://discord.com", 32)} width="32" height="32" alt="Discord logo" className={faviconPreviewsLG} /> <strong>Discord</strong></a>
                    </div>
                </div>
            </div>
        )
    } else {
        <></>
    }
};

export default SideBar;