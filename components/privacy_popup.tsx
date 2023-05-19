"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonClass } from "@/components/classes";
import { setCookie, getCookie } from "cookies-next";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const hasClosedPopup = getCookie("closedPopup");
        if (hasClosedPopup) {
            setShowPopup(false);
        }
    }, []);

    const handleClose = () => {
        setCookie("closedPopup", true, { maxAge: 365 * 24 * 60 * 60 });
        setShowPopup(false);
    };

    return (
        showPopup && (
            <div className="fixed flex items-center justify-center left-5 bottom-5 text-sm popup-anim shadow-xl -translate-x-[700px]">
                <div className="backdrop-blur-[5px] backdrop-brightness-[25%] p-6 rounded-lg">
                    <p className="pb-4 text-slate-300">
                        Some of your data is being stored for analytic purposes.
                    </p>
                    <div className="space-x-3">
                        <button className={buttonClass} onClick={handleClose}>
                            Close
                        </button>
                        <Link href="/privacy#top">
                            <button className={buttonClass}>
                                <Image
                                    src="/icons/arrow_outward.svg"
                                    alt="Arrow pointing right-top"
                                    width="64"
                                    height="64"
                                    className="inline h-5 w-5"
                                />
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    );
};

export default Popup;
