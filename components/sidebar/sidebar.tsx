"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import { buttonClass, faviconPreviews, faviconPreviewsLG, linkButtonClass, linkClass } from "@/components/classes";
import IconLink, { getFavicon } from "../link";
import { inter, rubik } from "../fonts";

const SideBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const handleClickBar = () => {
        const sidebar = document.getElementById("sidebar");
        if (!sidebar) {
            return
        }

        sidebar.classList.toggle(styles.hidden);
        document.body.classList.toggle("noscroll")
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
            <div className={`${inter.className} ${styles.sidebar} ${styles.hidden}`} id="sidebar">
                <button onClick={handleClickBar} className={`${rubik.className} ${styles.close}`}>
                    X
                </button>
                <div className={styles.links}>
                    <IconLink url="https://github.com/duvbolone/" title="GitHub" size={256} />
                    <IconLink url="https://discord.com/users/668874138160594985" title="Discord" size={256} />
                    <IconLink url="https://twitter.com/Matt3o044" title="Twitter" size={256} />
                    <IconLink url="https://steamcommunity.com/profiles/76561199103441618" title="Steam" size={256} />
                </div>
            </div>
        </>
    );
};

export default SideBar;
